/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import './App.css';
import { Card, Grid, Icon } from 'semantic-ui-react'
import './styles.css'
import { posts } from '../../api/posts'

/*
possivel outro estilo
const renderButtons = (upVotes, downVotes, comments) => {
  return(
    <div>
    <Button
      color='green'
      content=''
      icon='angle up'
      size="mini"
      label={{ 
        basic: true, 
        color: 'green', 
        pointing: 'left', 
        content: upVotes 
      }}
    />
    <Button
      color='red'
      content=''
      icon='angle down'
      size="mini"
      label={{ 
        basic: true, 
        color: 'red', 
        pointing: 'center', 
        content: downVotes
      }}
    />
    <Button
      color='blue'
      content=''
      icon='comments'
      size="mini"
      label={{ 
        basic: true, 
        color: 'blue', 
        pointing: 'rigth', 
        content: comments 
      }}
    />
    </div>
  )
}
*/

const voteUp = data => {
  alert('up')
}

const voteDown = data => {
  alert('down')
}

const voteComments = data => {
  alert('comment')
}

const openCard = data => {
  alert('card opened')
}

const renderButtons = (upVotes, downVotes, comments, tags) => {
  
  return (
    <Grid style={{ paddingTop: 10, paddingBottom: 10, paddingRight: 10,}}>
    <div style={{ flex: 1,  flexDirection: 'column' }}>

      <a onClick={() => voteUp()}>
      <Icon className="voteUp" color="green" name="angle up" ></Icon>
        {upVotes}
      </a>

      <a style={{ marginLeft: 8 }} onClick={() => voteDown()} >
        <Icon className="voteDown" color="red" name="angle down" ></Icon>
        {downVotes}
      </a>

      <a style={{ marginLeft: 8 }} onClick={() => voteComments()}>
        <Icon className="voteComment" name="comments" ></Icon>
        {comments}
      </a>    
    </div>
    {tags && tags[0] &&
      <a>
      {tags[0].length > 35 ? 
        `${tags[0].slice(0,35)}...`
        : tags[0]
      } 
      </a>
    }
    </Grid> 
  ) 
}

const CardMainPage = post => {
  let { data } = post;
  let { header='Sem Titulo', description="Sem descrição", upVotes=0, downVotes=0, comments=0, tags=[] } = data;
  let getRandownColor = () => {
    let possibleColors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black"];
    return possibleColors[Math.floor((Math.random() * possibleColors.length ) + 1)]
  }

  return(
  <Card onClick={() => openCard(data)}  elevation={1} color={getRandownColor()} style={{ minWidth: 450 }} >
    <Card.Content header={header} />
    <Card.Content description={description.length >= 163 ? `${description.slice(0, 160)}...` : description} />
    <Card.Content style={{ flexDirection: 'row' }} extra>
      {renderButtons(upVotes, downVotes, comments, tags)}
    </Card.Content>
  </Card>
)}

function CardPost() {
  return (
    <div>
    <Card.Group centered >
    { 
    posts.map( post => <CardMainPage key={post.header+post.description}data={post}/> )
    }
    </Card.Group>
    </div>
  );
}

export default CardPost;
