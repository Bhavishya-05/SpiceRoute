import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu flex flex-col gap-5' id='explore-menu'>
      <h1 className='text-[#262626] font-medium'>Explore our Menu</h1>
      <p className='explore-menu-text max-w-[60%] text-gray-500'>Choose from a
       diverse menu featuring a delectable array of dishes.
       Our mission is to satisfy your cravings and elevate
       your dining experience, one delicious meal at a time.</p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev =>prev===item.menu_name? "All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr className='my-3 mx-0 h-0.5 bg-[#e2e2e2] border-0 ' />
    </div>
  )
}

export default ExploreMenu
