import {React} from "react"

export const TableItem = props =>{

    return (
        <tr>
            <td>ItemName {props.name}</td>
            <td>ItemDescription {props.description}</td>
            <td>ItemPrice {props.price}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    );
}