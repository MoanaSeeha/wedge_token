import logo from './logo.svg';
import './App.css';
import { Button } from '@material-tailwind/react';
import Header from './layout/header';
import Home from './pages/home';
import About from './pages/about';
import Description from './pages/desc';
import Features from './pages/features';
import Tokenomics from './pages/tokenomics';
import Roadmap from './pages/roadmap';
import Contact from './pages/contact';

function App() {
  return (
    <div className="App w-full text-white bg-[#0d42b2]">
      <Header />
      {/* Body */}
      <div className=' '>
        <Home/>
        <About/>
        <Description/>
        <Features/>
        <Tokenomics/>
        <Roadmap/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
