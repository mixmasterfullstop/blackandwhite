import React,{ Component } from 'react';
import Layout from './components/layout';
import BnwPost from './components/bwnPost';
import Posts from './components/Posts';
import Grid from '@material-ui/core/Grid';
import AddButton from './components/addButton';
import {makeStyles} from '@material-ui/core/styles';



import './App.css';






export class App extends Component {

constructor( ){
  
  super();
}


  render() {
    return (
      <Grid container  direction="column">
        <Grid item>
          <Layout/>
        </Grid>
        <Grid item container>
          <Grid item xs={0} sm={2}/>
            <Grid item xs={12} sm={8} >
              <Posts/>
            </Grid>

          <Grid item xs={0} sm={2}/>
          <AddButton/>
        </Grid>

      </Grid>
      
    )
  }
}


export default App;
