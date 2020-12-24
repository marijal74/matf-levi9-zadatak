import {React, useEffect, useState} from "react"
import { TableItem } from "../TableItem/TableItem";

export const TableList = () => {

    const [items, setItems] = useState([{"name":"itemcic", "desc": "itemcic desc", "price":120},
                                        {"name":"itemcicBad", "desc": "bad stuff", "price":20}]);

    
    return(
        <div>
            <table className = "Table">
            <thead className = "TableHeader">
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
            </thead>
            <tbody>
            {items.map( item => (
                <TableItem
                key = {item.name}
                name = {item.name}
                description = {item.desc}
                price = {item.price}></TableItem>))}
            </tbody>
            </table>
        </div>
    )
}