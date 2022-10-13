import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/test">Products</NavLink>
        </div>
    )
}

export default Navigation