import React, { useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // Handle send button click event
    console.log("Email:", email);
    console.log("Message:", message);
    let ele = document.getElementById("sendButton");
    const templateParams = {
      from_email: email,
      message: message
    };
    

    emailjs.send('service_un0jdsq','template_uwbpf19',templateParams,'WK5oHKlWXZUJRaHb3')
    .then(res =>{
      ele.innerHTML="Sent!";
      ele.style.backgroundColor="green";
    });
    // Implement send logic here (e.g., send to an API endpoint)
  };

  return (
    <div>
          <div className='title'> <h1>Contact Me</h1></div>

    <div id='contactDiv'>
      <div className='inputLine'>
        <label>
          Your Email:
          <input 
            className="textData" 
            type='text' 
            value={email} 
            placeholder='abcdefg200@gmail.com'
            onChange={(e) => setEmail(e.target.value)
            } 
          />
        </label>
      </div>

      <div className='inputLine'>
        <label>
          Message:
          <textarea 
            className="textData" 
            value={message} 
            placeholder='Hey Narayan, I would like to set up an interview for a Software Development position!'
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>

      <div id='buttonDiv'>
        <button id='sendButton' onClick={handleSend}>Send</button>
      </div>
    </div>
    </div>
  );
}

export default Contact;