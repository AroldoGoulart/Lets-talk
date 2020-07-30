import React, { useState } from 'react';
import './App.css';
// Importando componentes
import CardPost from './components/CardPost';
import Header from './components/Header';
import TextInput from './components/TextInput';

function App() {
  const [openModel, setOpenModel] = useState(false);
  const [openModelCard, setOpenModelCard] = useState(false);

  return (
    <div style={{ justifyContent: 'center' }}>
      <Header/>
      <TextInput open={openModel} onChangeModal={setOpenModel} />
      <CardPost open={openModelCard} onChangeModal={setOpenModelCard} />
    </div>
  );
}

export default App;
