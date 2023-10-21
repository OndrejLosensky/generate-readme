import React, {useState} from 'react';
import Home from './components/home/Home';
import Documentation from './components/documentation/Documentation';
import "./index.css"

function App() {
  const [showDocumentation, setShowDocumentation] = useState(false);

  const toggleDocumentation = () => {
    setShowDocumentation(!showDocumentation);
  };

  const documentationStyles = {
    flex: 1,
    width: '100%',
    position: 'fixed',
    top: 0,
    bottom: 0,
    zIndex: 2,
    transform: `translateX(${showDocumentation ? 0 : '100%'})`,
    transition: 'transform 0.5s ease',
  };

  const homeStyles = {
    flex: 1,
    display: 'flex',
    transform: `translateX(${showDocumentation ? '-100%' : 0})`,
    transition: 'transform 0.5s ease',
  };

  return (
    <section style={{ display: 'flex', overflow: 'hidden' }}>
      {showDocumentation && (
        <div className='pl-4 pt-4' style={documentationStyles}>
          <button className='px-4 py-2 border-2 border-darkBg rounded-xl' onClick={toggleDocumentation}> Zavřít </button>
          <Documentation />
        </div>
      )}
      <div style={homeStyles}>
        <Home openDocumentation={toggleDocumentation} />
      </div>
    </section>
  );
}


export default App;