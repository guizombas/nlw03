import React from 'react';
import {Link} from 'react-router-dom'

import '../styles/global.css';
import '../styles/pages/landing.css';

import logoimg from '../images/logo.svg';
import {FiArrowRight} from 'react-icons/fi';

function Landing(){
    return (
        <div className="App">
      <div id="page-landing">

        <div className="content-wrapper">
          <img src={logoimg} alt="Happy"/>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e mude o dia de muitas crianças.</p>
          </main>
          <div className="location">
            <strong>Pompéu</strong>
            <span>Minas Gerais</span>
          </div>
          <Link to="/orfanatos" className="enter-app">
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
          </Link>
        </div>

      </div>
    </div>
    );
};

export default Landing