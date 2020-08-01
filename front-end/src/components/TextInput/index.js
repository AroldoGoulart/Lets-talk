/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Button, Header, Modal, Portal, Segment, TextArea } from 'semantic-ui-react'
import { Categorias } from '../../api/categories';
import Select from "react-dropdown-select";
import api from "../../services/api";

function TextInput(props) {
    let { open, onChangeModal, setPosted } = props;
    let borderColor = '#a8a8a8';

    const [openPopUp, setOpenPopUp] = useState(false);
    const [titulo, setTitulo] = useState();
    const [categoria, setCategoria] = useState();
    const [descricao, setDescricao] = useState();
    const [validation, setValidation] = useState();
    // const [userName, setUserName] = useState();

    const postData = async (titulo, categoria, descricao) => {
        const data = {
            category: categoria,
            description: descricao,
            downVotes: 0,
            header: titulo,
            upVotes: 0,
            username: localStorage.getItem('letsTalkeNickName'),
        };
        await api.post('post', data);
    }

    const letsDoIt = async () => {
        await postData(titulo, categoria, descricao);
        await resetAlldata();
        onChangeModal(false);
        setPosted(true);
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
        setTimeout(() => { setOpenPopUp(false) }, 3000);
    }

    const submitOutBurst = async () => {
        let verifiquer = [];
        if (!titulo) {
            !titulo && (
                verifiquer = [1]
            )
        }
        if (!categoria) {
            !categoria && (
                verifiquer = verifiquer = [...verifiquer, 2]
            )
        }
        if (!descricao) {
            !descricao && (
                verifiquer = verifiquer = [...verifiquer, 3]
            )
        }

        if (verifiquer) {
            verifiquer && setValidation(verifiquer);
            verifiquer.length <= 0 && await setValidation();
        }

        titulo && categoria && descricao && letsDoIt();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TextArea
                style={{
                    borderColor,
                    borderRadius: 5,
                    justifyContent: 'center',
                    marginBottom: 15,
                    marginTop: 10,
                    maxHeight: 38,
                    maxWidth: 500,
                    minHeight: 40,
                    minWidth: 400,
                    paddingLeft: 12,
                    paddingTop: 12,
                    width: '80%',
                }}
                onClick={() => onChangeModal(true)}
                placeholder="O que você está sentindo?"
                value={''}
            />

            <Modal style={{ justifyContent: 'center', justifyItems: 'center', }} open={open}>
                <Segment.Group raised>
                    <h1 style={{ textAlign: 'center', marginTop: 12 }}>O que você está sentindo?</h1>
                    <Segment style={{ marginBottom: -10 }} />
                    <form style={{ padding: 20, flexDirection: 'row', paddingTop: 0 }} >
                        <TextArea
                            style={{
                                borderColor,
                                borderRadius: 5,
                                justifyContent: 'center',
                                marginBottom: 10,
                                marginTop: 10,
                                maxHeight: 38,
                                maxWidth: '100%',
                                minHeight: 40,
                                minWidth: '100%',
                                padding: 10,
                                width: '100%',
                            }}
                            onChange={(e, { value }) => setTitulo(value)}
                            placeholder="Título"
                            value={titulo}
                        />

                        <div style={{ marginBottom: 10 }}>
                            <Select
                                as="textinput"
                                onChange={(data) => setCategoria(data[0].value)}
                                options={Categorias}
                                placeholder='Escolha uma categoria para a postagem?'
                                required
                                style={{ fontSize: 17, padding: 4 }}
                                value={categoria}
                            />
                        </div>

                        <TextArea
                            style={{
                                borderColor,
                                borderRadius: 5,
                                maxWidth: '100%',
                                minHeight: 300,
                                padding: 12,
                                width: '100%',
                            }}
                            placeholder='Pode contar em mais detalhes?'
                            value={descricao}
                            onChange={(e, { value }) => setDescricao(value)}
                        />
                    </form>
                    {
                        validation &&
                        <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'center' }}>
                            Você esqueceu de informar os seguintes campos:
                            {
                                validation.map(data => (
                                    data === 1
                                        ? <a style={{ color: '#fc2525', marginLeft: 3 }}>{'Titulo'}</a>
                                        : data === 2
                                            ? <a style={{ color: '#fc2525', marginLeft: 3 }}>{'Categorias'}</a>
                                            : <a style={{ color: '#fc2525', marginLeft: 3 }}>{'Descrição'}</a>
                                ))
                            }
                        </div>
                    }

                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: 0 }}>
                        <Button href="#cancelar" onClick={() => closeModal()} style={{ flex: 1, backgroundColor: '#fc2525', color: 'white', margin: 20 }} content='Cancelar' />
                        <Button href="#enviar" onClick={() => submitOutBurst()} style={{ flex: 1, backgroundColor: '#22f73e', color: 'white', margin: 20 }} content='Enviar' />
                    </div>
                </Segment.Group>
            </Modal>
            <Portal open={openPopUp}>
                <Segment style={{ position: 'fixed', right: '1%', top: '1%', zIndex: 1000 }}>
                    <Header>Postagem realizada com sucesso!</Header>
                    <p>Obrigado por compartilhar, esperamos ter ajudado a sentir melhor.</p>
                    <a>Lembre-se você é querido.</a>
                </Segment>
            </Portal>
        </div>
    );
}

export default TextInput;
