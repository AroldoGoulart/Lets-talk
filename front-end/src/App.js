import React, { useState } from 'react';
import './App.css';
// Importando componentes
import CardPost from './components/CardPost';
import Header from './components/Header';
import ModalLogin from './components/ModalLogin';
import TextInput from './components/TextInput';

function App() {
  const [openModel, setOpenModel] = useState(false);
  const [openModelCard, setOpenModelCard] = useState(false);
  const [isPosted, setPosted] = useState(false);
  const [isOpenMain, setIsOpenMain] = useState(localStorage.getItem('isOpen') === null);

  return (
    <div style={{ justifyContent: 'center' }}>
      <ModalLogin setIsOpenMain={setIsOpenMain} isOpenMain={isOpenMain} />
      <Header setIsOpenMain={setIsOpenMain} />
      <TextInput open={openModel} onChangeModal={setOpenModel} setPosted={setPosted} />
      <CardPost open={openModelCard} onChangeModal={setOpenModelCard} isPosted={isPosted} />
    </div>
  );
}

export default App;
