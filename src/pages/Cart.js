import React, {useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link,useNavigate} from 'react-router-dom';
import {HiOutlineTrash} from 'react-icons/hi'
import { addToCart, clearXenexCart, decreaseCartQuantity, getTotals, removeFromCart } from "../features/cartSlice";
import PayButton from "../components/PayButton";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

     useEffect(() => {
           dispatch(getTotals());
     }, [cart,dispatch])


  const handleRemoveFromCart = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }
  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCartQuantity(cartItem))
  }
  const handeleIncreaseQuantity = (cartItem) => {
    dispatch(addToCart(cartItem))
  }
  const handeleClearCart = () => {
    dispatch(clearXenexCart())
  }
  return (
    <>
     {cart.cartItems.length === 0 ? (
    //   <div class="container mx-auto mt-10">
    //   <div class="flex shadow-md my-10">
    //     <div class="w-3/4 bg-white px-10 py-10">
    //       <div class="flex justify-between border-b pb-8">
          
    //         <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          
    //         <h2 class="font-semibold text-2xl">3 Items</h2>
    //       </div>
    //       <div class="flex mt-10 mb-5">
    //         <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
    //           Product Details
    //         </h3>
    //         <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
    //           Quantity
    //         </h3>
    //         <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
    //           Price
    //         </h3>
    //         <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
    //           Total
    //         </h3>
    //       </div>
    //       <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    //         <div class="flex w-2/5">
    //           {" "}
    //           {/* <!-- product --> */}
    //           <div class="w-20">
    //             <img
    //               class="h-24"
    //               src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
    //               alt=""
    //             />
    //           </div>
    //           <div class="flex flex-col justify-between ml-4 flex-grow">
    //             <span class="font-bold text-sm">Iphone 6S</span>
    //             <span class="text-red-500 text-xs">Apple</span>
    //             <a
    //               href="#"
    //               class="font-semibold hover:text-red-500 text-gray-500 text-xs"
    //             >
    //               Remove
    //             </a>
    //           </div>
    //         </div>
    //         <div class="flex justify-center w-1/5">
    //           <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
    //             <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    //           </svg>

    //           <input
    //             class="mx-2 border text-center w-8"
    //             type="text"
    //             value="1"
    //           />

    //           <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
    //             <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    //           </svg>
    //         </div>
    //         <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
    //         <span class="text-center w-1/5 font-semibold text-sm">$400.00</span>
    //       </div>

    //       <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    //         <div class="flex w-2/5">
    //           {" "}
    //           {/* <!-- product --> */}
    //           <div class="w-20">
    //             <img
    //               class="h-24"
    //               src="https://drive.google.com/uc?id=10ht6a9IR3K2i1j0rHofp9-Oubl1Chraw"
    //               alt=""
    //             />
    //           </div>
    //           <div class="flex flex-col justify-between ml-4 flex-grow">
    //             <span class="font-bold text-sm">Xiaomi Mi 20000mAh</span>
    //             <span class="text-red-500 text-xs">Xiaomi</span>
    //             <a
    //               href="#"
    //               class="font-semibold hover:text-red-500 text-gray-500 text-xs"
    //             >
    //               Remove
    //             </a>
    //           </div>
    //         </div>
    //         <div class="flex justify-center w-1/5">
    //           <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
    //             <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    //           </svg>

    //           <input
    //             class="mx-2 border text-center w-8"
    //             type="text"
    //             value="1"
    //           />

    //           <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
    //             <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    //           </svg>
    //         </div>
    //         <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
    //         <span class="text-center w-1/5 font-semibold text-sm">$40.00</span>
    //       </div>

    //       <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
    //         <div class="flex w-2/5">
    //           {" "}
    //           {/* <!-- product --> */}
    //           <div class="w-20">
    //             <img
    //               class="h-24"
    //               src="https://drive.google.com/uc?id=1vXhvO9HoljNolvAXLwtw_qX3WNZ0m75v"
    //               alt=""
    //             />
    //           </div>
    //           <div class="flex flex-col justify-between ml-4 flex-grow">
    //             <span class="font-bold text-sm">Airpods</span>
    //             <span class="text-red-500 text-xs">Apple</span>
    //             <a
    //               href="#"
    //               class="font-semibold hover:text-red-500 text-gray-500 text-xs"
    //             >
    //               Remove
    //             </a>
    //           </div>
    //         </div>
    //         <div class="flex justify-center w-1/5">
    //           <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
    //             <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    //           </svg>
    //           <input
    //             class="mx-2 border text-center w-8"
    //             type="text"
    //             value="1"
    //           />

    //           <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
    //             <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    //           </svg>
    //         </div>
    //         <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
    //         <span class="text-center w-1/5 font-semibold text-sm">$150.00</span>
    //       </div>

    //       <a href="#" class="flex font-semibold text-indigo-600 text-sm mt-10">
    //         <svg
    //           class="fill-current mr-2 text-indigo-600 w-4"
    //           viewBox="0 0 448 512"
    //         >
    //           <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
    //         </svg>
    //         Continue Shopping
    //       </a>
    //     </div>

    //     <div id="summary" class="w-1/4 px-8 py-10">
    //       <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
    //       <div class="flex justify-between mt-10 mb-5">
    //         <span class="font-semibold text-sm uppercase">Items 3</span>
    //         <span class="font-semibold text-sm">590$</span>
    //       </div>
    //       <div>
    //         <label class="font-medium inline-block mb-3 text-sm uppercase">
    //           Shipping
    //         </label>
    //         <select class="block p-2 text-gray-600 w-full text-sm">
    //           <option>Standard shipping - $10.00</option>
    //         </select>
    //       </div>
    //       <div class="py-10">
    //         <label
    //           for="promo"
    //           class="font-semibold inline-block mb-3 text-sm uppercase"
    //         >
    //           Promo Code
    //         </label>
    //         <input
    //           type="text"
    //           id="promo"
    //           placeholder="Enter your code"
    //           class="p-2 text-sm w-full"
    //         />
    //       </div>
    //       <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
    //         Apply
    //       </button>
    //       <div class="border-t mt-8">
    //         <div class="flex font-semibold justify-between py-6 text-sm uppercase">
    //           <span>Total cost</span>
    //           <span>$600</span>
    //         </div>
    //         <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
    //           Checkout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
       
    <div class="flex  mt-100">
    <div class="flex-col justify-center w-full">
    
     <div class="col-md-12">
     
         <div class="card mb-32 border-0 rounded-lg">
       <div class="card-header rounded-md">
       <h5 className="text-center text-2xl font-bold">Cart</h5>
       </div>
       <div class="card-body cart p-32 bg-transparent">
           <div class="flex flex-col justify-center text-center">
             <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" class="img-fluid mb-4 mr-3 object-center"/>
             <h3><strong>Your Cart is Empty</strong></h3>
             <h4>Add something to make me happy :)'</h4>
              <Link to='/shop'>
              continue shopping
              </Link>
             <a href="#" class="bt m-3" data-abc="true"></a>
             
           
           </div>
       </div>
   </div>
       
     
     </div>
    
    </div>
   
   </div>

     ) : (
      
      <div class="container mx-auto mt-10">
        
      <div class="flex shadow-md my-10">
        <div class="w-3/4 bg-white px-10 py-10">
          <div class="flex justify-between border-b pb-8">
          
            <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          
            <h2 class="font-semibold text-2xl">{cart.cartTotalQty} Items</h2>
          </div>
          <div class="flex mt-10 mb-5">
            <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Product Details
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Quantity
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Price
            </h3>
            <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Total
            </h3>
          </div>

           {cart.cartItems?.map(cartItem => ( <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"key={cartItem}>
            <div class="flex w-2/5">
              {" "}
              {/* <!-- product --> */}
             

              <div></div>
              <div class="w-20">
                <img
                  class="h-24"
                  src={cartItem.image.url}
                  alt={cartItem.name}
                />
              </div>

              <div class="flex flex-col justify-between ml-4 flex-grow">
                <span class="font-bold text-sm">{cartItem.name}</span>
                <span class="text-blue-500 text-xs">{cartItem.description}</span>
              
                <HiOutlineTrash className="hover:text-blue-600" size={30} onClick={() => handleRemoveFromCart(cartItem)} />
              </div>
            </div>
            <div class="flex justify-center w-1/5">
              {/* Minus btn */}
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => handleDecreaseCart(cartItem)}>
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>

              <input
                class="mx-2 border text-center w-8"
                type="text"
                value={cartItem.cartQuantity}
              />
{/* Plus btn */}
              <svg class="fill-current text-gray-600 w-3" viewBox="0 0 448 512" onClick={() => handeleIncreaseQuantity(cartItem)}>
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
            </div>
            <span class="text-center w-1/5 font-semibold text-sm">{cartItem.price} F</span>
            <span class="text-center w-1/5 font-semibold text-sm">{cartItem.price * cartItem.cartQuantity} F</span>
          </div>))}

         











         

        
        <Link to='/shop' class="flex font-semibold text-indigo-600 text-sm mt-10 inline">
            <svg
              class="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        <button class="bg-blue-500 hover:bg-blue-800 px-5 py-2 text-sm text-white uppercase mt-4 rounded-md" onClick={() => handeleClearCart()}>Clear Cart</button>
        

       
        </div>

        <div id="summary" class="w-1/4 px-8 py-10">
          <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div class="flex justify-between mt-10 mb-5">
            <span class="font-semibold text-sm uppercase">Item(s) {cart.cartTotalQty} </span>
            <span class="font-semibold text-sm">{cart.cartTotalAmount} CFA</span>
          </div>
          <div>
            <label class="font-medium inline-block mb-3 text-sm uppercase">
              Transport
            </label>
            <select class="block p-2 text-gray-600 w-full text-sm">
              <option>Standard shipping - 1000 F</option>
            </select>
          </div>
          <div class="py-10">
            <label
              for="promo"
              class="font-semibold inline-block mb-3 text-sm uppercase"
            >
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              class="p-2 text-sm w-full"
            />
          </div>
          <button class="bg-blue-500 hover:bg-blue-800 px-5 py-2 text-sm text-white uppercase rounded-md">
            Apply
          </button>
          <div class="border-t mt-8">
            <div class="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>{cart.cartTotalAmount} CFA</span>
            </div>
            {auth._id ? <PayButton cartItems = {cart.cartItems}/> :  <button class="bg-blue-200 font-semibold hover:bg-blue-800 py-3 text-sm text-white uppercase w-full rounded-md" onClick={() => navigate('/login')}>
              Log in to continue
            </button>}
           
          </div>
        </div>
      </div>
    </div>
     ) }
    
    
    </>
   
  
  );
};

export default Cart;
