import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css'
import {Routes,Route} from "react-router-dom";
import Banner from './componets/Banner'
import Contact from './componets/Contact'
import Footer from './componets/Footer'
import Home from './componets/Home'
import Navbar from './componets/Navbar'
import Service from './componets/Service'
import Help from './componets/Help';





const App = () => {
  return (
    <>
   <div className='navbar'>
   <Navbar></Navbar>
   </div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/help' element={<Help/>}/>

      </Routes>
    <Footer></Footer>


    </>
  )
}

export default App