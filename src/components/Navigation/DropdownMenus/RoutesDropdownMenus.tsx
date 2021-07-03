import DropdownItem from '../DropdownItem';
import { ChildDropdownMenuProps } from '.';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ReturnBackArrowIcon } from '../../../svg/returnBackArrow.svg';
import { useHistory } from 'react-router-dom';
import { RoutesEnum } from '../../../models/RoutesEnum';
import './DropdownMenu.css';

const RoutesDropdownMenu = ({ activeMenu, calcHeight, setActiveMenu }: ChildDropdownMenuProps) => {
    const history = useHistory();
    return (
        <CSSTransition
            in={activeMenu === 'routes'}
            unmountOnExit
            timeout={500}
            classNames="menu-secondary"
            onEnter={calcHeight}
        >
            <div className="menu">
                <DropdownItem leftIcon={<ReturnBackArrowIcon />} onClick={() => setActiveMenu('main')}>Back to last menu</DropdownItem>
                <DropdownItem onClick={() => history.push(RoutesEnum.todo)}>Todo List</DropdownItem>
            </div>
        </CSSTransition>
    );
};

export default RoutesDropdownMenu;
