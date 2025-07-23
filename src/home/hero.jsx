import { useEffect } from "react";
import TypingText from "./Typing";

function Hero() {



  return (
    <div className="container p-3">
      <div
        className="row row-cols-1 row-cols-lg-1 mt-4"
        style={{ backgroundColor: "#A16D28" }}
      >
        <div className="col p-5 text-center">
          <div className="scroll-wrapper">
  <div className="scroll-content">
    <img className="scroll-img" src="images/shoe1.jpg" alt="shoe1" />
    <img className="scroll-img" src="images/shoes2.jpg" alt="shoe2" />
    <img className="scroll-img" src="images/shoes3.webp" alt="shoe3" />
    <img className="scroll-img" src="images/bag.jpeg" alt="shoe4" />
     <img className="scroll-img" src="images/bag.jpg" alt="shoe4" />

    {/* Clone for infinite loop */}
    <img className="scroll-img" src="images/shoe1.jpg" alt="shoe1" />
    <img className="scroll-img" src="images/shoes2.jpg" alt="shoe2" />
    <img className="scroll-img" src="images/shoes3.webp" alt="shoe3" />
     <img className="scroll-img" src="images/bag.jpeg" alt="shoe4" />
     <img className="scroll-img" src="images/bag.jpg" alt="shoe4" />

  </div>
</div>


          <h2 className="flicker-text mt-2 text-white mt-4">GANNET</h2>
           
          <h2 className="flicker-text text-white mb-4">"The search ends here"</h2>

      <TypingText/>
        </div>

      

             

      </div>
    </div>
  );
}

export default Hero;
