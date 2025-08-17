import React, { useState } from 'react';

const socialLinks = [
  { name: 'GitHub', href: '#', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg> },
  { name: 'LinkedIn', href: '#', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg> },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, info: { error: false, message: '' } });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitting: true, info: { error: false, message: '' } });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Algo deu errado.');
      }
      
      setStatus({ submitting: false, info: { error: false, message: 'Obrigado! Sua mensagem foi enviada.' } });
      setFormData({ name: '', email: '', message: '' }); // Reset form
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Ocorreu um erro inesperado.';
      setStatus({ submitting: false, info: { error: true, message: errorMessage } });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-zinc-800/50 animate-fade-in" style={{ animationDelay: '500ms', opacity: 0 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Contato</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Vamos conversar sobre seu próximo projeto.</p>
        </div>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Nome</label>
              <input type="text" name="name" id="name" required placeholder="Seu Nome" value={formData.name} onChange={handleChange} className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-3 px-4 text-white focus:ring-sky-500 focus:border-sky-500 transition disabled:opacity-50" disabled={status.submitting}/>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input type="email" name="email" id="email" required placeholder="Seu Email" value={formData.email} onChange={handleChange} className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-3 px-4 text-white focus:ring-sky-500 focus:border-sky-500 transition disabled:opacity-50" disabled={status.submitting}/>
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Mensagem</label>
              <textarea name="message" id="message" rows={4} required placeholder="Sua Mensagem" value={formData.message} onChange={handleChange} className="w-full bg-zinc-700 border border-zinc-600 rounded-md py-3 px-4 text-white focus:ring-sky-500 focus:border-sky-500 transition resize-none disabled:opacity-50" disabled={status.submitting}></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full sm:w-auto px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 transition-colors duration-300 disabled:bg-sky-800 disabled:cursor-not-allowed" disabled={status.submitting}>
                {status.submitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </div>
          </form>

          {status.info.message && (
            <div className={`mt-6 text-center text-sm font-medium p-3 rounded-md ${status.info.error ? 'bg-red-900/50 text-red-300 border border-red-700' : 'bg-green-900/50 text-green-300 border border-green-700'}`}>
              {status.info.message}
            </div>
          )}
          
          <div className="mt-12 text-center">
            <p className="text-slate-400 mb-4">Ou me encontre em:</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} className="text-slate-400 hover:text-sky-400 transition-colors duration-300">
                  <span className="sr-only">{link.name}</span>
                  {link.icon}
                </a>
              ))}
            </div>
             <p className="mt-6 text-slate-400">
              <a href="mailto:contato@inovati.dev" className="hover:text-sky-400 transition-colors">contato@inovati.dev</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;