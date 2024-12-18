import React, { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";


const Navbar = () => {
  const pathnName = useLocation(); //this will give us access to the current url we are on.
  const [openNavigation, setOpenNavigation] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-50 w-full border-b bg-n-8/90 backdrop-blur-sm border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      {" "}
      {/*Use the backdrop-blur-* utilities to control an element’s backdrop blur. */}
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 ">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="brainwave-img" />
        </a>

        <nav className="fixed hidden top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative flex flex-col items-center justify-center m-auto z-2 lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathnName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {" "}
                {/*so here basically we used the useLocation to get which page we are on and based on that if the url matched with the page we are on we basically made that page title white other than other pages. */}
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          href="#signup"
          className="hidden mr-8 transition-colors hover:text-n-1 button text-n-1/50 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">LogIn</Button>
      </div>
    </div>
  );
};

export default Navbar;
