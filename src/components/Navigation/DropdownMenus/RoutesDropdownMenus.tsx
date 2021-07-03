import DropdownItem from '../DropdownItem';
import { menuTypes } from '../Navbar';
import { CSSTransition } from 'react-transition-group';
import './DropdownMenu.css';

interface DropdownMenuProps {
    activeMenu: menuTypes;
}

const DropdownMenu = (props: DropdownMenuProps) => {
    return (
        <div className="dropdown">
            <CSSTransition
                in={props.activeMenu === 'settings'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
            >
                <div className="menu">
                    <DropdownItem>Secondary</DropdownItem>
                    <DropdownItem>
                        Setting
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
};

export default DropdownMenu;
