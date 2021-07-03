import DropdownItem from '../DropdownItem';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as PaddleIcon } from '../paddle.svg';
import { ReactComponent as NoodleIcon } from '../noodle.svg';
import { DropdownMenuProps } from '.';
import './DropdownMenu.css';

const MainDropdownMenu = ({ activeMenu, setActiveMenu }: DropdownMenuProps) => {
    return (
        <div className="dropdown">
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<PaddleIcon />}
                        rightIcon={<NoodleIcon />}
                        onClick={() => setActiveMenu('routes')}
                    >
                        Routes
                    </DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
};

export default MainDropdownMenu;
