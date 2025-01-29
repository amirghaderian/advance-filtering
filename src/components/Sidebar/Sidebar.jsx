import Category from "./Category"
import Colors from "./Colors"
import Price from "./Price"
import "./sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <Category />
            <Price />
            <Colors />
        </div>
    )
}

export default Sidebar