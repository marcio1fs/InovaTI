const express = require('express');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();

// Middleware
// In production, you should restrict the origin to your frontend's domain
// for better security, e.g., cors({ origin: 'https://your-domain.com' })
app.use(cors()); 
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per window
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Muitas solicitações enviadas deste IP, por favor, tente novamente em 15 minutos.' },
});

// The endpoint needs to match the file path for Vercel's routing
// Since this file is /api/contact.js, the route is effectively '/'
app.post('/', limiter, async (req, res) => {
  const { name, email, message } = req.body;

  // Server-side validation
  if (!name || !email || !message || name.trim() === '' || email.trim() === '' || message.trim() === '') {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Por favor, insira um endereço de e-mail válido.' });
  }

  // Check for required environment variables
  if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.RECIPIENT_EMAIL) {
    console.error('Uma ou mais variáveis de ambiente de e-mail não estão definidas.');
    return res.status(500).json({ error: 'O servidor não está configurado para enviar e-mails.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: `"Contato do Portfólio" <${process.env.EMAIL_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    replyTo: email,
    subject: `Nova mensagem de ${name} via portfólio`,
    html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
            <h2 style="color: #333;">Nova Mensagem do Portfólio</h2>
            <hr>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Mensagem:</strong></p>
            <p style="padding: 10px; background-color: #f9f9f9; border-left: 3px solid #ccc;">${message.replace(/\n/g, '<br>')}</p>
        </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    console.error('Erro no Nodemailer:', error);
    return res.status(500).json({ error: 'Falha ao enviar a mensagem.' });
  }
});

// Export the app for Vercel
module.exports = app;
