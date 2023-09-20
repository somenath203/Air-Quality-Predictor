/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const Navbar = () => {
  return (
    <>
      <header className="text-black bg-white body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <i className="fa-solid fa-seedling text-green-600 text-xl lg:text-3xl"></i>
            <span className="ml-3 text-sm lg:text-xl text-green-800 tracking-wide font-poppins">
              Air Quality Predictor
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-sm lg:text-base justify-center font-poppins">
            <Tippy content='About Us Page'>
              <NavLink to="/aboutus">
                <span className="mr-5 text-green-800 hover:text-green-700 cursor-pointer animate duration-100">
                  AboutTheProject
                </span>
              </NavLink>
            </Tippy>
            <Tippy content='Form for Air Quality Prediction'>
              <NavLink to='/airqualityform'>
                <span className="mr-5 text-green-800 hover:text-green-700 cursor-pointer animate duration-100">
                  AirQualityForm
                </span>
              </NavLink>
            </Tippy>
            <Tippy content='Github link of the project'>
              <a className="mr-5 text-green-800 hover:text-green-700 cursor-pointer animate duration-100" href="https://github.com/somenath203/Air-Quality-Predictor" target="_blank">
                <i className="fa-brands fa-github text-xl lg:text-3xl"></i>
              </a>
            </Tippy>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
