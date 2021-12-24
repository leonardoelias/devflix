import './App.css';
import { Routes, Route } from "react-router-dom";
import { PaginaInicial } from './pages/PaginaInicial'
import { PaginaDetalhe } from './pages/PaginaDetalhe'
import { Header } from './components/header'
import { Footer } from './components/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="details" element={<PaginaDetalhe />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
