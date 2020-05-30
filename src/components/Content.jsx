import React from 'react'
import { Grid, makeStyles, Typography, Divider, withTheme } from '@material-ui/core'
import MCard from './MCard'

const useStyles = makeStyles({
    content: {
        background: "rgba(57, 57, 57, 0.85)",
        marginTop: "10px",
        marginBottom: "10px"
    },
    nameOfClass: {
        marginTop: "10px",
        marginLeft: "20px",
        color: "white"
    },
    divider: {
        border: "1px solid #BDBDBD"
    },
    characterImage: {
        backgroundImage: "url(https://vignette.wikia.nocookie.net/slay-the-spire/images/7/70/Ironclad.png/revision/latest/scale-to-width-down/270?cb=20181020082717)"
    }
})

const source = "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/70/Ironclad.png/revision/latest/"

const Content = () => {

    const classes = useStyles()

    return (
        <>
        <Grid item xs={0} lg={2} />
        <Grid item container xs={12} lg={8} className={classes.content}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.nameOfClass}>
                        Ironclad
                    </Typography>
                    <Divider variant="middle" className={classes.divider}/>
                </Grid>
                <Grid item container xs={12} justify="center">
                    <img src={source} alt="Character"/>
                </Grid>
                <Grid item container xs={12} justify="center">
                    <img src={source} alt="Character"/>
                </Grid>
                <Grid item container xs={12} justify="center">
                    <img src={source} alt="Character"/>
                </Grid>
                <Grid item container xs={12} justify="center">
                    <img src={source} alt="Character"/>
                </Grid>
        </Grid>
        <Grid item xs={0} lg={2} />
        </>
    )
}


export default Content