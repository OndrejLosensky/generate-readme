import React, { useState } from 'react';
import Title from "../../layouts/Title"
import AddInput from '../input/AddInput';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';



function CreateReadme() {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [version1, setVersion1] = useState('');
  const [date, setDate] = useState('');
  const [license, setLicense] = useState('');
  const [contact, setContact] = useState('');

  const defaultReadmeContent = `
# **Toto je defaultní šablona** #

- *obsah lze snadno nastavit*
- ~~soubor lze následně upravit i v kodu~~
### změna velikosti fontu ###
###### nejmenší heading ######
    `;

  const [generatedReadme, setGeneratedReadme] = useState(defaultReadmeContent);


  const generateReadme = () => {
    const readmeContent = `
# **${title}** #
###  ${shortDescription} ###
###  **Autor:** ###
  ${author}
      
### **Verze:** ###
  ${version1}
      
###  **Licence:** ###
  ${license}
      
### **Kontakt:** ###
  ${contact}

####### název souboru: README.MD | datum vytvoření: ${date} ######
    `;
  
    setGeneratedReadme(readmeContent);
  };

  return (
    <div>
      <h1 className='uppercase text-5xl font-bold text-center text-whiteText py-6'> Readme generator</h1>
      {/* Sekce s popiskem */}
      <div>
        <p className='text-whiteText text-xl text-center py-8'>
          Toto je popisek
        </p>
      </div>
      <div className='flex flex-row justify-start h-screen'> {/* ml-24 | smazat justify center pro posunutí doleva*/}
          {/* Levá část*/}
          <div className='w-[40%] h-[80%]flex flex-col pl-12'>
            <div className='h-[28%]'>
              <h2 className= 'text-xl font-semibold text-whiteText text-left pt-4'>
                Tips for editing README:
              </h2>
              <p className='text-whiteText text-sm text-left pt-4'>
                Pro <span className='font-bold'> zvýraznění textu</span> obklopte slovo dvěmi * např(**Nadpis**) <br/>
                Pro vytvoření<span className='italic'> kurzívy</span> obklopte slovo jednou * např(*Jméno*) <br/>
                Pro vytvoření <span className='line-through'> přeškrtnutého textu</span> obklopte slovo s dvěmi ~ např(~~Popisek~~) <br/>
                Pro vytvoření <span className='text-buttonColor underline'> odkazu</span> vložte text-link do hranatých závorek a odkaz do kulatých <br/>
                např. ([Klikni](https://link.com)) <br/>
                # funguje jako heading tag --  # = h1 | ###### = h6
              </p>
            </div>
            <div className='h-2/3'>
              <p className='font-semibold text-whiteText text-left uppercase text-4xl '> 
                náhled
              </p>
              <div className='text-left text-whiteText  justify-center mt-4 h-[70%] border-2 border-whiteText
              rounded-md shadow-lg bg-buttonColor'>
                {generatedReadme && (
                  <div className="markdown-content p-4">
                    <ReactMarkdown remarkPlugins={[gfm]}>
                      {generatedReadme}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pravá část*/}
          <div className='w-[60%] h-[80%] rounded-2xl'>
            <form className='flex flex-col items-center py-4'>
              <div className='py-0'>
                
                <Title text="Název projektu:"/>
                <div className='w-[650px] rounded-md'>
                  <AddInput
                    placeholder="Zde zadejte název"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type={"text"}
                  />
                </div>

                {/* TŘETÍ ŘÁDEK */}
                <div className='flex flex-row'>
                  <div className='w-[46%]'>
                    <Title text="Autor"/>
                    <AddInput
                    placeholder="vaše jméno"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    type={"text"}
                    />
                  </div>
                  <div className='w-[8%]'></div>
                  <div className='w-[46%]'>
                    <Title text="Verze"/>
                    <AddInput
                    placeholder="Aktuální verze"
                    value={version1}
                    onChange={(e) => setVersion1(e.target.value)}
                    type={"number"}
                    />
                  </div>
                </div>
                {/* ČTVRTÝ ŘÁDEK */}
                <div className=' flex flex-row'>
                  <div className='w-[46%]'>
                    <Title text="Datum"/>
                    <AddInput
                    placeholder="Datum"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type={"date"}
                    />
                  </div>
                  <div className='w-[8%]'></div>
                  <div className='w-[46%]'>
                    <Title text="Licence"/>
                    <AddInput
                    placeholder="Typ licence"
                    value={license}
                    onChange={(e) => setLicense (e.target.value)}
                    type={"text"} // checkbox pro výběr licence
                    />
                  </div>
                </div>

                {/* Pátý řádek*/}
                <div>
                  <Title text="Kontakt"/>
                  <AddInput
                  placeholder="Váš e-mail"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type={"email"}
                  required
                  />
                </div>

                {/* TEXT AREA pro popisek */}
                <div>
                  <Title text="Krátký popisek:"/>
                  <textarea
                  className="text-darkText resize-none bg-transparent border-2 border-bg-white rounded-md px-2 py-2 w-full"
                  placeholder="Krátký popisek"
                  rows={3}
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  >

                  </textarea>
                </div>


              </div>

              {/* Tlačítko*/}
              <div className='w-[650px] flex justify-end pt-2'>
                <button className='mx-2 text-whiteText px-6 py-3 border-2 border-buttonColor rounded-xl hover:bg-buttonHover duration-300'>
                  Resetovat
                </button>
                <button className='border-2 border-buttonColor text-whiteText px-6 py-3 bg-buttonColor rounded-xl hover:bg-buttonHover duration-300'
                 type="button" onClick={generateReadme}>
                  Vygeneruj README
                </button>
               
              </div>
              
            </form>
            <div className='text-white text-center absolute top-0 right-0 pr-8 pt-8'>
            
            </div>
          </div>
        
        </div>
        {/* Sekce pro zobrazení výstupu*/}
        <div className='w-full h-[80%] mb-12 flex justify-center items-center'>
          <div className='w-1/2'>
            <div className='flex flex-row justify-between'>
              <h2 className='uppercase text-3xl font-semibold text-whiteText text-left py-4 flex-grow-1'> code with readme data </h2>
              <div className='flex items-center justify-end'>
                <button className='px-6 py-3 text-whiteText bg-buttonColor rounded-lg
                hover:bg-buttonHover duration-300'>
                  Kopírovat
                </button>
              </div>
            </div>
                    
            <div className='h-1/2 flex justify-center items-start'>
              <div className='bg-buttonColor rounded-lg h-[400px] w-full overflow-auto px-6'>
                <pre>
                  <code>
                    {generatedReadme}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>


        
      </div>
  );
}

export default CreateReadme