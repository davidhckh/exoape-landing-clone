import { useEffect, useRef } from 'react'
import './VideoPlayer.css'
import gsap from 'gsap'

const VideoPlayer = ({ handleClick, handleScroll }) => {

    const container = useRef(null)

    useEffect(() => {
        gsap.fromTo(container.current, { opacity: 0 }, { opacity: 1 })
    }, [])

    const onClick = () => {
        handleClick()
        window.cursorIcon.hide()
    }

    const onWheel = () => {
        handleScroll()
        window.cursorIcon.hide()
    }

    return (
        <div ref={container} onClick={onClick} onWheel={onWheel} className="video-player" onMouseMove={() => window.cursorIcon.show('Close')} onMouseLeave={() => window.cursorIcon.hide()} >
            <video autoPlay="autoplay">
                <source src="https://a.storyblok.com/f/133769/x/d0586c09b0/showreel-exoape.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default VideoPlayer