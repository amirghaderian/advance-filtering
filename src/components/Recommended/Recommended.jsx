import "./recommended.css"
const Recommended = ({ selectedBrand, setSelectedBrand }) => {
  const brands = ["All Products", "Nike", "Adidas", "Vans", "Puma"]
  return (
    <div>Recommended
      <div>{brands.map((brand) => {
        return <button key={brand} className={selectedBrand === brand ? "activeButton" : ""} onClick={() => {
          setSelectedBrand(brand)
        }} style={{
          backgroundColor: "white", border: "1px solid gray",
          padding: "3px", cursor: "pointer",

        }}>{brand}</button>
      })}</div> </div>
  )
}

export default Recommended