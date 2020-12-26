import React, { useEffect, useState } from "react"
import Product from "../Product/Product";
import ItemApi from "../../api/entries"
import "./Home.css"
const Home = () =>{

    const [products, setHome] = useState([]);

    useEffect(() =>{
        ItemApi.getHome().then((res) => {
            console.log(res);
            setHome(res);
        });

    },[]);


    
    return (
        <div className = "Home">

            <div className = "Container">
            {products.map((product) => {
                return(
                <Product 
                        key  = {product.id} 
                        id = {product.id}
                        name = {product.name}
                        description = {product.description}
                        price = {product.price}>
                </Product>
                
                );
            })}
            </div>
        
        </div>
    );
}
export default Home;