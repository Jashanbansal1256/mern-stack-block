import './App.css';
import Header from './components/header';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import AddBlog from './pages/add-blog';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
         <Route exact path='/' element={<Home></Home>}></Route>
         <Route exact path='/add-blog' element={<AddBlog />}></Route>
      </Routes>
    </div>
  );
}

export default App;
