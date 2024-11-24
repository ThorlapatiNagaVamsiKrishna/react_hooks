import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Product from './components/Product';
import Login from './components/Login';
import ProtectedRouter from './components/ProtectedRouter';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRouter />}>
          <Route path='/about' element={<About />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
