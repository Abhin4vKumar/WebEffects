'use client'

import { useEffect, useRef, useState } from 'react';
import './style.css';
export default function HomePage(){
    const appRef = useRef(null);
    const [defaultVar , setDefault] = useState(0);
    useEffect(()=>{
        try{
          if(defaultVar == 0){
            if(appRef){
              appRef.current.style.setProperty(
                '--mouse-x',
                0 + "%"
              )
              appRef.current.style.setProperty(
                '--mouse-y',
                0 + "%"
              )
            }
            setDefault(1);
          }
        }catch(error){
          console.error(error);
        }
        const moveGradient = (e)=>{
          const elWidth = e.target.offsetWidth;
          const elHeight = e.target.offsetHeight;
          const elx = e.offsetX;
          const ely = e.offsetY;
          let mX = Math.round((elx/elWidth)*100);
          let mY = Math.round((ely/elHeight)*100);
          try{
            if(appRef){
              appRef.current.style.setProperty(
                '--mouse-x',
                mX.toString() + "%"
              )
              appRef.current.style.setProperty(
                '--mouse-y',
                mY.toString() + "%"
              )
            }
          }catch(error){
            console.error(error);
          }
          
        };
        document.getElementById('hover').addEventListener("mousemove",moveGradient);
        document.getElementById('hover2').addEventListener("mousemove",moveGradient);
        return function cleanup(){
            document.getElementById('hover').removeEventListener("mousemove",moveGradient);
            document.getElementById('hover2').removeEventListener("mousemove",moveGradient);
        };
      },[appRef]);
    return(<>
        <div className="flex items-center justify-center self-center justify-self-center h-[100vh] w-[100vw]">
            <div  className='p-0 m-0 flex items-center justify-center relative h-fit w-fit'>
                <h1 id='hover' className="p-0 m-0 text-[15em] font-bold text-transparent ">TEXT</h1>
                <h1 id='hover2' ref={appRef} className="p-0 m-0 text-[15em] font-bold text-transparent ">TEXT</h1>
            </div>
        </div>
    </>)
}