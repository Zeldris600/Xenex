import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import axios from 'axios';
import {url,setHeaders} from '../../features/api';
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown, Card, Table, Label, TextInput } from "flowbite-react";
import { HiShoppingBag, HiOutlineUsers, HiOutlineSearch } from "react-icons/hi";
import { BsArrowUpRight, BsPlus, BsStar } from "react-icons/bs";
import { TbArrowBack } from "react-icons/tb";
import Chart from "../Charts/Chart";
import pic from "../../assets/img/Headphone-1.png";

const MainDash = () => {
  const [users,setUsers] = useState([]);
  const [usersPercentage,setUsersPercentage] = useState(0);
// console.log(usersPercentage)

//   function compare(a,b) {
//     if (a._id < b._id) {
//       return 1
//     }
//     if (a._id > b._id) {
//       return -1
//     }
    
// return 0;
//   }
  
  // useEffect(() => {
  //   async function fetchData(){
  //     try {
  //       const res =await axios.get(`${url}/users/stats`,setHeaders())
  //  res.data.sort(compare)
  //       console.log('stats', res.data);
  //       setUsers(res.data);
  //       setUsersPercentage(((res.data[0].total - res.data[1])/ res.data[1].total) * 100)
    
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchData()
  // },[])
  const user = useSelector((state) => state.auth);

  if(!user.isAdmin) return <p>Acsess Denied</p>



  return (
               <StyledDashboard>
                <SideNav>
                  <h3>Quick Links</h3>
                  <NavLink  to='/admin/summary'>Summary</NavLink>
                  <NavLink to='/admin/products'>Products</NavLink>

                </SideNav>
                <Content>
                  <Outlet/>
                </Content>
               </StyledDashboard>
  );
};

export default MainDash;


const StyledDashboard = styled.div`
  display: flex;
  height: 100vh;
`;

const SideNav = styled.div`
  border-right: 1px solid gray;
  height: calc(100vh - 70px);
  position: fixed;
  overflow-y: auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  h3 {
    margin: 0 0 1rem 0;
    padding: 0;
    text-transform: uppercase;
    font-size: 17px;
  }
  a {
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;
  }
`;

const Content = styled.div`
  margin-left: 200px;
  padding: 2rem 3rem;
  width: 100%;
`;






/* 
<nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
<div className="px-3 py-3 lg:px-5 lg:pl-3">
  <div className="flex items-center justify-between">
    <div className="flex items-center justify-start">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <a href="https://flowbite.com" className="flex ml-2 md:mr-24">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="FlowBite Logo"
        />
        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </a>
    </div>
    <div className="flex items-center">
      <div className="flex items-center ml-3 ">
        <div className="group">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            aria-expanded="false"
            data-dropdown-toggle="dropdown-user"
          >
            <span className="sr-only ">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
          </button>
        </div>
        <div
          className="z-50 hidden group-hover:block my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown-user"
        >
          <div className="px-4 py-3" role="none">
            <p
              className="text-sm text-gray-900 dark:text-white"
              role="none"
            >
              Neil Sims
            </p>
            <p
              className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
              role="none"
            >
              neil.sims@flowbite.com
            </p>
          </div>
          <ul className="py-1" role="none">
            <NavLink>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Dashboard
              </a>
            </NavLink>
            <NavLink>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Settings
              </a>
            </NavLink>
            <NavLink>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Earnings
              </a>
            </NavLink>
            <NavLink>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                Sign out
              </a>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
</nav> */

{/* <aside
id="logo-sidebar"
className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
aria-label="Sidebar"
>
<div className="h-full px-3 pb-4 overflow-y-auto bg-white ">
  <ul className="space-y-2 font-medium">
    <NavLink>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
        <span className="ml-3">Dashboard</span>
      </a>
    </NavLink>
    <NavLink className="group">
      <button
        type="button"
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span
          className="flex-1 ml-3 text-left whitespace-nowrap"
          sidebar-toggle-item
        >
          E-commerce
        </span>
        <svg
          sidebar-toggle-item
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      {/*           <Dropdown label="Dropdown" className='py-1 space-y-2'>
<Dropdown.Item >
<a href="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Products</a> 
</Dropdown.Item>
<Dropdown.Item >
<a href="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Billing</a> 
</Dropdown.Item>
<Dropdown.Item >
<a href="" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoice</a> 
</Dropdown.Item>

</Dropdown> */}

      {/* <ul
        id="dropdown-example"
        className="hidden group-hover:block  py-2 space-y-2"
      >
        <NavLink
          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          to="/admin/products"
        >
          Products
        </NavLink>
        <NavLink
          className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          to="/admin/orders"
        >
          Orders
        </NavLink>
        <NavLink>
          <a
            href="#"
            className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Invoice
          </a>
        </NavLink>
      </ul> */}
    // </NavLink>
    {/* <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          3
        </span>
      </a>
    </li> */}
    {/* <NavLink
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      to="/customers"
    > */}
    {/*   <svg
        aria-hidden="true"
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          NavLinkp-rule="evenodd"
        ></path>
      </svg>
      <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
    </NavLink> */}
    {/* <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
      </a>
    </li> */}
/*     <NavLink
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      to="/sign-in"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
    </NavLink>
 */
    {/* Check This */}
/*     <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
      </a>
    </li>
  </ul> */
// </div>
// </aside> */}

{/* <div className="p-4 sm:ml-64">
<div className="p-4 border-2 border-gray-200 border-dashed rounded-lg mt-14">
  <div className="grid lg:grid-cols-4 mb-4">
    <Card horizontal={true} className="w-full h-44 ">
      <div className="flex gap-3">
        <HiShoppingBag size={30} />
        <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Total Users
        </h5>
      </div>
      <h2
        className=" text-2xl
         font-bold  text-center"
      >
        {users[0] ?.total}
      </h2>

      <div className="flex justify-between gap-3">
        <div>
          <BsArrowUpRight className="inline" size={20} />
          <span className="ml-1 text-xl">{usersPercentage}%</span>
        </div>

        <div className="flex">
          <BsPlus className="inline" size={24} />
          <span className="text-xl">{users.total}</span>
        </div>
      </div>
    </Card>

    <Card horizontal={true} className="w-full h-44 ">
      <div className="flex gap-3">
        <HiShoppingBag size={30} />
        <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Total orders
        </h5>
      </div>
      <h2
        className=" text-2xl
         font-bold  text-center"
      >
        7,000,000 CFA
      </h2>

      <div className="flex justify-between gap-3">
        <div>
          <BsArrowUpRight className="inline" size={20} />
          <span className="ml-1 text-xl">20.9%</span>
        </div>

        <div className="flex">
          <BsPlus className="inline" size={24} />
          <span className="text-xl">20.9%</span>
        </div>
      </div>
    </Card>

    <Card horizontal={true} className="w-full h-44 ">
      <div className="flex gap-3">
        <HiShoppingBag size={30} />
        <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Total Earnings
        </h5>
      </div>
      <h2
        className=" text-2xl
         font-bold  text-center"
      >
        7,000,000 CFA
      </h2>

      <div className="flex justify-between gap-3">
        <div>
          <BsArrowUpRight className="inline" size={20} />
          <span className="ml-1 text-xl">20.9%</span>
        </div>

        <div className="flex">
          <BsPlus className="inline" size={24} />
          <span className="text-xl">20.9%</span>
        </div>
      </div>
    </Card>
    <Card horizontal={true} className="w-full h-44 ">
      <div className="flex gap-3">
        <HiShoppingBag size={30} />
        <h5 className=" text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Total sales
        </h5>
      </div>
      <h2
        className=" text-2xl
         font-bold  text-center"
      >
        7,000,000 CFA
      </h2>

      <div className="flex justify-between gap-3">
        <div>
          <BsArrowUpRight className="inline" size={20} />
          <span className="ml-1 text-xl">20.9%</span>
        </div>

        <div className="flex">
          <BsPlus className="inline" size={24} />
          <span className="text-xl">20.9%</span>
        </div>
      </div>
    </Card>
  </div>

  <div className=" h-fit mb-4 rounded bg-gray-50">
    <div></div>
    <Chart
      aspect={3 / 1}
      title="Last 6 Months Revenue"
      className="flex-2"
    />
    <div className="">
      <Card>
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Standard plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">
            49
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" className="my-7 space-y-5">
          <li className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              2 team members
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              20GB Cloud storage
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Integration help
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Sketch Files
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              API Access
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              Complete documentation
            </span>
          </li>
          <li className="flex space-x-3 line-through decoration-gray-500">
            <svg
              className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              24/7 phone & email support
            </span>
          </li>
        </ul>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
        >
          Choose plan
        </button>
      </Card>
    </div>
  </div>
  <div className=" mb-4">
    <div className="flex justify-between mb-3">
      <h1 className="text-2xl font-bold">Top Products</h1>
      <div>
        <TextInput
          id="email4"
          type="email"
          icon={HiOutlineSearch}
          placeholder="name@flowbite.com"
          required={true}
          className="w-full"
        />
      </div>
    </div>

    <Table hoverable={true}>
      <Table.Head>
        <Table.HeadCell className="text-lg ">
          Product name
        </Table.HeadCell>
        <Table.HeadCell className="text-lg ">Order ID</Table.HeadCell>
        <Table.HeadCell className="text-lg ">Category</Table.HeadCell>
        <Table.HeadCell className="text-lg ">Price</Table.HeadCell>
        <Table.HeadCell className="text-lg ">Sold</Table.HeadCell>
        <Table.HeadCell className="text-lg ">Total</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-semibold text-gray-900 dark:text-white">
            <img src={pic} alt="" width={40} className="inline" />{" "}
            <span> Magic Mouse 2</span>
          </Table.Cell>
          <Table.Cell>Black</Table.Cell>
          <Table.Cell>Accessories</Table.Cell>

          <Table.Cell>$99</Table.Cell>
          <Table.Cell>$99</Table.Cell>
          <Table.Cell>$99</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
</div>
</div> */}

{/* <Outlet /> */}