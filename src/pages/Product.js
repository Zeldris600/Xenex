import React, {useState} from 'react';
import headphone from '../assets/img/Headphone-1.png';
import shoe from '../assets/img/shoe-03.jpeg';
import chair from '../assets/img/hero-chair2.png';
import {HiOutlineShoppingCart,HiOutlineHeart} from 'react-icons/hi';



const Product = () => {
  const [image, setImage] = useState({
    img1: `${headphone}`,
    img2: `${shoe}`,
    img3: `${chair}`,
    img4: `${headphone}`,

  })
  const [activeImg,setActiveImg] = useState(image.img1)
  return (
    <div className='max-w-7xl mx-auto p-8'>
      <div className='flex flex-col justify-between lg:flex-row gap-26 lg:items-center'>
      <div className='flex flex-col gap-6 lg:w-2/4 group'>
        <div className='h-0'>
        <HiOutlineHeart className='hidden group-hover:block ' size={40}/>
        </div>
       
        <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
        <div className='flex flex-row justify-between h-14'>
          <img src={image.img1} alt="" className='w-20 h-24 rounded-md cursor-pointer' onClick={() => setActiveImg(image.img1)}/>
          <img src={image.img2} alt="" className='w-20 h-24 rounded-md cursor-pointer' onClick={() => setActiveImg(image.img2)}/>
          <img src={image.img3} alt="" className='w-20 h-24 rounded-md cursor-pointer' onClick={() => setActiveImg(image.img3)}/>
          <img src={image.img4} alt="" className='w-20 h-24 rounded-md cursor-pointer' onClick={() => setActiveImg(image.img4)}/>
        </div>
        </div>
        {/* About */}
        <div className='flex flex-col gap-4 lg:w-2/4 mt-16 lg:ml-6'>
          <div>
            <span className='text-blue-300 font-bold' >
               Special Headphones
            </span>
            <h1 className='text-3xl font-bold'>Beats Invicible</h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus porro corrupti, perferendis sint pariatur asperiores ratione debitis? Officia distinctio beatae atque maiores quisquam enim temporibus voluptate, iste molestias labore eum.</p>
          <h6 className='text-2xl font-semibold'>10,000F</h6>
          <div className='flex flex-row items-center gap-12'>
          <div className='flex flex-row items-center'>
            <button className='bg-gray-200 py-4 px-6 rounded-lg text-blue-800 text-3xl'>-</button>
            <span className='py-4 px-6 rounded-lg'>1</span>
            <button className='bg-gray-200 py-4 px-6 rounded-lg text-blue-800 text-3xl'>+</button>
           
          </div>
          <div className='flex flex-row items-center gap-3 cursor-pointer'>
          <button className='bg-blue-900 text-white font-semibold py-3 px-10 rounded-xl h-20'>Add To Cart</button>
          <div className='flex items-center bg-white text-black border hover:border-gray-800 font-semibold py-3 px-10 rounded-xl h-[5.7rem] w-fit lg:h-20  hover:text-blue-950'>
            <HiOutlineHeart  size={30}/>
          </div>
          </div>
         
          </div>
         
        </div>
       
    </div>
    </div>
    
  )
}

export default Product