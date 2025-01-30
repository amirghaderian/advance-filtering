import "./price.css"
const Price = ({ selectedPrice, setSelectedPrice }) => {
  const priceInput = [{ value: "AllPrice", title: "All" }, { value: "50", title: "0$-50" }, { value: "100", title: "50$-100" }, { value: "200", title: "over 150$" },]
  return (
    <div>
      {priceInput.map((inp) => {
        return <div key={inp.value} > <input type="radio" checked={inp.value === selectedPrice} id={inp.value} value={inp.value} onChange={() => { setSelectedPrice(inp.value) }} />
          <label htmlFor={inp.value}>{inp.title}</label>
        </div>
      })}
    </div>
  )
}

export default Price