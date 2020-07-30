/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useLayoutEffect } from 'react';
import { Modal, Icon, Grid, TextArea, Portal, Segment, Header } from 'semantic-ui-react'
import './styles.css';

function CardOpened(props) {
  const [size, setSize] = useState([0, 0]);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [ newComment, setNewComment ] = useState('');

  let { open, onChangeModal, data } = props;
  let { comments, header, upVotes, downVotes, id, description } = data;
  let { voteUp, voteDown, voteComments } = props;

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
     
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const closePopUp = () => {
    setTimeout(
    () => {
        setOpenPopUp(false);
    }, 3000);
  }

  const calculateGrid = () => {
    if(size[0] <= 825 ) {
      return 1
    } 
    if(comments) {
      let cont = 0;
      try {
        comments.map( value => cont+= (value.length))
        if(cont >= 350) {
          return 1
        }
      }
      catch{ 

      }
    }
    return 2
  }

  const calculateStyle = () => {
    let cont = 0;

    if(comments) {
      try {
        comments.map( value => cont+= (value.length))
      }
      catch {

      }
    }
    console.log('opa', cont)
    return cont

  }

  const calculatePercent = () => {
    let total = (Number(upVotes) + Number(downVotes));
    total = Math.floor((Number(upVotes)*100) / total);
    return total
  }

  const sendComment = async () => {
    if(newComment.length >= 10) {

    }
    else {

    }

    await setOpenPopUp(true);
    closePopUp()
      
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
                  <a style={{ color: 'white', fontSize: 22 }}> {calculatePercent()} % de Reputação </a>
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
                  <a onClick={() => voteUp()}>
                  <Icon className="voteUp" color="green" name="angle up" ></Icon>
                    {upVotes}
                  </a>
            
                  <a style={{ marginLeft: 8 }} onClick={() => voteDown()} >
                    <Icon className="voteDown" color="red" name="angle down" ></Icon>
                    {downVotes}
                  </a>

                  <a style={{ marginLeft: 10 }} onClick={() => voteComments()} >
                    <Icon className="voteComment" color="blue" name="comment" ></Icon>
                    {downVotes}
                  </a>

                </Grid.Column>
                <Grid.Column style={
                  calculateStyle() >= 350 & calculateGrid() == 1 
                  ?{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }
                  :{ }
                }>
                  <h1>Comentarios</h1>
                  
                  <div 
                  style={{           
                    backgroundColor: 'rgba(0, 140, 68, 0.10)', 
                    marginLeft: 5,
                    marginRight: 5,
                    padding: 10,
                    borderRadius: 2,
                    width: calculateGrid() == 1 ? '65%' : '80¨%'
                  }}>
                  <TextArea 
                  value={newComment}
                  onChange={(e, { value }) => setNewComment(value)}
                  placeholder={"Diga sua opinião, lembre-se, seja gentil ! :D "} 
                  style={{ 
                    minHeight: 50, 
                    padding: 10, 
                    marginBottom: 0, 
                    marginleft: 10, 
                    marginRight: 15, 
                    width: '100%', 
                    maxWidth: '100%', 
                    minWidth: '100%' 
                  }} />
                  <h1
                  onClick={() => sendComment()}
                  style={{
                    fontSize: 15, 
                    textAlign: 'center',
                    backgroundColor: 'rgba(25, 214, 50, 0.75)',
                    color: 'white', 
                    padding: 10
                  }}
                  > Enviar comentario ! </h1>               
          
                    {
                      comments && comments.map( 
                        data => 
                        <div key={data} className="speech-bubble" style={{ backgroundColor: 'rgba(25, 214, 50, 0.75)', padding: 10, minWidth: 100, width: '80%', maxWidth: 300}}> 
                          <a 
                          style={{ 
                            color: 'white',
                          }} 
                          >
                            {data}
                          </a>
                        </div>
                      )
                    }
                    {
                      comments && comments.length <= 0 && <h1 style={{ textAlign: 'center', fontSize: 18 }}> - Sem comentarios no momento - </h1>
                    }
                  </div>
                    
                </Grid.Column>
              </Grid.Row>
             
            </Grid>
            
            
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
            {
              newComment && newComment.length >= 10 
              ? <Header>Seu post foi enviado!</Header>
              : <Header> Erro ao enviar! </Header>
            }
                <p> {newComment && !newComment.length <= 10 
                  ? 'Obrigado por compartilhar, esperamos ter ajudado a sentir melhor.' 
                  : 'O comentario precisa ter no minimo 10 caracteres.'
                }
                </p>
                <a>Lembre-se você é querido.</a> 
            </Segment>
        </Portal>

    </div>
  );
}

export default CardOpened;
