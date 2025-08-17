import React from 'react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-zinc-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.2),rgba(255,255,255,0))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 rounded-full mb-6 border-4 border-zinc-700 shadow-lg overflow-hidden bg-zinc-800">
             <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop" alt="Notebook exibindo código de programação em uma mesa" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Alex Doe
          </h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl text-slate-400">
            Desenvolvedor Full-Stack | Transformando Ideias em Soluções Digitais
          </p>
          <a
            href="#portfolio"
            className="mt-8 px-8 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-500 transition-transform transform hover:scale-105 duration-300"
          >
            Veja meus projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;