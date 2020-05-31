import React from 'react'
import { Grid, makeStyles, Typography, Divider, List, ListItem } from '@material-ui/core'
import DenseTable from './Dense'
import {connect} from 'react-redux'
 
const useStyles = makeStyles({
    content: {
        background: "rgba(57, 57, 57, 0.85)",
        marginTop: "10px",
        marginBottom: "10px"
    },
    nameOfClassHeader: {
        marginTop: "15px",
        marginLeft: "40px",
        color: "white",
        marginBottom: "3px"
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
        // marginTop: "10px",
        marginLeft: "40px",
        color: "white",
        marginTop: "32px",
        marginBottom: "3px"
    },
    startingCards: {
        marginTop: "20px"
    },
    startingCardItem: {
        color: "white",
        padding: "4px 3%",
        fontSize: "1.2rem"
    }
})

const Content = props => {

    const classes = useStyles()

    return (
        <>
        <Grid item xs={false} md={2} />
            <Grid item container xs={12} md={8} className={classes.content}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={classes.nameOfClassHeader}>
                            {props.character.name}
                        </Typography>
                        <Divider variant="middle" className={classes.divider}/>
                    </Grid>
                    <Grid item container xs={12} justify="center">
                        <img src={props.character.imageSrc} alt="Character"/>
                    </Grid>
                    <Grid item container xs={12} justify="center" className={classes.characterInfo1}>
                        <Typography variant="body1" className={classes.bodyText}>
                            {props.character.desc1}
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} justify="center" className={classes.characterInfo2}>
                        <Typography variant="body1" className={classes.bodyText}>
                            {props.character.desc2}
                        </Typography>
                    </Grid>
                    <Grid item container xs={12} justify="center" className={classes.characterInfo3}>
                        <Typography variant="body1" className={classes.bodyText}>
                            {props.character.desc3}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={classes.startingDeckInfoHeader}>
                            Starting Deck
                        </Typography>
                        <Divider variant="middle" className={classes.divider}/>
                    </Grid>
                    <Grid item xs={12} >
                        <List dense component="ul" className={classes.startingCards}>
                            {props.character.startingCards.map((item, index) => {
                                return (
                                    <ListItem className={classes.startingCardItem} key={index}>
                                        {item}
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={classes.startingDeckInfoHeader}>
                            Character Unlocks
                        </Typography>
                        <Divider variant="middle" className={classes.divider}/>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid container item justify="flex-start" xs={10}>
                        <DenseTable />
                    </Grid>
                    <Grid item xs={1} />
            </Grid>
        <Grid item xs={false} md={2} />
        </>
    )
}

const mapStateToProps = state => {
    return {
        character: state.character.currentCharacter
    }
}

export default connect(mapStateToProps, {})(Content)