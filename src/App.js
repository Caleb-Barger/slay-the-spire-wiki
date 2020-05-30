import React from 'react';
import {Grid, makeStyles} from '@material-ui/core'

import Header from './components/Header'
import Content from './components/Content'

const useStyles =  makeStyles({
  coolImage: {
    backgroundImage: "url(https://i.redd.it/ah6w6unypqd41.jpg)"
  }
})

function App() {

  const classes = useStyles()

  return (
    <Grid container direction="column">
      <Grid container item>
        <Header />
      </Grid>
      <Grid container item xs={12} className={classes.coolImage}>
        <Content />
      </Grid>
    </Grid>
    
  )
}

export default App;
