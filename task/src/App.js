import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextAnalyzer from './components/TextAnalyzer';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
      <Route path="/" element={<TextAnalyzer/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
