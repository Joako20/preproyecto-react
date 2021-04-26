import './App.css';
import Header from './components/header/header'
import Home from './views/home/home'
import Navigation from './components/navigation/navigation'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './views/item/itemDetailContainer'
import Cart from './views/cart/cart'
import CardContainer from './components/card/cardContainer/cardContainer'
function App() {
  return (
  <Router>
    <div className="App">
      <Header/>
      <Navigation/>
      <Switch>
        <Route path ="/" exact component={Home}/>
        <Route path ="/item/:id" component={ItemDetailContainer}/>
        <Route path ="/category/:id" component={CardContainer}/>
        <Route path ="/cart" component={Cart}/>
      </Switch>
    </div>
  </Router>
);
}

export default App;
