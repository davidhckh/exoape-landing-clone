import './shared.css'
import './fonts.css'
import { useState, useEffect } from "react"

import Home from "./Components/Home/Home"
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen"
import CursorIcon from './Components/CursorIcon/CursorIcon'

const App = () => {

  const [loadingVisisble, setLoadingVisible] = useState(true)

  //Create cursor icon
  useEffect(() => { new CursorIcon() }, [])

  return (
    <div className="center column">
      {loadingVisisble ? <LoadingScreen setLoadingVisible={setLoadingVisible} /> : null}
      <Home />
    </div>
  )
}

export default App
