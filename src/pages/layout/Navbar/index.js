import {NavLink} from "react-router-dom";
import "./navbar.scss";

function Navbar() {
    return (
        <div className="main-navbar">
            <div className="container">
                <h2 className="title-nav">Restaurant Order</h2>
                <div className="navbar-list">
                    <NavLink to="/meal" className="navbar-item">Add meal</NavLink>
                    <NavLink to="/" exact className="navbar-item">Add order</NavLink>
                    <NavLink to="/reports" className="navbar-item">Reports</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar;

