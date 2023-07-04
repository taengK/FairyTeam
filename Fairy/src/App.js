import './App.css'
import Head from './componenet/Head/Head';
import NavList from './componenet/Navigation/NavList';
import Footer from './componenet/Footer/Footer';
import Main from './page/Main';
import SignUp from './page/SignUp';
import Login from './page/Login';
import Mypage from './page/Mypage';
import Love from './page/Love';
// import {Routes,Route} from 'react-router-dom'
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
    {/* 
       <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/' element={<Mypage/>}></Route>
      <Route path='/' element={<Love/>}></Route>
      </Routes>

    */}

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
