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
    const blob = new Blob([readmeContent], { type: 'text/markdown' });
    saveAs(blob, 'README.md');

    // Zobrazí obsah readme v prohlížeči
    setGeneratedReadme(DOMPurify.sanitize(readmeContent));
  };

  return (
      <div>
        <div className='w-[60%] h-[300px] bg-red-800 mx-auto justify-center items-center'>
          <form className='flex items-center justify-center pt-8'>
            <input 
              className='text-white'
              type="text"
              placeholder="Název projektu"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <button className='text-white' type="button" onClick={generateReadme}>
              Generate README
            </button>
          </form>
          <div dangerouslySetInnerHTML={{ __html: generatedReadme }}></div>
        </div>
      </div>
  );
}

export default CreateReadme