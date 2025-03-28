import React from "react";
import "./Cart.css";

export default function Cart({ cartItems, onRemoveItem, onUpdateQuantity }) {
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <aside className="cart">
            <h1>Seu Carrinho</h1>
            {cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                    <div key={index} className="cart--item">
                        <img src={item.img} alt={item.name} />
                        <div>
                            <p>
                                {item.name} ({item.sizeLabel})
                            </p>
                            <p>R$ {item.price.toFixed(2)}</p>
                        </div>
                        <div className="cart--item--qtarea">
                            <button
                                onClick={() =>
                                    onUpdateQuantity(index, item.quantity - 1)
                                }
                            >
                                -
                            </button>
                            <span>{item.quantity}</span>
                            <button
                                onClick={() =>
                                    onUpdateQuantity(index, item.quantity + 1)
                                }
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() => onRemoveItem(index)}
                            className="cart--item-remove"
                        >
                            Remover
                        </button>
                    </div>
                ))
            ) : (
                <p className="cart--empty">Seu carrinho está vazio.</p>
            )}
            <div className="cart--total">
                <span>Total:</span>
                <span>R$ {subtotal.toFixed(2)}</span>
            </div>
        </aside>
    );
}
