import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Cards from './Cards';
import details from './details';

const mystyles=makeStyles((theme)=>({
	root:{
		minHeight:'100vh',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
	}

}
));


export default function(){
	
	const classes=mystyles();
	return <div className={classes.root}>
	<Cards detail={details[0]}  />
	<Cards detail={details[1]} /></div>
}