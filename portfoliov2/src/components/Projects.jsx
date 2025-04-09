import React from 'react';
import '../styles/Projects.scss';

function Projects() {
  const projects = [
    {
      title: 'Sistema de Otimização de Embalagens',
      description: 'Utilizando algoritmos de fração de área para otimizar espaço de embalagens.',
      link: 'https://www.inicepg.univap.br',
    },
    {
      title: 'Controle de Estoque de Lojas',
      description: 'Sistema para controle intuitivo de mercadorias, com registro fácil e rápido.',
      link: '#',
    },
    {
      title: 'Meu Dojo',
      description: 'Gerenciamento de academias de luta, com React e NodeJS.',
      link: '#',
    },
  ];

  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">Ver mais</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
