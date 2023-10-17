import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import DOMPurify from 'dompurify';
import Title from "../../layouts/Title"
import AddInput from '../input/AddInput';


function CreateReadme() {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  // Přidat další UseState pro každý Input do Formu
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
      <h1 className='uppercase text-4xl font-semibold text-center text-white py-6'> Readme generator</h1>
      <div className='flex flex-col items-center  h-screen'>
          <div className='w-[40%] h-[80%] bg-red-800 rounded-2xl'>
            <form className='flex flex-col items-center py-8'>
              <div className='py-6'>
                <Title text="Název projektu:"/>
                <AddInput
                  placeholder="Zde zadejte název"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Title text="Krátký popisek:"/>
                <AddInput
                  placeholder="krátký popisek"
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                />
              </div>
              <div className='px-8'>
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