import React, { useEffect, useState } from 'react';
import '../styles/Contact.scss';

function Contact() {
  const [githubData, setGithubData] = useState(null);
  const [githubError, setGithubError] = useState(null);

  useEffect(() => {
    async function carregarGithubProfile() {
      try {
        const response = await fetch("https://api.github.com/users/EmmanuelJYokoyama");
        if (!response.ok) throw new Error("Erro ao buscar perfil");
        const data = await response.json();
        setGithubData(data);
      } catch (error) {
        setGithubError("Erro ao carregar os dados do GitHub.");
      }
    }

    carregarGithubProfile();
  }, []);

  return (
    <footer className="contact">
      <h2>Contatos</h2>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Entre em Contato</h2>

          <div className="cards-grid">
            {/* LinkedIn */}
            <div className="contact-card">
              <h3 className="contact-title">Meu LinkedIn</h3>
              <p>Conecte-se comigo no LinkedIn e veja minha trajetória profissional.</p>
              <a
                href="https://www.linkedin.com/in/emmanuelyokoyama/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                Visitar Perfil
              </a>
              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7311429360429731842"
                className="linkedin-embed"
                title="LinkedIn Post"
              ></iframe>
            </div>

            {/* GitHub */}
            <div className="contact-card github-card">
              <h3 className="contact-title text-mint">Meu GitHub</h3>
              {githubError ? (
                <p className="text-red-500">{githubError}</p>
              ) : githubData ? (
                <div className="github-profile">
                  <img
                    src={githubData.avatar_url}
                    alt={`Foto de ${githubData.login}`}
                    className="w-20 h-20 rounded-full mb-4"
                  />
                  <h4 className="text-xl font-bold">{githubData.name || githubData.login}</h4>
                  <p>
                    Seguidores: {githubData.followers} | Seguindo: {githubData.following}
                  </p>
                  <p>Repositórios Públicos: {githubData.public_repos}</p>
                  <a
                      href="https://github.com/EmmanuelJYokoyama"
                      target="_blank"
                      rel="noreferrer"
                      className="contact-link">
                      Visitar Perfil
                  </a>
                </div>
              ) : (
                <p>Carregando perfil do GitHub...</p>
              )}
            </div>

            {/* Email */}
            <div className="contact-card email-card">
              <img
                src="https://img.icons8.com/color/48/gmail--v1.png"
                alt="Gmail"
                className="email-icon"
              />
              <h3 className="contact-title">Meu E-mail</h3>
              <p>Caso queira entrar em contato diretamente comigo, envie um e-mail!</p>
              <a href="mailto:emmanuelnoronha3@gmail.com" className="button email-button">
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Contact;
