import React from 'react'

function StarIcon({rating}) {
    const roundedVal = Math.ceil(rating)
  return (
    <section>
        <div className='flex gap-2 items-center justify-center'>
            {Array.from({length:roundedVal}) .map((star, index)=> (
                <img key={index} src={index<Math.floor(rating) ? "/filled-star.svg" : ""} alt="star" className='w-4 h-4' />
            ))}
        </div>
    </section>
  )
}

export default StarIcon