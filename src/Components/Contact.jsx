import React from 'react'
import "../Index.css";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully");
  };

  return (
    <section className='contact'>
      
      <h2 className='contact-title'>Contact Me!</h2>
      
      <form className='contact-form' onSubmit={handleSubmit}>
        
        <input 
          type='text' 
          placeholder='Your Name' 
          required 
        />

        <input 
          type='email' 
          placeholder='Your Email' 
          required 
        />

        <textarea 
          placeholder='Your Message' 
          required 
        ></textarea>

        <button type='submit' className='contact-btn'>  
          Send Message
        </button>

      </form>

    </section>
  )
}

export default Contact;