'use client'

import { useEffect, useRef, useState } from 'react';
import './style.css';
export default function HomePage(){
    useEffect(()=>{
        const moveGradient = (e)=>{
          const elWidth = e.target.offsetWidth;
          const elHeight = e.target.offsetHeight;
          const elx = e.offsetX;
          const ely = e.offsetY;
          let mX = Math.round((elx/elWidth)*100);
          let mY = Math.round((ely/elHeight)*100);
          try{
              document.getElementById('clip').animate({clipPath:'circle(15% at ' + mX.toString() + '%' + ' ' + mY.toString() + '%'},2000);
          }catch(error){
            console.error(error);
          }
          
        };
        document.getElementById('hover').addEventListener("mousemove",moveGradient);
        return function cleanup(){
            document.getElementById('hover').removeEventListener("mousemove",moveGradient);
        };
      });
    return(<>
        <div  id='hover'  className="flex items-center justify-center self-center justify-self-center h-[100vh] w-[100vw]">
            <div  className='p-0 m-0 flex items-center justify-center relative h-fit w-fit'>
                <h1 className="p-0 m-0 text-[15em] font-bold text-transparent ">TEXT</h1>
                <h1 id="clip" className="p-0 m-0 text-[15em] font-bold text-transparent ">TEXT</h1>
            </div>
        </div>
    </>)
}