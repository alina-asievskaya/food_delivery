
import './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Reviews from './pages/Reviews';


function App() {

  return (
    <div className='app-wrapper'>
    <Router>
      <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
          <Footer />
    </Router>

      </div>
  )
}

export default App;
