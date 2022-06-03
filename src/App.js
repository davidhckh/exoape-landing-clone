import './shared.css'
import './fonts.css'
import { useState, useEffect, useRef } from "react"

import Home from "./Components/Home/Home"
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"

const App = () => {

  const [loadingVisisble, setLoadingVisisble] = useState(false)
  const [homeVisible, setHomeVisible] = useState(true)

  return (
    <div className="App center column">
      {loadingVisisble ? <LoadingScreen /> : null}
      {homeVisible ? <Home /> : null}
    </div>
  )
}

export default App
