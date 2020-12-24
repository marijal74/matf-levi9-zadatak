import './App.css';
import ShopItem from '../ShopItem/CreateShopItem';
import { TableList } from '../TableList/TableList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ShopItem></ShopItem>  
      </header>
      <div>
        <TableList/>
      </div>
      
    </div>
    
  );
}

export default App;
