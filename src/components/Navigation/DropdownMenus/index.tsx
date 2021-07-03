import MainDropdownMenu from './MainDropdownMenu';
import RoutesDropdownMenu from './RoutesDropdownMenus';
import './DropdownMenu.css';
import { menuTypes } from '../Navbar';
export interface DropdownMenuProps {
    activeMenu: menuTypes;
    setActiveMenu: React.Dispatch<React.SetStateAction<menuTypes>>;
}

const DropdownMenu = ({ activeMenu, setActiveMenu }: DropdownMenuProps) => {
    return (
        <div className="dropdown">
            <MainDropdownMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
            <RoutesDropdownMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
        </div>
    );
};

export default DropdownMenu;
