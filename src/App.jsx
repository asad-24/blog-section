
import './App.css'
import Blog from './components/Blog'
import img1 from './assets/1.jpg.png'
import img2 from './assets/car2.jpg.png'
import img3 from './assets/3.png'
import { FaArrowRight } from "react-icons/fa";
import date from "./assets/div.date.png"

function App() {
 

  return (
 <>
 <div>
    <button type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border bg-[#B479D926]">Latest News</button>
    <h1 className='text-5xl font-bold text-center'>Check out our blog posts</h1>
    </div>

    <div className='cards flex md:justify-between justify-center mt-4 flex-wrap items-center'>
    <div className="relative w-[553px] h-[422px] rounded-md mt-2">
      <img
        src={img1}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-14 left-5 text-left">
        <h1 className=" font-semibold text-white text-4xl my-8">New car listing updates.</h1>
        <p className="mt-2 text-sm text-gray-300">
        Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves.</p>
        <button className="mt-3 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
        Continue Reading &rarr;
        </button>
      </div>
    </div>

    <div className="w-[320px] h-[422px]    relative mt-2 " >
      <img
        src={img2}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover "
      />
      <div className="">
        <img src={date} className='absolute left-0 top-[32%]' alt="" />
        <div className='mt-10 text-start'><span className=' me-3'>Md Sohag</span><span>25 April, 2023</span></div>
        <h1 className="text-2xl font-semibold text-start mt-8 ">Saudi Arabian automotive industry news.</h1>
       
        <button
          type="button"
          className="mt-4 rounded-sm   py-2  font-semibold  flex justify-center items-center"
        >
          Continue Reading <FaArrowRight className='ms-2'/>
        </button>
      </div>
    </div>
    <div className="w-[320px] h-[422px]    relative mt-2">
      <img
        src={img3}
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover "
      />
      <div className="">
        <img src={date} className='absolute left-0 top-[32%]' alt="" />
        <div className='mt-10 text-start'><span className=' me-3'>Md Sohag</span><span>25 April, 2023</span></div>
        <h1 className="text-2xl font-semibold text-start mt-8">Car maintenance and buying guides.</h1>
       
        <button
          type="button"
          className="mt-4 rounded-sm   py-2  font-semibold  flex justify-center items-center"
        >
          Continue Reading <FaArrowRight className='ms-2'/>
        </button>
      </div>
    </div>

    </div>

 </>
  )
}

export default App
