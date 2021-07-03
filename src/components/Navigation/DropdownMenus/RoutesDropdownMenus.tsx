import DropdownItem from '../DropdownItem';
import { DropdownMenuProps } from '.';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css';

const RoutesDropdownMenu = ({ activeMenu }: DropdownMenuProps) => {
    return (
        <CSSTransition
            in={activeMenu === 'routes'}
            unmountOnExit
            timeout={500}
            classNames="menu-secondary"
        >
            <div className="menu">
                <DropdownItem>Secondary</DropdownItem>
                <DropdownItem>Setting</DropdownItem>
            </div>
        </CSSTransition>
    );
};

export default RoutesDropdownMenu;
