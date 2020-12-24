import './App.css';
import ShopItem from '../ShopItem/CreateShopItem';
import { TableList } from '../TableList/TableList';
import Navbar from "../Navbar/Navbar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <Navbar/>
      <Route path = "/admin/unos-novog-proizvoda" exact component = {ShopItem}></Route>
      <Route path = "/admin/proizvodi" exact component = {TableList}></Route>
      </header>
      
    </div>
    </Router>
    
    
  );
}

export default App;
