import React, {useState} from 'react';
import Home from './components/home/Home';
import Documentation from './components/documentation/Documentation';
function App() {

  const [open, setOpen] = useState(false);

  const toggleDocumentation = () => {
    setOpen(!open);
    
  };

  return (
    <section className=''>
      <div className={`transition-all ${open ? 'w-0' : 'w-full'} duration-500`} >
        <Home openDocumentation={toggleDocumentation} />
      </div>
      {open && (
        <div className={`transition-all w-full duration-500 bg-whiteText`} style={{ transform: open ? 'scale(1)' : 'scale(0)' }}>
          <button className='absolute left-0 top-0 pl-8 pt-8' onClick={toggleDocumentation}> Zavřít </button>
          <Documentation />
        </div>
      )}
    </section>
  )
}

export default App;