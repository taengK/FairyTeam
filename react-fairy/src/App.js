import './App.css'
import { Routes, Route } from 'react-router-dom' //라우터돔
// *************************jsx***********************************************
// *******Hold.jsx******
import Head from './componenet/Head/Head';
import NavList from './componenet/Navigation/NavList';
import Footer from './componenet/Footer/Footer';
// *******SignUp.jsx******
import SignUp from './componenet/Category/01_SignIn_Login/SignUp';
import Login from './componenet/Category/01_SignIn_Login/Login';
import SignUpLogin from './componenet/Category/01_SignIn_Login/SignUpLogin';

//**************************** */
import InfoBar from './componenet/InfoBar/infoBar'
import Input from './componenet/Input/Input';
import Messages from './componenet/Messages/Messages'
import TextContainer from './componenet/TextContainer/TextContainer'

// **************************************page.jsx*************************************
// *******page.jsx******
import Main from './page/Main';
import Mypage from './page/Mypage';
import Cart from './page/Cart';
import Detaill from './page/Detaill';
import Modification from './page/Modification';
import PostForm from './page/PostForm';
import Chat from './page/Chat';
import Join from './page/Join';





// *************************CSS***********************************************
// *******Hold.css******
import './css/Common.css'
import './css/Hold/Head.css'
import './css/Hold/NavList.css'
import './css/Hold/Footer.css'
// *******SignUp_Login.css******
import './css/Hold/01_SignIn_Login/SignUpLogin.css'
import './css/Hold/01_SignIn_Login/Signup.css'
// *******SignUp_Login.css******



// *******Page.css******
import './css/page/Main.css'
import './css/page/Detaill.css'
import './css/page/cart.css'
import './css/page/Modification.css'
import './css/page/Mypage.css'
import './css/page/PostForm.css'
import './css/page/Kakaomap.css'
import './componenet/InfoBar/infoBar.css'
import './componenet/Input/Input.css';
import './componenet/Messages/Messages.css'
import './componenet/TextContainer/TextContainer.css'
import './css/page/chat.css'

// Category
import WomanClothes from './componenet/Category/WomanClothes';
import ManClothes from './componenet/Category/ManClothes';
import Shoes from './componenet/Category/Shoes';
import BagWallet from './componenet/Category/BagWallet';
import HomeApp from './componenet/Category/HomeApp';
import Sports from './componenet/Category/Sports';
import Book from './componenet/Category/Book';
import Digital from './componenet/Category/Digital';
import Beauty from './componenet/Category/Beauty';
import Interior from './componenet/Category/Interior';
import DailySupplies from './componenet/Category/DailySupplies';


import { useState } from 'react';





function App() {

  const [check, setCheck] = useState(0);
  

  return (
    <div id='con' >
      <div id='untilMain'  >
        <div className='HN' >
          <div className='GNB'></div>
          <header >
            <Head />
          </header>
          <nav>
            <NavList chCheck={() => setCheck(check + 1)} />
          </nav>
        </div>
      </div>
      <main>
        <Routes>
          {/*******************SignUp_Login**************************/}
          <Route path='/SignUpLogin' element={<SignUpLogin />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          {/*******************SignUp_Login**************************/}


          <Route path='/' element={<Main />} /> 
          <Route path='/Mypage' element={<Mypage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Detaill/:seq' element={<Detaill />} />
          <Route path='/Modification' element={<Modification />} />
          <Route path='/PostForm' element={<PostForm />} />
          <Route path='/Chat' element={<Chat />} />
          <Route path='/Join' element={<Join />} />

          {/*************************************Categories************************************************/}
          {/* <Route path='/Categories' element={<Categories/>}/> */}
          <Route path='/categories/100' element={<WomanClothes check={check} />} />
          <Route path='/categories/200' element={<ManClothes check={check} />} />
          <Route path='/categories/300' element={<Shoes check={check} />} />
          <Route path='/categories/400' element={<BagWallet check={check} />} />
          <Route path='/categories/500' element={<Digital check={check} />} />
          <Route path='/categories/600' element={<HomeApp check={check} />} />
          <Route path='/categories/700' element={<Sports check={check} />} />
          <Route path='/categories/800' element={<Book check={check} />} />
          <Route path='/categories/900' element={<Beauty check={check} />} />
          <Route path='/categories/1000' element={<Interior check={check} />} />
          <Route path='/categories/1100' element={<DailySupplies check={check} />} />


          {/* <Route path='/categories/list1' element={<List1 />} />
          <Route path='/categories/list2' element={<List2 />} />
          <Route path='/categories/list3' element={<List3 />} />
          <Route path='/categories/list4' element={<List4 />} /> */}
        </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>






  );
}

export default App;