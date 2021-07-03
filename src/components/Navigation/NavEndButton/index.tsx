import { PropsWithChildren, ReactElement, useState } from 'react';
import './NavEndButton.css';

interface NavEndButtonProps {
    icon: string | ReactElement;
}

const NavEndButton = (props: PropsWithChildren<NavEndButtonProps>) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setIsOpen(!isOpen)}>
                {props.icon}
            </a>
            {isOpen && props.children}
        </li>
    );
};

export default NavEndButton;
