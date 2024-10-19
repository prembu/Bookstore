import React, { useEffect, useState } from "react";

function Navbar() {
  const [sticky, setSticky] =useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scroll>0){
        setSticky(true)
      }
      else{
        setSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return ()=>{
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <>
      <div className={'w-[100vw] top-0 left-0 right-0 fixed '} >
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Course</a>
                </li>

                <li>
                  <a>Cantact</a>
                </li>

                <li>
                  <a>About</a>
                </li>
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer">BookStore</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Course</a>
              </li>

              <li>
                <a>Cantact</a>
              </li>

              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
