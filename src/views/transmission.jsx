import React from 'react';
import './transmission.scss';

class Transmission extends React.Component {

  render() {
    return (
      <main>
        <div className="video-container"><iframe className="video" src="https://streamable.com/e/9h36sw?loop=0" frameborder="0" width="100%" height="100%" allowfullscreen></iframe></div>
      </main>
        
    );
  }
}

export default Transmission;