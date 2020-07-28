import React from 'react';
import './App.css';
// Importando componentes
import CardPost from './components/CardPost';

import Header from './components/Header'

function App() {
  return (
    <div style={{ justifyContent: 'center' }}>
      <Header/>
      <CardPost/>
    </div>
  );
}

export default App;
