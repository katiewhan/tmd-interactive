import { useState } from 'react';

import '../styles/App.css';
import Interactive from './Interactive';
import Tips from './Tips';
import Resources from './Resources';
import About from './About';

const ABOUT = 'About';
const INTERACTIVE = 'Interactive';
const TIPS = 'Tips';
const RESOURCES = 'Resources';

function App() {
  const [currentPage, setCurrentPage] = useState(ABOUT);

  let content;
  switch (currentPage) {
    case ABOUT:
      content = <About></About>;
      break;
    case INTERACTIVE:
      content = <Interactive></Interactive>;
      break;
    case TIPS:
      content = <Tips></Tips>;
      break;
    case RESOURCES:
      content = <Resources></Resources>;
      break;
    default:
      content = <About></About>;
      break;
  }

  return (
    <div className={`App ${currentPage}`}>
      <div className={`content ${currentPage}`}>
        {content}
      </div>
      <nav className='nav-bar'>
          <div className='nav-section' onClick={() => setCurrentPage(ABOUT)}>{ABOUT}</div>
          <a href='https://4t4yanofw3n.typeform.com/to/lEi6co95' target='_blank'><div className='nav-section'>Survey</div></a>
          <div className='nav-section' onClick={() => setCurrentPage(INTERACTIVE)}>{INTERACTIVE}</div>
          <div className='nav-section' onClick={() => setCurrentPage(TIPS)}>{TIPS}</div>
          <div className='nav-section' onClick={() => setCurrentPage(RESOURCES)}>{RESOURCES}</div>
      </nav>
    </div>
  );
}

export default App;
