import React from 'react'
import { Avatar, Grid, Typography } from '@material-ui/core'

export default function Superhero({ superHero }) {

    return (
        <div>
            <Grid container direction="row" justify="flex-start" alignItems="center" spacing={2}>
                <Grid item>
                    <Avatar alt={superHero} src={`./img/${superHero}.png`} />
                </Grid>
                <Grid item xs zeroMinWidth>
                    <Typography noWrap>{superHero}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
