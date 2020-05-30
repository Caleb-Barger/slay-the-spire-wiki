import React from 'react'
import { Grid, makeStyles, Typography, Divider, withTheme } from '@material-ui/core'
import MCard from './MCard'

const useStyles = makeStyles({
    content: {
        background: "rgba(57, 57, 57, 0.85)",
        marginTop: "10px",
        marginBottom: "10px"
    },
    nameOfClassHeader: {
        marginTop: "15px",
        marginLeft: "40px",
        color: "white"
    },
    divider: {
        border: "1px solid #BDBDBD"
    },
    characterImage: {
        backgroundImage: "url(https://vignette.wikia.nocookie.net/slay-the-spire/images/7/70/Ironclad.png/revision/latest/scale-to-width-down/270?cb=20181020082717)"
    },
    bodyText: {
        color: "white"
    },
    characterInfo1: {
        marginTop: "10px",
        padding: "4px 4%"
    },
    characterInfo2: {
        padding: "4px 4%"
    },
    characterInfo3: {
        padding: "4px 4%",
        marginTop: "20px"
    },
    startingDeckInfoHeader: {
        marginTop: "10px",
        marginLeft: "40px",
        color: "white",
        marginTop: "32px"
    }
})

const source = "https://vignette.wikia.nocookie.net/slay-the-spire/images/7/70/Ironclad.png/revision/latest/"

const Content = () => {

    const classes = useStyles()

    return (
        <>
        <Grid item xs={0} md={2} />
            <Grid item container xs={12} md={8} className={classes.content}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={classes.nameOfClassHeader}>
                            Ironclad
                        </Typography>
                        <Divider variant="middle" className={classes.divider}/>
                    </Grid>
                    <Grid item container xs={12} justify="center">
                        <img src={source} alt="Character"/>
                    </Grid>
                    <Grid item container xs={12} justify="center" className={classes.characterInfo1}>
                        <Typography variant="body1" className={classes.bodyText}>
                            "The remaining soldier of the Ironclads. Sold his soul to harness demonic energies."
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} justify="center" className={classes.characterInfo2}>
                        <Typography variant="body1" className={classes.bodyText}>
                            The Ironclad is one of four playable characters in Slay the Spire. He wields an arsenal of powerful strikes, boasts formidable defensive options, and can draw fiendish power from his demonic benefactors. He starts with 80 hp, highest of the playable characters. 
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} justify="center" className={classes.characterInfo3}>
                        <Typography variant="body1" className={classes.bodyText}>
                            The Ironclad's starting Relic is BurningBlood Burning Blood, which heals 6 HP after combat. 
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={classes.startingDeckInfoHeader}>
                            Starting Deck
                        </Typography>
                        <Divider variant="middle" className={classes.divider}/>
                    </Grid>
            </Grid>
        <Grid item xs={0} md={2} />
        </>
    )
}


export default Content