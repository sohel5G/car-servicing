import { NavLink } from "react-router-dom";
import useThemeMode from "../hooks/useThemeMode";

const Header = () => {
    const { changeThemeMode, themeMode } = useThemeMode();

    console.log(themeMode);

    const navItems =
        <>
            <li> <NavLink to={'/'}> Home </NavLink> </li>
            <li> <NavLink to={'/about'}> About </NavLink> </li>
            <li> <NavLink to={'/services'}> Services </NavLink> </li>
            <li> <NavLink to={'/blog'}> Blog </NavLink> </li>
            <li> <NavLink to={'/contact'}> Contact </NavLink> </li>
            <li> <span onClick={changeThemeMode}>{themeMode === 'light' ? <><b>Dark</b></> : <><b className="dark:text-white">Light</b></>}</span> </li>
        </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Header;