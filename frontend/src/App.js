import React, { useState, useEffect } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Header from './components/Header';
import Feed from './components/Feed';
import { Paper } from '@material-ui/core';
import LoadingScreen from './components/LoadingScreen';

export default function App() {

  const [loading, setLoading] = useState(true);

  const [posts, setPosts] = useState([]);
  const [newPosts, setNewPosts] = useState(posts);
  const [countPosts, setCountPosts] = useState(0);

  const [likes, setLikes] = useState([]);
  const [newLikes, setNewLikes] = useState(likes);
  const [countLikes, setCountLikes] = useState(0);

  const [comments, setComments] = useState([]);
  const [newComments, setNewComments] = useState(comments);
  const [countComments, setCountComments] = useState(0);

  useEffect(() => {
    
    const getPosts = async () => {
      const res = await fetch('http://localhost:3001/posts');
      const posts = await res.json();
      setPosts(posts);
      setNewPosts(Object.assign([], posts));
      setCountPosts(posts.length);
    }

    const getLikes = async () => {
      const res = await fetch('http://localhost:3001/likes');
      const likes = await res.json();
      setLikes(likes);
      setNewLikes(Object.assign([], likes));
      setCountLikes(likes.length);
    }    

    const getComments = async () => {
      const res = await fetch('http://localhost:3001/comments');
      const comments = await res.json();
      setComments(comments);
      setNewComments(Object.assign([], comments));
      setCountComments(comments.length);
      loaded();
    }

    const loaded = function() {
      setTimeout(() => setLoading(false), 500);
    }

    getPosts();
    getLikes();
    getComments();

  }, []);

  return (
    <Container fixed style={{ marginTop: 30 }}>

      {loading === false ? (

        <Paper variant="outlined" style={{ padding: 30 }}>
          <Grid item xs={12} md={12}>
            <Header countPosts={countPosts} countLikes={countLikes} countComments={countComments} />
            <Divider />
            <Feed posts={newPosts} likes={newLikes} comments={newComments} />
          </Grid>
        </Paper>

      ) : (
          <LoadingScreen />
      )}

    </Container>
  );
}
