/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Card, Grid, Icon } from 'semantic-ui-react';
import CardOpened from '../CardOpened';
import api from '../../services/api';
import './styles.css';

let isBeingUsed = false;
let data = [];
let changeModal = () => { };

function CardPost(props) {
  let { tags = [] } = data;
  let { open, onChangeModal, isPosted } = props;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [upVoteState, setUpVoteState] = useState(0);
  const [downVoteState, setDownVoteState] = useState(0);
  const [comments, setComments] = useState("");
  const [description, setDescription] = useState("");
  const [header, setHeader] = useState(null);


  useEffect(() => {
    async function loadPost() {
      const { data } = await api.get('post');
      setPosts(data)
      setComments(data.comments);
      setDescription(data.description)
      setHeader(data.header);
      setLoading(false);
    }
    setLoading(true);
    loadPost();
  }, [isPosted]);

  const voteUp = async (data) => {
    isBeingUsed = true;
    await api.put(`post/${data.id}/upvote`, { username: localStorage.getItem('letsTalkeNickName') }).then(() => {
      setUpVoteState(upVoteState + 1);
    });
    isBeingUsed = false;
  }


  const voteDown = async (data) => {
    isBeingUsed = true;
    await api.put(`post/${data.id}/downvote`, { username: localStorage.getItem('letsTalkeNickName') }).then(() => {
      setDownVoteState(downVoteState + 1);
    });
    isBeingUsed = false;
  }


  const openCard = async posts => {
    if (!isBeingUsed) {
      changeModal(true)
      data = posts;
    }
  }

  const renderButtons = (comments, tags, dataPost) => {
    return (
      <div>
        <Grid style={{ paddingTop: 10, paddingBottom: 10, paddingRight: 10, }}>
          <div style={{ flex: 1, flexDirection: 'column' }}>
            <a>
              <Icon onClick={() => voteUp(dataPost)} className="voteUp" color="green" name="angle up"></Icon>
              {upVoteState}
            </a>

            <a style={{ marginLeft: 8 }} onClick={() => voteDown(dataPost)} >
              <Icon className="voteDown" color="red" name="angle down" ></Icon>
              {downVoteState}
            </a>

            <a style={{ marginLeft: 10 }}>
              <Icon className="voteComment" name="comments" ></Icon>
              {comments}
            </a>

          </div>
          {tags && tags[0] &&
            <a>
              {tags[0].length > 35 ?
                `${tags[0].slice(0, 35)}...`
                : tags[0]
              }
            </a>
          }

        </Grid>
      </div>
    )
  }

  const CardMainPage = post => {
    let { data } = post; setUpVoteState(data.upVotes);
    setDownVoteState(data.downVotes);
    let { header = 'Sem Titulo', description = "Sem descrição", upVotes, downVotes, comments = 0, tags = [] } = data;
    setUpVoteState(upVotes);
    setDownVoteState(downVotes);

    let getRandownColor = () => {
      let possibleColors = ["red", "orange", "yellow", "olive", "green", "teal", "blue", "violet", "purple", "pink", "brown", "grey", "black"];
      return possibleColors[Math.floor((Math.random() * possibleColors.length) + 1)]
    }

    return (
      <Card onClick={() => !isBeingUsed ? openCard(data) : {}} elevation={1} color={getRandownColor()} style={{ minWidth: 420, borderLeft: '6px solid #4567' }} >
        <Card.Content header={header} />
        <Card.Content description={description.length >= 163 ? `${description.slice(0, 160)}...` : description} />
        <Card.Content style={{ flexDirection: 'row' }} extra>
          {renderButtons(comments !== null ? comments.length : 0, tags, data)}
        </Card.Content>
      </Card>
    )
  }

  changeModal = onChangeModal;

  return (
    <div>
      <Card.Group centered >
        {loading ?
          posts ?
            <div style={{ display: 'flex', margin: 50 }}>
              <h2> Carregando Dados... </h2>
              <Icon style={{ marginLeft: 20, marginTop: 3 }} loading size='large' name='spinner' />
            </div>
            : <h1> Nada a ser exibido </h1>
          : posts.map(post => <CardMainPage key={post.header + post.description} data={post} />)}
      </Card.Group>
      <CardOpened voteUp={voteUp} voteDown={voteDown} voteComments={() => { }} open={open} onChangeModal={onChangeModal} data={data} />
    </div>
  );
}

export default CardPost;
