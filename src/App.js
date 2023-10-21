import React, {useState} from 'react';
import Home from './components/home/Home';
import Documentation from './components/documentation/Documentation';

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
        <div style={documentationStyles}>
          <button className='absolute left-0 top-0 pl-8 pt-8' onClick={toggleDocumentation}> Zavřít </button>
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