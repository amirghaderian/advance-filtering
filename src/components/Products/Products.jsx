import data from "../../db/data"
import Card from "../Card"
const Products = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{data.map((card) => {
      return <Card card={card} />
    })}  </div>
  )
}

export default Products