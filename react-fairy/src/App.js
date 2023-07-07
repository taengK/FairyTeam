import './App.css'
// *************************jsx***********************************************
// *******cpnt.jsx******
import Head from './componenet/Head/Head';
import NavList from './componenet/Navigation/NavList';
import Footer from './componenet/Footer/Footer';
// *******page.jsx******
import Main from './page/Main';
import SignUp from './page/SignUp';
import Login from './page/Login';
import Mypage from './page/Mypage';
import Love from './page/Love';
// *************************install*******************************************
import {Routes,Route} from 'react-router-dom' //라우터돔
// *************************CSS***********************************************
// *******Hold.css******
import './css/Common.css'
import './css/Hold/Head.css'
import './css//Hold/NavList.css'
import './css//Hold/Footer.css'
// *******Page.css******
import './css/page/Main.css'
import './css/page/Login.css'
import './css/page/Signup.css'









function App() {
  return (
    <div id='con'>
      <div id = 'untilMain'>
      <header>
          <Head/>
      </header>
      <nav>
          <NavList/>
      </nav>
      {/*<main>
          <Main/>
      </main>*/}
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Mypage' element={<Mypage/>}/>
        <Route path='/Love' element={<Love/>}/>
      </Routes>
      </div>
      <footer>
        <Footer/>
      </footer>

    </div>

    
          
   

          
  );
}

export default App;