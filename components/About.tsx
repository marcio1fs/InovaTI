import React from 'react';

// --- Icon Components ---
const ReactIcon = () => <svg className="w-8 h-8 text-sky-400" fill="currentColor" viewBox="0 0 128 110.8"><path d="M64 110.8C28.7 110.8 0 86 0 55.4S28.7 0 64 0s64 24.8 64 55.4-28.7 55.4-64 55.4zM64 8.5C33.2 8.5 8.5 30.2 8.5 55.4c0 25.2 24.7 46.9 55.5 46.9s55.5-21.7 55.5-46.9c0-25.2-24.7-46.9-55.5-46.9z"/><ellipse transform="rotate(-30 64 55.4)" cx="64" cy="55.4" rx="59.7" ry="15.8"/><ellipse transform="rotate(30 64 55.4)" cx="64" cy="55.4" rx="59.7" ry="15.8"/><ellipse cx="64" cy="55.4" rx="15.8" ry="59.7"/><circle cx="64" cy="55.4" r="9.3"/></svg>;
const NextjsIcon = () => <svg className="w-8 h-8 text-slate-300" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 0L2.245 20.428h19.51L12 0zm-.337 24l-3.26-6.237h6.814L11.663 24z"/></svg>;
const TypescriptIcon = () => <svg className="w-8 h-8 text-sky-400" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M1.5 0 h21 v21 h-21z M3.164 3.164 h17.672 v17.672 h-17.672z M8.168 18.232h2.528v-6.9h3.02v-2.256h-8.568v2.256h3.02z M17.66 11.332c.11-.232.164-.52.164-.864 0-.476-.082-.876-.246-1.2-.164-.324-.42-.576-.768-.756s-.768-.276-1.26-.276c-.68 0-1.272.148-1.776.444-.504.296-.888.74-1.152 1.332l2.1.996c.096-.2.24-.356.432-.468.192-.112.42-.168.684-.168.324 0 .584.076.78.228.196.152.294.38.294.684 0 .18-.04.36-.12.54s-.212.336-.396.468c-.184.132-.48.272-.888.42-.628.216-1.124.42-1.488.612-.364.192-.644.42-.84.684-.196.264-.294.584-.294.96 0 .46.128.844.384 1.152.256.308.6.524 1.032.648.432.124.896.186 1.392.186.608 0 1.14-.116 1.6-.348.46-.232.816-.592 1.068-1.08l-2.064-.972c-.132.276-.336.48-.612.612-.276.132-.584.2-.924.2-.296 0-.54-.064-.732-.192s-.288-.324-.288-.588c0-.168.036-.336.108-.504.072-.168.2-.332.384-.492.184-.16.48-.324.888-.492.56-.228 1.008-.44 1.344-.636.336-.196.592-.44.768-.732z"/></svg>;
const NodejsIcon = () => <svg className="w-8 h-8 text-green-400" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M11.312 24l9.16-5.289V5.28L11.313 0 2.152 5.28v13.432L11.312 24zM12 2.154l7.152 4.129v8.27l-7.152 4.129V2.154zm-1.375.768v18.15l-6.29-3.626V6.548l6.29-3.626z"/></svg>;
const PythonIcon = () => <svg className="w-8 h-8 text-yellow-400" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M22.583 8.356h-4.322c-.08-.344-.19-.672-.325-.98l2.964-2.964a.5.5 0 000-.707L18.448.253a.5.5 0 00-.707 0l-2.964 2.964c-.308-.135-.637-.246-.98-.325V.207a.5.5 0 00-.5-.5h-4.22a.5.5 0 00-.5.5v2.686c-.344.08-.672.19-.98.325L4.135.253a.5.5 0 00-.707 0L.976 2.705a.5.5 0 000 .707l2.964 2.964c-.135.308-.246.637-.325.98H.924a.5.5 0 00-.5.5v4.22a.5.5 0 00.5.5h2.686c.08.344.19.672.325.98l-2.964 2.964a.5.5 0 000 .707l2.452 2.452a.5.5 0 00.707 0l2.964-2.964c.308.135.637.246.98.325v2.686a.5.5 0 00.5.5h4.22a.5.5 0 00.5-.5v-2.686c.344-.08.672-.19.98-.325l2.964 2.964a.5.5 0 00.707 0l2.452-2.452a.5.5 0 000-.707l-2.964-2.964c.135-.308.246-.637.325-.98h2.686a.5.5 0 00.5-.5v-4.22a.5.5 0 00-.5-.5zM7.525 10.158a1.442 1.442 0 110-2.884 1.442 1.442 0 010 2.884zm9.373 6.566a1.442 1.442 0 11-2.884 0 1.442 1.442 0 012.884 0z"/></svg>;
const DockerIcon = () => <svg className="w-8 h-8 text-sky-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M23.15 15.2c-.225-.094-.45-.14-.69-.14-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8c.24 0 .465-.045.69-.14v1.28c-1.335.735-2.895 1.11-4.485 1.11-4.905 0-8.88-3.975-8.88-8.88s3.975-8.88 8.88-8.88c1.59 0 3.15.375 4.485 1.11V4.82c-.225-.09-.45-.14-.69-.14-.99 0-1.8.81-1.8 1.8s.81 1.8 1.8 1.8c.24 0 .465-.045.69-.14V9.6c.36.21.69.45.99.72.105.09.21.195.3.3.45.495.81 1.05.99 1.68h-4.32c-.06-1.08-.93-1.95-2.01-1.95s-1.95.87-2.01 1.95H.85v3.12H18.1c.06 1.08.93 1.95 2.01 1.95s1.95-.87 2.01-1.95h1.03v-1.28zM6.34 9.69h1.98v1.98H6.34V9.69zm0-2.4h1.98v1.98H6.34V7.29zm0-2.4h1.98v1.98H6.34V4.89zm2.4 4.8h1.98v1.98H8.74v-1.98zm0-2.4h1.98v1.98H8.74V7.29zm0-2.4h1.98v1.98H8.74V4.89zm2.4 4.8h1.98v1.98h-1.98v-1.98zm0-2.4h1.98v1.98h-1.98V7.29zm2.4 2.4h1.98v1.98h-1.98v-1.98z"/></svg>;
const PostgresqlIcon = () => <svg className="w-8 h-8 text-sky-600" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M12 24c-2.73 0-5.12-1.39-6.49-3.51V10.7H8.8v9.91c.88.58 2.02.94 3.2.94s2.32-.36 3.2-.94V3.35H8.8V0h11.85v16.14a7.06 7.06 0 01-8.65 7.86zM15.2 6.7h2.25V3.35H15.2V6.7z"/></svg>;
const MongodbIcon = () => <svg className="w-8 h-8 text-green-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M15.602 24C5.105 23.998-1.558 13.11.85 4.87.85 4.87 1.972 8.42 5.034 10.98c-2.45 3.32-1.25 7.63 2.16 8.8.76.26 1.83.35 2.58.12 1.43-.45 2.5-1.74 2.5-3.23 0-1.89-1.53-3.42-3.42-3.42-.51 0-1 .12-1.44.33.64-2.82 3.82-4.03 6.32-2.3 2.5 1.74 2.16 5.42-.6 6.8-1.12.56-2.67.6-3.8.12a.66.66 0 01-.52-.63c0-.38.28-.6.6-.6s1.82.26 2.87-.93c.8-.9 1.1-2.2.4-3.3-.7-1.07-2.07-1.4-3.12-.7-.7.44-.92 1.5-.47 2.15.4.55 1.25.68 1.9.36 1.1-.55 1.76-1.85 1.4-3.15-.36-1.3-1.6-2.16-2.87-1.8-1.28.35-2.14 1.6-1.8 2.87.16.6.6 1.05 1.1 1.28.3.14.68.17 1.02.1.2-.04.4-.13.56-.24l.05-.03c2.4-1.36 2.8-4.74.83-6.45-1.97-1.7-5.1-1.1-6.48 1.3-1.37 2.4-1.1 5.6 1.3 6.95 2.4 1.36 5.56.8 6.94-1.6.2-.34.36-.7.48-1.07h.02c.2-2.58 2.92-3.4 4.54-1.63 1.6 1.74.6 4.8-1.9 5.5-1.5.42-3.2-.05-4.1-1.26a.65.65 0 00-.9-.23.66.66 0 00-.24.9c.8 1.6 2.6 2.4 4.4 2.4 2.1 0 4-1.1 4.8-2.9.8-1.8.5-3.9-.9-5.1-.9-.76-2.1-1-3.2-1-1.3 0-2.5.4-3.4 1.2-.5.4-1.1.9-1.7 1.4-.4.4-.9.7-1.3.9l-.2.1c-.2.1-.3.1-.5.1-.3 0-.6-.1-.8-.3-.2-.2-.3-.5-.2-.8 0-.2.1-.4.2-.6l.1-.1c.3-.3.6-.6.9-1 .6-.6 1.3-1.4 2-2.1.8-.9 1.9-1.5 3.1-1.5 1.3 0 2.6.6 3.5 1.7 1.3 1.7 1.5 4.3.4 6.2C18.66 22.84 16.9 24 15.6 24z"/></svg>;
const TailwindcssIcon = () => <svg className="w-8 h-8 text-cyan-400" role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c-1.2,4.8,0.6,8.4,5.4,8.4c3.6,0,5.4-2.4,5.4-6.6c0-4.2-2.4-6.6-4.8-6.6 M12.001,15.6c-1.2,0-1.8-0.6-2.4-1.2c-0.6-0.6,0-1.2,0.6-1.2c0.6,0,1.2,0.6,2.4,0.6c1.2,0,1.8-0.6,1.8-1.8c0-2.4-4.2-0.6-4.2-4.8 c0-1.8,1.2-3,3-3c1.2,0,1.8,0.6,2.4,1.2c0.6,0.6,0,1.2-0.6,1.2c-0.6,0-1.2-0.6-2.4-0.6c-0.6,0-1.2,0.6-1.2,1.2c0,2.4,4.2,0.6,4.2,4.8 C16.201,14.4,14.401,15.6,12.001,15.6z"/></svg>;
const FigmaIcon = () => <svg className="w-8 h-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path d="M12 24a6 6 0 0 1-6-6v-6h6v6a6 6 0 0 1-6 6z" fill="#0acf83"/><path d="M6 12a6 6 0 0 1 6-6h6v6a6 6 0 0 1-6 6H6z" fill="#a259ff"/><path d="M6 6a6 6 0 0 1 6-6h6v12H6z" fill="#f24e1e"/><path d="M18 6a6 6 0 0 1 6 6v6h-6z" fill="#ff7262"/><path d="M12 12a6 6 0 0 1 6-6h-6v6z" fill="#1abcfe"/></svg>;
const GraphqlIcon = () => <svg className="w-8 h-8 text-pink-500" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="m12.316 23.974-9.52-5.492L.2 12.005l2.6-6.477L12.316.026l9.513 5.502L24.4 12l-2.57 6.477-9.513 5.497zM2.872 12l1.34 3.344 8.1 4.673 8.104-4.673L21.758 12l-1.34-3.344-8.104-4.673-8.1 4.673L2.872 12zm8.104 9.35 6.75-3.899.89-2.22 1.343-3.335-1.343-3.344-2.23-1.328-5.41 3.12-3.336 1.928zm0-18.69-6.75 3.899-.89 2.22-1.343 3.335 1.343 3.344 2.23 1.328 5.41-3.12 3.336-1.928zm-.012 9.345a3.34 3.34 0 1 0 0-6.68 3.34 3.34 0 0 0 0 6.68zm8.78.003a3.34 3.34 0 1 0-.002-6.68 3.34 3.34 0 0 0 .002 6.68zm-17.56 0a3.34 3.34 0 1 0 0-6.68 3.34 3.34 0 0 0 0 6.68zM12.316 2.25a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68zm0 19.5a3.34 3.34 0 1 0 0-6.68 3.34 3.34 0 0 0 0 6.68z"/></svg>;
const AwsIcon = () => <svg className="w-8 h-8 text-orange-400" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M13.298 12.827c0 .245.202.448.45.448h.9c.245 0 .448-.203.448-.448v-.9c0-.245-.203-.45-.448-.45h-.9c-.248 0-.45.205-.45.45v.9zm2.7 0c0 .245.202.448.448.448h.9c.248 0 .45-.203.45-.448v-.9c0-.245-.202-.45-.45-.45h-.9c-.246 0-.448.205-.448.45v.9zm2.252-3.149c-.045.345-.135.688-.225 1.03-.495 1.84-1.84 3.37-3.63 4.26-.585.29-1.215.48-1.883.56-1.072.13-2.182-.04-3.18-.51-1.785-.81-3.18-2.38-3.735-4.22-.09-.34-.18-.68-.225-1.02h12.858zM21.93 9.397H2.064c-.22 1.54-.03 3.12.51 4.6.93 2.65 3.15 4.65 5.92 5.3 1.63.38 3.32.27 4.88-.31 2.8-1.02 4.9-3.46 5.56-6.39.38-1.63.29-3.32-.03-4.9zM1.98 8.947h19.98c.02-.2.04-.4.06-.6C22.01 7.237 22 6.127 22 5c0-1.89-.54-3.62-1.48-5.04C19.03-1.83 15.68-2.9 12-2.9c-3.69 0-7.04 1.07-8.52 4.04C2.54 1.38 2 3.11 2 5c0 1.13-.01 2.24.06 3.35.02.2.04.4.06.59zM12 21.607c3.34 0 6.46-1.01 7.9-3.52.88-1.54 1.3-3.31 1.3-5.09 0-.43.01-1.25-.06-2.05H2.86c-.07.8-.06 1.62-.06 2.05 0 1.78.42 3.55 1.3 5.09 1.44 2.51 4.56 3.52 7.9 3.52zm8.19-21.6C21.43.007 22.5 1.257 22.5 3c0 .4-.06.8-.16 1.18-.73 2.63-3.17 4.54-6.02 4.96-1.12.16-2.26.03-3.31-.38-2.42-.92-4.2-2.9-4.83-5.32-.2-.73-.29-1.49-.28-2.25C7.9.507 9.89-.593 12-.593c2.72 0 5.37.5 8.19.59z"/></svg>;


const skillsData = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'Next.js', icon: <NextjsIcon /> },
  { name: 'TypeScript', icon: <TypescriptIcon /> },
  { name: 'Node.js', icon: <NodejsIcon /> },
  { name: 'Python', icon: <PythonIcon /> },
  { name: 'Docker', icon: <DockerIcon /> },
  { name: 'PostgreSQL', icon: <PostgresqlIcon /> },
  { name: 'MongoDB', icon: <MongodbIcon /> },
  { name: 'TailwindCSS', icon: <TailwindcssIcon /> },
  { name: 'Figma', icon: <FigmaIcon /> },
  { name: 'GraphQL', icon: <GraphqlIcon /> },
  { name: 'AWS', icon: <AwsIcon /> },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-zinc-900 animate-fade-in" style={{ animationDelay: '200ms', opacity: 0 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Sobre Mim</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">Minha jornada no mundo da tecnologia.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Minha Trajetória</h3>
            <p className="text-slate-400 space-y-4 leading-relaxed">
              Olá! Sou Alex, um desenvolvedor apaixonado por criar soluções digitais que sejam tanto funcionais quanto esteticamente agradáveis. Com uma base sólida em desenvolvimento full-stack, eu prospero na interseção entre design e engenharia, transformando ideias complexas em experiências de usuário intuitivas.
              <br/><br/>
              Minha jornada na tecnologia é impulsionada pela curiosidade e pelo desejo contínuo de aprender. Acredito que a melhor tecnologia é aquela que se torna invisível, permitindo que os usuários atinjam seus objetivos sem esforço.
            </p>
          </div>
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-white mb-6 text-center lg:text-left">Habilidades & Tecnologias</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skillsData.map(skill => (
                <div key={skill.name} className="flex flex-col items-center justify-center text-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20 hover:border-sky-500/50 hover:bg-zinc-800">
                   <div className="mb-2">{skill.icon}</div>
                  <span className="text-sm font-medium text-slate-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
