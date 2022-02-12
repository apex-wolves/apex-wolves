//import logo from "./images/logo.svg";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/home";
import GPS from "./views/GPS";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/GPS" element={<GPS />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
