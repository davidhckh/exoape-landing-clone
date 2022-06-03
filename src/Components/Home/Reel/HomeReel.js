import './HomeReel.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)


const HomeReel = () => {

    const video = useRef(null)
    const container = useRef(null)

    useEffect(() => {
        gsap.to(video.current, {
            scale: 1,
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                onEnter: () => video.current.play(),
                pin: true,
                pinSpacing: true,
            },
        })
    }, [])

    return (
        <div id="home-reel-container" className="center" ref={container}>
            <video playsInline="" loop="loop" muted="muted" disablePictureInPicture="" ref={video}>
                <source src="https://a.storyblok.com/f/133769/x/3879cd8d95/preview.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default HomeReel