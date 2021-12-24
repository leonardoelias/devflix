import './App.css';
import { Routes, Route } from "react-router-dom";
import { PaginaInicial } from './pages/PaginaInicial'
import { PaginaDetalhe } from './pages/PaginaDetalhe'
import { Header } from './components/header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route path="details" element={<PaginaDetalhe />} />
      </Routes>
    </div>
  );
}

export default App;
