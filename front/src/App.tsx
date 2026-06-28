import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import Footer from './pages/Footer';
import Game from './pages/Game';
import Kuji from './pages/Kuji';
import './index.css';
import './css/App.css';

function App() {
  return (
    <div className="app-container">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="game" element={<Game />} />
          <Route path="1kuji" element={<Kuji />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;