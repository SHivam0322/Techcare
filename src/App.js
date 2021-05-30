import logo from './logo.svg';
import './App.css';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'
import Contact from './Contact';
import Form from './Signupform/Form'
import Forml from './Loginform/Forml'
import FormRegister from './register/FormRegister';
import FormGetService from './getservice/FormGetService';
import About from './About';






function App() {
  return (
    <>
    <Navbar/>
    <Switch>
  
      <Route exact path='/about' component={About}/>
    <Route exact path='/getservice' component={FormGetService}/>
    <Route exact path='/contact' component={Contact}/>
    <Route exact path ='/home' component={Home}/>
    <Route exact path='/signup' component={Form}/>
    <Route exact path='/login' component={Forml}/>
    <Route exact path='/register' component={FormRegister}/>
    <Route exact path='/' component={Home}/>
    </Switch>
   </>
  );
}

export default App;
