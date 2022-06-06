import './Footer.css'
import { useRef, useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

    const footerContainer = useRef(null)
    const heading0 = useRef(null)
    const heading1 = useRef(null)

    useEffect(() => {
        //container prallax
        gsap.fromTo(footerContainer.current,
            {
                y: () => -window.innerHeight
            },
            {
                y: 0,
                scrollTrigger: {
                    trigger: footerContainer.current,
                    scrub: true,
                    start: "center bottom",
                    end: "bottom top",
                },
            }
        )

        //heading scroll trigger opening
        gsap.fromTo(heading0.current,
            { rotation: 6, opacity: 0, y: () => heading0.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: footerContainer.current, start: 'center center' } })

        gsap.fromTo(heading1.current,
            { rotation: 6, opacity: 0, y: () => heading1.current.clientHeight * .5 },
            { rotation: 0, y: 0, opacity: 1, duration: .7, ease: 'power4.easeOut', scrollTrigger: { trigger: footerContainer.current, start: 'center center' } })
    }, [])

    return (
        <footer className="center" ref={footerContainer}>
            <div id="footer-content" className="content-width column">
                <h2>
                    <div className="anim">
                        <div ref={heading0}>Our</div>
                    </div>
                    <div className="anim">
                        <div ref={heading1}>Story</div>
                    </div>
                </h2>
                <p>The story behind Exo Ape is one of<br />exploration, creativity and curiosity.</p>
                <hr />
                <p id="footer-final-p">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                </p>
            </div>
            <div className="background">
                <video playsInline="" loop="loop" muted="muted" disablePictureInPicture="" className="video" autoPlay="autoplay">
                    <source src="/footer-video.mp4" type="video/mp4" />
                </video>
            </div>
        </footer>
    )
}

export default Footer