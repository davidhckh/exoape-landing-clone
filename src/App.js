import './shared.css'
import './fonts.css'
import { useState, useEffect } from "react"
import Lenis from '@studio-freight/lenis'

import Home from "./Components/Home/Home"
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"
import CursorIcon from './Components/CursorIcon/CursorIcon'

const App = () => {

  const [loadingVisisble, setLoadingVisible] = useState(true)

  //Create cursor icon
  useEffect(() => { new CursorIcon() }, [])

  /**
   * Smooth scroll
   * and unlock scrolling after loading is complete
   */
  useEffect(() => {
    setTimeout(() => {
      const lenis = new Lenis({
        lerp: .1,
        smooth: true,
      })

      const scrollFn = () => {
        lenis.raf()
        requestAnimationFrame(scrollFn)
      }
      requestAnimationFrame(scrollFn)
    }, 3800)
  }, [])

  return (
    <div className="center column">
      {loadingVisisble ? <LoadingScreen setLoadingVisible={setLoadingVisible} /> : null}
      <Home />
    </div>
  )
}

export default App
