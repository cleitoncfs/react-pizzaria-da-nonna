import React from "react";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {
    return (
        <div className="whatsappIcon">
            <a
                href="https://wa.me/351912155966/?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20na%20Pizzaria%20da%20Nonna."
                target="_blank"
                rel="noopener noreferrer"
                title="Contate-nos pelo WhatsApp"
            >
                <img
                    src="/images/whatsapp-logo.png" // Certifique-se que a imagem está nesse caminho
                    alt="Entre em contato via WhatsApp"
                />
            </a>
        </div>
    );
}
