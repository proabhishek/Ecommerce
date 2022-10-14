import { NavLink, Outlet } from "react-router-dom";
import "./Navigation.scss";
import { FaSearch, FaCartPlus, FaUser } from "react-icons/fa";

const Navigation = () => {
    return (
        <div> 
            <div className="navigation">
                <div className="logo">
                   <span>Logo</span> 
                </div>
                <div className="nav-links">
                    <NavLink end to="/">Home</NavLink>
                    <NavLink to="/categories">Categories</NavLink>
                    <NavLink to="/categories/hats">Hats</NavLink>
                    <NavLink to="/categories/jackets">Jackets</NavLink>
                </div>

                <div className="icons">
                    <span> <FaSearch /></span>
                    <span><FaCartPlus /></span>
                    <span><FaUser /></span>
                </div>
            </div>
        </div>
    )
}

export default Navigation