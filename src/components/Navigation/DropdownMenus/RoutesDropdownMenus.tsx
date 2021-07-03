import DropdownItem from '../DropdownItem';
import { ChildDropdownMenuProps } from '.';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css';

const RoutesDropdownMenu = ({ activeMenu, calcHeight }: ChildDropdownMenuProps) => {
    return (
        <CSSTransition
            in={activeMenu === 'routes'}
            unmountOnExit
            timeout={500}
            classNames="menu-secondary"
            onEnter={calcHeight}
        >
            <div className="menu">
                <DropdownItem>Secondary</DropdownItem>
                <DropdownItem>Setting</DropdownItem>
            </div>
        </CSSTransition>
    );
};

export default RoutesDropdownMenu;
