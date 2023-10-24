import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Documentation = () => {

     // ------------------- Animace -------------------
    useEffect(() => {
        AOS.init({duration: "1500" });
    },[])
  // -----------------------------------------------

    return(
        <div className=" flex flex-col items-center">
            <h2 className="text-5xl font-bold pt-2 uppercase "> Documentation </h2>
            {/* sekce s popiskem */}
            <div className="pt-4 ">
                <p className="text-center font-roboto">
                    Welcome in the docs! <br/>
                    Here you will find out more about how to use this app <br/> 
                    and how to copy the output to your readme.md files etc. <br/>
                    You can find out detailed explanation by clicking <a className="underline text-buttonHover" href="https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes" target="_blank" rel="noopener noreferrer">Here</a>
                </p>
            </div>
            <div className="pt-12 flex flex-row w-[80%] h-[500px]">
                <div className="w-1/2  text-center">     
                    <h2 className="font-semibold text-2xl">How to edit README</h2>
                    <p>

                    </p>
                </div>
                <div className="font-semibold text-2xl w-1/2 text-center ">
                    <h2>What to have in README</h2>
                    <p>

                    </p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Documentation