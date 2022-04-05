import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Notfound from './components/Notfound/Notfound';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
