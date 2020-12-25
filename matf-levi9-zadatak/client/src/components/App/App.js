import './App.css';
import ShopItem from '../ShopItem/CreateShopItem';
import TableList from '../TableList/TableList';
import Navbar from "../Navbar/Navbar"
import Product from "../Product/Product"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from '../Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <Navbar/>
      <Switch>
        <Route path = "/admin/unos-novog-proizvoda"  component = {ShopItem}></Route>
        <Route path = "/admin/proizvodi"  component = {TableList}></Route>
        <Home/>
      </Switch>
      </header>
      
    </div>
    </Router>
    
    
  );
}

export default App;
