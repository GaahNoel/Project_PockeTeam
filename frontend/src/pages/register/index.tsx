import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Header from '../../components/header';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './styles.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
      },
    },
  }),
);

export default function Register() {
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();

  const onSubmit = (data: any, e: any) => {
    const { login, username, email, password } = data;
    console.log(data);
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
          <form onSubmit={handleSubmit(onSubmit)} className={classes.root}>
            <TextField
              error={errors.login}
              label="Login"
              variant="outlined"
              inputRef={register({ required: true })}
              name="login"
              className="input"
              helperText={errors.login && '* Campo Obrigatório !'}
            />
            <TextField
              error={errors.username}
              label="Username"
              variant="outlined"
              inputRef={register({ required: true })}
              name="username"
              className="input"
              helperText={errors.username && '* Campo Obrigatório !'}
            />
            <TextField
              error={errors.email}
              label="Email"
              variant="outlined"
              inputRef={register({ required: true })}
              name="email"
              className="input"
              helperText={errors.email && '* Campo Obrigatório !'}
            />
            <TextField
              error={errors.password}
              label="Senha"
              type="password"
              variant="outlined"
              inputRef={register({ required: true })}
              name="password"
              className="input"
              helperText={errors.password && '* Campo Obrigatório !'}
            />
            <TextField
              error={errors.confirmPassword}
              label="Confirmar Senha"
              type="password"
              variant="outlined"
              inputRef={register({ required: true })}
              name="confirmPassword"
              className="input"
              helperText={errors.confirmPassword && '* Campo Obrigatório !'}
            />

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
