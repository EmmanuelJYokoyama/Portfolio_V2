import React from 'react';
import '../styles/Experience.scss';

function Experience() {
  const experiences = [
    {
      title: 'Estagiário de Banco de Dados',
      company: 'ADVTEC Soluções ERP',
      image: 'https://static.wixstatic.com/media/ac0cee_ee3213ff1b1d4f99a6fb284d0adbc384~mv2.png/v1/fit/w_2500,h_1330,al_c/ac0cee_ee3213ff1b1d4f99a6fb284d0adbc384~mv2.png', // Substitua com o caminho real
      period: 'Mai/23 - Set/23',
      description: [
        'Auxiliei o DBA Sênior na resolução de problemas no banco de dados com soluções SQL',
        'Prestava suporte ao cliente via acesso remoto utilizando o AnyDesk',
        'Realizava relatórios do sistema, relatando bugs e inconsistências para futuras melhorias',
        'Alterava e realizava melhorias determinadas pelo cliente ou por colegas desenvolvedores',
      ],
    },
    {
      title: 'Estagiário de Backend',
      company: 'FlipFlopLab',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaoQ0dBhGhcR036jv_SsS57HKNBjwUxTInQ&s', // Substitua com o caminho real
      period: 'Mai/24 - Dez/24',
      description: [
        'Corrigi bugs e desenvolvi melhorias em software interno com Ruby on Rails.',
        'Utilização de N8N para a automação de processos dos clientes',
        'Gerenciei Sprints e Issues no Jira.',
        'Forneci suporte técnico aos desenvolvedores e clientes.',
      ],
    },
    {
      title: 'Digital & Analytics Intern',
      company: 'Embraer',
      image: 'https://www.infomoney.com.br/wp-content/uploads/2019/11/embraer-logo-6-1.png?fit=800%2C460&quality=70&strip=all', // Substitua com o caminho real
      period: 'Fev/25 - Atual',
      description: [
        'Desenvolvimento de soluções com Spring para aplicações internas.',
        'Atuação na área de Digital e Supply Chain.',
        'Experiencia com Pentaho para automação de processos internos'
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
