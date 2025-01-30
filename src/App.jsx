import { Category, Colors, Navigation, Price, Products, Recommended, Sidebar } from "./components"
import "./app.css"
import Data from "./db/data"
import { useState } from "react";
const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("AllCategory");
  const [selectedPrice, setSelectedPrice] = useState("AllPrice");
  const [selectedColor, setSelectedColor] = useState("AllColor");
  const [selectedBrand, setSelectedBrand] = useState("AllBrand")

  const filterProducts = Data.filter((product) => {
    const brandMatch = selectedBrand === "All Products" || product.company === selectedBrand;
    const categoryMatch = selectedCategory === "AllCategory" || product.category === selectedCategory;
    const priceMatch =
      selectedPrice === "AllPrice" ||
      (selectedPrice === "50" && product.newPrice <= 50) ||
      (selectedPrice === "100" && product.newPrice > 50 && product.newPrice <= 100) ||
      (selectedPrice === "200" && product.newPrice > 150);

    const colorMatch = selectedColor === "AllColor" || product.color === selectedColor;

    return categoryMatch && brandMatch && priceMatch && colorMatch;
  });
  return (
    <div className="container-app">
      <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
        selectedPrice={selectedPrice} setSelectedPrice={setSelectedPrice}
        selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      <div className="main-content">
        <Navigation />
        <Recommended selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
        <Products data={filterProducts} />
      </div>

    </div>
  )
}

export default App