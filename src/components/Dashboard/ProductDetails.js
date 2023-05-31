import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux'
import axios from "axios";
import { setHeaders, url } from "../../features/api";
import { addToCart } from "../../features/cartSlice";

const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
 

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const res = await axios.get(
          `${url}/products/find/${params.id}`,
          setHeaders()
        );
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);

    fetchData();
  }, []);
 
  const handleAddToCart = (product) => {
       dispatch(addToCart(product));
       navigate('/cart');
  }
  console.log('******product*******')
  console.log('product', product);

  return <div className="m-3 mt-8 flex justify-center h-80">
    <div className="container max-w-lg w-[100%] h-auto flex shadow-lg rounded-lg p-2">
       {loading ? <p>Loading....</p> : <>
       
       <div className="flex-1">
        <img src={product.image?.url} alt="product" /* className="w-[100%]" *//>
       </div>
       <div className="flex-2 ml-2 ">
        <h3 className="text-xl">{product.name}</h3>
        <p className="font-bold">

        <span className="font-bold">Brand: </span>{product.brand}

        <span className="font-bold">Description: </span>{product.description}

        </p>
       </div>
       <div className="ml-1 font-bold text-lg">{product.price?.toLocaleString()}XAF</div>
       <button className="" onClick={() => handleAddToCart(product)}>Add To Cart</button>
       </>}
    </div>
  </div>;
};

export default ProductDetails;
