import { FaChevronLeft } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import '../scss/header.scss';

function Header({ navigateReturn = true, toPage = -1, title = true, search = true, color = 'dark' }) {

    const navigate = useNavigate();

    return (
        <>
            <header className={`header-${color}`}>
                {navigateReturn && <FaChevronLeft onClick={() => navigate(toPage)} />}
                <h1>{title}</h1>
                {search && <IoSearchOutline />}
                
            </header>
        </>
    );
}

export default Header;