import React, { Fragment } from 'react';
import addIcon from '../assets/add.png';
import Fab from '@material-ui/core/Fab';
import theme from './theme';
import AddIcon from '@material-ui/icons/Add';
import Photo from '@material-ui/icons/Photo';

import { withStyles } from '@material-ui/core/styles';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

const styles = theme => ({
    fab: {
    margin: 0,
    top: 'auto',
    left: 'auto',
    bottom: 20,
    right: 20,
    position: 'fixed'
    }
   });

   const AddButton = withStyles(styles)(({ classes, fabColor }) => (

    <MuiThemeProvider theme={theme}>
        <Fragment>
    <Fab className={classes.fab} color='primary'>
    <Photo/>
    </Fab>
    </Fragment>

    </MuiThemeProvider>
    
   ));
   export default AddButton;
   