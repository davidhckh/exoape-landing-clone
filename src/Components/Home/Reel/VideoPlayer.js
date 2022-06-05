import { useEffect, useRef } from 'react'
import './VideoPlayer.css'
import gsap from 'gsap'

const VideoPlayer = ({ handleClick, handleScroll }) => {

    const container = useRef(null)

    useEffect(() => {
        gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1 })
    }, [])

    return (
        <div ref={container} onClick={handleClick} onWheel={handleScroll} className="video-player">
            <video autoPlay="autoplay">
                <source src="https://a.storyblok.com/f/133769/x/d0586c09b0/showreel-exoape.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer