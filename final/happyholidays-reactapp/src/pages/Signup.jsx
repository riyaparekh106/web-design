import React, { useState } from 'react';
import './Signup.css';
import { FormSignup } from '../components/FormSignup';
import { FormSuccess } from '../components/FormSuccess';

export const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <main>
      <div className='form-container'>
        <div className='form-content-left'>
          <img className='form-img' src='form.jpg' alt='beach property' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </main>
  );
};

export default Signup;