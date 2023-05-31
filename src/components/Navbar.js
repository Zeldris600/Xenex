import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, BrowserRouter } from "react-router-dom";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { logoutUser } from "../features/authSlice";
import { toast } from "react-toastify";

export const Nav = () => {
  const dispatch = useDispatch();
  const { cartTotalQty } = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const handleLogOutToast = () => {
    toast.warning("Logged out!", { position: "top-center" });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" py-5 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 h-4 mb-10">
      <div className="relative flex items-center justify-between md:ml-8">
        <a
          href="/"
          aria-label="Xenex"
          title="Xenex"
          className="inline-flex items-center"
        >
          <svg
            className="w-8 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-2xl font-bold text-blue-600 tracking-wide ">
            Xenex .
          </span>
        </a>
        <div className="lg:hidden ml-36">
          <div className="flex gap-4">
            <Link>
              <HiOutlineHeart size={30} />
              <span class="absolute right-[84px] top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                5
              </span>
            </Link>
            <Link>
              <HiOutlineShoppingCart size={30} />
              <span class="absolute right-[32px] top-[-0.2px] rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cartTotalQty}
              </span>
            </Link>
          </div>
        </div>

        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li>
            <Link to="/" className="font-medium tracking-wide">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="font-medium tracking-wide">
              Shop
            </Link>
          </li>
          <li>
            <li>
              <Link to="/blog" className="font-medium tracking-wide">
                Blog
              </Link>
            </li>
          </li>
          <li>
            <li>
              <Link to="/about-us" className="font-medium tracking-wide">
                About
              </Link>
            </li>
          </li>
          <li>
            <li>
              <Link to="/contact-us" className="font-medium tracking-wide">
                Contact
              </Link>
            </li>
          </li>

          <li>
            <Link to="/cart" className="font-medium tracking-wide text-center">
              <svg class="flex-1 w-8 h-8 fill-current" viewbox="0 0 24 24">
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              <span class="absolute lg:right-[310px] top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cartTotalQty}
              </span>
            </Link>
          </li>
          <li>
            <Link className="text-center" to="/wish-list">
              <HiOutlineHeart className="fill-current mb-2" size={30} />
              <span class="absolute lg:right-[245px] top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                5
              </span>
            </Link>
          </li>

          {auth._id ? (

            <div className="flex gap-3">
                  <li>
              <Link
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-900 focus:shadow-outline focus:outline-none"
                to="/login"
                // onClick={() => {dispatch(logoutUser(null))}}
                onClick={() => {
                  dispatch(logoutUser(null));
                  handleLogOutToast();
                }}
              >
                Log out
              </Link>
            </li>
{auth.isAdmin ? <li>
              <Link
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-900 focus:shadow-outline focus:outline-none"
                to="/admin/summary"
                // onClick={() => {dispatch(logoutUser(null))}}
                onClick={() => {
                  dispatch(logoutUser(null));
                  handleLogOutToast();
                }}
              >
                Admin
              </Link>
            </li>: null}
            

            </div>
        
          ) : (
            <li>
              <Link
                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-900 focus:shadow-outline focus:outline-none"
                to="/sign-up"
              >
                Sign up
              </Link>
            </li>
          )}
        </ul>
        {/* Hamburger */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="absolute mb-96 top-0 left-0 w-full">
              <div className="p-5 bg-slate-700 border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Xenex ."
                      title="Xenex ."
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-deep-purple-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-2xl font-bold text-blue-600 tracking-wide ">
                        Xenex .
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="font-medium tracking-wide">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/shop" className="font-medium tracking-wide">
                        Shop
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="font-medium tracking-wide">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/about-us"
                        className="font-medium tracking-wide"
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact-us" className="font-medium tracking-wide">
                        Contact
                      </Link>
                    </li>

                    <li>
                      <Link
                        to="/sign-up"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-700 hover:bg-blue-900 focus:shadow-outline focus:outline-none"
                      >
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Nav;
