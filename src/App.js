import React, {useState} from 'react';
import Home from './components/home/Home';
import Documentation from './components/documentation/Documentation';
function App() {

  const [open, setOpen] = useState(false);

  const toggleDocumentation = () => {
    setOpen(!open);
  };

  return (
    <section>
      <div className={`${open ? "w-0": "w-[100%]"} duration-500`} >
        <Home openDocumentation={toggleDocumentation} />
      </div>
      <div className={`${open ? "w-[0%]": "w-[100%]"} duration-500 bg-whiteText`}>
        <button className={`${open ? "scale-100": "scale-0"} absolute left-0 top-0 pl-8 pt-8`} onClick={()=>setOpen(!open)}> Zavřít </button>
        <Documentation/>
      </div>
    </section>
  )
}

export default App;