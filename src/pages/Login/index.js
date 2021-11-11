import React from 'react';
import useLoginPage from './useLoginPage';
import './styles.css';

const Login = () => {
  const { credentials, handleSubmit, handleChange, readyToSend } = useLoginPage();

  return (
    <div className="login-container">
      <form className="login-container-form" onSubmit={ handleSubmit }>
        <img
          src="brand-logo-full.png"
          alt="logo trybe completa"
          className="login-container-form__brand-logo"
        />
        <input
          type="email"
          className="form-control"
          id="email"
          data-testid="email-input"
          placeholder="Email"
          name="email"
          value={ credentials.email }
          onChange={ handleChange }
        />
        <input
          type="password"
          className="form-control"
          id="password"
          data-testid="password-input"
          placeholder="Senha"
          name="password"
          value={ credentials.password }
          onChange={ handleChange }
        />
        <button
          type="submit"
          className="btn btn-success"
          data-testid="submit-button"
          disabled={ !readyToSend }
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
