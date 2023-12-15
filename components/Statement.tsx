import React from 'react'

const Statement = () => {
  return (
    <div className='bg-pink-100 w-full md:h-full p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-3xl tracking-widest text-pink-500 hover:scale-105 ease-in duration-300'>Our mission</p>
          <p className='py-2 text-gray-600'> We're more than a business; we're a movement for good. The core of what we do is deeply rooted in our commitment to mindful making. We support the hobbyist & the professional maker with elevated, eco-friendly supplies so you can create unique products & build a business you love. From the ingredients we thoughtfully source to the conscientious packaging we select, every aspect of our business is a reflection of our love for our planet & our belief in a brighter, kinder future. Join us in making that future a reality. Our approach to giving back goes beyond transactions; it's a personal endeavor to empower you, build a supportive community & cultivate a sense of well-being that resonates within us all. When you shop with us, you’re making a difference & leaving a positive impact on the world!</p>
          <p className='py-2 font-serif text-black'>-<span className="hover:text-white cursor-pointer duration-200"> Jennifer Reynoso</span></p>
        </div>
        <div className='w-full h-auto m-auto shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
        <img className='rounded-xl' src={"https://cdn11.bigcommerce.com/s-e0ctooh4/images/stencil/original/image-manager/scented-candles-500.jpg?t=1661962945"} />          
        </div>
      </div>
    </div>
  )
}

export default Statement
