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
            <div>
              <p className='text-whiteText text-sm text-left pt-4'>
                For <span className='font-bold'>highlighting text</span> surround the word with two asterisks (**) <br/>
                To create <span className='italic'>italics</span>, surround the word with a single asterisk (*) <br/>
                To create <span className='line-through'>strikethrough text</span>, surround the word with two tildes (~)<br/>
                To create a <span className='text-buttonColor underline'>link</span>, place the text-link in square brackets and the link in round brackets for example ([Click](https://link.com)) <br/>
                # works as a heading tag | # == h1 <br/>
              </p>
            </div>
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
