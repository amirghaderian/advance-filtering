import { useState } from "react";
import "./category.css"
const Category = ({ selectedCategory, setSelectedCategory }) => {
    const categoryFilter = [{ value: "AllCategory", title: "All" },
    { value: "sneakers", title: "Sneakers" }, { value: "flats", title: "Flats" }, { value: "sandals", title: "Sandals" }, { value: "heels", title: "Heels" }]

    return (
        <div>   {categoryFilter.map((filter) => (
            <div key={filter.value}>
                <input
                    type="radio"
                    id={filter.value}
                    name="category"
                    value={filter}
                    checked={selectedCategory === filter.value}
                    onChange={() => setSelectedCategory(filter.value)}
                />
                <label htmlFor={filter.value}>{filter.title}</label>
            </div>
        ))}
        </div>
    )
}

export default Category