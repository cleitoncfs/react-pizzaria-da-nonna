import React from "react";
import PizzaItem from "../PizzaItem/PizzaItem";
import "./PizzaList.css";

export default function PizzaList({ pizzas, onPizzaClick }) {
    return (
        <div className="pizza-area">
            {pizzas.map((pizza, index) => (
                <PizzaItem
                    key={index}
                    pizza={pizza}
                    index={index}
                    onPizzaClick={onPizzaClick}
                />
            ))}
        </div>
    );
}
