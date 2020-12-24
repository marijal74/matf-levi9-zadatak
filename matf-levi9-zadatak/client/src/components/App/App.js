import './App.css';
import ShopItem from '../ShopItem/CreateShopItem';
import { TableList } from '../TableList/TableList';
import Navbar from "../Navbar/Navbar"
import {BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
      <Navbar/>
      <ShopItem></ShopItem>  
      </header>
      <div>
        <TableList/>
      </div>
      
    </div>
    </Router>
    
    
  );
}

export default App;
