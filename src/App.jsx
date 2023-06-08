import React from 'react'
import { Route,Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import About from './component/ReactMenu/About';
import Contact from './component/ReactMenu/Contact';
import Home from './component/ReactMenu/Home';
import Services from './component/ReactMenu/Services';
import Error from './component/ReactMenu/Error';

const App = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='service' element={<Services/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
    </>
)
}

export default App;