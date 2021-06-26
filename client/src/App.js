
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Navigation from './components/Navigation'
import Home from './components/Home'
import Custumordata from './components/Custumordata'
import Admindata from './components/Admindata'

function App() {
  return (
    <div className="App">
     <Router>
     <Navigation />
     <Switch>
    <Route exact path="/"> 
    <Home/>
    </Route>
    <Router exact path="/user">
    <Custumordata/>
    </Router>
    <Route  path="/administrator">
     <Admindata/>
     </Route>
   </Switch>
      </Router>
    </div>
  );
}

export default App;
