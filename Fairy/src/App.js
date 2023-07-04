// *************************JSX***********************************************
import './App.css'
import Head from './componenet/Head/Head';
import NavList from './componenet/Navigation/NavList';
import Footer from './componenet/Footer/Footer';
import Main from './page/Main';
// *************************CSS***********************************************
import './css/Common.css'
import './css/Head.css'
import './css/NavList.css'
import './css/Main.css'



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
          <Main/>
      </main>
      <footer>
        <Footer/>
      </footer>
          

          
    </div>
  );
}

export default App;
