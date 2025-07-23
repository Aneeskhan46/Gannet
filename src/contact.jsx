import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="text-center mb-4" style={{fontWeight:"bold"}}> <FontAwesomeIcon icon={faLocationDot} style={{ color: 'red', fontSize: '24px' }} />Our Location</h2>
          <div className="ratio ratio-4x3">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.5572551329595!2d80.26921186953618!3d13.084666899202581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265fcffabcdb5%3A0xe4b5f816e7ca6b9d!2sGannet%20Shoes!5e0!3m2!1sen!2sin!4v1753280371907!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>



        <div className='row mt-5 text-center' >
           <h2 className='mt-5' style={{fontWeight:"bold"}}>  <FontAwesomeIcon icon={faLocationDot} style={{ color: 'red', fontSize: '24px' }} /> GANNET SHOES</h2>
           <p>Shop No, 148, Vepery High Rd, Periamet, Vepery, Poongavanapuram, Chennai, Tamil Nadu 600003</p>

           <p>Telephone: 9840655281</p>

           <p>Office: 04442176472</p>
        </div>


    </div>
  );
}

export default Contact;
