import './App.css';
import './responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavegationBar from './components/NavegationBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
    <NavegationBar />
    <Switch>

      <Route exact path='/'>
        <Home/>
      </Route> 
      <Route exact path='/contactus'>
        <Contact />
      </Route> 

 

    </Switch>
    {/* <Footer /> */}
  </Router>
  );
}

export default App;
