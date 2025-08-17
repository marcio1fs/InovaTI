import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} InovaTI. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;