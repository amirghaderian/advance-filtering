import Category from "./Category"
import Colors from "./Colors"
import Price from "./Price"
import "./sidebar.css"
const Sidebar = ({ selectedCategory, setSelectedCategory, selectedPrice, setSelectedPrice, selectedColor, setSelectedColor }) => {
    return (
        <div className="sidebar-container">
            <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Price selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice} />
            <Colors selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        </div>
    )
}

export default Sidebar