import React, {useEffect,useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/authSlice';

const Login = () => {
   
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth)

  
useEffect(() => {
  if(auth._id){
    navigate('/cart')
  }
}, [auth._id,navigate])

  const [user,setUser] = useState({
     
     email: '',
     password: '',

  })
  
  console.log("user", user );

  const handleSubmit = (e) => {
    e.preventDefault()

     dispatch(loginUser(user))

  }


  return (
    <div class="signup-1 flex items-center relative h-screen">
    <div class="overlay absolute inset-0 z-0 bg-zinc-50 opacity-75"></div>
    <div class="container px-4 mx-auto relative z-10">
      <div class="sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 mx-auto">
        <div class="rounded-md bg-white p-6 md:px-12 md:pt-12 border-t-10 border-solid border-indigo-600">
          <h2 class="text-3xl text-gray-800 text-center">Login</h2>
            <form action="" onSubmit={handleSubmit}>
            <div class="signup-form mt-6 md:mt-12">
  
  <div class="border-2 border-solid rounded flex items-center mb-4">
    <div class="w-10 h-10 flex justify-center items-center flex-shrink-0">
      <span class="far fa-user text-gray-500"></span>
    </div>
    {/* <div class="flex-1">
   
      <div className='flex flex-row gap-2'>
       <BsPerson className='' size={30} />
      <input type="text" placeholder="Username" class="h-10 py-1 pr-3 w-full inline"/>
      </div>
     
     
    </div> */}
  </div>

  <div class="border-2 border-solid rounded flex items-center mb-4">
    <div class="w-10 h-10 flex justify-center items-center flex-shrink-0">
      <span class="far fa-envelope text-gray-500"></span>
    </div>
    <div class="flex-1">
      <div className='flex flex-row gap-2'>
        <HiOutlineMail size={30}/>
        <input type="text" placeholder="E-mail" class="h-10 py-1 pr-3 w-full" onChange={(e) => {setUser({...user,
                email:e.target.value})}}/>
      </div>
    
    </div>
  </div> 

  <div class="border-2 border-solid rounded flex items-center mb-4">
    <div class="w-10 h-10 flex justify-center items-center flex-shrink-0">
      <span class="fas fa-asterisk text-gray-500"></span>
    </div>
    <div class="flex-1">
      <div className='flex flex-row gap-2'>
        <RiLockPasswordLine size={30}/>
        <input type="password" placeholder="Password" class="h-10 py-1 pr-3 w-full" onChange={(e) => {setUser({...user,
                password:e.target.value})}}/>
      </div>
     
    </div>
  </div>

  {/* <p class="text-sm text-center mt-6">By signing up, you agree to our <a href="#" class="text-indigo-600 hover:underline">Terms</a> and <a href="#" class="text-indigo-600 hover:underline">Privacy Policy</a></p> */}

  <div class="text-center mt-6 md:mt-12">
    <button class="bg-indigo-600 hover:bg-indigo-700 text-white text-xl py-2 px-4 md:px-6 rounded transition-colors duration-300">{auth.loginStatus === 'pending' ? 'Submitting' : 'Login'} <span class="far fa-paper-plane ml-2"></span></button>
  </div>
  {auth.loginStatus === 'rejected' ? (<p>{auth.loginError}</p>) : null}

</div>
            </form>
          
  
          <div class="border-t border-solid mt-6 md:mt-12 pt-4">
             <a href="#" class="text-indigo-600 hover:underline">Forgot Password?</a>
          </div>
  
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login;