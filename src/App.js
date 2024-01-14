import './App.css';
import Acc_home from './pages/account_home/acc_home';
import Home from './pages/home/home';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/acc-home' element={<Acc_home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
