import { PropsWithChildren, ReactElement } from 'react';
import "./DropdownItem.css"

interface DropdownItemProps {
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
}

const DropdownItem = (props: PropsWithChildren<DropdownItemProps>) => {
    return (
        <a href="#" className="menu-item">
            {/**
             * 这个icon-button的css是在NavItem.css里
             */}
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className="icon-right">{props.rightIcon}</span>
        </a>
    );
};

export default DropdownItem;
