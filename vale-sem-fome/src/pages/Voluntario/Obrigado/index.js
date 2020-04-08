import React from 'react'
import { Images } from '../../../components'

export default function Obrigado() {
    const images = [
        "/images/instagram_pics/01-sjc-sem-fome.jpg",
        "/images/instagram_pics/02-sjc-sem-fome.jpg",
        "/images/instagram_pics/04-sjc-sem-fome.jpg"
    ]

    return (
        <div className="container">
            <main className="thanks-page">
                <div className="thanks-container">
                    <p>Obrigada por nos fazer parte desse movimento!</p>
                    <h1>Você é muito importante para nós!</h1>
                    <div className="img-container">
                        <Images images={images} />
                    </div>
                </div>
                <div className="social-media">
                    <p>Nos acompanhe pelas redes sociais!</p>
                    <a href="https://www.instagram.com/sjcsemfome/">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://www.facebook.com/sjcsemfome/">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                </div>
            </main>
        </div>
    )
}
