import "./colors.css";

const Colors = ({ selectedColor, setSelectedColor }) => {
  const colorInput = [
    { value: "AllColor", title: "All" },
    { value: "black", title: "Black" },
    { value: "blue", title: "Blue" },
    { value: "red", title: "Red" },
    { value: "green", title: "Green" },
    { value: "white", title: "White" },


  ];

  return (
    <div>
      {colorInput.map((inp) => (
        <div key={inp.value}>
          <input
            id={inp.value}
            type="radio"
            checked={inp.value === selectedColor}
            value={inp.value}
            onChange={() => setSelectedColor(inp.value)}

          />

          <label htmlFor={inp.value}>{inp.title}</label>
        </div>
      ))}
    </div>
  );
};

export default Colors;
