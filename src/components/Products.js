import React from 'react'

const Products = () => {
  return (
    <div className='py-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className="text-2x1 bg-black text-white py-2 w-80 text-center">Great prices everyday</h1>
        <span className='w-20 h-[3px] bg-black'></span>
        <p className='max-w-[700px text-gray-600 text-center'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  )
}

export default Products