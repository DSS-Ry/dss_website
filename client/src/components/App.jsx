import React, {useState, useEffect} from 'react';

import '../styles/style.css';
import st from 'ryscott-st';

import Head from './Head.jsx';
import Foot from './Foot.jsx';
import Tiles from './Tiles.jsx';
import Alert from './Alert.jsx';

const isMobile = st.isMobile = window.innerWidth < 1024;

const App = function() {
  const [alerts, setAlerts] = st.newState('alerts', useState(0));
  const [expandedTile, setExpandedTile] = st.newState('expandedTile', useState(null));

  useEffect(()=>{
    console.log(expandedTile);
  }, [expandedTile]);

  return (
    <div id='app' className='app v'>
      <Head/>
      <Tiles/>
      <Alert/>
      <Foot/>
    </div>
  );
};

export default App;

