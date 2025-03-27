import React from "react";
import "./PizzaItem.css";

export default function PizzaItem({ pizza, index, onPizzaClick }) {
    return (
        <div className="pizza-item" onClick={() => onPizzaClick(index)}>
            <img src={pizza.img} alt={pizza.name} />
            <h2>{pizza.name}</h2>
            <p>{pizza.description}</p>
            <span>R$ {pizza.price[2].toFixed(2)}</span>
        </div>
    );
}
