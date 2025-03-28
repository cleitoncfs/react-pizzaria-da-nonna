import React from "react";
import "./Location.css";

export default function Location() {
    return (
        <div>
            <div className="parallaxBanner">
                <h2>Venha conhecer a nossa casa!</h2>
            </div>
            <div className="location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5381873775943!2d-46.60168398440697!3d-23.593083284667224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d6a94ecb3ed%3A0x5c6555418f779cc3!2sMooca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2003148-020%2C%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1681069807747!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="300"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Pizzaria"
                ></iframe>
            </div>
        </div>
    );
}
