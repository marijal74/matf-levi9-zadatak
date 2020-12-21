import React from "react"
import App from '../App/App'

class ShopItem extends React.Component{

    state = {
        name : "Itemcic",
        desc : "Itemcic is cheap"
   };

   addItem = event => {
       //add item to list of items
    //    doesn't work
    //    console.log("clicked");
   };
    render(){
        return (
            <div>
            <form>
            <h2>Name of ShopItem:</h2>
            <input 
                type = "text"
                value = {this.state.name}>
            </input>
            <br></br>
            <h2>Description of ShopItem:</h2>
            <input 
                type = "text"
                value = {this.state.desc}>
            </input>
            <br></br>
            <br></br>
            <button onClick = {this.addItem}>Add item</button>
            </form>
        </div>
        );
        
    }
}

export default ShopItem;