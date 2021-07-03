import DropdownItem from '../DropdownItem';
import { menuTypes } from '../Navbar';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as PaddleIcon } from '../paddle.svg';
import { ReactComponent as NoodleIcon } from '../noodle.svg';
import './DropdownMenu.css';

interface DropdownMenuProps {
    activeMenu: menuTypes;
}

const DropdownMenu = (props: DropdownMenuProps) => {
    return (
        <div className="dropdown">
            <CSSTransition
                in={props.activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem leftIcon={<PaddleIcon />} rightIcon={<NoodleIcon />}>
                        Setting
                    </DropdownItem>
                </div>
            </CSSTransition>

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
