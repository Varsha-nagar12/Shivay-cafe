import NavBar from "./NavBar";

export default function Home()
{
    return <>
     <NavBar/>

    <footer class="absolute bottom-0 left-0 w-full">
        <div class="text-white container mx-auto tm-container p-8 text-lg flex flex-col md:flex-row justify-between">
            <span>Copyright 2025 Shivay Cafe. All rights reserved.</span>
            <span class="mt-5 md:mt-0">Design: <a href="https://www.tooplate.com" target="_parent">Varsha Nagar</a></span>
        </div>                
    </footer>
    </>
}