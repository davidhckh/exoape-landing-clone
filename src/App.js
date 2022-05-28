import './shared.css'
import './fonts.css'
import { useState, useEffect, useRef } from "react"

import Home from "./Components/Home/Home"
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"

const App = () => {

  const [loadingVisisble, setLoadingVisisble] = useState(false)
  const [homeVisible, setHomeVisible] = useState(true)

  const appContainer = useRef(null)

  useEffect(() => {
    const body = document.body
    const scrollWrap = appContainer.current
    const speed = .1
    let height = 0
    let offset = 0

    function smoothScroll() {
      offset += (window.pageYOffset - offset) * speed

      const scroll = 'translateY(-' + offset + 'px) translateZ(0)'
      scrollWrap.style.transform = scroll

      window.requestAnimationFrame(smoothScroll)
    }
    smoothScroll()

    //--------------------------- Resize ---------------------------------//
    const resize = () => {
      height = scrollWrap.getBoundingClientRect().height - 1
      body.style.height = Math.floor(height) + 'px'
    }
    resize()

    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <div className="App center column" ref={appContainer}>
      {loadingVisisble ? <LoadingScreen /> : null}
      {homeVisible ? <Home /> : null}
    </div>
  )
}

export default App
