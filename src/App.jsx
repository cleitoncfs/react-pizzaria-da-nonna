import React, { useState } from "react";
import Header from "./components/Header/Header";
import PizzaList from "./components/PizzaList/PizzaList";
import Modal from "./components/Modal/Modal";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Location from "./components/Location/Location";
import "./App.css";

export default function App() {
    const [cartItems, setCartItems] = useState([]);
    const [selectedPizza, setSelectedPizza] = useState(null);

    // Dados das pizzas
    const pizzas = [
        {
            id: 1,
            name: "Quatro Queijos",
            img: "/images/pizza.png",
            price: [30.0, 33.0, 35.0],
            sizes: ["6 fatias", "8 fatias", "12 fatias"],
            description:
                "Molho de tomate, camadas de mussarela, provolone, parmesão, gorgonzola e orégano",
        },
        {
            id: 2,
            name: "Calabresa",
            img: "/images/pizza2.png",
            price: [31.0, 34.0, 36.0],
            sizes: ["6 fatias", "8 fatias", "12 fatias"],
            description:
                "Molho de tomate, mussarela, calabresa fatiada, cebola e orégano",
        },
        {
            id: 3,
            name: "Frango com Catupiry",
            img: "/images/pizza3.png",
            price: [33.0, 36.0, 38.0],
            sizes: ["6 fatias", "8 fatias", "12 fatias"],
            description:
                "Molho de tomate, camadas de mussarela, Catupity, frango desfiado, milho, e orégano",
        },
        {
            id: 4,
            name: "Brasileira",
            img: "/images/pizza4.png",
            price: [35.0, 38.0, 40.0],
            sizes: ["6 fatias", "8 fatias", "12 fatias"],
            description:
                "Molho de tomate, mussarela, calabresa picada, palmito, champignon, azeitonas e orégano",
        },
        {
            id: 5,
            name: "Portuguesa",
            img: "/images/pizza5.png",
            price: [34.0, 37.0, 39.0],
            sizes: ["6 fatias", "8 fatias", "12 fatias"],
            description:
                "Molho de tomate, mussarela, presunto, ovos, cebolas, pimentão, azeitonas e orégano",
        },
        {
            id: 6,
            name: "Moda da Casa",
            img: "/images/pizza6.png",
            price: [40.0, 43.0, 45.0],
            sizes: ["6 fatias", "8 fatias", "12 fatias"],
            description:
                "Molho de tomate, mussarela, carne de sol, tomates em cubos, coentro, cebola, azeitonas, catupiry e orégano",
        },
        {
            id: 7,
            name: "Banana com Canela",
            img: "/images/pizza7.png",
            price: [32.0, 35.0, 37.0],
            sizes: ["6 fatias", "8 fatias", "12 fatias"],
            description: "Mussarela, banana, canela e açúcar",
        },
        {
            id: 8,
            name: "Chocolate com Morango",
            img: "/images/pizza8.png",
            price: [30.0, 32.0, 35.0],
            sizes: ["6 fatias", "8 fatias", "12 fatias"],
            description: "Creme de leite, lascas de chocolate e morangos",
        },
    ];

    const handlePizzaClick = (index) => {
        setSelectedPizza({ ...pizzas[index], index });
    };

    const handleCloseModal = () => {
        setSelectedPizza(null);
    };

    const handleAddToCart = (pizza, quantity, sizeIndex) => {
        const sizeLabel = pizza.sizes[sizeIndex];
        const price = pizza.price[sizeIndex];
        const updatedCart = [...cartItems];
        const existingIndex = updatedCart.findIndex(
            (item) => item.id === pizza.id && item.sizeLabel === sizeLabel
        );

        if (existingIndex > -1) {
            updatedCart[existingIndex].quantity += quantity;
        } else {
            updatedCart.push({
                id: pizza.id,
                name: pizza.name,
                sizeLabel,
                price,
                img: pizza.img,
                quantity,
            });
        }

        setCartItems(updatedCart);
        setSelectedPizza(null);
    };

    const handleRemoveItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
    };

    const handleUpdateQuantity = (index, quantity) => {
        const updatedCart = [...cartItems];
        if (quantity > 0) {
            updatedCart[index].quantity = quantity;
        } else {
            updatedCart.splice(index, 1);
        }
        setCartItems(updatedCart);
    };

    const toggleCart = () => {
        // Lógica de abrir/fechar carrinho
    };

    const handleCloseCart = () => {
        // Lógica de fechar carrinho
    };

    return (
        <div className="App">
            <Header cartItems={cartItems} toggleCart={toggleCart} />
            <div className="introText">
                <h2>A melhor pizza da cidade!</h2>
                <p>Faça já o seu pedido e aproveite o sabor incomparável.</p>
            </div>
            <PizzaList pizzas={pizzas} onPizzaClick={handlePizzaClick} />
            <Location /> {/* Componente de localização inserido aqui */}
            {selectedPizza && (
                <Modal
                    pizza={selectedPizza}
                    onClose={handleCloseModal}
                    onAddToCart={handleAddToCart}
                />
            )}
            {cartItems.length > 0 && (
                <Cart
                    cartItems={cartItems}
                    onRemoveItem={handleRemoveItem}
                    onUpdateQuantity={handleUpdateQuantity}
                    onCloseCart={handleCloseCart}
                />
            )}
            <Footer />
            <WhatsAppButton />
        </div>
    );
}
