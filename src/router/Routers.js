import Home from "../pages/Home";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Product from "../pages/Product";
import Shop from "../pages/Shop";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";
import NewProduct from "../components/Dashboard/NewProduct";
import Orders from "../components/Dashboard/Orders";
import Customers from "../components/Dashboard/Customers";
import AdminProfile from "../components/Dashboard/AdminProfile";
import Products from "../components/Dashboard/Products";
import NotFound from "../components/NotFound";
import OrdersList from "../components/Dashboard/OrdersList";
import SingleOrder from "../components/Dashboard/SingleOrderInfo";
import Register from "../pages/Register";
import CheckoutSuccess from "../components/CheckoutSuccess";
import SignIn from "../pages/SignIn";
import MainDash from "../components/Dashboard/MainDash";
import Summary from "../components/Dashboard/Summary";
// import ProductDetails from "../components/Dashboard/ProductDetails";
import ProductDetails from "../components/Dashboard/ProductDetails";
import UserInfo from "../components/Dashboard/UserInfo";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/sign-up" element={<Register />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wish-list" element={<Wishlist />} />
      {/* <Route path="/order/:id" element={<SingleOrderInfo />} /> */}
      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/admin" element={<MainDash />}>
        <Route path="products" element={<Products />}>
          

          <Route path="create-product" element={<NewProduct />}></Route>
        </Route>
        <Route path="summary" element={<Summary />}></Route>
      </Route>
      {/* <Route path="products" element={<Products />} /> */}
      <Route path="/checkout-success" element={<CheckoutSuccess />}></Route>

      <Route path="/orders" element={<OrdersList />} />
      <Route path="/orders/:id" element={<SingleOrder />} />

      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/:id" element={<UserInfo />} />

      <Route path="profile" element={<AdminProfile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
