import './App.css';
import Homepage from './files/pages/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route } from "react-router-dom";
import Developers from "./files/pages/Developers"
import Features from "./files/pages/Features"

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route path="/developers">
           <Developers />
      </Route>
      <Route path="/features">
           <Features />
      </Route>
        <Route path="/">
           <Homepage />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
