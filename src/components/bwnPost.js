import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme)=>({
    root:{
        minWidth: 275,
        padding:theme.spacing(2),
        
    },
    title:{
        fontSize: 14,
    },
    grid:{
        display:"flex"

    },
    
}));

export default function BwnPost({url,key}) {
    const classes = useStyles();
    return (
        <div>
         

        <Card key={key} className={classes.root} >
        <CardContent>
        <CardMedia image={url} styles={{  height: "150px"  }} component="img" />

        </CardContent>
       
         </Card>

        
     

    </div>
    )
}

