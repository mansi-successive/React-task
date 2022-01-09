import React from 'react'
import {BrowserRouter,Route, Routes} from "react-router-dom";
import{About,Contact,Dashboard} from "./Pages";


const RoutesPage = () => {
    return (
        <>
        <BrowserRouter>
        <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route exact path="aboutus" element={<About/>}/>
                <Route exact path="contact" element={<Contact/>}/>
                <Route />
               </Routes>
        </BrowserRouter>
            
        </>
    )
}

export default RoutesPage;
