import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/PersonligtBrev">About Me</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/CV">CV</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/">Home</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}