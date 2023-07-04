import './App.css'
import Head from './componenet/Head/Head';
import NavList from './componenet/Navigation/NavList';
import Section01 from './componenet/Main/01.MainPage/Section01';
import Section02 from './componenet/Main/01.MainPage/Section02';
import './css/Common.css'
import './css/Head.css'
import './css/NavList.css'
import SubSection01 from './componenet/Main/01.MainPage/02.SubPage/SubSection01';
import Footer from './componenet/Footer/Footer';


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
        <Section01/>
        <Section02/>
        <SubSection01/>
      </main>
      <footer>
        <Footer/>
      </footer>
          

          
    </div>
  );
}

export default App;
