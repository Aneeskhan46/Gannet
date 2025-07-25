import Shoes from "./shoes";
import { NavLink} from 'react-router-dom';
import '../index.css'

function Collection() {
    return ( 

//Bootstrap’s .row adds negative margins:
  //If you don't want to use .container, remove Bootstrap's negative margin like this:
        <div  className="row mt-5" style={{
  backgroundColor: "#A16D28",
  width: "100%",
  marginLeft: "0",
  marginRight: "0", textAlign:"center",  position: "sticky", top: "0", zIndex: "1000", }}>
              
              
              <div className="col-6 p-2" style={{ display: "flex", justifyContent: "center" }}>
  <NavLink to="." style={{ textDecoration: "none", color: "black" }}>
    {({ isActive }) => (
      <div
        className={`p-1 ${isActive ? "link" : ""}`}
        style={{
          backgroundColor: "white",
          width: "170px",
          borderRadius: "20px",
          paddingTop: "5px",
          textAlign: "center"
        }}
      >
        <h2>Shoes</h2>
      </div>
    )}
  </NavLink>
</div>

            
             
            
            
                 
              <div className="col-6 p-2" style={{ display: "flex", justifyContent: "center" }}>
  <NavLink to="/bags" style={{ textDecoration: "none", color: "black" }}>
    {({ isActive }) => (
      <div
        className={`p-1 ${isActive ? "link" : ""}`}
        style={{
          backgroundColor: "white",
          width: "170px",
          borderRadius: "20px",
          paddingTop: "5px",
          textAlign: "center"
        }}
      >
        <h2>Bags</h2>
      </div>
    )}
  </NavLink>
</div>
             

             
                 
          

        </div>
        
      

          
     );
}

export default Collection;