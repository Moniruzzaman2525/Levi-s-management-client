import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './SharePage/Headers/Headers';
import Home from './Pages/Home/Home';
import Update from './Pages/Update/Update';
import ManageItems from './Pages/ManageItmes/ManageItems';
import AddItem from './Pages/ManageItmes/AddItem/AddItem';
import Signin from './Pages/SigninPage/Signin/Signin';
import Signup from './Pages/SigninPage/Signup/Signup';
import RequireAuth from './Pages/SigninPage/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyItems from './Pages/ManageItmes/MyItems/MyItems';
import Footer from './SharePage/Footer/Footer';
import NotFound from './SharePage/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="">
      <Headers></Headers>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manage' element={<RequireAuth><ManageItems></ManageItems></RequireAuth>}></Route>
        <Route path='/add' element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path='/update/:id' element={<RequireAuth><Update></Update></RequireAuth>}></Route>
        <Route path='/signin' element={<Signin></Signin>}></Route>
        <Route path='/myitems' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
