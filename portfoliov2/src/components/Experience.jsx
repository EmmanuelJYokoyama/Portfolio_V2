import React from 'react';
import '../styles/Experience.scss';

function Experience() {
  const experiences = [
    {
      title: 'Estagiário de Banco de Dados',
      company: 'ADVTEC Soluções ERP',
      image: '../images/advtec.jpg', // Substitua com o caminho real
      period: 'Mai/23 - Set/23',
      description: [
        'Auxiliei o DBA Sênior na resolução de problemas no banco de dados com soluções SQL.',
        'Prestei suporte remoto ao cliente usando AnyDesk.',
        'Relatei bugs e inconsistências para melhorias futuras.',
      ],
    },
    {
      title: 'Estagiário de Desenvolvimento',
      company: 'FlipFlopLab',
      image: '../images/flipfloplab.jpg', // Substitua com o caminho real
      period: 'Mai/24 - Dez/24',
      description: [
        'Corrigi bugs e desenvolvi melhorias em software interno.',
        'Gerenciei Sprints e Issues no Jira.',
        'Forneci suporte técnico aos desenvolvedores e clientes.',
      ],
    },
    {
      title: 'Digital & Analytics Intern',
      company: 'Embraer',
      image: '../images/embraer.jpg', // Substitua com o caminho real
      period: 'Fev/25 - Atual',
      description: [
        'Desenvolvo soluções Spring para aplicações internas.',
        'Atuo na área de Digital e Supply Chain.',
      ],
    },
  ];

  return (
    <section className="experience">
      <h2>Experiência</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <img src={exp.image} alt={exp.company} className="company-logo" />
            <h3>{exp.title}</h3>
            <p><strong>Empresa:</strong> {exp.company}</p>
            <p><strong>Período:</strong> {exp.period}</p>
            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
