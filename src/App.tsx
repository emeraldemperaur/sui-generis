import { Route, Routes } from 'react-router-dom'
import './App.css'
import OverviewCodex from './pages/overviewCodex'
import MarketsCodex from './pages/marketsCodex'
import FeaturesCodex from './pages/featuresCodex'
import ServicesCodex from './pages/servicesCodex'
import AboutCodex from './pages/aboutCodex'
import ResourcesCodex from './pages/resourcesCodex'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<OverviewCodex/>}/>
      <Route path='product-markets' element={<MarketsCodex/>}/>
      <Route path='features' element={<FeaturesCodex/>}/>
      <Route path='services' element={<ServicesCodex/>}/>
      <Route path='build-by-me' element={<AboutCodex/>}/>
      <Route path='resources' element={<ResourcesCodex/>}/>
    </Routes>
    </>
  )
}

export default App
