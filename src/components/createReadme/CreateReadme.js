import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import DOMPurify from 'dompurify';
import Title from "../../layouts/Title"
import AddInput from '../input/AddInput';


function CreateReadme() {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [version1, setVersion1] = useState('');
  const [date, setDate] = useState('');
  const [license, setLicense] = useState('');
  const [contact, setContact] = useState('');


  const [generatedReadme, setGeneratedReadme] = useState('');

  const generateReadme = () => {
    // Šablona readme | lze nastavit vzled
    const readmeContent = `
    <h1>${title}</h1>
    <p>${shortDescription}</p>
    `;

    // Stáhne soubor s názvem README.MD 
    //const blob = new Blob([readmeContent], { type: 'text/markdown' });
    //saveAs(blob, 'README.md');

    // Zobrazí obsah readme v prohlížeči
    setGeneratedReadme(DOMPurify.sanitize(readmeContent));
  };

  return (
    <div>
      <h1 className='uppercase text-4xl font-bold text-center text-white py-6'> Readme generator</h1>
      <div className='flex flex-col items-center  h-screen'>
          <div className='w-[40%] h-[85%] bg-red-800 rounded-2xl'>
            <form className='flex flex-col items-center py-8'>
              <div className='py-6'>
                
                <Title text="Název projektu:"/>
                <div className='w-[450px] rounded-md'>
                  <AddInput
                    placeholder="Zde zadejte název"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div>
                  <Title text="Krátký popisek:"/>
                  <AddInput
                    placeholder="krátký popisek"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
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
                    />
                  </div>
                  <div className='w-[8%]'></div>
                  <div className='w-[46%]'>
                    <Title text="Verze"/>
                    <AddInput
                    placeholder="Aktuální verze"
                    value={version1}
                    onChange={(e) => setVersion1(e.target.value)}
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
                    />
                  </div>
                  <div className='w-[8%]'></div>
                  <div className='w-[46%]'>
                    <Title text="Licence"/>
                    <AddInput
                    placeholder="Typ licence"
                    value={license}
                    onChange={(e) => setLicense (e.target.value)}
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
                  />
                </div>


              </div>

              {/* Tlačítko*/}
              <div className='px-8 py-6'>
                <button className='text-white px-6 py-3 bg-blue-500 rounded-xl hover:bg-blue-400 duration-300'
                 type="button" onClick={generateReadme}>
                  Vygeneruj README
                </button>
              </div>
              
            </form>
            <div className='text-white text-center'>
              <div dangerouslySetInnerHTML={{ __html: generatedReadme }}></div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default CreateReadme