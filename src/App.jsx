import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';

function App() {

  return (
    
    <>
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>

      </Routes>
      <Footer />
    </>
  )
}

export default App;