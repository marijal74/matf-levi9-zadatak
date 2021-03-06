import {React, useEffect, useState} from "react"
import { TableItem } from "../TableItem/TableItem";
import ItemApi  from "../../api/entries"
import "./TableList.css"
export const TableList = () => {

    const [items, setItems] = useState([]);
    
    useEffect(() => {
        ItemApi.getAllItems()
        .then(res => {
            setItems(res);
        })
        

    }, [items]);
    return(
        <div>
            <table className = "Table">
            <thead className = "TableHeader">
                <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {items.map( (item) => (
                <TableItem
                key = {item.id}
                id = {item.id}
                name = {item.name}
                description = {item.description}
                price = {item.price}></TableItem>))}
            </tbody>
            </table>
        </div>
    )
}
export default TableList;