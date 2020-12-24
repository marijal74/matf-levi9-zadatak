import {React} from "react"
import {Link, Switch, Route} from "react-router-dom"
import "./Navbar.css"
const Navbar = () => {

    return (
        <ul className = "Navbar">
            <Link to = "/">
                <li>Home</li>
            </Link>
            <Link to = "/admin/unos-novog-proizvoda">
                <li>Add new item</li>
            </Link>
            <Link to = "/admin/proizvodi">
                <li>See all items</li>
            </Link>

        </ul>
    );
}
export default Navbar;