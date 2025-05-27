import React from 'react';
import '../styles/About.scss';
import MinhaImagem from '../images/EU3.jpg';

function About() {
  return (
    <section className="about">
      <h2>Sobre Mim</h2>
      <div className="image">
          <img src={MinhaImagem} alt="Minha Imagem" />
        </div>

      <p className='sobreText'>
      Sou um desenvolvedor apaixonado por tecnologia, com foco em desenvolvimento FullStack.
            Tenho experiência em criar soluções web e mobile que atendam às necessidades de diferentes
            tipos de clientes, utilizando as melhores práticas e ferramentas do mercado.     </p>
      
      {/* Formação */}
      <div className="education">
        <h3>Formação</h3>
        <div className="courses">
          <div className="course-box">
            <div className="imagemFormacao">
              {/* <img src="https://www.univap.br/source/files/c/279/CTI-4-min-842065_5184-3456-0-0.jpg" alt="univap" /> */}
              <img src="https://www.univap.br/source/files/c/279/CTI-4-min-842065_5184-3456-0-0.jpg"></img>
            </div>
            <h4>Ensino médio Concomitante ao Técnico em Informática</h4>
            <p>Colégio Técnico Univap</p>
            <p>São José dos Campos, Brasil</p>
          </div>

          <div className="course-box">
            <div className="imagemFormacao">
              <img src="https://sjc.fatec.sp.gov.br/static/media/predioThumb.e0510de5.png" alt="fatec" />
            </div>
            <h4>Graduando em Desenvolvimento de Software Multiplataformas</h4>
            <p>FATEC São José dos Campos</p>
            <p>São José dos Campos, Brasil</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
