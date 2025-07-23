function Footer() {
    return (  
    
    
    
    <div className="row row-cols-1 row-cols-md-3 p-5" style={{backgroundColor:"#DDDAD0", height:"100%", width:"100%", marginTop:"200px",marginLeft: "0",
  marginRight: "0"}}>


    <div className="col" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", fontSize:"15px",lineHeight:"40px"}}>
          <h4 style={{fontWeight:"bold"}}>🛍️ Shop</h4>
          <ul>
             <li>Men's Shoes</li>
             <li>Women's Shoes</li>
             <li>Best Sellers</li>
             <li>Sportswear</li>
             <li>Casual Wear</li>
          </ul>
    </div>

     


      <div className="col" style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",fontSize:"15px",lineHeight:"40px"}}>
          <h4 style={{fontWeight:"bold"}}>🏢 Company</h4>
          <ul>
             <li>About Our Brand</li>
             <li>Sustainability</li>
             <li>Careers</li>
             <li>Sportswear</li>
             <li>Affiliate Program</li>
          </ul>
    </div>





     <div className="col" style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",fontSize:"15px",lineHeight:"40px"}}>
          <h4 style={{fontWeight:"bold"}}>📞 Customer Support</h4>
          <ul>
             <li>Help Center</li>
             <li>Live Chat Support</li>
             <li>Shipping Information</li>
             <li>Exchange & Returns</li>
             <li>Warranty</li>
          </ul>
    </div>


        <div className="row mt-4 text-center" style={{width:"100%"}}>
            <p style={{fontWeight:"bold"}} >&copy; 2025 All Rights Reserved By Gannet</p>
        </div>
        


    </div>
    
);
}

export default Footer;