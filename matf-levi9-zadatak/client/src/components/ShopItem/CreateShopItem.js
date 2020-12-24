import React from "react"
import ItemApi from "../../api/entries"

class ShopItem extends React.Component{

    state = {
        name : "",
        description : "",
        price : 0
   };

   addItem = event => {
       
    event.preventDefault();

    const {name, description, price} = this.state;
    ItemApi.createItem({name, description, price})
           .then( () => {
               this.props.history.push("/");
           });
    
    // console.log(name, desc, price);
   };
   onNameChange = event =>{
       this.setState({name: event.target.value});
   }
   onDescChange = event =>{
    this.setState({description: event.target.value});
   }
   onPriceChange = event =>{
    this.setState({price: event.target.value});
   }
    render(){
        return (
            <div>
            <form onSubmit = {this.addItem}>
            <h2>Name of ShopItem:</h2>
            <input 
                type = "text"
                value = {this.state.name}
                onChange = {this.onNameChange}
                >
            </input>
            <br></br>
            <h2>Description of ShopItem:</h2>
            <input 
                type = "text"
                value = {this.state.description}
                onChange = {this.onDescChange}
                >
            </input>
            <br></br>
            <br></br>
            <h2>Price of ShopItem:</h2>
            <input 
                type = "number"
                value = {this.state.price}
                onChange = {this.onPriceChange}
                >
            </input>
            <button type = "submit">Add item</button>
            </form>
        </div>
        );
        
    }
}

export default ShopItem;