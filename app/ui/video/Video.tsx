import React from 'react'

export default function Video() {
  return (
    <div className="relative flex flex-col h-full w-full">
        <video 
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-370px] left-0 z-[1] w-full h-full object-cover"
        >
        <source 
            src="/blackhole.mp4" 
            type="video/mp4"
        />
    </video>
  </div>
  )
}
