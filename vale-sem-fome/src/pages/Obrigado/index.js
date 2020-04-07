import React from 'react'
import { Images } from '../../components'

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
                    <p>Nós agradecemos por nos contar um pouco mais sobre você e sua família!</p>
                    <h1>Você é muito importante para nós!</h1>
                    <p>
                        <strong>Lembrando:</strong> este cadastro não garante o 
                        recebimento dos alimentos, mas vamos 
                        nos esforçar ao máximo para atender a todos. 
                    </p>
                    <div className="img-container">
                        <Images images={images} />
                    </div>
                </div>
            </main>
        </div>
    )
}
