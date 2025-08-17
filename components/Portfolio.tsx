import React from 'react';

const projects = [
  {
    title: 'Projeto E-commerce Moderno',
    description: 'Plataforma de e-commerce completa construída com Next.js, Stripe para pagamentos e um CMS headless.',
    image: 'https://picsum.photos/seed/project1/600/400',
    tags: ['React', 'Next.js', 'Stripe', 'GraphQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'App de Gerenciamento de Tarefas',
    description: 'Uma aplicação web responsiva para gerenciamento de tarefas com autenticação de usuários e banco de dados em tempo real.',
    image: 'https://picsum.photos/seed/project2/600/400',
    tags: ['React', 'Firebase', 'TailwindCSS'],
    github: '#',
    demo: '#',
  },
  {
    title: 'API REST para Rede Social',
    description: 'Backend robusto para uma aplicação de rede social, com endpoints para usuários, posts, comentários e likes.',
    image: 'https://picsum.photos/seed/project3/600/400',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    demo: '#',
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-zinc-800/50 animate-fade-in" style={{ animationDelay: '300ms', opacity: 0 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Portfólio</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Alguns dos meus projetos mais recentes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-sky-500/20 transition-all duration-300 group flex flex-col border border-transparent hover:border-sky-500/50 transform hover:-translate-y-2">
              <div className="overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">{project.description}</p>
                <div className="mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="inline-block bg-zinc-700 rounded-full px-3 py-1 text-xs font-semibold text-slate-300 mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex items-center space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium transition-colors">GitHub</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 font-medium transition-colors">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;