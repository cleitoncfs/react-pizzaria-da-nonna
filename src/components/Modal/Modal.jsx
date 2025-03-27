import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ pizza, onClose, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(2);

    if (!pizza) return null;

    const handleSizeChange = (index) => {
        setSelectedSize(index);
    };

    return (
        <div className="pizzaWindowArea">
            <div className="pizzaWindowBody">
                <button className="pizzaInfo--cancelButton" onClick={onClose}>
                    ❌
                </button>
                <div className="pizzaBig">
                    <img src={pizza.img} alt={pizza.name} />
                </div>
                <div className="pizzaInfo">
                    <h1>{pizza.name}</h1>
                    <p className="pizzaInfo--desc">{pizza.description}</p>
                    <div className="pizzaInfo--sizearea">
                        <p>Tamanhos disponíveis:</p>
                        <div className="pizzaInfo--sizes">
                            {pizza.sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className={`pizzaInfo--size ${
                                        selectedSize === index ? "selected" : ""
                                    }`}
                                    onClick={() => handleSizeChange(index)}
                                >
                                    {size} - R$ {pizza.price[index].toFixed(2)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="pizzaInfo--qtarea">
                        <button
                            onClick={() =>
                                setQuantity(quantity > 1 ? quantity - 1 : 1)
                            }
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>
                            +
                        </button>
                    </div>
                    <button
                        className="pizzaInfo--addButton"
                        onClick={() =>
                            onAddToCart(pizza, quantity, selectedSize)
                        }
                    >
                        Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    );
}
