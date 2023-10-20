import React from 'react'

const Cards = (props) => {
    const { imageUrl, title, description } = props;
    
    return(
<>
<div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
      <div class="h-96 w-72">
      <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
          src={imageUrl}
          alt={title}
        />
    </div>
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 class="font-dmserif text-3xl mb-2 font-bold text-transparent bg-gradient-to-br from-white to-gray-200 bg-clip-text">{title}</h1>
        <p class="mb-3 text-md italic leading-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{description}.</p>
        <button class="rounded-full bg-cyan-600 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60 hover:bg-cyan-500 transition transform">Saber más</button>
      </div>
    </div>
  </>
    )
}
export default Cards
