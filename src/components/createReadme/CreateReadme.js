import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import DOMPurify from 'dompurify';


function CreateReadme() {
  const [title, setTitle] = useState('');
  // Přidat další UseState pro každý Input do Formu
  const [generatedReadme, setGeneratedReadme] = useState('');

  const generateReadme = () => {
    // Šablona readme | lze nastavit vzled
    const readmeContent = `<h1>${title}</h1>`;

    // Stáhne soubor s názvem README.MD 

    //const blob = new Blob([readmeContent], { type: 'text/markdown' });
    //saveAs(blob, 'README.md');

    // Zobrazí obsah readme v prohlížeči
    setGeneratedReadme(DOMPurify.sanitize(readmeContent));
  };

  return (
    <div>
      <h1 className='uppercase text-4xl font-semibold text-center text-white py-6'> Readme generator</h1>
      <div className='flex flex-col items-center justify-center h-screen'>
          <div className='w-[40%] h-[300px] bg-red-800 rounded-2xl'>
            <form className='flex flex-col items-center py-8'>
              <div className='py-6'>
                <input 
                  className='text-white bg-yellow-300 py-2 px-2'
                  type="text"
                  placeholder="Název projektu"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
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