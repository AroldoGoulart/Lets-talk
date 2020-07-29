import React from 'react';
import './App.css';
// Importando componentes
import CardPost from './components/CardPost';
import Header from './components/Header';
import TextInput from './components/TextInput';

function App() {
  return (
    <div style={{ justifyContent: 'center' }}>
      <Header/>
      <TextInput/>
      <CardPost/>
    </div>
  );
}

export default App;
