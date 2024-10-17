import { useState } from "react";
import "./styles/entry.css"; // Asegúrate de crear un archivo CSS para los estilos.
import { ReactSVG } from "react-svg";

const NuevaEntrada = () => {
  const [placa, setPlaca] = useState("");
  const [color, setColor] = useState("");
  const [tipo, setTipo] = useState("");
  const [modelo, setModelo] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro de la entrada.
    console.log({ placa, color, tipo, modelo });
  };
  const texto = `
    Gestiona las entradas y salidas de tu 
    parqueadero de manera intuitiva y facil
  `;
  return (
    <div className="main-entrada">
      <h1>Parquea Melo</h1>
      <pre>{texto}</pre>
      <div className="nueva-entrada">
        <h2>Nueva entrada</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="placa">Placa</label>
            <input
              type="text"
              id="placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              placeholder="ABC-123"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                placeholder="..."
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="tipo">Tipo</label>
              <select
                id="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                required
              >
                <option value="">...</option>
                <option value="Motorbike">Motocicleta</option>
                <option value="Car">Automovil</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="modelo">Modelo</label>
            <input
              type="text"
              id="modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              placeholder="..."
              required
            />
          </div>
          <button type="submit" className="registrar-btn">
            <ReactSVG
              src={"/src/assets/icons/ParkingEntrace.svg"}
              className="action-icon"
              beforeInjection={(svg) => {
                svg.setAttribute("style", `fill: ${"#fff"}`);
              }}
            />
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NuevaEntrada;
