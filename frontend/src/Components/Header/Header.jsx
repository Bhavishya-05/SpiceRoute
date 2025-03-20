import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header h-34vw m-7 mx-auto bg-contain relative'>
     <div className="header-contents absolute flex flex-col items-start">
        <h2 className='font-medium text-white'>Order your favorite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
        <button>View Menu</button>
     </div>
    </div>
  )
}

export default Header
