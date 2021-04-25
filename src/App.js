import './App.css';
import Header from './components/header/header'
import Home from './views/home/home'
import About from './views/about/about'
import Contact from './views/contact/contact'
import Navigation from './components/navigation/navigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './views/item/itemDetailContainer'
import Cart from './views/cart/cart'

function App() {
  return (
  <Router>
    <div className="App">
      <Header/>
      <Navigation/>
      <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path ="/About" component={About}/>
        <Route path ="/Contact" component={Contact}/>
        <Route path ="/item/:id" component={ItemDetailContainer}/>
        <Route path ="/cart" component={Cart}/>
      </Switch>
    </div>
  </Router>
);
}

export default App;
