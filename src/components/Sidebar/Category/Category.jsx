import { useState } from "react";
import "./category.css"
const Category = () => {
    const categoryFilter = ["All", "Sneakers", "Flats", "Sandals", "Heels"]
    const [selectedCategory, setSelectedCategory] = useState("All");
    return (
        <div>   {categoryFilter.map((filter) => (
            <div key={filter}>
                <input
                    type="radio"
                    id={filter}
                    name="category"
                    value={filter}
                    checked={selectedCategory === filter}
                    onChange={() => setSelectedCategory(filter)}
                />
                <label htmlFor={filter}>{filter}</label>
            </div>
        ))}</div>
    )
}

export default Category