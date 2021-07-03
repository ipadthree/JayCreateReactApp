import { PropsWithChildren, ReactElement, useEffect, useState } from 'react';
import './NavEndButton.css';

interface NavEndButtonProps {
    icon: string | ReactElement;
    clearMenuSelection: () => void;
}

const NavEndButton = ({
    icon,
    clearMenuSelection,
    children,
}: PropsWithChildren<NavEndButtonProps>) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (!isOpen) {
            clearMenuSelection();
        }
    }, [clearMenuSelection, isOpen]);
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setIsOpen(!isOpen)}>
                {icon}
            </a>
            {isOpen && children}
        </li>
    );
};

export default NavEndButton;
