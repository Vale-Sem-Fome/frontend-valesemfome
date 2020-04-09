import React from 'react'
import { Images } from '../../../components'
const titlePage = "Seu trabalho é muito importante para eles!"

export default function Obrigado() {
    document.title = titlePage;
    const images = [
        "/images/instagram_pics/01-sjc-sem-fome.jpg",
        "/images/instagram_pics/02-sjc-sem-fome.jpg",
        "/images/instagram_pics/04-sjc-sem-fome.jpg"
    ]

    return (
        <div className="container">
            <main className="thanks-page">
                <div className="thanks-container">
                    <p>Obrigada por fazer parte desse movimento!</p>
                    <h1>Seu trabalho é muito importante para eles!</h1>
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
