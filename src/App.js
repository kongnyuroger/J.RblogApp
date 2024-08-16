
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/pages/home/Home';
import Work from './components/pages/work/Work';
import Blog from './components/pages/blog/Blog';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/Work' element={<Work />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
