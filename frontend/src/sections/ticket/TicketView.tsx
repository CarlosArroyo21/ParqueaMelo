import { ReactSVG } from "react-svg";
import "./styles/TicketView.css"; // Asegúrate de crear este archivo CSS

const TicketView = () => {
  const data = {
    name: "Juan Pablo Carreño Arenas",
    id: "1002321390",
    model: "Honda Civic",
    color: "Negro",
    vehicleType: "Automovil",
    entry: "4:30 23/11/24",
    exit: "6:30 23/11/24",
  };

  return (
    <div className="ticket-main-container">
      {/*Titulo*/}
      <h1>Parquea Melo</h1>
      {/*SubTitulo*/}
      <p>
        Gestiona las entradas y salidas de tu
        <br />
        parqueadero de manera intuitiva y facil
      </p>
      {/*Primer cuadrado del ticket*/}
      <div className="ticket-first-container">
        {/*Segudo cuadrado del ticket*/}
        <div className="ticket-second-container">
          {/*ticket*/}
          <div className="ticket-view">
            {/*tutulo del ticket*/}
            <h2>Parquea Melo</h2>
            {/*linea*/}
            <hr className="ticket-hr-1"></hr>
            {/*Icono y datos personales*/}
            <div className="ticket-main-row">
              {/*Icono main*/}
              <ReactSVG
                src={"/src/assets/icons/TicketLogo.svg"}
                className="ticket-main-icon"
                beforeInjection={(svg) => {
                  svg.setAttribute("style", `fill: ${"#000000"}`);
                }}
              />
              {/*Datos personales*/}
              <div className="ticket-group-column">
                {/*Name*/}
                <div className="ticket-data-row">
                  <ReactSVG
                    src={"/src/assets/icons/Login.svg"}
                    className="ticket-data-icon"
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", `fill: ${"#000000"}`);
                    }}
                  />
                  <h3>{data.name}</h3>
                </div>
                {/*Identidad*/}
                <div className="ticket-data-row">
                  <ReactSVG
                    src={"/src/assets/icons/UserId.svg"}
                    className="ticket-data-icon"
                    beforeInjection={(svg) => {
                      svg.setAttribute("style", `fill: ${"#000000"}`);
                    }}
                  />
                  <h3>{data.id}</h3>
                </div>
              </div>
            </div>
            {/*Modelo*/}
            <div className="ticket-data-row">
              <h3>Modelo</h3>
              <h3>{data.model}</h3>
            </div>
            {/*Color*/}
            <div className="ticket-data-row">
              <h3>Color</h3>
              <h3>{data.color}</h3>
            </div>
            {/*Tipo de vehiculo*/}
            <div className="ticket-data-row">
              <h3>Tipo de vehiculo</h3>
              <h3>{data.vehicleType}</h3>
            </div>
            {/*linea*/}
            <hr className="ticket-hr-2"></hr>
            {/*Entrada*/}
            <div className="ticket-data-row">
              <h3>Entrada</h3>
              <h3>{data.entry}</h3>
            </div>
            {/*Salida*/}
            <div className="ticket-data-row">
              <h3>Salida</h3>
              <h3>{data.exit}</h3>
            </div>
            {/*linea*/}
            <hr className="ticket-hr-2"></hr>
            {/*Codigo de barras*/}
            <div className="ticket-barcode-placeholder">
              ||||||||||||||||||||
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketView;
