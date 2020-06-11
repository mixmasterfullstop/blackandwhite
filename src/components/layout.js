import React, { Component } from 'react'
import { ThemeProvider as MuiThemeProvider,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import theme from './theme';

import TextField from '@material-ui/core/TextField';
import {makeStyles,useTheme} from '@material-ui/core/styles';





 const styles = theme => ({
  root: {
  flexGrow: 1
  },
  flex: {
  flex: 1
  },
  menuButton: {
  marginLeft: -12,
  marginRight: 20
  }
 });
 const Layout = withStyles(styles)(({ classes }) => (
   <MuiThemeProvider theme={theme}>
     <React.Fragment>
     <div className={classes.root}>
  <AppBar position="static">
  <Toolbar>
  <IconButton
  className={classes.menuButton}
  color="inherit"
  aria-label="Menu"
  >
  <MenuIcon />
  </IconButton>
  <Typography
  variant="title"
  color="inherit"
  className={classes.flex}
  >
  Black and White
  </Typography>
  <Button color="inherit">Login</Button>
  </Toolbar>
  </AppBar>
 
  </div>
     </React.Fragment>
   </MuiThemeProvider>
  
 ));
 export default Layout;

