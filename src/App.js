import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './SharePage/Headers/Headers';
import AllServices from './Pages/AllServices/AllServices';
import Home from './Pages/Home/Home';
import Update from './Pages/Update/Update';
import ManageItems from './Pages/ManageItmes/ManageItems';
import AddItem from './Pages/ManageItmes/AddItem/AddItem';
import Signin from './Pages/SigninPage/Signin/Signin';

function App() {
  return (
    <div className="">
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<AllServices></AllServices>}></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='/add' element={<AddItem></AddItem>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='signin' element={<Signin></Signin>}></Route>
      </Routes>

    </div>
  );
}

export default App;
