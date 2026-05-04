import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./CartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    { id: 1, name: "Aloe Vera", price: 10, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 2, name: "Snake Plant", price: 15, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 3, name: "Peace Lily", price: 20, category: "Indoor", image: "https://via.placeholder.com/100" },
    { id: 4, name: "Fern", price: 12, category: "Outdoor", image: "https://via.placeholder.com/100" },
    { id: 5, name: "Cactus", price: 8, category: "Succulents", image: "https://via.placeholder.com/100" },
    { id: 6, name: "Bonsai", price: 25, category: "Indoor", image: "https://via.placeholder.com/100" },
  ];

  const categories = ["Indoor", "Outdoor", "Succulents"];

  return (
    <div>
      <h2>Plants</h2>

      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>

          {plants
            .filter((p) => p.category === cat)
            .map((plant) => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <p>{plant.name}</p>
                <p>${plant.price}</p>
                <button onClick={() => dispatch(addItem(plant))}>
                  Add to Cart
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
