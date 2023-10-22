import React from "react";
import CreateReadme from "../createReadme/CreateReadme";
import Footer from "../footer/Footer"
import Header from "../header/Header";
import ScrollProgressBar from "../scrollProgressBar/ScrollProgressBar";
import "../../index.css"

const Home = (props) => {
    return(
    <section className='bg-darkBg w-full h-full'>
        <div className='h-screen flex flex-col justify-between'>
        <div>
          <Header/>
          <ScrollProgressBar />

          <div className="App h-screen flex justify-center items-center bg-black">
            <label className='relative cursor-pointer'>
              <input type="text" placeholder="Input" className='h-20 w-96 px-6 text-4xl text-whiteText bg-darkBg border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-buttonColor placeholder-copiedColor placeholder-opacity-0 transition duration-200' />
              <span className='text-4xl text-whiteText text-opacity-80 bg-darkBg absolute left-5 top-5 px-1 transition duration-200 input-text'>Input</span>
            </label>
          </div>

          <div className='text-whiteText text-xl text-center justify-center font-light pt-60 font-roboto'>
            <p> Vítejte v generátoru README.MD </p>
            <p> jednoduchým způsobem vytvořte minimalistické readme pro vaše projekty </p>
            <p> vyplněním formuláře se vám vygeneruje váš soubor, který stačí zkopírovat a vložit </p>
            <p> můžete také přepínat styl vytvoření a vytvořit si tak přehledé README pro váš profil </p>
            <p> šablona je velmi lehce upravitelná dle vašich potřeb</p>
            <div className='pt-4'>
              <button onClick={props.openDocumentation} className='px-6 py-3 border-buttonColor border-2 rounded-lg hover:-translate-y-1 duration-300'>
                Dokumentace
              </button>
              <button className='px-6 py-3 border-2 border-buttonColor bg-buttonColor rounded-lg ml-4 hover:-translate-y-1 duration-300'
              onClick={() => {
                document.documentElement.classList.add('scroll-animation');
                const headingElement = document.getElementById('firstHeading');
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
        <div id='firstBorder' className='w-[100%] border-b-2 mx-auto border-whiteText justify-center'></div>
      </div>
        <CreateReadme/>
        <Footer/>
    </section>
    )
}

export default Home