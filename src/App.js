//import logo from "./images/logo.svg";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./views/home";
import GPS from "./views/GPS";
import Transmission from "./views/transmission";

function App() {
  return (
    <Routes>
      <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      <Route path={process.env.PUBLIC_URL + "/GPS"} element={<GPS />} />
      <Route
        path={process.env.PUBLIC_URL + "/TRANSMISSION"}
        element={<Transmission />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
