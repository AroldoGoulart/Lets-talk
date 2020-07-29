import React from 'react';

import { Modal, Button, TextArea, Segment } from 'semantic-ui-react'
import { Categorias } from '../../api/categories';
import Select from "react-dropdown-select";


function TextInput() {
    let borderColor = '#a8a8a8';

    return (
    <div style={{ justifyContent: 'center' }}>
        <Modal style={{justifyContent: 'center', justifyItems: 'center', }} open={true}>
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
                    
                    placeholder="Titulo" />
                    
                    <div style={{ marginBottom: 10 }}> 
                    <Select
                        //onChange={this.handleChange}
                        options={Categorias}
                        required
                        placeholder='Como você definiria oque irá escrever?'
                        onChange={(value) => console.log(value)}
                        style={{ fontSize: 17, padding: 4}}
                        //value={'Selecione uma categoria'}
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
                    placeholder='Pode contar em mais detalhes?' />
                </form>
                
                <div style={{display: 'flex',  justifyContent:'space-around', alignItems:'center', padding: 0 }}>
                    <Button style={{ flex: 1, backgroundColor: '#fc2525', color: 'white', margin: 20 }} content='Cancelar' />
                    <Button style={{ flex: 1, backgroundColor: '#22f73e', color: 'white', margin: 20  }} content='Enviar' />
                </div>


            </Segment.Group>

        </Modal>
    </div>
    );
}

export default TextInput;
