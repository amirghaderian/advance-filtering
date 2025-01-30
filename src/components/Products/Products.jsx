import Card from "../Card"
const Products = ({ data }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{data.map((card) => {
      return <Card card={card} key={card.id} />
    })}  </div>
  )
}

export default Products