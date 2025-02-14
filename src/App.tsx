import menu_icon from "./assets/menu_icon.jpg";
import './App.css'
import Buttons from "./Buttons";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "0px" }}>
      <h1 style = {{ color : "black"}}>Simple Button Example</h1>
      <Buttons /> {/* Now the component is being used */}
    </div>
  );
}

export default App
