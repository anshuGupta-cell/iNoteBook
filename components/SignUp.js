import React, { useState } from 'react';

const SignUp = () => {
  const [credential, setCredential] = useState({ name: '', email: '', password: '', cpassword: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = credential;
    const user = JSON.stringify({ name, email, password });
    localStorage.setItem(name, user);
    // You might want to reset the form or handle post-submission actions here
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredential(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className='container' onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">User Name</label>
        <input 
          type="text" 
          className="form-control" 
          id="name" 
          name='name' 
          value={credential.name} 
          onChange={onChange} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input 
          type="email" 
          className="form-control" 
          id="email" 
          name='email' 
          value={credential.email} 
          onChange={onChange} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="password" 
          name='password' 
          value={credential.password} 
          onChange={onChange} 
        />
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">Confirm Password</label>
        <input 
          type="password" 
          className="form-control" 
          id="cpassword" 
          name='cpassword' 
          value={credential.cpassword} 
          onChange={onChange} 
        />
      </div>
      <button type="submit" className="btn btn-primary">Sign Up</button>
    </form>
  );
};

export default SignUp;
