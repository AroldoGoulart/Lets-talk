/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useLayoutEffect } from 'react';
import { Modal, Icon, Grid } from 'semantic-ui-react'
  
function CardOpened(props) {
  const [size, setSize] = useState([0, 0]);
  let { open, onChangeModal, data } = props;
  let { comments, header, upVotes, downVotes, id, description } = data;

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
     
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const calculateGrid = () => {
    if(size[0] <= 825 ) {
      return 1
    } 
    return 2
  }
  
  return (
    <div style={{ display: 'flex' }}>
        <Modal style={{ display: 'flex' }} open={open}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                backgroundColor: '#19d632',
                height: 45,
                width: '100%',
                paddingTop: 12,  
                paddingLeft: 20,
                paddingBottom: 20,
            }}>
              <div style={{flex: 2}}>
              <Icon style={{ color: 'white', paddingTop: -10 }} name="angle double up"/> 
                  <a style={{ color: 'white', fontSize: 22 }}> 61 % de Reputação </a>
              </div>
              
              <div>
                <Icon onClick={() => onChangeModal(false)} style={{ display:'flex', color: 'white', paddingTop: 5, marginRight: 20 }} name="angle double left"/> 

              </div>

            </div>

            <Grid 
              style={{
                marginTop: 0,
                padding: 20,
                paddingTop: 0,
              }} 
              divided='vertically'
            >
              <Grid.Row columns={calculateGrid()}>
                <Grid.Column>
                  <h1>{header}</h1>
                  <p>{description}</p>
                </Grid.Column>
                <Grid.Column>
                  <h1> teste </h1>
                </Grid.Column>
              </Grid.Row>
             
            </Grid>
            
            
        </Modal>
    </div>
  );
}

export default CardOpened;
