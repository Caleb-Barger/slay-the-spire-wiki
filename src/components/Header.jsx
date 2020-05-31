import React, {useState} from 'react'
import {
    AppBar,
    Toolbar,
    Grid,
    makeStyles,
    Button,
    Menu,
    MenuItem
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

    const [anchorEl, setAnchorEl] = useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = e => {
        setAnchorEl(null);
        console.log(e.currentTarget.textContent)
    };


      
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
                            
                        <Button className={classes.appBarButton} onClick={handleClick}>Characters</Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Ironclad</MenuItem>
                            <MenuItem onClick={handleClose}>Silent</MenuItem>
                            <MenuItem onClick={handleClose}>Defect</MenuItem>
                            <MenuItem onClick={handleClose}>Watcher</MenuItem>
                        </Menu>
                        <Button className={classes.appBarButton}>Cards</Button>
                        <Button className={classes.appBarButton}>Acts</Button>
                        <Button className={classes.appBarButton}>Relics</Button>
                      
                </Grid>
            </Toolbar>
        </AppBar>
    )
}


export default Header