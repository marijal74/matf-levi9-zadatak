import {React, useEffect, useState} from "react"
import { TableItem } from "../TableItem/TableItem";

export const TableList = () => {

    const [items, setItems] = useState([{"name":"itemcic", "desc": "itemcic desc", "price":120},
                                        {"name":"itemcicBad", "desc": "bad stuff", "price":20}]);

    
    return(
        <div>
            <table>
            {items.map( item => (
                <TableItem
                name = {item.name}
                description = {item.desc}
                price = {item.price}></TableItem>))}

            </table>
        </div>
    )
}