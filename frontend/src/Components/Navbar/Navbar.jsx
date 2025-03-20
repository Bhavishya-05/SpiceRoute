import React, { useContext, useState } from 'react'
import './Navbar.css';
import {frontend_assets} from '../../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("menu");

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar py-5 justify-between items-center flex'>
      <Link to='/'>
      <img src={frontend_assets.chilli_logo} alt="" className='logo w-50' />
      </Link>
      <ul className='navbar-menu flex list-none gap-5 text-[#49557e] text-xl '>
        <Link to='/' onClick={() =>setMenu("Home")} className={menu === "Home" ? "active":""}>Home</Link>
        <a href='#explore-menu' onClick={() =>setMenu("Menu")} className={menu ==="Menu" ? "active": ""}>Menu</a>
        <a href='#app-download' onClick={() =>setMenu("Mobile-app")} className={menu ==="Mobile-app" ? "active": ""}>Mobile-app</a>
        <a href='#footer' onClick={() =>setMenu("Contact Us")} className={menu ==="Contact Us" ? "active": ""}>Contact Us</a>
      </ul>
      <div className='navbar-right flex items-center gap-10'>
        <img src={frontend_assets.search_icon} alt="" className=' h-8'/>
        
        <div className='navbar-search-icon flex gap-3 relative'> 
        <Link to='/cart'>
        <img src={frontend_assets.basket_icon} alt="" className=' h-8 pt-1' />
        </Link>
        <div className={getTotalCartAmount() === 0 ?"":"dot"}>
            
            </div>
            <button className=' signInBut bg-transparent text-sm text-[#49557e]
             border-[1px] border-solid border-[tomato] py-2 px-7
             rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition duration-300'
             onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
        </div>
        
    </div>
  )
}

export default Navbar
