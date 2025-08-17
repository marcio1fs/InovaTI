import React from 'react';

const services = [
  {
    title: 'Desenvolvimento Web',
    description: 'Criação de sites e aplicações web modernas, responsivas e performáticas utilizando as tecnologias mais recentes.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: 'Desenvolvimento Mobile',
    description: 'Desenvolvimento de aplicativos para iOS e Android com foco em experiência de usuário e design intuitivo.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Desenvolvimento Backend',
    description: 'Construção de APIs robustas, seguras e escaláveis para dar suporte às suas aplicações, com integração de bancos de dados.',
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
       </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-zinc-900 animate-fade-in" style={{ animationDelay: '400ms', opacity: 0 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Serviços</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">O que eu ofereço como profissional.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-800 p-8 rounded-lg border border-zinc-700 hover:border-sky-500 hover:bg-zinc-700/50 transform hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-zinc-700 text-sky-400 mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;