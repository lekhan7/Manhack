import{Routes,Route, Navigate}from "react-router-dom"
import Home from "./Pages/Home"
import Worldmap from "./Pages/Worldwap"
import Application from "./Pages/Application"



function App() {


  return (
    <>
    <div>
    <Routes>
    <Route path="/home"element={<Home />} />
    <Route path="/worldmap"element={<Worldmap />} />
    <Route path="/application"element={<Application />} />
   
    </Routes>
   
</div>
    </>
  )
}

export default App
