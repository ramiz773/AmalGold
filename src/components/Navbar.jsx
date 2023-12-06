import React, { useState } from "react";
import { Link } from "react-scroll";
import { navlinkData } from "../data";
import { CiMenuBurger } from "react-icons/ci";

function Navbar() {
   const [menu, setMenu] = useState(false);
   console.log(menu);
   return (
      <div className=" ">
         <section className="flex items-center gap-8 justify-between mx-auto w-full   px-8 py-5 md:px-20 bg-backgroud text-white">
            <p className=" text-2xl f md:text-3xl md:font-semibold ">Amal</p>
            <div className="  flex items-center gap-5  justify-between ">
               {navlinkData.map((data) => {
                  return (
                     <Link to={data.to} spy={true} smooth={true} offset={50} duration={500} className=" hidden md:block  hover:opacity-75 transition-opacity duration-300 cursor-pointer">
                        {data.label}
                     </Link>
                  );
               })}
            </div>
            <div
               id="icon"
               className="md:hidden z-10"
               onClick={() => {
                  setMenu(!menu);
               }}
            >
               <CiMenuBurger color={`${menu ? "black" : "white"}`} size={20} />
            </div>
         </section>
         {/* mobile navbar */}

         <div className={`bg-gray-100 h-screen absolute w-[300px]  right-0 top-0 ${menu ? "translate-x-0" : "translate-x-full"} transition-transform`}>
            <ul className="flex flex-col items-center h-[100%] pt-36   ">
               {navlinkData.map((data) => {
                  return (
                     <li className="text-1xl  hover:bg-gray-200 w-full text-center p-3 hover:text-backgroud hover:transition-all delay-150">
                        <Link to={data.to} spy={true} smooth={true} offset={50} duration={500}>
                           {data.label}
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </div>
      </div>
   );
}

export default Navbar;
