import React from "react"

class ShopItem extends React.Component{

    state = {
        name : "",
        desc : ""
   };

   addItem = event => {
       
    event.preventDefault();

    const {name, desc} = this.state;
    //TODO: add to db
    console.log(name, desc);
   };
   onNameChange = event =>{
       this.setState({name: event.target.value});
   }
   onDescChange = event =>{
    this.setState({desc: event.target.value});
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
                value = {this.state.desc}
                onChange = {this.onDescChange}
                >
            </input>
            <br></br>
            <br></br>
            <button type = "submit">Add item</button>
            </form>
        </div>
        );
        
    }
}

export default ShopItem;