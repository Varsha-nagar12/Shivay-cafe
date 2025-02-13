export default function Home()

{
    // useEffect(()=>window.scrollView(),[])
    return <>

<div id="intro" className="parallax-window" data-parallax="scroll" data-image-src="img/modern-cafe-house.webp"> 

{/* <div className="container px-2 tm-intro-width text-right"> */}
<div className="container mx-auto px-5 tm-intro-width">

<div className="sm:pb-60 sm:pt-48 py-20">
   <div className="bg-black bg-opacity-70 p-12 mb-5 text-center">
       <h1 className="text-white text-5xl tm-logo-font mb-5">Shivay Cafe</h1>
       <p className="tm-text-gold tm-text-2xl">your daily energy booster</p>
       
   </div>    
   <div className="bg-black bg-opacity-70 p-10 mb-5">
       <p className="text-white leading-8 text-sm font-light">
       Where every cup tells a story, and every sip feels like home.
       Let’s make your day a little brighter—one sip closer to joy."
            </p>
   </div>
   <div className="text-center">
       <div className="inline-block">
           <a href="#menu" className="flex justify-center items-center bg-black bg-opacity-70 py-6 px-8 rounded-lg font-semibold tm-text-2xl tm-text-gold hover:text-gray-200 transition">
               <i className="fas fa-coffee mr-3"></i>
               <span>Let's explore...</span>                        
           </a>
       </div>                    
   </div>                
</div>
</div> 
</div>


{/* <footer class="fixed bottom-0 left-0 w-full bg-black">
    <div class="text-white container mx-auto tm-container p-8 text-lg flex flex-col md:flex-row justify-between">
        <span>Copyright 2025 Shivay Cafe. All rights reserved.</span>
        <span class="mt-5 md:mt-0">Design: <a href="https://www.tooplate.com" target="_parent">Varsha Nagar</a></span>
    </div>                
</footer> */}
    </>
}