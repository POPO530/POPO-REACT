import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Top from "./pages/Top";
import Game from './pages/Game';
import Kuji from './pages/Kuji';
import './css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" element={<Top />} />
          <Route path="/game" element={<Game />} />
          <Route path="/kuji" element={<Kuji />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;