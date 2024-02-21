import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// images
import Likeme from "./Likeme.png";
import Html from './Html.png'
import Css from './Css.png'
import Js from './Js.png'
import Firebase from './Firebase.png'
import Heart from './Heart.png'



export default function Projects() {
    useEffect(() => {
        AOS.init(); // Initialize AOS when component mounts
      }, []);
    
    return (

        <div className="flex justify-center ">
            <div className="Projects blue-box-shadow p-6 md:p-0 xl:p-0 m-3 w-[20rem] h-[30rem] flex flex-col md:flex-row xl:flex-row bg-zinc-200 xl:w-[40rem] md:w-[40rem] rounded-2xl md:h-auto xl:h-auto "   data-aos="zoom-out">
                <div className="relative w-auto h-[10rem] md:w-[50%] md:h-[20rem] xl:w-[50%] xl:h-[20rem]"> 
                    <img className="absolute inset-0 w-full h-full object-cover md:object-fill xl:object-fill rounded-2xl" src={Likeme} alt="Likeme!" />
                    <div className="absolute inset-0 bg-black opacity-20 rounded-2xl transition-opacity duration-300 hover:opacity-40"></div>
                    {/* Image */}
                </div>

                <div className=" flex flex-col justify-center items-center md:w-[70%] xl:w-[70%]  text-center">
                    <div className=" flex flex-col gap-6 my-5 ">
                        <div className="text-sm">
                            <h2 className="text-2xl kode-mono-text font-bold">LikeMe!</h2>
                            
                            <span className="text w-full flex gap-2">
                              <span>Comments:</span>   <span className=" flex gap-1 text-red-600">Made With <img className="h-6 animate-heartbeat " src={Heart} alt="" /></span>
                            </span>
                            
                        </div>


                        <div className="flex flex-col gap-2 ">

                            <span>
                                <h1 className="tracking-wide">Technology used:</h1>
                            </span>

                            <div className="flex justify-between">
                                <img className="h-12 w-12" src={Html} alt="" />
                                <img className="h-12 w-12" src={Css} alt="" />
                                <img className="h-12 w-12" src={Js} alt="" />
                                <img className="h-12 w-12" src={Firebase} alt="" />
                            </div>



                        </div>

                    </div>



                    <div className="flex justify-end">
                        <a  href="https://likemee.netlify.app/" target="blank" className="bg-blue-200 p-3 rounded-2xl hover:bg-blue-300 border-dashed border-[1rem]">Live Demo</a>
                    </div>



                </div>
            </div>
        </div>
    );
}
