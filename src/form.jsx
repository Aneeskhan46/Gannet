import React, { useState } from 'react';

import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function WhatsAppForm() {

// this effect  scroll the screen to up
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  const [formData, setFormData] = useState({
    name: '',
    state: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, state, location } = formData;

    // Format message with spacing and line breaks
    const message = `Name : ${name}\n\nState : ${state}\n\nLocation : ${location}\n\n"I really like your product available on your website. I'd appreciate it if you could get in touch with me."`;

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = '9840655281'; // Replace with your number

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='container mt-5'>
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2 style={{color:"#A16D28"}}>SUBMIT YOUR INFO</h2>
      <form onSubmit={handleSubmit}>
        <div className='mt-5'>
          <label >Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', margin: '8px 0', padding: '8px' }}
          />
        </div>
        <div className='mt-4'>
          <label>State:</label><br />
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            style={{ width: '100%', margin: '8px 0', padding: '8px' }}
          />
        </div>
        <div className='mt-4'>
          <label>Location:</label><br />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            style={{ width: '100%', margin: '8px 0', padding: '8px' }}
          />
        </div>

        <button className='btnorder mt-4' type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
        <h6 style={{color:"#A16D28"}} className='mt-2'>We place order via WhatsApp   <FontAwesomeIcon style={{color:"green"}} icon={faWhatsapp} /></h6>
      </form>
    </div>
    </div>
  );
}

export default WhatsAppForm;
