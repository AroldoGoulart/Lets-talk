import React, { useState } from 'react';

import { Container, ContainerButton, ContainerFields, ModalBackground, SubTitleSpan, TitleSpan } from './styles.js';

import { Button, TextArea } from 'semantic-ui-react'

function ModalLogin(props) {
    const { setIsOpenMain, isOpenMain } = props;
    const [nickName, setNickName] = useState('');

    function onSubmit() {
        if (nickName !== '') {
            localStorage.setItem('letsTalkeNickName', nickName);
            localStorage.setItem('isOpen', true);
            setIsOpenMain(false);
        }
        setNickName('');
    }

    return (
        <ModalBackground isOpen={isOpenMain}>
            <Container>
                <TitleSpan>Acesso</TitleSpan>
                <SubTitleSpan>Insira um apelido</SubTitleSpan>
                <ContainerFields>
                    <TextArea
                        style={{
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
                        onChange={(e, { value }) => setNickName(value)}
                        placeholder="Digíte um apelido, você não será identificado!"
                        value={nickName}
                    />
                </ContainerFields>
                <ContainerButton>
                    <Button href="#enviar" onClick={() => onSubmit()} style={{ flex: 1, backgroundColor: '#22f73e', color: 'white', margin: 20 }} content='Enviar' />
                </ContainerButton>
            </Container>
        </ModalBackground>
    );
}

export default ModalLogin;
