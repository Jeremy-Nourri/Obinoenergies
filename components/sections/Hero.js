import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
        <div id='Hero' className="hero">
            <div className="hero__content">
                <h1 className="hero__title">Obino Energies</h1>
                <p className="hero__description">We are a leading provider of solar energy solutions in Nigeria.</p>
                <a className="hero__cta" href="#contact">Get in touch</a>
            </div>
            <div className="hero__image">
                <Image 
                    src="/images/image-intro.jpg"
                    alt="Obino Energies"
                    width={500}
                    height={500}
                />
            </div>
        </div>

    )
}