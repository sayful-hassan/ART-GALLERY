import './App.css'
import Header from './Components/Header/Header'
import Context from './Components/Section/Context'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Context/>} />

      </Routes>
    </Router>
    </>
  )
}

export default App
