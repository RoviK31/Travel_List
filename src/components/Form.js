import { useState } from "react";
export default function Form({ onAddItems }) {
    //Controlled elements technique
    //Step 1 create a piece of state
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
  
    function handleSubmit(e) {
      e.preventDefault();
      if (!description) return;
      const newItem = { description, quantity, packed: false, id: Date.now() };
      console.log(newItem);
  
      onAddItems(newItem);
  
      setDescription("");
      setQuantity(1);
    }
  
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3> What do you need for your 😍 trip?</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        {/* //Step 2 add the state as a prop 
        //Step 3 listen on the change event using onchange prop */}
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    );
  }