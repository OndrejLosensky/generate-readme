import React from "react";
import CreateReadme from "../createReadme/CreateReadme";
import Footer from "../footer/Footer"
import Header from "../header/Header";
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
              <p > Vítejte v generátoru README.MD </p>
              <p> jednoduchým způsobem vytvořte minimalistické readme pro vaše projekty </p>
              <p> vyplněním formuláře se vám vygeneruje váš soubor, který stačí zkopírovat a vložit </p>
              <p> můžete také přepínat styl vytvoření a vytvořit si tak přehledé README pro váš profil </p>
              <p> šablona je velmi lehce upravitelná dle vašich potřeb</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className='pt-4'>
              <button onClick={props.openDocumentation} className='px-6 py-3 border-buttonColor border-2 rounded-lg hover:-translate-y-1 duration-300'>
                Dokumentace
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
                Pokračovat
              </button>
            </div>
          </div>
        </div>
        <div id='firstBorder' className='w-[100%] mx-auto border-2 border-whiteText justify-center'></div>
      </div>
        <div className="h-[900px] pt-4 flex flex-col">
          <Hero/>
        </div>
        <CreateReadme/>
        <Footer/>
    </section>
    )
}

export default Home