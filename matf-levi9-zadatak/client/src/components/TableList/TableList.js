import {React, useEffect, useState} from "react"
import { TableItem } from "../TableItem/TableItem";
import ItemApi  from "../../api/entries"
export const TableList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        ItemApi.getAllItems()
        .then(res => {
            setItems(res);
        })
        

    }, []);
    return(
        <div>
            <table>
            <thead className = "TableHeader">
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
            </thead>
            <tbody>
            {items.map( (item, index) => (
                <TableItem
                key = {index}
                name = {item.name}
                description = {item.description}
                price = {item.price}></TableItem>))}
            </tbody>
            </table>
        </div>
    )
}
export default TableList;