import React from 'react'
import Link from 'next/link'

const ProductsData = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
        <div>
            <div className="w-full h-96 group overflow-hidden relative">
                <Link href={"/ultim"}>
                <img
                  src={"https://m.media-amazon.com/images/I/51AAAyErvIL.jpg"}
                  alt="product image"
                  width={500}
                  height={500}
                  className="w-full h-full rounded-xl hover:scale-105 ease-in duration-300"
                  
                />
                </Link>
                {
                    <span className="absolute top-3 left-5 font-medium text-xs py-2 px-5 rounded-full bg-white group-hover:bg-pink-500 group-hover:text-white duration-200">
                        New Arrivals
                    </span>
                }
            </div>
        </div>
    </div>

  )
}

export default ProductsData
