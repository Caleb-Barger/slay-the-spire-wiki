import React from 'react'
import {
    AppBar,
    Toolbar,
    Grid,
    makeStyles,
    ButtonGroup,
    Button
} from '@material-ui/core'

const useStyles = makeStyles({
    appBarBackground: {
        background: "rgba(0, 0, 0, 0.85)"
    },
    appBarButton: {
        color: "white"
    }
})

const Header = () => {

    const classes = useStyles()

    return (
        <AppBar position="sticky" className={classes.appBarBackground}>
            <Toolbar>
                <Grid container>
                    <Grid item xs={false} lg={1}/>
                    <Grid item xs={12} lg={3}>
                        <Button variant="text" className={classes.appBarButton}>Slay The Spire Wiki</Button>
                    </Grid>
                    <Grid item xs={12} lg={4}/>
                            <ButtonGroup variant="text" >
                                <Button className={classes.appBarButton}>Characters</Button>
                                <Button className={classes.appBarButton}>Cards</Button>
                                <Button className={classes.appBarButton}>Acts</Button>
                                <Button className={classes.appBarButton}>Relics</Button>
                            </ButtonGroup>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}


export default Header