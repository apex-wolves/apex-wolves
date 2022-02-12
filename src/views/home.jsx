import React from 'react';
import logo from '../images/logo.svg';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <main>
        <img src={logo} alt="Apex Wolves" />
      </main>
        
    );
  }
}

export default Home;