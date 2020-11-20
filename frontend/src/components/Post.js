import React, { useState } from 'react';
import { uuid } from "uuidv4";

import { makeStyles } from '@material-ui/core/styles';

import { Avatar, Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Comment from './Comment';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        marginBottom: "40px"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        minWidth: 350,
        height: 500
    },
}));

export default function Post(props) {

    const classes = useStyles();

    const { id, user, title, picture } = props.post;
    
    const likes = props.likes;
    const countLikes = likes.length;

    const [comments, setComments] = useState(props.comments);
    const countComments = comments.length;

    const tooltip = likes.map(like => like.user).join('\n');

    const [newComment, setNewComment] = useState('');

    const handleNewComment = (event) => {
        event.preventDefault();

        const newCommentObject = {
            id: uuid(),
            postId: id,
            comment: newComment,
            user: "superman"
        };
        const newPosts = [...comments, newCommentObject];
        setComments(newPosts);
    };

    const handleNewCommentChange = ({ target }) => {
        const comm = target.value;
        setNewComment(comm);
    };

    return (
        <div>
            <Card key={id} id={id} className={classes.root}>
                
                <CardMedia className={classes.cover} image={picture} title={title} />                
                
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        
                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2} style={{ marginBottom: "15px" }}>
                            <Grid item xs={1}>
                                <Avatar alt="superman" src="./img/superman.png" />
                            </Grid>
                            <Grid item xs>
                                <Typography noWrap><strong>{user}</strong>: {title}</Typography>
                            </Grid>
                        </Grid>

                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                            <Grid item xs={12}>
                                <span title={`Curtido por:\n${tooltip}`}>{countLikes} curtidas</span> / {countComments} comentários
                            </Grid>
                        </Grid>

                        <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                            {comments.map(comment => 
                                <Grid key={comment.id} item xs={12}>
                                    <Comment key={comment.id} comment={comment} />    
                                </Grid>
                            )}
                        </Grid>

                        <form noValidate autoComplete="off" onSubmit={handleNewComment}>
                            <input label="Deixe seu comentário" style={{ marginTop: '20px', width: "100%" }} value={newComment} onChange={handleNewCommentChange} />
                        </form>

                    </CardContent>
                </div>
            </Card>
        </div>
    )
}
