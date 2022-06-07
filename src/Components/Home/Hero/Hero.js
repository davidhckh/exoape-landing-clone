import './Hero.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"
import ScrollCTA from '../ScrollCTA/ScrollCTA'

gsap.registerPlugin(ScrollTrigger)

const HomeHero = () => {

    //Opening animation
    const backgroundWrapper = useRef(null)
    const topSpans = [useRef(null), useRef(null), useRef(null)]
    const headings = [useRef(null), useRef(null), useRef(null)]
    useEffect(() => {
        setTimeout(() => {
            //background
            backgroundWrapper.current.style.transform = 'translateY(0)'

            //top spans
            topSpans.forEach((span, i) => {
                span = span.current
                gsap.fromTo(span,
                    { rotation: 10, opacity: 0, y: () => span.clientHeight * .5 },
                    { rotation: 0, y: 0, opacity: 1, duration: 1, ease: 'power4.easeOut', delay: .6 + (i / 20) }
                )
            })

            //headings
            headings.forEach((heading, i) => {
                heading = heading.current
                gsap.fromTo(heading,
                    { rotation: 10, opacity: 0, y: () => heading.clientHeight * .5 },
                    { rotation: 0, y: 0, opacity: 1, duration: 1, ease: 'power4.easeOut', delay: .8 + (i / 10) }
                )
            })
        }, 2300)
    }, [])


    //Scroll Parallax
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

    return (
        <div id="hero-container" onMouseMove={() => window.cursorIcon ? window.cursorIcon.show('Scroll') : null} onMouseLeave={() => window.cursorIcon ? window.cursorIcon.hide() : null}>
            <ScrollCTA />
            <div className="content-width column">
                <div className="hero-background loading-transition" ref={backgroundWrapper}>
                    <img src="/home/exo-ape-hero.webp" alt="exoape hero" ref={backgroundImage} />
                </div>
                <div className="top-span-container">
                    <div className="anim">
                        <span ref={topSpans[0]}>Intrigued by beauty, fascinated by technology</span>
                    </div>
                    <div className="anim">
                        <span ref={topSpans[1]}>and fuelled with an everlasting devotion to digital</span>
                    </div>
                    <div className="anim">
                        <span ref={topSpans[2]}>craftsmanship and meaningful aesthetics.</span>
                    </div>
                </div>
                <h1>
                    <div className="hero-title-anim">
                        <p ref={headings[0]}>Digital</p>
                    </div>
                    <div className="hero-title-anim">
                        <p ref={headings[1]}>Design</p>
                    </div>
                    <div className="hero-title-anim">
                        <p ref={headings[2]}>Experience</p>
                    </div>

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