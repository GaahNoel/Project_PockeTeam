import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { useForm } from 'react-hook-form';
import Header from '../../components/header';

import './styles.css';

export default function Register() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any, e: any) => {
    const { login, username, email, password } = data;
    e.preventDefault();
    axios
      .post('http://localhost:3333/users/create', {
        login,
        username,
        email,
        password,
      })
      .then(() => {
        alert('Enviado com sucesso');
      });
  };

  return (
    <div className="registerContainer">
      <Helmet>
        <title>Pokemania - Registro</title>
      </Helmet>
      <Header />

      <div className="registerBody">
        <h3 id="registerMobile">CADASTRO</h3>
        <div className="registerForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Login</label>
            <input type="text" ref={register} name="login" />
            <label>Username</label>
            <input type="text" ref={register} name="username" />
            <label>Email</label>
            <input type="text" ref={register} name="email" />
            <label>Password</label>
            <input type="text" ref={register} name="password" />
            <label>Confirm Password</label>
            <input type="text" ref={register} name="confirmPassword" />

            <div>
              <button type="submit">CRIAR</button>
              <Link to="/Login" id="backButton">
                VOLTAR
              </Link>
            </div>
          </form>
        </div>

        <div>
          <h3 id="registerDesktop">CADASTRO</h3>
          <h4 id="registerDesktopText">
            Realize o cadastro e faça parte do PockeTeam,
            <p>o site desenvolvido de fãs para fãs.</p>
          </h4>
        </div>
      </div>
    </div>
  );
}
