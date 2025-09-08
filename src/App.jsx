import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css";
import PortfolioDark from './pages/PortfolioDark';

const App = () => {
  React.useEffect(()=>{
    AOS.init({
        duration:700,
        easing:"ease-in-sine",
        offset:100,
      });
  },[]);

  return (
    <>
      <div className="overflow-hidden px-4 sm:px-6 lg:px-12 bg-[#0b1018]"> 
        <PortfolioDark/>
      </div>
    </>
  )
};

export default App;
