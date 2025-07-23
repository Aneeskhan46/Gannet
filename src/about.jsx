import React from 'react';
import './about.css'; // ✅ Import the CSS file

function About() {
  return (
    <div className="image ">
        <div  className='container ' style={{marginTop:"90px"}}>

       <div className='row content row-cols-1 row-cols-md-2' style={{marginBottom:"100px"}}>

         <div className='col' style={{display:"flex", justifyContent:"center"}}>
               <img  style={{borderRadius:"50%", width:"490px"}} src='images/logo.png'/>
         </div>

          <div className='col p-5 ' style={{display:"flex",alignItems:"center", fontSize:"20px"}}>
               <p>We are into leather shoes and goods manufacturing industry since 1993.<br></br> 
                Being a manufacturer we provide the best pricing & quality assurance. As our moto is to end the consumers search..
              </p>
         </div>

       </div>



       <div className='row content row-cols-1 row-cols-md-2 mt-5' style={{marginBottom:"100px"}} >

         <div className='col' style={{display:"flex", justifyContent:"center"}}>
               <img  style={{borderRadius:"50%", width:"420px"}} src='images/shoes2.jpg'/>
         </div>

          <div className='col p-5 ' style={{display:"flex", flexDirection:"column",alignItems:"center", fontSize:"20px"}}>
              <h2 style={{fontWeight:"bold"}}> Specialized in..</h2>
<p>
Men & women footwear's & accessories such as laptop bags, ladies bags, clutches, wallets, belts, trolleys luggage bags, sling bags, etc... We specialized in all the above products We as a manufacturer provide genuine leather as well as leatherette or polyester depending on the requirements...
              </p>
         </div>

       </div>




     </div>
    </div>
  );
}

export default About;
