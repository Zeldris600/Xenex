
import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Nav from '../components/Navbar'
import Routers from '../router/Routers'

const XenexLayout = () => {
  return (
    <div className='overflow-hidden'>

              {/* <Banner/> */}
            <Nav/>  
             <div>
                <Routers/>
            </div> 
             <Footer/>


    </div>
  )
}

export default XenexLayout