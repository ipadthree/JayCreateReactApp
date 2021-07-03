import {useState} from "react";
import MainDropdownMenu from './MainDropdownMenu';
import RoutesDropdownMenu from './RoutesDropdownMenus';
import './DropdownMenu.css';
import { menuTypes } from '../Navbar';
export interface ChildDropdownMenuProps {
    activeMenu: menuTypes;
    setActiveMenu: React.Dispatch<React.SetStateAction<menuTypes>>;
    calcHeight: (e: HTMLElement) => void;
}

interface DropdownMenuProps {
    activeMenu: menuTypes;
    setActiveMenu: React.Dispatch<React.SetStateAction<menuTypes>>;
}



const DropdownMenu = ({ activeMenu, setActiveMenu }: DropdownMenuProps) => {
    const [menuHeight, setMenuHeight] = useState<number | null>(null);
    const calcHeight = (element: HTMLElement) => {
        const height = element.offsetHeight;
        setMenuHeight(height);
    }
    return (
        <div className="dropdown" style={{height: menuHeight as number}}>
            <MainDropdownMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} calcHeight={calcHeight}/>
            <RoutesDropdownMenu activeMenu={activeMenu} setActiveMenu={setActiveMenu} calcHeight={calcHeight}/>
        </div>
    );
};

export default DropdownMenu;
