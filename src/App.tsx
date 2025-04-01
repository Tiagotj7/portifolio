import React from 'react';
import gitlogo from './git dev.png';
import linklogo from './link dev.png'
import instalogo from './insta logo dev.png'
import devlogo from './dev logo.png'
//import perfillogo from './perfil 2.jpg'
import './App.css';

function App() {
  return (
    <div className="App">  
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

<footer>ola</footer>

    </div>
  );
}

export default App;
