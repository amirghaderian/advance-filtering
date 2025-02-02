import { FiHeart } from "react-icons/fi"
import "./navigation.css"
import { AiOutlineProduct, AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai"
const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="nav-container">
                <input type="text" className="search-input" placeholder="Enter your search shoes" />
            </div>
            <div className="profile-container">
                <a href="#">
                    <FiHeart className="nav-icons" />
                </a>
                <a href="#">
                    <AiOutlineShoppingCart className="nav-icons" />
                </a>
                <a href="#">
                    <AiOutlineUserAdd className="nav-icons" />
                </a>
            </div>
        </nav>
    )
}

export default Navigation