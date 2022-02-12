import logo from "./images/logo.svg";
import discord from "./images/discord.svg";
import opensea from "./images/opensea.svg";
import twitter from "./images/twitter.svg";
import "./App.scss";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./views/home";

function App() {
  return (
    <div className="aw-main-wrap">
      <nav>
        <ul className="aw-nav-links">
          <li>
            <img className="aw-logo" src={logo} alt="Apex Wolves" />
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Roadmap</Link>
          </li>
          <li>
            <Link to="/">Team</Link>
          </li>
          <li>
            <Link to="/">Whitepaper</Link>
          </li>
          <li>
            <Link to="/">Mint</Link>
          </li>
          <li>
            <Link to="/">Apex City</Link>
          </li>
          <li>
            <img className="aw-social-media" src={discord} alt="Discord" />
            <img className="aw-social-media" src={twitter} alt="Twitter" />
            <img className="aw-social-media" src={opensea} alt="Open Sea" />
          </li>
          <li>
            <button className="aw-button-connect-wallet">Connect Wallet</button>{" "}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <footer>
        <ul className="aw-footer-links">
          <li>
            <img className="aw-logo" src={logo} alt="Apex Wolves" />
          </li>
          <li className="aw-logo-title">Apex Wolves, LLC</li>
          <li className="aw-terms-conditions">Terms and Conditions</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
