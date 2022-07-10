import Image from "next/image";
// import Box from '../components/box'

export default function Home() {
  return (
    <>
      {/* <Box />    */}
      <div className="   h-fit">
        <div className="text-8xl  text-gray-900 font-bold pl-28 pt-28  w-fit max-w-[60%]">
          {`Hello, `}
          <br />
          {`I'm Vraj`}
          <br />
          {`Web Developer`}
        </div> 
        <button className="relative mt-10 ml-28 text-xl inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-black  rounded hover:bg-purple-500 group">
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#ffe000]  absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            Contact Me
          </span>
        </button>
        <svg
          className=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,192L60,165.3C120,139,240,85,360,90.7C480,96,600,160,720,186.7C840,213,960,203,1080,186.7C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
