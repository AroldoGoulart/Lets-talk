import React, { useState } from 'react';
import { Container, ContainerButton, ContainerFields, ModalBackground, SubTitleSpan, TitleSpan } from './styles.js';
import { Button, TextArea, Icon, Header } from 'semantic-ui-react'

function ModalLogin(props) {
    const { setIsOpenMain, isOpenMain } = props;
    const [nickName, setNickName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);

    function onSubmit() {
        if (nickName !== '') {
            if (nickName.length <= 2) {
                setNameIsValid(false)
            } else {
                setNameIsValid(true)
                localStorage.setItem('letsTalkeNickName', nickName);
                localStorage.setItem('isOpen', true);
                setIsOpenMain(false);
            }
        }
        setNickName('');
    }

    return (
        <ModalBackground style={{}} isOpen={isOpenMain}>
            <Container style={{ width: 450, }} >
                <div style={{
                    backgroundColor: '#60c0e0',
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingTop: 12,
                    width: '100%',
                }}>
                    <div style={{ padding: 0 }}>
                        <Icon inverted size="big" name="talk" />
                        <a style={{ color: 'white', fontSize: 20, marginleft: 5 }} href="/"> Let's Talk!</a>
                    </div>
                </div>
                <TitleSpan style={{ margin: 20 }}>Acesso</TitleSpan>
                <ContainerFields style={{ display: 'flex', justifyContent: 'center', marginTop: 0 }}>
                    <TextArea
                        style={{
                            display: 'flex',
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
                        placeholder="Informe um apelido (você não será identificado)!"
                        value={nickName}
                    />
                </ContainerFields>
                {
                    !nameIsValid &&
                    <a style={{ marginTop: 10, marginBottom: -10 }}>O apelido precisa ter no mínimo três caracteres.</a>
                }
                <ContainerButton>
                    <Button
                        href="#enviar"
                        onClick={() => onSubmit()}
                        style={{ flex: 1, backgroundColor: '#60c0e0', color: 'white', margin: 20, marginTop: 8 }}
                        content='Entrar'
                    />
                </ContainerButton>
            </Container>
        </ModalBackground>
    );
}

export default ModalLogin;
