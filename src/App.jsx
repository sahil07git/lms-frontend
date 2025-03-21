import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import AboutUs from './Pages/AboutUs';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';

function App() {

  return (
    
    <>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/about" element={<AboutUs />} ></Route>

        <Route path="/signup" element={<Signup />} ></Route>

        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;