import { useState } from "react";
import "./styles/ExitView.css"; // Asegúrate de crear un archivo CSS para los estilos.
import { ReactSVG } from "react-svg";

const ExitView = () => {
  const [placa, setPlaca] = useState("");
  const [color, setColor] = useState("");
  const [tipo, setTipo] = useState("");
  const [modelo, setModelo] = useState("");

  const [userIdentificacion, setUserIdentificacion] = useState("");
  const [userName, setUserName] = useState("");

  const [step, setStep] = useState(1); // Estado para controlar el paso actual del formulario.

  const handleSearchVehiculo: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro de la salida del vehículo.
    console.log({ placa });
    setStep(2); // Cambia al paso 2 .
  };

  const handleExitVehiculo: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    // Aquí podrías finalizar el proceso o hacer algo adicional después del segundo formulario.
  };

  const handleBack = () => {
    setStep(1);
  };

  const texto = `
    Gestiona las entradas y salidas de tu 
    parqueadero de manera intuitiva y facil
  `;

  return (
    <div className="exit-main-container">
      {/*Titulo*/}
      <h1>Parquea Melo</h1>
      {/*SubTitulo*/}
      <pre>{texto}</pre>
      <div className={step === 1 ? "exit-plate-container" : "exit-data-container"}>
        {step === 2 && (
          <button
            onClick={handleBack}
            type="submit"
            className="exit-buttonBack"
          >
            Atras
          </button>
        )}
        {/* Formulario para buscar  */}
        {step === 1 && (
          <form onSubmit={handleSearchVehiculo} className="exit-container-form">
            <h2>Registrar salida</h2>
            <div className="exit-form-group">
              <label htmlFor="placa">Placa</label>
              <div className="exit-form-input-row">
                <input
                  type="text"
                  id="placa"
                  value={placa}
                  onChange={(e) => setPlaca(e.target.value)}
                  placeholder="..."
                  required
                />
                <ReactSVG
                  src={"/src/assets/icons/LicensePlate.svg"}
                  className="exit-action-icon"
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `fill: ${"#aaa"}`);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="exit-btn">
              <ReactSVG
                src={"/src/assets/icons/ParkingExit.svg"}
                className="exit-btn-icon"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${"#fff"}`);
                }}
              />
              Buscar
            </button>
          </form>
        )}

        {/* Datos del auto y cliente */}
        {step === 2 && (
          <form onSubmit={handleExitVehiculo} className="exit-container-form">
            <h2>Registrar salida</h2>
            <div className="exit-form-row">
              <div className="exit-form-group">
                <label htmlFor="placa">Placa</label>
                <div className="exit-form-input-row">
                  <input
                    type="text"
                    id="placa"
                    value={placa}
                    onChange={(e) => setPlaca(e.target.value)}
                    placeholder="..."
                    required
                    disabled
                  />

                  <ReactSVG
                    src={"/src/assets/icons/LicensePlate.svg"}
                    className="exit-action-icon"
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", `fill: ${"#aaa"}`);
                    }}
                  />
                </div>
              </div>
              <div className="exit-form-group">
                <label htmlFor="color">Color</label>

                <div className="exit-form-input-row">
                  <input
                    type="text"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="..."
                    required
                    disabled
                  />
                  <ReactSVG
                    src={"/src/assets/icons/CarColor.svg"}
                    className="exit-action-icon"
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", `fill: ${"#aaa"}`);
                    }}
                  />
                </div>
              </div>
              <div className="exit-form-group">
                <label htmlFor="tipo">Tipo</label>
                <select
                  id="tipo"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  required
                  disabled
                >
                  <option value="">...</option>
                  <option value="Motorbike">Motocicleta</option>
                  <option value="Car">Automovil</option>
                </select>
              </div>
            </div>
            <div className="exit-form-group">
              <label htmlFor="modelo">Modelo</label>
              <div className="exit-form-input-row">
                <input
                  type="text"
                  id="modelo"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  placeholder="..."
                  required
                  disabled
                />

                <ReactSVG
                  src={"/src/assets/icons/CarModel.svg"}
                  className="exit-action-icon"
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `fill: ${"#aaa"}`);
                  }}
                />
              </div>
            </div>
            <div className="exit-form-row">
              <div className="exit-form-group">
                <label htmlFor="identificacion">Identificacion</label>

                <div className="exit-form-input-row">
                  <input
                    type="text"
                    id="userIdentificacion"
                    value={userIdentificacion}
                    onChange={(e) => setUserIdentificacion(e.target.value)}
                    placeholder="..."
                    required
                    disabled
                  />
                  <ReactSVG
                    src={"/src/assets/icons/ClientId.svg"}
                    className="exit-action-icon"
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", `fill: ${"#aaa"}`);
                    }}
                  />
                </div>
              </div>
              <div className="exit-form-group">
                <label htmlFor="nombre">Nombre Completo</label>
                <div className="exit-form-input-row">
                  <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="..."
                    required
                    disabled
                  />
                  <ReactSVG
                    src={"/src/assets/icons/ClientFullName.svg"}
                    className="exit-action-icon"
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", `fill: ${"#aaa"}`);
                    }}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="exit-btn">
              <ReactSVG
                src={"/src/assets/icons/ParkingExit.svg"}
                className="exit-btn-icon"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${"#fff"}`);
                }}
              />
              Dar salida
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ExitView;
