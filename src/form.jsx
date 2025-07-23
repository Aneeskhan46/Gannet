import React, { useState } from 'react';

function WhatsAppForm() {
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
    const message = `Name : ${name}\n\nState : ${state}\n\nLocation : ${location}\n\n"I really like the shoes available on your website. I'd appreciate it if you could get in touch with me."`;

    const encodedMessage = encodeURIComponent(message);

    const phoneNumber = '9840655281'; // Replace with your number

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Submit Info to WhatsApp</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', margin: '8px 0', padding: '8px' }}
          />
        </div>
        <div>
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
        <div>
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
        <button type="submit" style={{ padding: '10px 20px' }}>
          Send via WhatsApp
        </button>
      </form>
    </div>
  );
}

export default WhatsAppForm;
