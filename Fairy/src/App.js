import './App.css'
import Head from './componenet/Head/Head';
import Section01 from './componenet/Main/Section01';
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
      <footer>
      </footer>
    </div>
  );
}

export default App;