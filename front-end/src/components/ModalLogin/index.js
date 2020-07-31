import React, { useState } from 'react';

import { Container, ContainerButton, ContainerFields, ModalBackground, SubTitleSpan, TitleSpan } from './styles.js';

import { Button, TextArea, Icon } from 'semantic-ui-react'

function ModalLogin(props) {
    const { setIsOpenMain, isOpenMain } = props;
    const [nickName, setNickName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);

    function onSubmit() {
        if (nickName !== '') {
            if(nickName.length <= 3 ) {
                setNameIsValid(false)
            }
            else { 
                setNameIsValid(true)
                localStorage.setItem('letsTalkeNickName', nickName);
                localStorage.setItem('isOpen', true);
                setIsOpenMain(false);
            }
        }
        setNickName('');
    }

    return (
        <ModalBackground style={{  }} isOpen={isOpenMain}>
            <Container style={{ width: 450, }} >
                <TitleSpan style={{ margin: 20 }}>Acesso</TitleSpan>
                <SubTitleSpan style={{ marginBottom: 10}}>Insira um apelido</SubTitleSpan>
                <ContainerFields style={{ display: 'flex', justifyContent: 'center', marginTop: 10}}>
                    <TextArea
                        style={{
                            display:'flex',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignSelf: 'center',
                            width: 400,
                            maxWidth: '80%',
                            minWidth: 300,
                            minHeight: 70,
                            maxHeight: 90,
                            height: 80,
                            padding: 20,
                            marginBottom: 5
                        }}
                        onChange={(e, { value }) => setNickName(value)}
                        placeholder="Digíte um apelido, você não será identificado !"
                        value={nickName}
                    />
                </ContainerFields>
                { !nameIsValid && <a style={{ marginTop: 10, marginBottom: -10 }}> O apelido precisa ter no minimo três letras. </a> }
                <ContainerButton>
                    <Button href="#enviar" onClick={() => onSubmit()} style={{ flex: 1, backgroundColor: '#22f73e', color: 'white', margin: 20 }} content='Enviar' />
                </ContainerButton>
            </Container>
        </ModalBackground>
    );
}

export default ModalLogin;
