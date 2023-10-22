import React from "react";

const Documentation = () => {
    return(
        <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold pt-2 uppercase "> dokumentace </h2>
            {/* sekce s popiskem */}
            <div className="pt-4">
                <p className="text-center">
                    Vítejte v sekci dokumentace <br/>
                    zde najdete jak tuto aplikaci používat a <br/> 
                    jak kopírovat do vašeho readme souboru
                </p>
                <h3 className="pt-3 text-center text-3xl font-semibold"> Vložení dat do readme.md </h3>
                <p> <span className="text-4xl font-black "> 1 </span> vytvořte soubor ve vašem repository s názvem readme.md</p>
                <p> <span className="text-4xl font-black "> 2 </span> vyplňte formulář v této aplikaci dle vašich potřeb</p>
                <p> <span className="text-4xl font-black "> 3 </span> klikněte na tlačítko kopírovat, které se nachází na spodní části</p>
                <p> <span className="text-4xl font-black "> 4 </span> vložte do vašeho README.md a obnovte stránku</p>
            </div>
        </div>
    )
}

export default Documentation