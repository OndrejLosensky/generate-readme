import React from 'react';


const HorizontalScroll = () => {
  return (
    <div className='pt-20 pb-12'>
    {/* Náhled + tips for creating README*/}
 
    <div className='w-[100%] h-[50%] gap-8 bg-captionColor shadow-xl flex flex-row justify-center items-center pt-12 pb-24'>
        <div className='w-1/2 pl-48 text-center'>
            <h2 id="firstSection" className= 'text-xl font-semibold text-whiteText text-left pt-12'>
              Tips for editing README:
            </h2>
            <p className='text-whiteText text-sm text-left pt-4'>
              Pro <span className='font-bold'> zvýraznění textu</span> obklopte slovo dvěmi * např(**Nadpis**) <br/>
              Pro vytvoření<span className='italic'> kurzívy</span> obklopte slovo jednou * např(*Jméno*) <br/>
              Pro vytvoření <span className='line-through'> přeškrtnutého textu</span> obklopte slovo s dvěmi ~ např(~~Popisek~~) <br/>
              Pro vytvoření <span className='text-buttonColor underline'> odkazu</span> vložte text-link do hranatých závorek a odkaz do kulatých <br/>
              např. ([Klikni](https://link.com)) <br/>
              # funguje jako heading tag --  # = h1 | ###### = h6 <br/>
              pro vytvoření více řádků, pro nový řádek stiskněte "ENTER"
            </p>
          </div>
          <div className='w-1/2 text-center text-whiteText font-light'> 
                <h2 className='text-4xl font-cookie'> Simplified readme.md generating </h2>
                <p className='font-light text-xl'> Generate README for your profile or project <br/> quickly and withnout any hard work </p>
        </div>*
    </div>

  </div>

  );
};

export default HorizontalScroll;
