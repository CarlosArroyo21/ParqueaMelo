import { useState } from "react";
import "./styles/HistoryView.css"; // Asegúrate de crear este archivo para los estilos.
import { ReactSVG } from "react-svg";
import userIcon from "../../assets/icons/ClientFullname.svg";
import IdIcon from "../../assets/icons/ClientID.svg";

const History = () => {
  // Datos de ejemplo para simular la búsqueda en el historial
  const [historial, setHistorial] = useState([
    {
      nombre: "Juan Pablo Carreño Arenas",
      identificacion: "1234567890",
      tipoVehiculo: "Automovil",
      color: "Rojo",
      placa: "ATF-243",
      modelo: "Honda Civic",
    },
    {
      nombre: "Juan Pablo Carreño Arenas",
      identificacion: "1234567890",
      tipoVehiculo: "Automovil",
      color: "Rojo",
      placa: "JPC-443",
      modelo: "Honda Civic",
    },
    {
      nombre: "Juan Pablo Carreño Arenas",
      identificacion: "1234567890",
      tipoVehiculo: "Automovil",
      color: "Rojo",
      placa: "RES-013",
      modelo: "Honda Civic",
    },
    {
      nombre: "Juan Pablo Carreño Arenas",
      identificacion: "1234567890",
      tipoVehiculo: "Automovil",
      color: "Rojo",
      placa: "RES-013",
      modelo: "Honda Civic",
    },
    {
      nombre: "Juan Pablo Carreño Arenas",
      identificacion: "1234567890",
      tipoVehiculo: "Automovil",
      color: "Rojo",
      placa: "RES-013",
      modelo: "Honda Civic",
    },
  ]);

  // Estado para manejar la búsqueda
  const [buscar, setBuscar] = useState("");

  const texto = `
    Gestiona las entradas y salidas de tu 
    parqueadero de manera intuitiva y facil
  `;

  return (
    <div className="history-main-container">
      {/* Titulo */}
      <h1>Parquea Melo</h1>
      {/* SubTitulo */}
      <pre>{texto}</pre>
      {/* Container del historial */}
      <div className="history-content-container">
        {/* Titulo */}
        <h2>Historial</h2>
        {/* Input para la búsqueda */}
        <input
          className="history-search"
          type="text"
          placeholder="Buscar por placa o nombre..."
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
        {/*container que rodea Lista de historial */}
        <div className="history-container-list">
          {/*Lista de historial */}

          <div className="history-list">
            {historial
              .filter(
                (item) =>
                  item.nombre.toLowerCase().includes(buscar.toLowerCase()) ||
                  item.placa.toLowerCase().includes(buscar.toLowerCase())
              )
              .map((item, index) => (
                <div key={index} className="history-item">
                  <div className="user-info">
                    <ReactSVG
                      src={userIcon}
                      className="user-icon"
                      beforeInjection={(svg) => {
                        svg.setAttribute("style", `fill: ${"#888888"}`);
                      }}
                    />
                    <span>{item.nombre}</span>
                  </div>

                  <div className="user-id">
                    <ReactSVG
                      src={IdIcon}
                      className="id-icon"
                      beforeInjection={(svg) => {
                        svg.setAttribute("style", `fill: ${"#888888"}`);
                      }}
                    />
                    <span>{item.identificacion}</span>
                  </div>

                  <div className="car-info">
                    <span>{item.tipoVehiculo}</span>
                    <span>{item.color}</span>
                    <span className="license-plate">{item.placa}</span>
                    <span>{item.modelo}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
