import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import MenuBar from './components/MenuBar/MenuBar';
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import MoreService from './components/MoreService/MoreService';
import More from './components/More/More';
import Header from './components/Header/Header';


function App() {
  return (

    <div className="App">
      <Router>
        <MenuBar></MenuBar>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          {/* <Route path="/service">
            <Service></Service>
          </Route> */}
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/more">
            <MoreService></MoreService>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
