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
import Cart from './page/Cart';
import Detaill from './page/Detaill';
import Modification from './page/Modification';
import Product from './page/Product';
import PostForm from './page/PostForm';
import Categories from './page/Categories';
import WomanClothes from './componenet/Category/WomanClothes';
// import Chat from './page/Chat';
// *************************install*******************************************
import {Routes,Route} from 'react-router-dom' //라우터돔
// *************************CSS***********************************************
// *******Hold.css******
import './css/Common.css'
import './css/Hold/Head.css'
import './css/css/NavList.css'
import './css/Hold/Footer.css'
// *******Page.css******
import './css/css/Main.css'
import './css/page/Login.css'
import './css/page/Signup.css'
import './css/page/Detaill.css'
import './css/page/cart.css'
import './css/page/Modification.css'
import './css/page/myPage.css'
import './css/page/PostForm.css'


import './css/page/chat.css'







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
      
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Mypage' element={<Mypage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/Detaill' element={<Detaill/>}/>
        <Route path='/Modification' element={<Modification/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Categories' element={<Categories/>}/>
        <Route path='/categories/100' element ={<WomanClothes/>}/>
        {/* <Route path='/categories/200' element ={<ManClothes/>}/>
        <Route path='/categories/300' element ={<Shoes/>}/>
        <Route path='/categories/400' element ={<WomanClothes/>}/>
        <Route path='/categories/500' element ={<WomanClothes/>}/>
        <Route path='/categories/600' element ={<WomanClothes/>}/>
        <Route path='/categories/700' element ={<WomanClothes/>}/>
        <Route path='/categories/800' element ={<WomanClothes/>}/>
        <Route path='/categories/900' element ={<WomanClothes/>}/>
        <Route path='/categories/1000' element ={<WomanClothes/>}/>
        <Route path='/categories/1100' element ={<WomanClothes/>}/> */}
        <Route path='/PostForm' element={<PostForm/>}/>
      </Routes>
      </div>
      <footer>
        <Footer/>
      </footer>

    </div>

    
          
   

          
  );
}

export default App;