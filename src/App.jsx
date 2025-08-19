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
  return (<>
  <div className="overFlow-hidden"> 
    <PortfolioDark/>
   
  </div>
  </>
    
    
  )
};

export default App