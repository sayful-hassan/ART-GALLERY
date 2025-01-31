import './App.css'
import Header from './Components/Header/Header'
import Context from './Components/Section/Context'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AnalogArt from './Pages/Analog art/AnalogArt'
import DigitalArt from './Pages/Digital art/DigitalArt'

function App() {

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Context/>} />
        <Route path='/analogart' element={<AnalogArt/>} />
        <Route path='/digitalart' element={<DigitalArt/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
