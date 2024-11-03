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
    <HistoryView/>
  );
}

export default App;
