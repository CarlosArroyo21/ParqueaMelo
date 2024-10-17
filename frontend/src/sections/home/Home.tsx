import React from "react";
import "./styles/Home.css"; // Asegúrate de importar el archivo de estilos adecuado
import Home from "../../assets/images/Home.webp"; // La imagen que has mencionado
import Cars from "../../assets/icons/Cars.svg"; // El icono que has mencionado
import Entry from "../../assets/icons/Entry.svg";
import Exit from "../../assets/icons/Exit.svg";
import ActionButton from "./components/ActionButton";

const HomePage: React.FC = () => {
  return (
    <div className="main-page">
      <div className="action-buttons">
        <ActionButton
          icon={Entry}
          label="Entrada al parqueadero"
          onClick={() => alert("Entrada al parqueadero")}
          color="#2485B5"
        />
        <ActionButton
          icon={Exit}
          label="Salida del parqueadero"
          onClick={() => alert("Salida del parqueadero")}
          color="#2485B5"
        />
        <ActionButton
          icon={Cars}
          label="Historial de parqueos"
          onClick={() => alert("Historial de parqueos")}
          color="#2485B5"
        />
      </div>

      <div className="illustration">
        <h2>Página principal</h2>
        <p>
          Bienvenido a la página principal. <br />
          ¿Qué acción deseas realizar ahora?
        </p>
        <img src={Home} alt="Ilustración de auto estacionado" />
      </div>
    </div>
  );
};

export default HomePage;
