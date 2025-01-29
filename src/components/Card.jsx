import { AiFillShop, AiFillStar } from "react-icons/ai"
import "./card.css"
const Card = ({ card }) => {
  return (
    <div style={{ width: "190px", padding: "7px", border: "1px solid #e4e7e9", margin: "0 7px 7px 0" }}> <img src={card.img} width={"100%"} height={"45%"}></img>
      <p style={{ height: "40px", fontWeight: "600" }}>{card.title}</p>
      <div style={{ display: "flex" }}><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /><AiFillStar className="rating-star" /> <p>{card.reviews}</p></div>
      <div style={{ display: "flex", justifyContent: "space-between" }}><div style={{ display: "flex", gap: "9px" }}> <p style={{ textDecoration: "line-through" }}>{card.prevPrice}</p> {card.newPrice}</div><AiFillShop /></div> </div>
  )
}

export default Card