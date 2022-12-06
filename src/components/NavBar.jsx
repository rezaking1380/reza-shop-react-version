import { Link, Outlet } from "react-router-dom";
import logoreza from "../asset/img/Group 3.png";
import logorezasm from "../asset/img/Group 1.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Disclosure } from "@headlessui/react";

import {
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";

import { useSelector } from "react-redux";
import { Badge, IconButton } from "@mui/material";
import { useState } from "react";
const navigation = [
  { name: "HOME", to: "/", current: false },
  { name: "electronics", to: "/category/electronics", current: false },
  { name: "jewelery", to: "/category/jewelery", current: false },
  { name: "men's clothing", to: "/category/men's clothing", current: false },
  {
    name: "women's clothing",
    to: "/category/women's clothing",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const countShop = useSelector((state) => state.Addproduct.count);
  const [changenav, setchangenav] = useState();
  
  // function handelcurrent(e,item) {
  //   e.preventDefault();
  //   if (item.name === 'HOME') {
  //     item.current = true
  //   }
  // }

  const handelnav = (e) => {
    e.preventDefault();
    setchangenav(nav => !nav)
    console.log('check');
  } 

  return (
    <Disclosure as="nav" className="bg-gray-100 w-full fixed z-20 font-sans">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}

                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-center sm:justify-start">
                <div className="flex-shrink-0 flex items-center ">
                  <img
                    className="block lg:hidden w-11 absolute sm:relative"
                    src={logorezasm}
                    alt="logoreza"
                  />
                  <img
                    className="hidden lg:block w-20"
                    src={logoreza}
                    alt="logoreza"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                      Value={changenav}
                      onChange={handelnav}
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? "bg-amber-400 text-black"
                            : "text-gray-500 hover:bg-amber-400 hover:text-black",
                          "px-3 py-2 rounded-md font-medium text-sm"
                        )}
                        // aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Outlet />
              </div>

              {/* new right navbar */}
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <Link
                    to={`signin`}
                    className="text-sm font-medium text-gray-400 hover:text-amber-400"
                  >
                    Sign in
                  </Link>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <Link
                    to={`signup`}
                    className="text-sm font-medium text-gray-400 hover:text-amber-400"
                  >
                    Create account
                  </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  {/* <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  // className='hidden'
                />
                <label htmlFor="remember-me"> */}
                  <Link
                    to={`/shoping`}
                    className="group -m-2 p-2 flex items-center"
                  >
                    {/* <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-amber-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-400 group-hover:text-gray-600">
                      {countShop}
                    </span> */}
                    <IconButton size="large" color="inherit">
                      <Badge badgeContent={countShop} color="error">
                        <ShoppingCartIcon
                          className="text-gray-400 group-hover:text-amber-400"
                          aria-hidden="true"
                        />
                      </Badge>
                    </IconButton>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                  {/* </label> */}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link to={item.to} key={item.name}
                onClick={!item.current}
                >
                  <Disclosure.Button
                  
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-amber-400 text-black"
                        : "text-gray-500 hover:bg-gray-800 hover:text-white active:bg-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
