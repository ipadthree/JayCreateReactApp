import DropdownItem from '../DropdownItem';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as PaddleIcon } from '../../../svg/paddle.svg';
import { ReactComponent as NoodleIcon } from '../../../svg/noodle.svg';
import { ChildDropdownMenuProps } from '.';
import './DropdownMenu.css';

const MainDropdownMenu = ({ activeMenu, setActiveMenu, calcHeight }: ChildDropdownMenuProps) => {
    return (
        <CSSTransition
            in={activeMenu === 'main'}
            unmountOnExit
            timeout={500}
            classNames="menu-primary"
            onEnter={calcHeight}
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
    );
};

export default MainDropdownMenu;
