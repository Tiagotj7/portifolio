import React from 'react';
import gitlogo from './git dev.png';
import linklogo from './link dev.png';
import instalogo from './insta logo dev.png';
import devlogo from './dev logo.png';
import perfillogo from './perfil11.png';
import notelogo from './dev img.png';
import nextlogo from './next logo.png';
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
            <a href="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/tiagotj7.dev/">
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
            <a href="">
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

<main className='main3-content'></main>

      <main className='main4-content'></main>

      <footer>
      <p>&copy; 2025 Flip Sound. Todos os direitos reservados.</p>
      <p>Desenvolvido por Tiagotj7.dev.</p>
      </footer>

    </div>
  );
}

export default App;