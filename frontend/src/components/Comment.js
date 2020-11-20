import React, { useState } from 'react';

import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core';
import LoadingScreen from './LoadingScreen';

export default function Comment({ comment }) {

    const [loading, setLoading] = useState(true);
    const loaded = function () {
        setTimeout(() => setLoading(false), 500);
    }
    loaded();

    const { user } = comment;

    return (
        <div>
            {loading === false ? (
                
            <Card variant="outlined" spacing={0}>
                <CardContent style={{ padding: 5 }}>
                    <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                        <Grid item xs={1}>
                            <Avatar alt="superman" src={`./img/${user}.png`} />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" component="p">
                                <strong>{user}</strong>: {comment.comment}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            
            ) : (
                <LoadingScreen size="small" />
            )}
        </div>
    )
}
