import React, { useState, useRef } from 'react';
import Title from "../../layouts/Title"
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import 'font-awesome/css/font-awesome.min.css';
import SmallTitle from '../../layouts/SmallTitle';



function CreateReadme() {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [version1, setVersion1] = useState('');
  const [date, setDate] = useState('');
  const [license, setLicense] = useState('');
  const [contact, setContact] = useState('');
  const [live, setLive] = useState('');
  const [language, setLanguage] = useState('');

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
    generateReadme(newTitle, shortDescription, author, version1,date, license, contact, live, language);
  };

  const handleShortDescriptionChange = (e) => {
    const newShortDescription = e.target.value
    setShortDescription(newShortDescription);
    generateReadme(title, newShortDescription, author, version1,date, license, contact, live ,language); 
  };

  const handleAuthorChange = (e) => {
    const newAuthor = e.target.value
    setAuthor(newAuthor);
    generateReadme(title, shortDescription, newAuthor, version1,date, license, contact, live, language); 
  };

  const [selectedItem, setSelectedItem] = useState('1'); 

  const handleVersion1Change = (e) => {
    const selectedOption = e.target.value;
    let updatedVersion;

    if (selectedOption === 'custom') {
      const customVersion = prompt('Zadejte vlastní verzi:');
      if (customVersion !== null) {
        updatedVersion = customVersion;
        setSelectedItem('custom');
      } else {
        updatedVersion = '1'; 
        setSelectedItem('1'); 
      }
    } else {
      updatedVersion = selectedOption;
      setSelectedItem(selectedOption);
    }

    setVersion1(updatedVersion);
    generateReadme(title, shortDescription, author, updatedVersion, date, license, contact, live, language);
  };
  

  const handleDateChange = (e) => {
    const newDate = e.target.value
    setDate(newDate);
    generateReadme(title,shortDescription, author, version1, newDate, license, contact, live, language); 
  };

  const handleLicenseChange = (e) => {
    const newLicence = e.target.value
    setLicense(newLicence);
    generateReadme(title, shortDescription, author, version1,date, newLicence, contact,live, language); 
  };

  const handleContactChange = (e) => {
    const newContact = e.target.value
    setContact(newContact);
    generateReadme(title, shortDescription, author, version1,date ,license, newContact, live, language); 
  };

  const handleLive = (e) => {
    const newLive = e.target.value
    setLive(newLive);
    generateReadme(title, shortDescription,author,version1,date,license,contact, newLive, language)
  };

  const handleLanguageChange = (e) => {
    const updatedLanguage = e.target.value;
    setLanguage(updatedLanguage);
    generateReadme(title, shortDescription,author,version1, date,license,contact,live, updatedLanguage);

  };


  const generateReadme = (newTitle, newShortDescription, newAuthor, newVersion,newDate, newLicence, newContact, newLive, newLanguage) => {
    const readmeContent = `
# **${newTitle}** #

${newShortDescription} 

<p align="left"> ${newLanguage} </p>

<p align="left"> ${newAuthor} </p>
<p align="left"> ${newVersion} </p>
<p align="left"> ${newLicence} </p>
<p align="left"> ${newLive} </p>
<p align="left"> ${newContact} </p>
<p align="center"> název souboru: Readme.md |  datum vytvoření: ${newDate} </p>

    `;
  
    setGeneratedReadme(readmeContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    generateReadme(); 
  };

  return (
    <div> 
      <div>
        {/* Náhled + tips for creating README*/}
        <div className='w-[100%] h-[100%] flex flex-row justify-center items-center pt-8 pb-24'>
              <div>
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

              <div className='w-1/2 pl-12'>
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

      </div>
    
      <div className='pt-8 flex flex-row justify-center h-screen'>
          {/* Levá část*/}
        
          {/* Pravá část*/}
          <div id='firstHeading' className='w-[75%] h-[80%] rounded-2xl'>
            <Title text="Základní info"/>
            <form className='flex flex-col items-center py-4' onSubmit={handleSubmit}>
              <div className='py-0'>

                <div className='items-center'>
                  <div className='w-[850px] py-2 items-left rounded-md '>
                    <label className='relative cursor-pointer w-[850px]'>
                      <input
                        type='text'
                        onChange={handleTitleChange}
                        placeholder='Input'
                        className='h-16  pl-4 w-full text-xl text-whiteText bg-darkBg border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-buttonColor placeholder-copiedColor placeholder-opacity-0 transition duration-200'
                      />
                      <span className='mt-4 text-lg text-whiteText text-opacity-80 bg-darkBg absolute left-4  px-2 transition duration-200 input-text'> Název projektu </span>
                    </label>
                  </div>
                </div>
               

                 {/* TEXT AREA pro popisek */}
                 <div className='pt-4'>
                    <label className='relative cursor-pointer w-[850px]'>
                      <input
                        type='text'
                        onChange={handleShortDescriptionChange}
                        placeholder='Input'
                        className='h-16  pl-4 w-full text-xl text-whiteText bg-darkBg border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-buttonColor placeholder-copiedColor placeholder-opacity-0 transition duration-200'
                      />
                      <span className='mt-4 text-lg text-whiteText text-opacity-80 bg-darkBg absolute left-4  px-2 transition duration-200 input-text'> Krátký popisek </span>
                    </label>
                </div>

                {/* TŘETÍ ŘÁDEK */}
              
                <div className='flex flex-row pt-6'>
                  <div className='w-[48%]'> 
                  <label className='relative cursor-pointer w-[850px]'>
                      <input
                        type='text'
                        required
                        onChange={handleContactChange}
                        placeholder='Input'
                        className='h-16  pl-4 w-full text-xl text-whiteText bg-darkBg border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-buttonColor placeholder-copiedColor placeholder-opacity-0 transition duration-200'
                      />
                      <span className='mt-4 text-lg text-whiteText text-opacity-80 bg-darkBg absolute left-4  px-2 transition duration-200 input-text'> Váš e-mail </span>
                    </label>
                  </div>
                  <div className='w-[4%]'></div>
                  <div className='w-[48%]'> 
                    <label className='relative cursor-pointer w-[850px]'>
                      <input
                        type='text'
                        onChange={handleLive}
                        placeholder='Input'
                        className='h-16  pl-4 w-full text-xl text-whiteText bg-darkBg border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-buttonColor placeholder-copiedColor placeholder-opacity-0 transition duration-200'
                      />
                      <span className='mt-4 text-lg text-whiteText text-opacity-80 bg-darkBg absolute left-4  px-2 transition duration-200 input-text'> Odkaz na live preview </span>
                    </label>
                  </div>
                </div>
                  <div className='flex flex-row pt-6'>
                  <div className='w-[48%]'>
                    <label className='relative cursor-pointer w-[850px]'>
                      <input
                        type='text'
                        onChange={handleAuthorChange}
                        placeholder='Input'
                        className='h-16  pl-4 w-full text-xl text-whiteText bg-darkBg border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-buttonColor placeholder-copiedColor placeholder-opacity-0 transition duration-200'
                      />
                      <span className='mt-4 text-lg text-whiteText text-opacity-80 bg-darkBg absolute left-4  px-2 transition duration-200 input-text'> Autor </span>
                    </label>
                  </div>
                  <div className='w-[4%]'></div>
                  <div className='w-[48%]'>
                    
                  </div>
                </div>
                

                <Title text="další data"/>
                {/* druhá sekce*/}
                <div className='flex flex-row pt-6'>
                  <div className='w-[48%]'>
                    <SmallTitle text="verze projektu"/>
                    <select
                      value={selectedItem}
                      placeholder='vyberte aktuální verzi'
                      onChange={handleVersion1Change}
                      className="px-2 text-whiteText bg-darkBg border-2 border-bg-white rounded-md py-2 w-full"
                      style={{ width: '405px', height: '64px' }}
                    >
                      <option value=''> 1.0.0 </option>
                      <option value='custom'> + přidat verzi</option>
                    </select>
                  </div>
                  <div className='w-[4%]'></div>
                  <div className='w-[48%]'>
                    <SmallTitle text="Použitý jazyk"/>
                    <select
                        value="Vyber jazyk"
                        placeholder='vyberte jazyk'
                        onChange={handleLanguageChange}
                        className="px-2 text-whiteText bg-darkBg border-2 border-bg-white rounded-md py-2 w-full"
                        style={{ width: '405px', height: '64px' }}
                      >
                        <option value='javascript'> JavaScript </option>
                        <option value='python'>Python</option>
                        <option value='c#'>C#</option>
                        <option value='swiftUI'>swiftUI</option>
                      </select>
                  </div>
                </div>

                
                {/* DRUHÝ ŘÁDEK */}
                <div className=' flex flex-row pt-6'>
                  <div className='w-[48%]'>
                  <label className='relative cursor-pointer w-[850px]'>
                    <SmallTitle text="Datum vytvoření"/>
                    <input
                      type='date'
                      onChange={handleDateChange}
                      placeholder='Date'
                      className='px-2 h-16 pl-4 w-full text-xl text-whiteText bg-darkBg border-white border-2 rounded-lg border-opacity-50 outline-none focus:border-buttonColor placeholder-copiedColor placeholder-opacity-0 animate-fade-in'
                    />
                  </label>
                  </div>
                  <div className='w-[4%]'></div>
                  <div className='w-[48%]'>
                    <SmallTitle text="Vyberte licenci"/>
                    <select
                      value={license}
                      onChange={handleLicenseChange}
                      className="text-whiteText bg-darkBg border-2 border-bg-white rounded-md px-2 py-2 w-full"
                      style={{ width: '405px', height: '64px' }}
                    >
                      <option value="Žádná">Žádná </option>
                      <option value="Open Software License 3.0">Open Software License 3.0</option>
                      <option value="Apache license">Apache license 2.0</option>
                      <option value="Creative Commons Zero v1.0 Universal">Creative Commons Zero v1.0 Universal</option>
                      <option value="Eclipse Public License 2.0">Eclipse Public License 2.0</option>
                    </select>
                  </div>
                </div>

               


              </div>

              {/* Tlačítko*/}
              <div className='w-[850px] flex justify-end pt-4'>
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
        <div className='w-full pt-24 h-[90%] mb-12 flex justify-center items-center'>
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
                    
            <div className='h-[500px] flex justify-center items-start'>
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