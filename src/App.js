import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import DOMPurify from 'dompurify';


function App() {
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
      <form>
        <input
          type="text"
          placeholder="Název projektu"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <button type="button" onClick={generateReadme}>
          Generate README
        </button>
      </form>
      <div dangerouslySetInnerHTML={{ __html: generatedReadme }}></div>
    </div>
  );
}

export default App;