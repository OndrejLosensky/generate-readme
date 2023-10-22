import React from "react";

const Documentation = () => {
    return(
        <div className="flex flex-col items-center">
            <h2 className="text-5xl font-bold pt-2 uppercase "> dokumentace </h2>
            {/* sekce s popiskem */}
            <div className="pt-4">
                <p className="text-center font-roboto">
                    Vítejte v sekci dokumentace <br/>
                    zde najdete jak tuto aplikaci používat a <br/> 
                    jak kopírovat do vašeho readme souboru
                </p>
                <h3 className="pt-3 text-center text-3xl font-semibold"> Vložení dat do readme.md </h3>
                <p> <span className="text-left text-6xl font-black font-dancingScript pt-1"> 1 </span> vytvořte readme.md soubor ve vašem repository</p>
                <p> <span className="text-right text-6xl font-black font-dancingScript pt-1"> 2 </span> vyplňte formulář v této aplikaci dle vašich potřeb</p>
                <p> <span className="text-left text-6xl font-black font-dancingScript pt-1"> 3 </span> klikněte na tlačítko kopírovat, které se nachází na spodní části</p>
                <p> <span className="text-left text-6xl font-black font-dancingScript pt-1"> 4 </span> vložte do vašeho README.md a obnovte stránku</p>
            </div>
        </div>
    )
}

export default Documentation