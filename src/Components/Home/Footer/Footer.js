import './Footer.css'
import { useRef, useEffect } from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {

    const footerContainer = useRef(null)

    useEffect(() => {
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
    }, [])

    return (
        <footer className="center" ref={footerContainer}>
            <div id="footer-content" className="content-width column">
                <h2>Our<br />Story</h2>
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