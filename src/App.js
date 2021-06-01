import logo from './logo.svg';
import './App.css';
import Header from './Header';
import {makeStyles} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core"
import Trending from './Trending'
const mystyles=makeStyles((theme)=>({
  root:{
    minHeight:'100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/Image/back3.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));
function App() {
  const classes=mystyles();
  return <div className={classes.root}>
  <CssBaseline />
  <Header />
  <Trending />
    </div>

}

export default App;
