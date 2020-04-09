import React from 'react'
import { Images } from '../../components'
const titlePage = "Você é muito importante para nós!";

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
                    <div className="">
                        <p>Nós agradecemos por nos contar um pouco mais sobre você e sua família!</p>
                        <h1>Você é muito importante para nós!</h1>
                        <div className="img-container">
                            <Images images={images} />
                        </div>
                        <p>
                            <strong>Lembrando:</strong> este cadastro não garante o 
                            recebimento dos alimentos, mas vamos 
                            nos esforçar ao máximo para atender a todos. 
                        </p>
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
                </div>
            </main>
        </div>
    )
}
