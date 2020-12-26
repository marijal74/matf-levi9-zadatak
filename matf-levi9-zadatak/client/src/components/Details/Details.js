import React, { useEffect, useState } from "react"
import { useParams, withRouter } from "react-router-dom";
import ItemApi from "../../api/entries"
import Product from "../Product/Product"
const Details = (props) => {

    const [product, setDetails] = useState([]);
    

    useEffect(() => {
        
        const id = props.match.params.id;
        console.log(id);
        ItemApi.getItem(id)
                .then((prod) => 
                    setDetails(prod));
    },[]);
    return (
        <div className="Details">
            {/* <div>{product.name, product.description, product.price}</div> */}
             <Product name = {product.name}
                    description = {product.description}
                    price = {product.price}
             />
        </div>
    );
}
export default withRouter(Details);