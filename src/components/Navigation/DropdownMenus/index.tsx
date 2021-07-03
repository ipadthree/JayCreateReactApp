import { menuTypes } from '../Navbar';
export interface DropdownMenuProps {
    activeMenu: menuTypes;
    setActiveMenu: React.Dispatch<React.SetStateAction<menuTypes>>;
}
export { default as MainDropdownMenu } from './MainDropdownMenu';
export { default as RoutesDropdownMenu } from './RoutesDropdownMenus';
