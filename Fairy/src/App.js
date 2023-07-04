import './App.css'
import Head from './componenet/Head/Head';

import NavList from './componenet/Navigation/NavList';
import './css/Common.css'
import './css/Head.css'
import './css/NavList.css'
import './css/Section01.css'
function App() {
  return (
    <div id='con'>
      <header>
          <Head/>
      </header>
      <nav>
          <NavList/>
      </nav>
      <main>
        <div></div>
      </main>
          
          {/* footer */}

          <h1>by 김호현</h1>
    </div>
  );
}

export default App;
