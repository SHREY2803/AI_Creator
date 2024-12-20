import React, { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import {disablePageScroll, enablePageScroll} from 'scroll-lock'; //this is a library that helps you to lock the body scroll when a modal is open.

const Navbar = () => {
  const pathnName = useLocation(); //this will give us access to the current url we are on.
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () =>{
    if(openNav){
      setOpenNav(false);
      enablePageScroll(); //this will enable the body scroll when the navigation
    }
    else{
      setOpenNav(true);
      disablePageScroll(); //this will disable the body scroll when the navigation is open.
    } 
  };
  const handleClick = () => {
    if(!openNav) return; //if the navigation is not open then return
    
    enablePageScroll(); //this will enable the body scroll when the navigation is closed.
    setOpenNav(false);
  }
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      {/*Use the backdrop-blur-* utilities to control an element’s backdrop blur. */}
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="brainwave-img" />
        </a>

        <nav
          className={`${
            openNav ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-[0.9rem] lg:leading-4 lg:font-semibold ${
                  item.url === pathnName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                onClick={handleClick}
              >
                {" "}
                {/*so here basically we used the useLocation to get which page we are on and based on that if the url matched with the page we are on we basically made that page title white other than other pages. */}
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="hidden mr-8 transition-colors hover:text-n-1 button lg:text-[0.77rem] text-n-1/50 lg:block"
        >
          New Account
        </a>
        <Button className="ml-auto lg:hidden" px="px-5" onClick={toggleNav}>
          <MenuSvg openNavigation={openNav} />
        </Button>
        <Button className="hidden lg:flex lg:text-[0.77rem]" href="#login">
          LogIn
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
