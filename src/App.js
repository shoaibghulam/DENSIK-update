import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavegationBar from "./components/NavegationBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Mint from "./pages/Mint";
function App() {
  return (
    <Router>
      <NavegationBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/mint">
          <Mint />
        </Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
