import React,{useState,useEffect} from "react";
import {makeStyles} from '@material-ui/core/styles';
import {AppBar ,IconButton ,Toolbar ,Collapse} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const mystyles=makeStyles((theme)=>({
  root:{
  	display:'flex',
  	justifyContent:'center',
  	alignItems:'center',
  	height:'100vh',
  	fontFamily:'Nunito',

	},
  appbar:{
  	background: 'none',
  	fontFamily:'Nunito',

  },
  appbarWrap:{
   width:'80%',
   margin:'0 auto',
  },
  mainTitle:{
   color:'#fff',
   fontFamily:'Nunito',
   fontSize:'5rem',

  },
  icon:{
  	color:'#fff',
  	fontSize:'2rem',

  },
  container:{
  	textAlign:'center',

  },
  goDown:{
  color:"#5AFF3D",
  fontSize:'4rem',
  justifyContent:'center',
  },
  title:{
  	color:"#5AFF3D",
  },
  appTitle:{
  	flexGrow: '1',
  }

}));

export default function Header(){
	const classes=mystyles();
	const [checked,setChecked] =useState(false);
	useEffect(()=>{
		setChecked(true);
	},[])
	return(
		<div className={classes.root} id="header">
        <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrap}>
        <h1 className={classes.appTitle}>Students<span className={classes.title}>Arena</span></h1>
         <IconButton>
         <SortIcon className={classes.icon} />
         </IconButton>
         </Toolbar>
        </AppBar>
        <Collapse in={checked} {...(checked ?{timeout:1500}:{})} collapsedHeight={50}>
        <div className={classes.container}>
        <h1 className={classes.mainTitle} >
        Welcome to <br/> Students<span className={classes.title}>Arena</span>
        </h1>
        <IconButton>
        <ExpandMoreIcon className={classes.goDown}/>
        </IconButton>
        </div>
        </Collapse>
		</div>
		);
		
}