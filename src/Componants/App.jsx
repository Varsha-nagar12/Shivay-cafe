import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact" ;

export default function App()
{
    return <>
    <NavBar/>


    <Routes>
       <Route  path="/" element={<Home/>} />
       <Route  path="/menu" element={<Menu/>} />
       <Route  path="/about" element={<About/>} />
       <Route  path="/contact" element={<Contact/>} />


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