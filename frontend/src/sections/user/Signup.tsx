import "../user/styles/Login.css";
import imageHome from "../../assets/images/image.webp"
import AuthForm from "./AuthForm";

export default function Signup() {
  const handleSignup = (data: {
    email: string;
    password: string;
    name?: string;
  }) => {
    console.log("Nombre:", data.name);
    console.log("Correo electrónico:", data.email);
    console.log("Contraseña:", data.password);
    // Aquí iría la lógica de registro     createClientService(CreateHttpClientRepository()).register("",data.email,data.password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <AuthForm isLogin={false} onSubmit={handleSignup} />
      </div>
      <div className="login-image">
        <h2>Parquea Melo</h2>
        <p>
          Gestiona las entradas y salidas de tu parqueadero de manera intuitiva
          y fácil.
        </p>
        <img src={imageHome} alt="Parquea Melo" />
      </div>
    </div>
  );
}
