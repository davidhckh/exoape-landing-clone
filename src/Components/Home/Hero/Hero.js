import './Hero.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const HomeHero = () => {

    const backgroundImage = useRef(null)

    useEffect(() => {
        gsap.to(backgroundImage.current, {
            y: () => window.innerHeight * 2,
            opacity: .3,
            scrollTrigger: {
                start: 'top',
                end: 'bottom',
                scrub: true,
            },
        })
    }, [])

    const backgroundWrapper = useRef(null)

    useEffect(() => {
        setTimeout(() => {
            backgroundWrapper.current.style.transform = 'translateY(0)'
        }, 2300)
    })

    return (
        <div id="hero-container" onMouseMove={() => window.cursorIcon ? window.cursorIcon.show('Scroll') : null} onMouseLeave={() => window.cursorIcon ? window.cursorIcon.hide() : null}>
            <div className="content-width column">
                <div className="hero-background loading-transition" ref={backgroundWrapper}>
                    <img src="/home/exo-ape-hero.webp" alt="exoape hero" ref={backgroundImage} />
                </div>
                <div className="top-span-container">
                    <span>Intrigued by beauty, fascinated by technology</span>
                    <span>and fuelled with an everlasting devotion to digital</span>
                    <span>craftsmanship and meaningful aesthetics.</span>
                </div>
                <h1>
                    Digital<br />
                    Design<br />
                    Experience
                </h1>
                <span className="bottom-span">
                    White-glove digital experiences, engaging<br />
                    content and impactful design solutions that<br />
                    inspire, affect and delight. We carefully wrap<br />
                    emotionally rich aesthetics around strategic<br />
                    concepts to deliver award-winning digital<br />
                    design that exceeds expectations.
                </span>
            </div>
        </div>
    )
}

export default HomeHero