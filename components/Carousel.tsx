'use client'
import React, {useEffect, useRef, useState} from 'react'

type Props = {images: string[]; alt?: string}

export default function Carousel({images, alt='carousel'}: Props){
  const [idx, setIdx] = useState(0)
  const timer = useRef<number | null>(null)
  const hover = useRef(false)

  useEffect(()=>{
    function tick(){
      if(!hover.current){
        setIdx(i=> (i+1) % images.length)
      }
    }
    timer.current = window.setInterval(tick, 3500)
    return ()=>{ if(timer.current) window.clearInterval(timer.current) }
  },[images.length])

  return (
    <div className="relative rounded-xl overflow-hidden bg-navy-800">
      <div className="h-56 md:h-72 flex items-center justify-center">
        <img src={images[idx]} alt={`${alt}-${idx}`} className="w-full h-full object-cover" />
      </div>
      <div className="absolute left-0 right-0 bottom-3 flex justify-center gap-2">
        {images.map((_, i)=> (
          <button key={i} onMouseEnter={()=>{hover.current=true; setIdx(i)}} onMouseLeave={()=>{hover.current=false}} className={`h-2 w-8 rounded-full ${i===idx? 'bg-amber-300':'bg-offwhite/20'}`} aria-label={`Go to slide ${i+1}`} />
        ))}
      </div>
    </div>
  )
}
