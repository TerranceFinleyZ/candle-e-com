import React from 'react'
import Link from 'next/link'
import { CiGift } from "react-icons/ci";

const ProductsitemsA = () => {
    return (
        <div className="w-full rounded-lg overflow-hidden">
            <div>
                <div className="w-full h-96 group overflow-hidden relative">
                    <Link href={"/ultim"}>
                    <img
                      src={"//cdn2.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/22_34359_30GK_67_004x.jpg?"}
                      alt="product image"
                      width={500}
                      height={500}
                      className="w-full h-full rounded-xl hover:scale-105 ease-in duration-300"
                      
                    />
                    </Link>
                    {
                    <span className="absolute top-2 left-2 font-medium text-xs py-1 px-3 rounded-full bg-white group-hover:bg-pink-500 group-hover:text-white duration-200">
                        New Arrivals
                    </span>
                }
            </div>
            <div className="border-[1px] border-slate-300 border-t-0 px-2 py-4 flex font-serif flex-col gap-y-2 bg-white rounded-b-lg">
                <p>Candle Beta S</p>
                <div className="flex items-center justify-between">
                    <div className="border-[1px] border-pink-500 py-1 px-4 rounded-full text-xs hover:scale-105 ease-in duration-200">
                        <button>Quickshop</button>
                    </div>
                    <div>
                        
                        <p className="Font-semibold">$40.00</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    
      )
    }

export default ProductsitemsA
