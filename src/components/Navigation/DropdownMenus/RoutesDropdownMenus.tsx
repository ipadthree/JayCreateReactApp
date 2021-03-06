import DropdownItem from '../DropdownItem';
import { ChildDropdownMenuProps } from '.';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as ReturnBackArrowIcon } from '../../../svg/returnBackArrow.svg';
import { ReactComponent as TodoIcon } from '../../../svg/todo.svg';
import { ReactComponent as GalleryIcon } from '../../../svg/gallery.svg';
import { ReactComponent as LookUpIcon } from '../../../svg/lookup.svg';
import { ReactComponent as TikTokIcon } from '../../../svg/tiktok-logo.svg';
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
                <DropdownItem
                    leftIcon={<ReturnBackArrowIcon />}
                    onClick={() => setActiveMenu('main')}
                >
                    Back to last menu
                </DropdownItem>
                <DropdownItem leftIcon={<TodoIcon />} onClick={() => history.push(RoutesEnum.todo)}>
                    Todo List
                </DropdownItem>
                <DropdownItem leftIcon={<GalleryIcon />} onClick={() => history.push(RoutesEnum.carousel)}>
                    Carousel
                </DropdownItem>
                <DropdownItem leftIcon={<LookUpIcon />} onClick={() => history.push(RoutesEnum.search)}>
                    Search
                </DropdownItem>
                <DropdownItem leftIcon={<TikTokIcon />} onClick={() => history.push(RoutesEnum.infiniteScroll)}>
                    Infinite Scroll
                </DropdownItem>
            </div>
        </CSSTransition>
    );
};

export default RoutesDropdownMenu;
