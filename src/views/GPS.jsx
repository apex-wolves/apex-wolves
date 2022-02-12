import React from 'react';
import './GPS.scss';
//import maze from '../maze/GPS.html';

class GPS extends React.Component {
  render() {
    return (
      //<div dangerouslySetInnerHTML={{ __html: maze }}></div>
        <iframe width="100%" src={process.env.PUBLIC_URL + '/GPS.html'} frameborder="0"></iframe>
    );
  }
}

export default GPS;