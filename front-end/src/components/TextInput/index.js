/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';

import { Modal, Button, TextArea, Segment, Portal, Header } from 'semantic-ui-react'
import { Categorias } from '../../api/categories';
import Select from "react-dropdown-select";

function TextInput(props) {
    let { open, onChangeModal } = props;
    let borderColor = '#a8a8a8';

    const [openPopUp, setOpenPopUp] = useState(false);
    const [titulo, setTitulo] = useState();
    const [categoria, setCategoria] = useState();
    const [descricao, setDescricao] = useState();
    const [validation, setValidation] = useState();
    // const [userName, setUserName] = useState();

    const postData = async (titulo, categoria, descricao) => {
        /*
        let url = 'http://names.drycodes.com/1';
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        
        let user = ""

        await fetch(proxyurl + url)
            .then(response => response.text())
            .then(data => user = data)
            .catch(() => alert('Erro de conexão, experimente recarregar a pagina.'))

        console.log(user)

        */
         /*   
        let promiseName = await fetch('http://names.drycodes.com/1',  { headers });
        if (promiseName.ok) { 
            //let json = await promiseName.json();
            //console.log(json)
        } 
        else {
            alert('Erro de conexão, tente  enviar novamente!');
        }
        */

        await alert('Enviado com sucesso!');
    }

    const letsDoIt = async () => {
        await postData(titulo, categoria, descricao);
        await resetAlldata();
        onChangeModal(false);
        setOpenPopUp(true);
        closePopUp();
    }   
    
    const resetAlldata = () => {
        setDescricao();
        setTitulo();
        setValidation();
    }

    const closeModal = async () => {
        //await resetAlldata();
        onChangeModal(false);
    }

    const closePopUp = () => {
        console.log('op')
        setTimeout(
        () => {
            setOpenPopUp(false);
        }, 3000);
    }

    const submitOutBurst = async () => {
        let verifiquer = [];
        if(!titulo) {
            !titulo && (
                verifiquer = [1]
            )
        }
        if (!categoria) {
            !categoria && (
                verifiquer = verifiquer =[...verifiquer, 2]
            )
        }
        if (!descricao) {
            !descricao && (
                verifiquer = verifiquer =[...verifiquer, 3]
            )
        }
              
        if(verifiquer) {
            verifiquer && setValidation(verifiquer);
            verifiquer.length <= 0 && await setValidation();
        }

        titulo && categoria && descricao && letsDoIt();
    };

    return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextArea 
            style={{  
                marginTop: 10, 
                maxHeight: 38, 
                minHeight: 40,
                paddingTop: 12,
                paddingLeft: 12, 
                justifyContent: 'center',
                borderColor, 
                borderRadius: 5, 
                width: '80%', 
                maxWidth: 500,
                minWidth: 400,
                marginBottom: 15
            }}
            placeholder="O'que você está sentindo ?" 
            value={''}
            onClick={() => onChangeModal(true)}
        />

        <Modal style={{justifyContent: 'center', justifyItems: 'center', }} open={open}>
            <Segment.Group raised>
                <h1 style={{ textAlign: 'center', marginTop: 12 }}> O que você está sentindo ? </h1>
                <Segment style={{ marginBottom: -10 }} />
                <form style={{ padding: 20, flexDirection: 'row', paddingTop: 0 }} >
                    <TextArea 
                        style={{  
                            marginTop: 10, 
                            maxHeight: 38, 
                            minHeight: 40,
                            padding: 10, 
                            justifyContent: 'center',
                            borderColor, 
                            borderRadius: 5, 
                            width: '100%', 
                            maxWidth: '100%',
                            minWidth: '100%',
                            marginBottom: 10
                        }}
                        placeholder="Titulo" 
                        value={titulo}
                        onChange={(e, { value }) => setTitulo(value)}
                    />
                    
                    <div style={{ marginBottom: 10 }}> 
                    <Select
                        options={Categorias}
                        required
                        as="textinput"
                        placeholder='Como você definiria oque irá escrever ?'
                        onChange={(data) => setCategoria(data[0].value)}
                        style={{ fontSize: 17, padding: 4}}
                        value={categoria}
                    />
                    </div>

                    <TextArea 
                        style={{ 
                            borderColor, 
                            borderRadius: 5, 
                            padding: 12, 
                            width: '100%',  
                            maxWidth: '100%',
                            minHeight: 300,
                        }}   
                        placeholder='Pode contar em mais detalhes ?' 
                        value={descricao}
                        onChange={(e, { value }) => setDescricao(value)}
                    />
                </form>
                {
                 validation &&
                 <div style={{ display:'flex', justifySelf: 'center', justifyContent: 'center' }}>
                        Erro, os seguintes dados estão em falta: 
                        {
                            validation.map( data => (
                                data === 1
                                ? <a style={{ color: '#fc2525', marginLeft: 3 }}>{'Titulo'}</a>
                                : data === 2 
                                    ? <a style={{ color: '#fc2525', marginLeft: 3 }}>{'Categorias'}</a>
                                    : <a style={{ color: '#fc2525', marginLeft: 3 }}>{'Descrição'}</a>
                            ))
                        }
                         .
                </div>
                }
                
                <div style={{display: 'flex',  justifyContent:'space-around', alignItems:'center', padding: 0 }}>
                    <Button href="#cancelar" onClick={() => closeModal()} style={{ flex: 1, backgroundColor: '#fc2525', color: 'white', margin: 20 }} content='Cancelar' />
                    <Button href="#enviar" onClick={() => submitOutBurst()} style={{ flex: 1, backgroundColor: '#22f73e', color: 'white', margin: 20  }} content='Enviar' />
                </div>
            </Segment.Group>

        </Modal>
        <Portal open={openPopUp}>
            <Segment
                style={{
                right: '1%',
                position: 'fixed',
                top: '1%',
                zIndex: 1000,
                }}
            >
                <Header>Seu post foi enviado.</Header>
                <p>Obrigado por compartilhar, esperamos ter ajudado a sentir melhor.
                </p>
                <a>Lembre-se você é querido.</a> 
            </Segment>
        </Portal>
    </div>
    );
}

export default TextInput;
