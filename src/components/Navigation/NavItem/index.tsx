import { ReactElement } from "react";
import "./NavItem.css"

interface NavItemProps {
    icon: string | ReactElement;
}

const NavItem = (props: NavItemProps) => {
    return (
        <li className="nav-item">
            <a href="#" className="icon-button">
                {props.icon}
            </a>
        </li>
    );
};

export default NavItem;
