import './Reel.css'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect, useState } from "react"
import VideoPlayer from './VideoPlayer'

gsap.registerPlugin(ScrollTrigger)


const HomeReel = () => {

    const [isPlaying, setIsPlaying] = useState(false)

    const video = useRef(null)
    const container = useRef(null)
    const heading0 = useRef(null)
    const heading1 = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                scrub: .99,
                onEnter: () => video.current.play(),
                pinSpacing: true,
                pin: true,
            },
        })
        // Scale Video to fill container
        timeline.to(video.current, { scale: 1, }, 0)

        // Headings
        timeline.to(heading0.current, { x: 0, }, 0)
        timeline.to(heading1.current, { x: 0, }, 0)
    }, [])

    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }

    const handleScroll = () => {
        if (isPlaying) setIsPlaying(false)
    }

    return (
        <div id="reel-wrapper">
            <div id="reel-container" className="center column" ref={container} onClick={handleClick} onWheel={handleScroll} onMouseMove={() => window.cursorIcon.show('Play')} onMouseLeave={() => window.cursorIcon.hide()} >
                <div className="row center" id="reel-top-p">
                    <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className="icon" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <p>Work in motion</p>
                </div>
                <div className="row center">
                    <h2 ref={heading0}>Play</h2>
                    <video playsInline="" loop="loop" muted="muted" disablePictureInPicture="" ref={video} className="video">
                        <source src="https://a.storyblok.com/f/133769/x/3879cd8d95/preview.mp4" type="video/mp4" />
                    </video>
                    <h2 ref={heading1}>Reel</h2>
                </div>
                <p id="reel-bottom-p">Our work is best experienced in motion. Don't<br />forget to put on your headphones.</p>
            </div>
            {isPlaying ? <VideoPlayer handleClick={handleClick} handleScroll={handleScroll} /> : null}
        </div>
    )
}

export default HomeReel