import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
import "./Scrooltop.css"
const Scrooltop = () => {
    const [iaVisible, setIsVisible]=useState(false);
    useEffect(()=>{
        const togglevisibility=()=>{
            if(window.scrollY>300){
                    setIsVisible(true);
            }else{
                setIsVisible(false);
            }
        }
        window.addEventListener('scroll',togglevisibility);
        return()=>{
            window.removeEventListener('scroll',togglevisibility);
        }
    },[]);
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

  return (
    <div>
      {iaVisible && (
        <button 
          className='scroll-to-top show' 
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default Scrooltop;