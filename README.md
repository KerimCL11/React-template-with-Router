# React Router Application Template

## Description

This project serves as a basic template for React applications incorporating routing functionality with React Router. More to avoid creating the same logic over and over again.

## Features

- **Routing with React Router**: Enables smooth navigation between components without page reloads.
- **Bootstrap Integration**: For the nav I just use one from react-bootstrap
- **Clear Project Structure**: Logical organization of files to facilitate project expansion and maintenance.

## File Structure

- `navReact.jsx`: Custom navigation component.
- `About.jsx`: "About" page component.
- `Home.jsx`: Main page component.
- `App.jsx`: Main application component with router setup.
- `main.jsx`: React application entry point, integrating Bootstrap.

## Usage Instructions

### Prerequisites

- Node.js installed on your system.
- Install vite
### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krerito/React-template-with-Router.git
   
### Just the important

NavReact.jsx component
   ```bash
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
