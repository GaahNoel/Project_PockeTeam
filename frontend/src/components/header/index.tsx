import React from 'react';

import { FiUser, FiStar, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import './styles.css';

export default function Header() {
  const [pesquisa, setPesquisa] = useState('');

  return (
    <div className="header">
      <header>
        <div id="header_superior"></div>
        <div id="header_inferior">
          <div id="header_left">
            <Link to="">
              <FiHome id="FiHome" size="1.3rem" />
            </Link>
            <form>
              <input
                type="text"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                placeholder="Pesquise por usuários"
                id="Pesquisa"
              ></input>
            </form>
          </div>

          <div id="header_right">
            <Link to="">
              <FiStar id="FiStar" size="1.3rem" />
            </Link>
            <Link to="">
              <FiUser id="FiUser" size="1.3rem" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
