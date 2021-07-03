/* eslint-disable jsx-a11y/anchor-is-valid */
import { MouseEventHandler, PropsWithChildren, ReactElement } from 'react';
import "./DropdownItem.css"

interface DropdownItemProps {
    leftIcon?: ReactElement;
    rightIcon?: ReactElement;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const DropdownItem = (props: PropsWithChildren<DropdownItemProps>) => {
    return (
        <a href="#" className="menu-item" onClick={props.onClick}>
            {/**
             * 这个icon-button的css是在NavItem.css里
             */}
            <span className="icon-button">{props.leftIcon}</span>
            {props.children}
            <span className={`${props.rightIcon ? "icon-button": ""} icon-right`}>{props.rightIcon}</span>
        </a>
    );
};

export default DropdownItem;
