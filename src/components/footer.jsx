import { BiSolidPlaylist } from "react-icons/bi";
import { IoAlbumsOutline } from "react-icons/io5";
import { RiUserStarLine } from "react-icons/ri";
import { TbCategory2 } from "react-icons/tb";
import { VscColorMode } from "react-icons/vsc";
import { NavLink } from "react-router";
import '../scss/footer.scss';

function Footer() {
    return (
        <>
            <footer className="footer">
                <nav className="footer__nav">
                    <ul className="footer__nav__list">
                        <li className="footer__nav__list__item"><NavLink to={'/albums'} style={({ isActive }) => ({ color: isActive ? 'black' : 'orange' })}>
                        <IoAlbumsOutline />
                        </NavLink>
                        </li>
                        <li className="footer__nav__list__item"><NavLink to={'/playlists'} style={({ isActive }) => ({ color: isActive ? 'black' : 'orange' })}>
                        <BiSolidPlaylist />
                        </NavLink>
                        </li>
                        <li className="footer__nav__list__item"><NavLink to={'/'} style={({ isActive }) => ({ color: isActive ? 'black' : 'orange' })}>
                        <RiUserStarLine className="middle-icon" />
                        </NavLink>
                        </li>
                        <li className="footer__nav__list__item"><NavLink to={'/color-theme'} style={({ isActive }) => ({ color: isActive ? 'black' : 'orange' })}>
                        <VscColorMode />
                        </NavLink>
                        </li>
                        <li className="footer__nav__list__item"> <NavLink to={'/categories'} style={({ isActive }) => ({ color: isActive ? 'black' : 'orange' })}>
                        <TbCategory2 />
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}

export default Footer;