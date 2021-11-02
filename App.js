import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>

      <Route exact path='/'>
        <Home/>
      </Route> 
    

 

    </Switch>
    {/* <Footer /> */}
  </Router>
  );
}

export default App;
