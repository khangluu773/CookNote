import React from "react";
import menu_icon from "./assets/menu_icon.png";
import home_icon from "./assets/home_icon.png";

const Buttons: React.FC = () => {
  return (
    <div>
    <button 
      onClick={() => alert("Button Clicked!")}
      style={{
        position: "absolute",
        bottom: "20px",
        right: "40px",
        padding: "40px 40px",
        fontSize: "16px",
        backgroundColor: "none",
        color: "#bebebe",
        border: "none",
        borderRadius: "0px",
        cursor: "pointer",
        backgroundImage: `url(${menu_icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      </button>

      // Second home button
      <button 
      onClick={() => alert("Button Clicked!")}
      style={{
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "40px 40px",
        fontSize: "16px",
        backgroundColor: "none",
        color: "white",
        border: "none",
        borderRadius: "0px",
        cursor: "pointer",
        backgroundImage: `url(${home_icon})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      </button>
    </div>
  );
};

export default Buttons;
