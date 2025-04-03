import React from 'react';
import gitlogo from './assets/git dev.png';
import linklogo from './assets/link dev.png';
import instalogo from './assets/insta logo dev.png';
import devlogo from './assets/dev logo.png';
import perfillogo from './assets/perfil11.png';
import notelogo from './assets/dev img.png';
import cerlogo from './assets/cer3.png';
import nextlogo from './assets/next logo.png';
import contactlogo from './assets/contato dev.png';
import clipDev from './assets/videos/clip-dev.mp4';
import './Global.css';


function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <nav className='name-nav'>
          <ul>
            <img src={devlogo} className='devlogo-app' alt="dev" />
            <h2>Tiagotj7</h2>
          </ul>
        </nav>

        <nav className='icons-nav'>
          <ul>
            <h2>Social</h2>
            <a href="https://github.com/Tiagotj7/">
              <img src={gitlogo} className='gitlogo-app' alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/tiagocarvalhog2020/">
              <img src={linklogo} className='linklogo-app' alt="Linkedin" />
            </a>
            <a href="https://www.instagram.com/tiagotj7.dev/">
              <img src={instalogo} className='instalogo-app' alt="Instagram" />
            </a>
          </ul>
        </nav>

      </header>

      <main className='main-content'>

        <div className='geral1'>

          <div className='information'>
            <h1>Prazer,</h1>
            <h1>Tiago</h1>
            <h1>Carvalho!</h1>
            <a href="https://www.linkedin.com/in/tiagocarvalhog2020/">
              <button className='button-more'>
                <h3>Saiba Mais!</h3>
              </button>
            </a>
          </div>

          <div className='logodev-container'>
            <img src={perfillogo} className='perfillogo-container' alt="perfil" />
          </div>

        </div>

      </main>

      <div className='main2-content'>

        <div className='geral2'>

          <div className='next'>
            <img src={nextlogo} className='nextlogo-container' alt="next" />
          </div>

          <div className='note-container'>
            <img src={notelogo} className='notelogo-container' alt="notelog" />
          </div>
        </div>

        <div className='comment'>
          <h1>Sobre Mim:</h1>
          <p>Sou desenvolvedor front-end e de software, com experiência em cibersegurança e apaixonado por criar soluções inovadoras.
            Trabalho com HTML, CSS, JavaScript, Python, C, PHP, React, TypeScript e WordPress, desenvolvendo projetos que unem desempenho, segurança e usabilidade. Meu foco está em entregar aplicações eficientes e adaptáveis às necessidades do usuário.
            No meu portfólio e GitHub, você encontrará projetos que demonstram minha habilidade em desenvolvimento web, automação e otimização de processos. Estou sempre em busca de desafios para evoluir e contribuir com a tecnologia. 💻🔒🌐
          </p>

        </div>

      </div>

      <main className='main3-content'>

        <div className='main3-content'>
          <div className='certificates-container'>
            <div className='cert-list-container'>
              <h1 className='cert-title'>CERTIFICADOS</h1>
              <ul className='cert-list'>
                <li>Cursando - Técnico em Desenvolvimento de Sistemas - SENAI</li>
                <li>Internet do Comportamento (IoB) em Serviços</li>
                <li>Públicos Digitais</li>
                <li>Site utilizando Html, Css e Js</li>
                <li>Curso Segurança em Tecnologia da Informação</li>
                <li>Introdução ao Hacking e Pentest 2.0</li>
                <li>Introdução ao Excel</li>
                <li>Visual Studio Code</li>
                <li>Desenvolvimento Moderno de Software</li>
                <li>Informática básica</li>
                <li>DIO.me</li>
                <li>Bootcamp</li>
              </ul>
              <a href="https://drive.google.com/file/d/13tjN7JVKBRxSTfySOSU3wBl5sT_az3gU/view?usp=drive_link">
                <button className='curriculo-button'>
                  CURRÍCULO
                </button>
              </a>
            </div>

            <div className='brain-image-container'>
              <img src={cerlogo} className='brain-image' alt="Brain" />
            </div>
          </div>
        </div>
      </main>

      <main className='main4-content'>
  <div className="video-background">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="background-video"
      // Adicione um poster como fallback inicial
      poster="/videos/poster.jpg" // (opcional) crie uma imagem thumbnail
    >
      <source src={clipDev} type="video/mp4" />
      <p className="video-fallback">
        Seu navegador não suporta vídeos HTML5.
      </p>
    </video>
  </div>
</main>

      <main className='main5-content'>

        <div className='contact-container'>


          <div className='sub-contact1'>
            <h3>Email</h3>
            <p>tiagotj7dev@gmail.com</p>
          </div>

          <div className='contactlogo-container'>

            <h1 className='contact-text'>Contato</h1>

            <img src={contactlogo} className='contactlogo' alt="contactlogo" />
          </div>

          <div className='sub-contact2'>
            <h3>Phone</h3>
            <p>(75)9 9889-3216</p>
          </div>

        </div>
      </main>

      <footer>
        <p>&copy; 2025.Todos os direitos reservados.</p>
        <p>Desenvolvido por Tiagotj7.dev.</p>
      </footer>

    </div>
  );
}

export default App;