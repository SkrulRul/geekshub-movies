import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import Popular from './Containers/Popular/Popular'
import Search from './Containers/Search/Search'
import Welcome from './Containers/Welcome/Welcome'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/popular" element={<Popular/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  )
}

export default App
