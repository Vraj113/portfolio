import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [display, setDisplay] = useState("opacity-0");
  const [hamburgerMenu, setHamburgrMenu] = useState(false);
   
  return (
    <>
      <nav className="h-fit py-2 bg-black text-gray-200 border-black border-b-2">
        <div className="h-16 flex justify-between  md:justify-around items-center "> 
          <p className="font-bold cursor-pointer px-2 text-3xl  ml-6 relative w-max one group text-gray-300 hover:text-white bg-black   transition duration-300  ">
            <span className="z-20 relative">
            <Link href={'/'}>Vraj Solanki</Link>
              
            </span>
            <span className="absolute -bottom-1 left-0 w-full  ease-in-out duration-300 h-0 group-hover:h-10 z-[10]  bg-[#ffe000] "></span>
          </p>
          <div className="flex flex-col md:hidden mr-6 " onClick={()=>hamburgerMenu?setHamburgrMenu(false):setHamburgrMenu(true) }>
            <span className={`h-1 w-9 my-1 bg-white origin-top-right  transition ` +(hamburgerMenu?'-rotate-45':'rotate-0') }></span>
            <span className={`h-1 w-9  my-1 bg-white transition `+(hamburgerMenu?'opacity-0':'opacity-1')}></span>
            <span className={`h-1 w-9 my-1 bg-white origin-bottom-right transition ` +(hamburgerMenu?'rotate-45':'rotate-0') }></span>
          </div>
          <div className=" hidden md:flex gap-x-7 text-lg font-semibold ">
            <div className="group relative ">
              <Link href={"/"}>About</Link>
              <div
                className={`  group-hover:scale-100  scale-0 group-hover:translate-y-0 translate-y-[-50px]  transition ease-in-out duration-400 absolute border-2 rounded-xl p-5 -left-4 bg-blue-100`}
              >
                Hi Im about
              </div>
            </div>

            <div className="font-bold cursor-pointer  px-2  relative w-max one group text-gray-300 hover:text-white bg-black   transition duration-300  ">
              <span className="z-20 relative">
                <Link href="skills">Skills</Link>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 rounded-xl ease-out duration-200  h-1 group-hover:w-full z-[10]  bg-gradient-to-r from-[#ffe000]  to-purple-500 "></span>
            </div>
            <div className="font-bold cursor-pointer  px-2  relative w-max one group text-gray-300 hover:text-white bg-black   transition duration-300  ">
              <span className="z-20 relative">
                <Link href="">Education</Link>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 rounded-xl ease-out duration-200  h-1 group-hover:w-full z-[10]  bg-gradient-to-r from-[#ffe000]  to-purple-500 "></span>
            </div>
            <div className="font-bold cursor-pointer  px-2  relative w-max one group text-gray-300 hover:text-white bg-black   transition duration-300  ">
              <span className="z-20 relative">
                <Link href="">Work</Link>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 rounded-xl ease-out duration-200  h-1 group-hover:w-full z-[10]  bg-gradient-to-r from-[#ffe000]  to-purple-500 "></span>
            </div>
            <div className="font-bold cursor-pointer  px-2  relative w-max one group text-gray-300 hover:text-white bg-black   transition duration-300  ">
              <span className="z-20 relative">
                <Link href="">Contact</Link>
              </span>
              <span className="absolute -bottom-1 left-0 w-0 rounded-xl ease-out duration-200  h-1 group-hover:w-full z-[10]  bg-gradient-to-r from-[#ffe000]  to-purple-500 "></span>
            </div> 
            {/* <div className="">Blogs</div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
