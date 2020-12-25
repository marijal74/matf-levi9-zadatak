import {React} from "react"

export const TableItem = props =>{
    return (
        <tr key = {props._id}>
            <td> {props.name}</td>
            <td> {props.description}</td>
            <td> {props.price}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    );
}