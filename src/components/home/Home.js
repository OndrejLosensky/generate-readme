import React from "react";
import CreateReadme from "../createReadme/CreateReadme";
import Footer from "../footer/Footer"
import Header from "../header/Header";
import ScrollImage from "../../assets/scroll-down.png"
import ScrollProgressBar from "../scrollProgressBar/ScrollProgressBar";
import "../../index.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';
import Hero from "../hero/Hero";

const Home = (props) => {
    useEffect(() => {
      AOS.init({duration: "1500" });
    },[])

    return(
    <section className='bg-darkBg w-full h-full'>
        <div className='h-screen flex flex-col justify-between'>
        <div>
          <Header/>
          <ScrollProgressBar />
          <div className='text-whiteText text-xl text-center justify-center font-light pt-[250px] font-roboto'>
            <div data-aos="fade-right">
              <p > Welcome to README.MD generator </p>
              <p> create simple and minimalistic readme's for your projects with this app </p>
              <p> by filling up the form, you get the data that just needs to be copied and then pasted </p>
              <p> you can switch from Repository Readme to documentatipm to check full docs <br/> and then create beautiful readme's for your projects.  <br/> After copying you can simply just change it how do you like it.  </p>

            </div>
            <div data-aos="fade-right" data-aos-delay="200" className='pt-4'>
              <button onClick={props.openDocumentation} className='px-6 py-3 border-buttonColor border-2 rounded-lg hover:-translate-y-1 duration-300'>
                Documentation
              </button>
              <button className='px-6 py-3 border-2 border-buttonColor bg-buttonColor rounded-lg ml-4 hover:-translate-y-1 duration-300'
              onClick={() => {
                document.documentElement.classList.add('scroll-animation');
                const headingElement = document.getElementById('tutorialHeading');
                if (headingElement) {
                  headingElement.scrollIntoView({
                    behavior: 'smooth',
                    
                  });
                }
                setTimeout(() => {
                  document.documentElement.classList.remove('scroll-animation');
                }, 3000); 
              }}
              >
                Continue
              </button>
            </div>
            <div className="pt-40">
                  <img alt="scroll" src={ScrollImage} className="mx-auto
                  hover:-translate-y-1 duration-300 cursor-pointer" onClick={() => {
                    document.documentElement.classList.add('scroll-animation');
                    const headingElement = document.getElementById('firstHeading');
                    if (headingElement) {
                      headingElement.scrollIntoView({
                        behavior: 'smooth',
                        
                      });
                    }
                    setTimeout(() => {
                      document.documentElement.classList.remove('scroll-animation');
                    }, 5000); 
                  }}/>
                
            </div>
          </div>
        </div>
        <div id='firstBorder' className='w-[100%] mx-auto justify-center'></div>
      </div>
        <div className="h-[900px] pt-4 flex flex-col border-t-2 border-whiteText">
          <Hero/>
        </div>
        <CreateReadme/>
        <Footer/>
    </section>
    )
}

export default Home