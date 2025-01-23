import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Intro from "./Intro" ;
//  import Menu from "./Menu" ;


export default function App()
{
    return <>
    <Home/>


    <Routes>
        <Route path="/" element={<Intro/>} />
        {/* <Route path="/menu" element={<Menu/>} /> */}
    </Routes>


{/*     
    <footer className="absolute bottom-0 left-0 w-full">
        <div className="text-white container mx-auto tm-container p-8 text-lg flex flex-col md:flex-row justify-between">
            <span>Copyright 2022 Antique Cafe. All rights reserved.</span>
            <span className="mt-5 md:mt-0">Design: <a href="https://www.tooplate.com" target="_parent">Tooplate</a></span>
        </div>                
    </footer> */}

    </>
}