import React from "react";
import { ReactSVG } from "react-svg";

interface ActionButtonProps {
  icon: string; // Ruta del SVG
  label: string;
  onClick: () => void;
  color?: string; // Color opcional
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  label,
  onClick,
  color = "#000",
}) => {
  const iconName = icon.split("/").pop();
  return (
    <div className="home-ActionButton" onClick={onClick}>
      <div className="home-ActionButton-icons-row">
        {iconName === "Exit.svg" && (
          <ReactSVG
            src={icon}
            className="home-ActionButton-icon"
            beforeInjection={(svg) => {
              svg.setAttribute("style", `fill: ${color}`);
            }}
          />
        )}
        {iconName === "Cars.svg" || (
          <ReactSVG
            src={"/src/assets/icons/Car.svg"}
            className="home-ActionButton-icon"
            beforeInjection={(svg) => {
              svg.setAttribute("style", `fill: ${color}`);
            }}
          />
        )}
        {iconName === "Cars.svg" && (
          <ReactSVG
            src={icon}
            className="home-ActionButton-icon"
            beforeInjection={(svg) => {
              svg.setAttribute("style", `fill: ${color}`);
            }}
          />
        )}
        {iconName === "Entry.svg" && (
          <ReactSVG
            src={icon}
            className="home-ActionButton-icon"
            beforeInjection={(svg) => {
              svg.setAttribute("style", `fill: ${color}`); // Aquí aplicamos el color
            }}
          />
        )}
      </div>
      <p>{label}</p>
    </div>
  );
};

export default ActionButton;
