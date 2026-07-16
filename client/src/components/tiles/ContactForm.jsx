import React, {useState, useRef} from 'react';
import {IoSend as SendIcon} from "react-icons/io5";
import emailjs from '@emailjs/browser';

emailjs.init({publicKey: 'x-whDEpbDVF9W3pTh'});

const ContactForm = function() {
  const [sent, setSent] = useState(false);
  const form = useRef();

  const handleSubmit = function(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'default_template', form.current)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    form.current.reset();

    setSent(true);
  };

  const renderForm = function() {
    return (
      <>
      <form ref={form} className='v'>
        <b>Contact Us!</b>
        <input type='text' name='user_name' placeholder='Name?' required/>
        <input type='email' name='user_email' placeholder='Email?' required/>
        <textarea name='message' placeholder="What's up?" required/>
        <b className='sendButton' onClick={handleSubmit}>
          SEND
        </b>
      </form>
      </>
    );
  };

  const renderSent = function() {
    return (
      <div className='sentBox v'>
        Message sent! 
        <br/><br/>
        We will get back to you as soon as possible.
      </div>
    );
  };

  return (
    <>
    {!sent && renderForm()}
    {sent && renderSent()}
    </>
  );
};

export default ContactForm;