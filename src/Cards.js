import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Collapse} from '@material-ui/core'; 
import details from './details';

const useStyles = makeStyles({
  root: {
    margin:"20px",
    maxWidth: 645,
    background:"rgb(0,0,0,0.5)",
  },
  media: {
    width:400,
    height: 440,
  },
  desc:{
    fontFamily:"Nunito",
   fontSize:"2rem",
   color:"#ddd",
 },
  title:{
   fontFamily:"Nunito",
   fontWeight:"bold",
   fontSize:"2rem",
   color:"#fff",
  },
});

export default function Cards({detail}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
        <CardMedia
          className={classes.media}
          image={detail.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h2" className={classes.desc}>
            {detail.title}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="p" className={classes.desc}>
            {detail.description}
          </Typography>
        </CardContent>
    </Card>
  );
}
