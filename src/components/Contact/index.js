import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function ContactForm() {
    const [formState, setFormState] = useState({ name:'', email:'', message:'' });
    
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        if(!errorMessage) {
            setFormState({[e.target.name]: e.target.value});
            console.log('Form', formState);
        }  
    };

    function handleChange(e) {
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid){
                setErrorMessage('Your email is invalid');
            } else {
                setErrorMessage('');
            }
        } else {
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
    };

   return(
        <section>
            <div className="d-flex justify-content-start mx-5">
            <h1 data-testid="h1tag">Contact Me</h1>
            </div >
            <div className="d-flex justify-content-start mx-5">
            <form id="contact-form" onSubmit={handleSubmit}>
                {/* name input */}
                <div className="d-flex justify-content-start my-3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} name="name" onBlur={handleChange} />
                </div>
                {/* email input */}
                <div className="d-flex justify-content-start  my-3">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={email} name="email" onBlur={handleChange} />
                </div>
                {/* message text area */}
                <div className="d-flex justify-content-start  my-3">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} rows="5" onBlur={handleChange} />
                </div>
                <button data-testid="button" type="submit">Submit</button>
            </form>
            </div>
        </section>
    )
}

export default ContactForm;