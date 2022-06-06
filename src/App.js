import './shared.css'
import './fonts.css'
import { useState, useEffect } from "react"

import Home from "./Components/Home/Home"
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"
import CursorIcon from './Components/CursorIcon/CursorIcon'

const App = () => {

  const [loadingVisisble, setLoadingVisisble] = useState(false)
  const [homeVisible, setHomeVisible] = useState(true)

  //Create cursor icon
  useEffect(() => {
    window.cursorIcon = new CursorIcon()
  }, [])

  return (
    <div className="App center column">
      {loadingVisisble ? <LoadingScreen /> : null}
      {homeVisible ? <Home /> : null}
    </div>
  )
}

export default App
