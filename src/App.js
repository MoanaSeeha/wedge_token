import logo from './logo.svg';
import './App.css';
import { Scrollchor } from 'react-scrollchor';

import Home from './pages/home';
import About from './pages/about';
import Description from './pages/desc';
import Features from './pages/features';
import Tokenomics from './pages/tokenomics';
import Roadmap from './pages/roadmap';
import Contact from './pages/contact';

const headerRoutes = [
  { name: "HOME", url: "home" , component:<Home />},
  { name: "ABOUT", url: "about" , component:<About />},
  {component:<Description />},
  {component:<Features />},
  { name: "TOKENOMICS", url: "token" , component:<Tokenomics />},
  { name: "ROADMAP", url: "roadmap" , component:<Roadmap />},
  { name: "CONTACT US", url: "contact" , component:<Contact />},
]

function App() {
  return (
    <div className="App w-full text-white bg-[#0d42b2]">
      <div className="w-full sticky top-0 left-0 bg-[#0b3795] z-50">
        <div className="flex justify-between max-w-6xl items-center w-[85%] mx-auto">
          <div className=" mt-5 mb-5 mr-4 h-6 w-7">
            <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="logo" className="w-full h-full" />
          </div>
          <div className="flex space-x-3">
            {
              headerRoutes.map((r, i) => {
                console.log(r.url, "_+_+_")
                return(r?.url !== undefined ?
                <div className="text-white hover:text-green-300 transition-all cursor-pointer text-sm" key={i}>
                  <Scrollchor to={"#"+r.url}>
                    {r.name}
                  </Scrollchor>
                </div>
                :null
              )})
            }
          </div>
        </div>
      </div>
      {/* Body */}
      <div className=' '>
          {headerRoutes.map((r, i) => {
            return r?.url !== undefined ? <div key={i} id={r.url}>
              {r.component}
          </div>: <div key={i}>{r.component}</div>
          })}
      </div>
    </div>
  );
}

export default App;
