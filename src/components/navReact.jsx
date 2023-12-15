import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function NavReact() {
    return (
        <Nav variant="underline">
            <Nav.Item>
                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
            </Nav.Item>
        </Nav>
    );
}

export default NavReact;