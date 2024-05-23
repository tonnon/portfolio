import React from 'react'

export default function Video() {
  return (
    <div className="relative flex flex-col h-full w-full">
{/*         <video 
            autoPlay
            muted
            loop
            className="rotate-180 absolute top-[-370px] left-0 z-[1] w-full h-full object-cover"
        >
        <source 
            src="/blackhole.webm" 
            type="video/webm"
        />
    </video> */}
        <iframe
        src={`https://www.youtube.com/embed/_Wn5MBfjPI0?si=h-2xzfMLazuqfMWS`}
        className="rotate-180 absolute top-[-370px] left-0 z-[1] w-full h-full object-cover"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
  </div>
  )
}
