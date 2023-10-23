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
            <h2 className="text-5xl font-bold pt-2 uppercase "> dokumentace </h2>
            {/* sekce s popiskem */}
            <div className="pt-4">
                <p className="text-center font-roboto">
                    Vítejte v sekci dokumentace <br/>
                    zde najdete jak tuto aplikaci používat a <br/> 
                    jak kopírovat do vašeho readme souboru
                </p>
                <h3 className="pt-3 text-center text-3xl font-semibold"> Kroky jak postupovat </h3>
                <p data-aos="fade-right"> <span className="text-left text-7xl font-black font-cookie pt-1"> 1 </span> vytvořte readme.md soubor ve vašem repository</p>
                <p data-aos="fade-right" data-aos-delay="500"> <span className="text-right text-7xl font-black font-cookie pt-1"> 2 </span> vyplňte formulář v této aplikaci dle vašich potřeb</p>
                <p data-aos="fade-right" data-aos-delay="1000"> <span className="text-left text-7xl font-black font-cookie pt-1"> 3 </span> klikněte na tlačítko kopírovat, které se nachází na spodní části</p>
                <p data-aos="fade-right" data-aos-delay="1500"> <span className="text-left text-7xl font-black font-cookie pt-1"> 4 </span> vložte do vašeho README.md a obnovte stránku</p>
            </div>
        </div>
    )
}

export default Documentation