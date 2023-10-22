import React, { useState, useRef } from 'react';
import Title from "../../layouts/Title"
import AddInput from '../input/AddInput';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import 'font-awesome/css/font-awesome.min.css';



function CreateReadme() {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [version1, setVersion1] = useState('');
  const [date, setDate] = useState('');
  const [license, setLicense] = useState('');
  const [contact, setContact] = useState('');

  const generatedReadmeRef = useRef(null);
  // proměnná pro určení stavu kopírování
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    const readmeContent = generatedReadmeRef.current.textContent;

    const textArea = document.createElement('textarea');
    textArea.value = readmeContent;

    document.body.appendChild(textArea);
    textArea.select();

    document.execCommand('copy');

    document.body.removeChild(textArea);

    // Po spuštení funkce nastaví SetCopied na true
    setCopied(true);

    // Po uplynulé době vzhled vyresetuje
    setTimeout(() => {
      setCopied(false);
    }, 5000); // resetuje po 5 vteřinách
  };

  const centerAlignCSS = {
    textAlign: 'center',
  };


  const defaultReadmeContent = `

  ###  Krátký popisek: ###

  ###  **Autor:** ###


  ### **Verze:** ###

        
  ###  **Licence:** ###


  ### **Kontakt:** ###
    `;

  const [generatedReadme, setGeneratedReadme] = useState(defaultReadmeContent);

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    generateReadme(newTitle, shortDescription, author, version1,date, license, contact);
  };

  const handleShortDescriptionChange = (e) => {
    const newShortDescription = e.target.value
    setShortDescription(newShortDescription);
    generateReadme(title, newShortDescription, author, version1,date, license, contact); 
  };

  const handleAuthorChange = (e) => {
    const newAuthor = e.target.value
    setAuthor(newAuthor);
    generateReadme(title, shortDescription, newAuthor, version1,date, license, contact); 
  };

  const handleVersion1Change = (e) => {
    const newVersion = e.target.value
    setVersion1(newVersion);
    generateReadme(title, shortDescription, author, newVersion, date, license, contact); 
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value
    setDate(newDate);
    generateReadme(title,shortDescription, author, version1, newDate, license, contact); 
  };

  const handleLicenseChange = (e) => {
    const newLicence = e.target.value
    setLicense(newLicence);
    generateReadme(title, shortDescription, author, version1,date, newLicence, contact); 
  };

  const handleContactChange = (e) => {
    const newContact = e.target.value
    setContact(newContact);
    generateReadme(title, shortDescription, author, version1,date ,license, newContact); 
  };


  const generateReadme = (newTitle, newShortDescription, newAuthor, newVersion,newDate, newLicence, newContact) => {
    const readmeContent = `
# **${newTitle}** #

${newShortDescription} 

###  **Autor:** ${newAuthor}### 
### **Verze:**  ${newVersion}###
###  **Licence:** ${newLicence} ### 
### **Kontakt:**  ${newContact}###

##### <p align="center"> název souboru: Readme.md |  datum vytvoření: ${newDate} </p> #####

    `;
  
    setGeneratedReadme(readmeContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    generateReadme(); 
  };

  return (
    <div>
      
      {/* Sekce s popiskem | full page */}
      <div className='pt-8 flex flex-row justify-start h-screen'> {/* ml-24 | smazat justify center pro posunutí doleva*/}
          {/* Levá část*/}
          <div className='w-[40%] h-[80%]flex flex-col pl-12'>
            <div className='h-[28%]'>
              <h2 id="firstSection" className= 'text-xl font-semibold text-whiteText text-left pt-4'>
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
            <div className='h-2/3'>
              <p className='pt-4 font-semibold text-whiteText text-left uppercase text-4xl '> 
                náhled
              </p>
              <div className='text-left text-whiteText  justify-center mt-4 h-[70%]
              rounded-md shadow-md shadow-whiteText bg-outputColor'>
                {generatedReadme && (
                  <div className="markdown-content p-4">
                    <ReactMarkdown remarkPlugins={[gfm]}>
                      {generatedReadme}
                    </ReactMarkdown>
                    {/* Center-align the last line */}
                    <div style={centerAlignCSS}>
                      {/*<p>název souboru: Readme.md |  datum vytvoření: {date}</p>*/}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pravá část*/}
          <div className='w-[60%] h-[80%] rounded-2xl'>
            <form className='flex flex-col items-center py-4' onSubmit={handleSubmit}>
              <div className='py-0'>
                
                <Title text="Název projektu:"/>
                <div className='w-[650px] rounded-md'>
                  <AddInput
                    placeholder="Zde zadejte název"
                    value={title}
                    onChange={handleTitleChange}
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
                    onChange={handleAuthorChange}
                    type={"text"}
                    />
                  </div>
                  <div className='w-[8%]'></div>
                  <div className='w-[46%]'>
                    <Title text="Verze"/>
                    <AddInput
                    placeholder="Aktuální verze"
                    value={version1}
                    onChange={handleVersion1Change}
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
                    onChange={handleDateChange}
                    type={"date"}
                    />
                  </div>
                  <div className='w-[8%]'></div>
                  <div className='w-[46%]'>
                    <Title text="Licence"/>
                    <AddInput
                    placeholder="Typ licence"
                    value={license}
                    onChange={handleLicenseChange}
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
                  onChange={handleContactChange}
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
                  onChange={handleShortDescriptionChange}
                  >

                  </textarea>
                </div>


              </div>

              {/* Tlačítko*/}
              <div className='w-[650px] flex justify-end pt-2'>
                <button onClick={() => window.location.reload()} className='mx-2 text-whiteText px-6 py-3 border-2 border-buttonColor rounded-xl hover:bg-buttonHover duration-300'>
                  Resetovat
                </button>
                <button className='mx-2 text-whiteText px-6 py-3 border-2 border-buttonColor bg-buttonColor rounded-xl hover:bg-buttonHover hover:border-buttonHover duration-300'
                onClick={() => {
                  document.documentElement.classList.add('scroll-animation');
                  const headingElement = document.getElementById('output');
                  if (headingElement) {
                    headingElement.scrollIntoView({
                      behavior: 'smooth',
                      
                    });
                  }
                  setTimeout(() => {
                    document.documentElement.classList.remove('scroll-animation');
                  }, 3000); 
                }}>
                  hotovo
                </button>
               
              </div>
              
            </form>
            <div className='text-white text-center absolute top-0 right-0 pr-8 pt-8'>
            
            </div>
          </div>
        
        </div>
        {/* Sekce pro zobrazení výstupu*/}
        <div className='w-full h-[80%] mb-12 flex justify-center items-center'>
          <div className='w-2/3'>
            <div className='flex flex-row justify-between'>
              <h2 className='uppercase text-3xl font-semibold text-whiteText text-left py-4 flex-grow-1'> code with readme data </h2>
              <div className='flex items-center justify-end'>
              <button
                className={`px-6 py-3 text-whiteText rounded-xl ${
                  copied ? 'bg-copiedColor' : 'bg-buttonColor'
                }`}
                onClick={copyToClipboard}
              >
                {copied ? (
                  <>
                    <i className="fa fa-check" /> {/* Font Awesome checkmark icon */}
                    Zkopírováno
                  </>
                ) : (
                  <>
                    <i className="fa fa-copy" /> {/* Font Awesome copy icon */}
                    Kopírovat
                  </>
                )}
              </button>
              </div>
            </div>
                    
            <div className='h-1/2 flex justify-center items-start'>
              <div id='output' className='bg-outputColor rounded-lg h-[400px] w-full overflow-auto px-6 text-whiteText'>
              <pre>
                  <code ref={generatedReadmeRef}>
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