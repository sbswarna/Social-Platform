import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    return (
        <>
            <nav className="d-flex flex-wrap justify-content-between px-4 navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div>
                    <Link className="navbar-brand" to="/">
                        Home
                    </Link>
                </div>
                <div>
                    <Link className="navbar-brand" to="/login">
                        Login
                    </Link>
                    <Link className="navbar-brand" to="/sign-up">
                        Sign-Up
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
