import React from "react";
import "./Header.css";

export default function Header({ cartItems, toggleCart }) {
    return (
        <header>
            <h1>Pizzaria da Nonna</h1>
            <div className="menu-openner" onClick={toggleCart}>
                <span>{cartItems.length}</span> 🛒
            </div>
        </header>
    );
}
