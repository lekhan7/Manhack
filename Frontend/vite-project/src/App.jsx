import{Routes,Route, Navigate}from "react-router-dom"
import Home from "./Pages/Home"
import Worldmap from "./Pages/Worldwap"
import Application from "./Pages/Application"
import CorrelationBetweenAgesAndDiseases from "./Pages/Insight"
import Alert from "./Pages/Alert"
import HealthHeatMap from "./Pages/Heatmap"
import AgeGroupGraph from "./Pages/Agegroup"
import MaleFemale from "./Pages/Malefemail"

import SeasonalDiseasesPieChart from "./Pages/Sesonal"




function App() {


  return (
    <>
    <div>
    <Routes>
    <Route path="/home"element={<Home />} />
    <Route path="/worldmap"element={<Worldmap />} />
    <Route path="/application"element={<Application />} />
    <Route path="/insight"element={<CorrelationBetweenAgesAndDiseases />} />
    <Route path="/alert"element={<Alert />} />
    <Route path="/heatmap"element={<HealthHeatMap />} />
    <Route path="/agegrph"element={<AgeGroupGraph />} />
    <Route path="/malefeamil"element={<MaleFemale />} />

 
   <Route path="/sesonal" element={<SeasonalDiseasesPieChart />} />
    </Routes>
   
</div>
    </>
  )
}

export default App
