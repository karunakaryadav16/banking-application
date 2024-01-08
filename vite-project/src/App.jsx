import React from 'react'
import Home from './components/Home'
import Projecreate from "./components/Projectcreate.jsx"
import DashBoard from "./components/DashBoard.jsx"
import Cellcreate from "./components/Cellcreate.jsx"
import ProductCreation from "./components/ProductCreation.jsx"
import {BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className='appcontainer'>

      {/* <Home/> */}
      
        <BrowserRouter>
        
         <Routes>
          

            <Route path= "/"  element={<DashBoard/>} />
            <Route path="/Home" element={<Home/>}/>
            <Route path="/projectcreate" element={<Projecreate/>}/>
            <Route path="/sellcreate" element={<Cellcreate/>}/>
            <Route path="/productcreate" element={<ProductCreation/>}/>

         </Routes>
        

        
        </BrowserRouter>
       
       
     






    </div>
  )
}

export default App