import { Link } from "react-router-dom";

export default function NavBar()
{
    return <>
     {/* <div id="intro" className="parallax-window" data-parallax="scroll" data-image-src="img/antique-cafe-bg-01.jpg"> */}
   
       
   
         <nav id="tm-nav" className="fixed w-full" >
            <div className="tm-container mx-auto px-2 md:py-6 text-right">
                <button className="md:hidden py-2 px-2" id="menu-toggle"><i className="fas fa-2x fa-bars tm-text-gold"></i></button>
                <ul className="mb-3 md:mb-0 text-2xl font-normal flex justify-end flex-col md:flex-row">
                    <Link to="/" className="inline-block mb-4 mx-4"><a href="#intro" className="tm-text-gold py-1 md:py-3 px-4">Intro</a></Link>
                    <Link to="/menu" className="inline-block mb-4 mx-4"><a href="#menu" className="tm-text-gold py-1 md:py-3 px-4">Menu</a></Link>
                    <Link to="/about" className="inline-block mb-4 mx-4"><a href="#about" className="tm-text-gold py-1 md:py-3 px-4">About</a></Link>
                    <Link to="/contact" className="inline-block mb-4 mx-4"><a href="#contact" className="tm-text-gold py-1 md:py-3 px-4">Contact</a></Link>
                </ul>
            </div>            
        </nav>
        {/* </div>  */}
    
    </>
}