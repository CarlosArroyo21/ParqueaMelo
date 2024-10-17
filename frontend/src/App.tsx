import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./sections/user/Login";
import Signup from "./sections/user/Signup";
import Home from "./sections/home/Home";
import Entry from "./sections/entry/Entry";

function App() {
  return (
    <Entry/>
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       {/* Ruta para el componente de Login */}
    //       <Route path="/login" element={<Login />} />
          
    //       {/* Ruta para el componente de Registro */}
    //       <Route path="/register" element={<Signup />} />
          
    //       {/* Ruta por defecto para redirigir a login */}
    //       <Route path="*" element={<Login />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
