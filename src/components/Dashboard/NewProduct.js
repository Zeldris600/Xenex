import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import illustration from "../../assets/img/undraw_upload_image_re_svxx.svg";
import { createProducts } from "../../features/productSlice";

const NewProduct = () => {
    const dispatch = useDispatch();
  const [productImage, setproductImage] = useState("");
  const [productName, setproductName] = useState("");
  const [productBrand, setproductBrand] = useState("");
  const [productDescription, setproductDescription] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productQuantity, setproductQuantity] = useState("");
  const [productCategory, setproductCategory] = useState("");

  const selectedValue = (e) => {
    const value = e.target.value;
    setproductCategory(value);
    console.log(value);
  };

  console.log(productImage);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setproductImage(reader.result);
      };
    } else {
      setproductImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createProducts({
        name:productName,
        brand:productBrand,
        description:productDescription,
        price:productPrice,
        image:productImage,
        quantity:productQuantity,
        category:productCategory
    }))
  };

  return (
    <div className="container grid grid-cols-2">
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new product
          </h2>
          <form onSubmit={handleSubmit}>
            <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div class="sm:col-span-2">
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type product name"
                  required
                  onChange={(e) => {
                    setproductName(e.target.value);
                  }}
                />
              </div>
              <div class="w-full">
                <label
                  for="brand"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product brand"
                  required
                  onChange={(e) => setproductBrand(e.target.value)}
                />
              </div>
              <div class="w-full">
                <label
                  for="price"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="2000F"
                  required
                  onChange={(e) => setproductPrice(e.target.value)}
                />
              </div>
              {/* <div class="w-full">
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Product category"
                  required
                  onChange={(e) => setproductCategory(e.target.value)}
                />
              </div> */}
              <div class="w-full">
                <label
                  for="quantity"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="1"
                  required
                  onChange={(e) => setproductQuantity(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="category"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Category
                </label>
                <select
                  id="category"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onChange={selectedValue}
                  required
                >
                  <option  defaultValue disabled>
                    Select category
                  </option>
                  <option value="TV">TV/Monitors</option>
                  <option value="PC">PC</option>
                  <option value="Laptops">Laptops</option>
                  <option value="Accessories">Accessories</option>

                  <option value="Gaming/Console">Gaming/Console</option>
                  <option value="Phones">Phones</option>
                </select>
              </div>
              <div>
                <label
                  for="image"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image Upload
                </label>
                <input
                  type="file"
                  name="imageUpload"
                  id="image-upload"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  accept="image/*"
                  placeholder="Upload Image"
                  required
                  onChange={handleImageUpload}
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="description"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                  onChange={(e) => setproductDescription(e.target.value)}
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              Add product
            </button>
          </form>
        </div>
      </section>
      <section>
        <div>
          <h1 className="text-center mb-2">Image Preview</h1>
          {productImage ? (
            <img src={productImage} alt="Upload Image Illustration" />
          ) : (
            <img src={illustration} alt="Upload Image Illustration" />
          )}
        </div>
      </section>
    </div>
  );
};

export default NewProduct;
