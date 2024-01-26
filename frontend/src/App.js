import './App.css';
import Acc_home from './pages/account_home/acc_home';
import Home from './pages/home/home';
import Signup from './pages/signup/signup';
import Login from './pages/login/login';
import Stories from './pages/stories/stories';
import PuzzleGame from './pages/puzzles_games/puzzle_game';
import Legalabc from './pages/legalabc/legalabc';
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
          <Route path='/stories' element={<Stories/>}/>
          <Route path='/puzzle-game' element={<PuzzleGame/>}/>
          <Route path='/legal-abc' element={<Legalabc/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
