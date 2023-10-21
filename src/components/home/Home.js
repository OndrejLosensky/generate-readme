import React from "react";
import CreateReadme from "../createReadme/CreateReadme";
import Footer from "../footer/Footer"
import Header from "../header/Header";


const Home = (props) => {
    return(
    <section className='bg-darkBg w-full h-full'>
        <div className='h-screen flex flex-col justify-between'>
        <div>
            <Header/>
          <div className='text-whiteText text-xl text-center justify-center font-light pt-60'>
            <p> Vítejte v generátoru README.MD </p>
            <p> jednoduchým způsobem vytvořte jednoduché readme pro vaše projekty </p>
            <p> vyplněním formuláře se vám vygeneruje váš soubor, který stačí zkopírovat a vložit </p>
            <div className='pt-4'>
              <button onClick={props.openDocumentation} className='px-6 py-3 border-buttonColor border-2 rounded-lg hover:-translate-y-1 duration-300'>
                Dokumentace
              </button>
              <button className='px-6 py-3 border-2 border-buttonColor bg-buttonColor rounded-lg ml-4 hover:-translate-y-1 duration-300'
              onClick={() => {
                document.documentElement.classList.add('scroll-animation');
                const headingElement = document.getElementById('firstBorder');
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