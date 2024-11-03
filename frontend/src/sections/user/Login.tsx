import "../user/styles/Login.css";
import imageHome from "../../assets/images/Login.webp";
import { useState } from "react";
import { ReactSVG } from "react-svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    //Aquí va la logica de autenticación
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-main-container">
      {/*Formulario*/}
      <form onSubmit={handleLogin} className="login-form">
        {/*Titulo*/}
        <h1>Inicio de sesión</h1>
        {/*SubTitulo*/}
        <p>
          Ingrese sus credenciales en los campos que se <br /> encuentran a
          continuación para acceder al aplicativo.
        </p>
        {/*Input de Correo*/}
        <div className="login-input-container">
          <label htmlFor="email">Correo electrónico</label>
          <div className="input-icon-container">
            <input
              type="email"
              id="email"
              placeholder="Ingrese su correo..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <ReactSVG
              src={"/src/assets/icons/Mail.svg"}
              className="login-input-icon"
              beforeInjection={(svg) => {
                svg.setAttribute("style", `fill: ${"#ccc"}`);
              }}
            />
          </div>
        </div>
        {/*Input de Contraseña*/}
        <div className="login-input-container">
          
          <label htmlFor="password">Contraseña</label>

          <div className="input-icon-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Ingrese su contraseña..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ReactSVG
              src={"/src/assets/icons/ShowPassword.svg"}
              className="login-input-icon"
              onClick={togglePasswordVisibility}
              beforeInjection={(svg) => {
                svg.setAttribute(
                  "style",
                  `fill: ${showPassword ? "#316c8c" : "#ccc"}`
                );
              }}
            />
          </div>
        </div>
        {/*Boton de Inicio sesion*/}
        <button type="submit" className="login-button">
          Iniciar sesión
        </button>
        {/*Mensaje*/}
        <div className="login-register-link">
          Si no tienes una cuenta, <a href="/register">¡Regístrate aquí!</a>
        </div>
      </form>
      {/*Fondo*/}
      <div className="login-fondo">
        <h2>Parquea Melo</h2>
        <p>
          Gestiona las entradas y salidas de tu <br /> parqueadero de manera
          intuitiva y fácil.
        </p>
        <img src={imageHome} alt="Parquea Melo" />
      </div>
    </div>
  );
}
