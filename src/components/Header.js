import React, {useState} from "react";
import "../App.css";
import { GiShoppingCart } from "react-icons/gi";
import { HiBeaker,HiOutlineMenuAlt3,HiX} from "react-icons/hi";

const Header = () => {
    const links = [
        {name: 'Home', link: '/'},
        {name: 'Shop', link: '/'},
        {name: 'Services', link: '/'},
        {name: 'About', link: '/'},
        {name: 'Blogs', link: '/'},
        {name: 'Contact', link: '/'},


    ]

    const [isOpen,setisOpen] = useState(false)
  return (
    <nav className="shadow-sm w-full fixed top-0 left-0">
      <div className="md:px-1 py-4 px-7 md:flex justify-between items-center bg-white">
        {/* Logo Here */}
        {/* <GiShoppingCart className='w-5 h-7' size={70}/> */}
       
         <div className="flex text-2xl cursor-pointer items-center gap-1">
          <HiBeaker className="w-12 h-7 text-blue-600 inline" size={80} />
          <span className="font-bold ">Xenex</span>
        </div>
               {/* Hamburger */}
        <div onClick={()=>{setisOpen(!isOpen)}}  className="w-7 h-7 absolute right-8 top-3 cursor-pointer md:hidden"
        >
            {
                isOpen ? <HiX/> : <HiOutlineMenuAlt3/>
            }
            
        </div>

        {/* Nav links */}
        <ul className={`hidden md:flex pl-9 md:pl-0 md:items-center md:pb-0 pb-12 md:z-auto z-[-1] left-0 w-full transition-all bg-white duration-500 ease-in ${isOpen ? 'block' : 'top-[-490]'}`}>
            {
                links.map(link => 
                <li className="font-semibold my-7 md:my-0 ml-8">
                    <a href="">{link.name}</a>
                    </li>)
            }
            <button className="btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded md:static">Sign Up</button>
        </ul>
        
      </div>
    </nav>
  );
};

export default Header;
