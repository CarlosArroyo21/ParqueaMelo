import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HistoryView from "./sections/history/HistoryView";
import EntranceView from "./sections/entrance/EntranceView";
import ExitView from "./sections/exit/ExitView";
import TicketView from "./sections/ticket/TicketView";
import Login from "./sections/user/Login";
import Signup from "./sections/user/Signup";
import HomePage from "./sections/home/HomeView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        <Route path="/home" element={<HomePage />} />
        <Route path="/entrance" element={<EntranceView />} />
        <Route path="/exit" element={<ExitView />} />
        <Route path="/ticket" element={<TicketView />} />
        <Route path="/history" element={<HistoryView />} />

        {/* Otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;
