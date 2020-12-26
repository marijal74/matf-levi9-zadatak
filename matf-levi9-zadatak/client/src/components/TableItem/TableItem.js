import {React} from "react"
import "./TableItem.css"
import ItemApi from "../../api/entries"
export const TableItem = props =>{

    const deleteItem = (event) =>{
        console.log(props.id);
        ItemApi.deleteItem(props.id).then()
        

    } 
    return (
        <tr className = "Row" key = {props.id}>
            <td> {props.name}</td>
            <td> {props.description}</td>
            <td> {props.price}</td>
            <td>
                <button onClick = {deleteItem}>Delete</button>
            </td>
        </tr>
    );
}