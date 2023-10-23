import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const Hero = () => {

    useEffect(() => {
      AOS.init({duration: "1500" });
    },[])

    return(
      <div className="h-[1100px] flex flex-col items-center justify-center pt-8">
        <h2 id="tutorialHeading" className="text-4xl text-whiteText font-semibold text-center pb-4"> Jak postupovat </h2>
        <div className="w-[80%] h-[500px] flex flex-row">
            {/*Levá část*/}
            <div className="h-[100%] w-1/2 bg-darkBg border-r-2 border-whiteText">
              <div>
                  <p data-aos="fade-right" data-aos-delay="00" className="pr-12 pt-[0px] text-right text-whiteText"> <span className="pr-2 text-whiteText text-6xl font-cookie">1</span> 
                  Vytvořte si soubor s názvem <span className="font-bold">'Readme.md'</span>, který uložte 
                  </p>

                  <p data-aos="fade-right" data-aos-delay="400" className="pr-12 pt-[120px] text-right text-whiteText"> <span className="pr-2 text-whiteText text-6xl font-cookie">3</span> 
                  Vyplněním textu zahájíte tvorbu vašeho Readme.md 
                  </p>

                  <p data-aos="fade-right" data-aos-delay="600" className="pr-12 pt-[150px] text-right text-whiteText"> <span className="pr-2 text-whiteText text-6xl font-cookie">5</span> 
                  Zkopírujte text a vložte do vašeho souboru a máte to.
                  </p>
                 
              </div>
            </div>
            {/*Pravá část*/}

            <div className="h-[100%] w-1/2 bg-darkBg border-l-2 border-whiteText ">
                <p data-aos="fade-left" data-aos-delay="200" className="pl-12 pt-[100px] text-left text-whiteText"> <span className="pr-2 text-whiteText text-6xl font-cookie">2</span>
                 Po uložení se vraťte do této aplikace a začněte
                </p>

                <p data-aos="fade-left" data-aos-delay="600" className="pl-12 pt-[140px] text-left text-whiteText"> <span className="pr-2 text-whiteText text-6xl font-cookie">4</span>
                Pro dokončení klikněte níže na tlačítko <span className="font-bold">'Hotovo'</span>
                </p>
            </div>
            <div className="pt-16">
            </div>
        </div>
        <div className="pt-8">
          <button className="bg-buttonColor px-8 py-3 text-whiteText text-lg rounded-xl hover:-translate-y-1 duration-300"
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
            }, 2000); 
          }}
          > Začít 
          </button>
        </div>
      </div>
     
    )
}

export default Hero