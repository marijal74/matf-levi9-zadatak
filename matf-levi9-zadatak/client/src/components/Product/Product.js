import React from "react";
import "./Product.css"
import {Link} from "react-router-dom"
const Product = (props) => {
    return (
        <div className = "Product">
            <Link to ={`/admin/proizvodi/${props.id}`}>
            <div className = "Title">{props.name}</div>
            </Link>
            <div className = "Img"></div>
            <div className = "Desc">{props.description, props.price}</div>
        </div>
    );


}
export default Product;