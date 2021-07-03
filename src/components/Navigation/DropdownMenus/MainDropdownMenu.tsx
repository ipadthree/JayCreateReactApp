import DropdownItem from '../DropdownItem';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as RoutesIcon } from '../../../svg/routes.svg';
import { ReactComponent as RightDoubleArrowIcon } from '../../../svg/rightDoubleArrow.svg';
import { ReactComponent as ProfileIcon } from '../../../svg/profile.svg';
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
                <DropdownItem leftIcon={<ProfileIcon/>}>My Profile</DropdownItem>
                <DropdownItem
                    leftIcon={<RoutesIcon />}
                    rightIcon={<RightDoubleArrowIcon />}
                    onClick={() => setActiveMenu('routes')}
                >
                    Routes
                </DropdownItem>
            </div>
        </CSSTransition>
    );
};

export default MainDropdownMenu;
