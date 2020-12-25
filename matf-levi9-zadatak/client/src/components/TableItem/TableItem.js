import {React} from "react"
import "./TableItem.css"

export const TableItem = props =>{
    return (
        <tr className = "Row" key = {props._id}>
            <td> {props.name}</td>
            <td> {props.description}</td>
            <td> {props.price}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    );
}