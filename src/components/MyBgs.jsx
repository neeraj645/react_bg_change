import { useState } from "react";

function MyBgs() {

    const [color , setColor] = useState("red")
    return (
        <>

            <div style={{backgroundColor:color}} className=" h-screen w-full">

                <div className="pannel flex justify-evenly pt-5 py-5 rounded-3xl bg-white ">
                    <button style={{backgroundColor:"red"}}  onClick={()=>setColor("red")} className=" text-white px-6 py-1 rounded   ">Red</button>
                    <button style={{backgroundColor:"green"}}  onClick={()=>setColor("green")} className=" text-white px-4 rounded   ">Green</button>
                    <button style={{backgroundColor:"yellow"}}  onClick={()=>setColor("yellow")} className=" px-4 rounded   ">Yellow</button>
                    <button style={{backgroundColor:"blue"}}  onClick={()=>setColor("blue")} className=" text-white px-4 rounded   ">Blue</button>
                    <button style={{backgroundColor:"olive"}}  onClick={()=>setColor("olive")} className=" text-white px-4 rounded   ">Olive</button>
                    <button style={{backgroundColor:"black"}}  onClick={()=>setColor("black")} className=" text-white px-4 rounded   ">Black</button>
                  

                </div>

            </div>



        </>
    )
}

export default MyBgs;