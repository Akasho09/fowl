

export default function NavBar (){

    return <div className="ml-2 mt-4 w-[20vw]">
    <div className="flex items-center ">
    <div className="h-5 w-5 border border-black rounded-full flex items-center justify-center m-2 font-lora">1</div>
    <span className="font-mono font-semibold p-0 m-0 text-red-500">Home</span>
    </div>
    <div className="flex items-center ">
    <div className="h-5 w-5 border border-black rounded-full flex items-center justify-center m-2 font-lora">2</div>
    <span className="font-mono font-semibold p-0 m-0 hover:text-red-600"><a href="/">About</a></span>
    </div>
    <div className="flex items-center ">
    <div className="h-5 w-5 border border-black rounded-full flex items-center justify-center m-2 font-lora">3</div>
    <span className="font-mono font-semibold p-0 m-0 hover:text-red-600">Projects</span>
    </div>
    <div className="flex items-center ">
    <div className="h-5 w-5 border border-black rounded-full flex items-center justify-center m-2 font-lora">4</div>
    <span className="font-mono font-semibold p-0 m-0 hover:text-red-600">Blogs</span>
    </div>
    <div className="flex items-center ">
    <div className="h-5 w-5 border border-black rounded-full flex items-center justify-center m-2 font-lora">5</div>
    <span className="font-mono font-semibold p-0 m-0 hover:text-red-600">Hobbies</span>
    </div>




    
    </div>
}