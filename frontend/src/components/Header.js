import React from 'react';
import { Avatar, Grid, Typography } from '@material-ui/core';

import Superhero from './Superhero';

export default function Header({ countPosts, countLikes, countComments }) {

    const supers = ["batman", "superman", "wonderWoman"];
  
    return (
        <header>
            <Grid container direction="row" justify="flex-start" alignItems="center" style={{ paddingTop: 10, paddingBottom: 30 }}>
                <Grid item xs={2}>
                    <Avatar className="bigAvatar" alt="superman" src="./img/superman.png" />
                </Grid>
                <Grid item xs>
                    <Typography variant="h6">Superman</Typography>
                    <Typography variant="subtitle1"><strong>{countPosts}</strong> posts</Typography>
                    <Typography variant="subtitle1"><strong>{countLikes}</strong> curtidas</Typography>
                    <Typography variant="subtitle1"><strong>{countComments}</strong> comentários</Typography>
                </Grid>
                <Grid item xs={8}>
                    <Typography style={{ marginBottom: "55px", marginLeft: "120px" }} variant="h5">Visualizar timeline com:</Typography>
                    <Grid container direction="row" justify="space-evenly" alignItems="flex-start" spacing={2}>
                        {supers.map((superHero) => {
                            return (
                                <Superhero key={superHero} superHero={superHero} />
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </header>
    );
}

