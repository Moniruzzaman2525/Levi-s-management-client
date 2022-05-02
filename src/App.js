import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headers from './SharePage/Headers/Headers';
import AllServices from './Pages/AllServices/AllServices';
import Home from './Pages/Home/Home';
import Manage from './Pages/Manage/Manage';
import Update from './Pages/Update/Update';

function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<AllServices></AllServices>}></Route>
        <Route path='/manage' element={<Manage></Manage>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
      </Routes>

    </div>
  );
}

export default App;
