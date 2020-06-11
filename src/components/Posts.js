import React,{useEffect,useState} from 'react';
import BnwPost from './bwnPost';
import GridList from '@material-ui/core/GridList';
import {makeStyles} from '@material-ui/styles';


const useStyles = makeStyles((theme) => (
{
  root:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around',
    overflow:'hidden'

  }
}


))

export default function Posts() {
    const [posts, SetPost] = useState([]);  

    useEffect(()=>{
     getimages();
    },[]);
  
    const getimages = async ()=>{
      const response = await fetch(`http://127.0.0.1:5000/image_list`);
      const data = await response.json();
      SetPost(data);
      
          
    };
    
    





     return (
        <div>
       <GridList cellHeight={160}  className=>

       </GridList>
        
        </div>
    )
}
