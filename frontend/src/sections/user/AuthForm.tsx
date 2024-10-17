import React, { useState } from "react";

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
}


const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const data = { email, password, ...(isLogin ? {} : { name }) };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{isLogin ? "Inicio de sesión" : "Registrate"}</h1>
      <p>
        Ingrese sus credenciales en los campos que se encuentran a
        continuación para acceder al aplicativo.
      </p>
      {!isLogin && (
        <div className="input-container">
          <label htmlFor="name">Nombre completo</label>
          <input
            type="text"
            id="name"
            placeholder="Ingrese su nombre..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
      )}
      <div className="input-container">
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          placeholder="Ingrese su correo..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          placeholder="Ingrese su contraseña..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="login-button">
        <i className="fa fa-sign-in" /> {isLogin ? "Iniciar sesión" : "Registrar"}
      </button>
      <p className="register-link">
        {isLogin ? (
          <>Si no tienes una cuenta, <a href="/register">¡Regístrate aquí!</a></>
        ) : (
          <>Ya tengo una cuenta, <a href="/login">¡Inicia sesión aquí!</a></>
        )}
      </p>
    </form>
  );
};

export default AuthForm;
