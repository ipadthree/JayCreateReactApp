import { PropsWithChildren } from 'react';
import NavItem from '../NavItem';
import { ReactComponent as MoneyIcon } from '../money.svg';
import { ReactComponent as YinYangIcon } from '../yinyang.svg';
/**
 * 这样我确实实验过了，如果index.css里有App-logo的style，那里设置的style也会影响到这里。
 */
import './Navbar.css';

/**
 * 关于emoji in Javascript
 * https://www.kirupa.com/html5/emoji.htm
 * https://thekevinscott.com/emojis-in-javascript/
 */

const Navbar = (props: PropsWithChildren<any>): React.ReactElement => {
    return (
        <nav className="global-nav">
            <ul className="navbar-nav">
                {/**
                 *  String.fromCodePoint(0x1f601) 这个来把codePoint number转化成emoji string
                 */}
                <NavItem icon={String.fromCodePoint(0x1f601)} />
                {/**
                 * 使用svg的方法：
                 * import paddleSvg from "./paddle.svg";
                 * ...
                 *  <NavItem icon={<img src={paddleSvg} alt="paddle"/>} />
                 * 这样把svg放到img里面作为img的source，这样的话import就是上面这样
                 * import paddleSvg from "./paddle.svg";
                 *
                 * 或者就是如下这种
                 * import { ReactComponent as PaddleIcon } from './paddle.svg';
                 * ...
                 *  <NavItem icon={<PaddleIcon />} />
                 * 直接把svg当成 ReactComponent import
                 */}
                <NavItem icon={<MoneyIcon />} />
                <NavItem icon="⚽" />
                <NavItem icon={<YinYangIcon />}></NavItem>
            </ul>
        </nav>
    );
};

export default Navbar;
