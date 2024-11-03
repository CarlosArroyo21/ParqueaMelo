import { useState } from "react";
import "./styles/EntranceView.css"; // Asegúrate de crear un archivo CSS para los estilos.
import { ReactSVG } from "react-svg";

const EntranceView = () => {
  const [placa, setPlaca] = useState("");
  const [color, setColor] = useState("");
  const [tipo, setTipo] = useState("");
  const [modelo, setModelo] = useState("");

  const [userIdentificacion, setUserIdentificacion] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [step, setStep] = useState(1); // Estado para controlar el paso actual del formulario.

  const handleSubmitVehiculo: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro de la entrada del vehículo.
    console.log({ placa, color, tipo, modelo });
    setStep(2); // Cambia al paso 2 (datos de usuario).
  };

  const handleSubmitUsuario: React.FormEventHandler<HTMLFormElement> = async (
    e
  ) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para manejar el registro del usuario.
    console.log({ userIdentificacion, userName, userEmail });
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
    <div className="entrance-main-container">
      {/*Titulo*/}
      <h1>Parquea Melo</h1>
      {/*SubTitulo*/}
      <pre>{texto}</pre>
      <div className="entrance-container">
        {step === 2 && (
          <button
            onClick={handleBack}
            type="submit"
            className="entrance-buttonBack"
          >
            Atras
          </button>
        )}
        <h2>Nueva entrada</h2>
        {step === 1 && (
          <form onSubmit={handleSubmitVehiculo} className="entrance-form">
            <div className="entrance-form-group">
              <label htmlFor="placa">Placa</label>
              <div className="entrance-form-input-row">
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
                  className="entrance-action-icon"
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `fill: ${"#aaa"}`);
                  }}
                />
              </div>
            </div>
            <div className="entrance-form-row">
              <div className="entrance-form-group">
                <label htmlFor="color">Color</label>
                <div className="entrance-form-input-row">
                  <input
                    type="text"
                    id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="..."
                    required
                  />
                  <ReactSVG
                    src={"/src/assets/icons/CarColor.svg"}
                    className="entrance-action-icon"
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", `fill: ${"#aaa"}`);
                    }}
                  />
                </div>
              </div>
              <div className="entrance-form-group">
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
            <div className="entrance-form-group">
              <label htmlFor="modelo">Modelo</label>
              <div className="entrance-form-input-row">
                <input
                  type="text"
                  id="modelo"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  placeholder="..."
                  required
                />
                <ReactSVG
                  src={"/src/assets/icons/CarModel.svg"}
                  className="entrance-action-icon"
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `fill: ${"#aaa"}`);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="entrance-btn">
              <ReactSVG
                src={"/src/assets/icons/ParkingEntrace.svg"}
                className="entrance-btn-icon"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${"#fff"}`);
                }}
              />
              Registrar
            </button>
          </form>
        )}

        {/* Formulario para registrar usuario */}
        {step === 2 && (
          <form onSubmit={handleSubmitUsuario} className="entrance-form">
            <div className="entrance-form-group entrance-userLabel">
              <label htmlFor="identificacion">Identificacion</label>
              <div className="entrance-form-input-row">
                <input
                  type="text"
                  id="userIdentificacion"
                  value={userIdentificacion}
                  onChange={(e) => setUserIdentificacion(e.target.value)}
                  placeholder="..."
                  required
                />
                <ReactSVG
                  src={"/src/assets/icons/ClientId.svg"}
                  className="entrance-action-icon"
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `fill: ${"#aaa"}`);
                  }}
                />
              </div>
            </div>
            <div className="entrance-form-group entrance-userLabel">
              <label htmlFor="nombre">Nombre Completo</label>
              <div className="entrance-form-input-row">
                <input
                  type="text"
                  id="userName"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="..."
                  required
                />
                <ReactSVG
                  src={"/src/assets/icons/ClientFullName.svg"}
                  className="entrance-action-icon"
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `fill: ${"#aaa"}`);
                  }}
                />
              </div>
            </div>
            <div className="entrance-form-group entrance-userLabel">
              <label htmlFor="email">Correo Electronico</label>
              <div className="entrance-form-input-row">
                <input
                  type="text"
                  id="userEmail"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="..."
                  required
                />
                <ReactSVG
                  src={"/src/assets/icons/Mail.svg"}
                  className="entrance-action-icon"
                  beforeInjection={(svg) => {
                    svg.setAttribute("style", `fill: ${"#aaa"}`);
                  }}
                />
              </div>
            </div>
            <button type="submit" className="entrance-btn">
              <ReactSVG
                src={"/src/assets/icons/ParkingEntrace.svg"}
                className="entrance-btn-icon"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${"#fff"}`);
                }}
              />
              Registrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EntranceView;
