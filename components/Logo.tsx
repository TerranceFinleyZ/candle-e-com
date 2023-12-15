import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={"/"}>
        <h3 className="text-5xl font-semibold font-serif hover:text-pink-500 cursor-pointer duration-200 hover:scale-105 ease-in duration-300">S&<span className="text-pink-500">L</span></h3>
    </Link>
  )
}

export default Logo
