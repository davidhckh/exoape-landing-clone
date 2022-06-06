import { useEffect, useState } from 'react'
import './ScrollCTA.css'

const ScrollCTA = () => {

    const [opacity, setOpacity] = useState(.5)

    const handleScroll = () => {
        const opacity = window.scrollY > 100 ? 0 : .5
        setOpacity(opacity)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <p id="scroll-cta" style={{ 'opacity': opacity }}>
            Scroll to explore
        </p>
    )
}

export default ScrollCTA