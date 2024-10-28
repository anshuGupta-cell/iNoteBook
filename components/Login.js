import React,{useState} from 'react';

const Login = ()=>{
  
  const [credential, setCredential] = useState({ name: '', email: '', password: '' });
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, password } = credential;
    
    const user = JSON.parse(localStorage.getItem(name))
    
    if (email === user.email && password === user.password) {
      console.log('logged in')
    } else {
      console.log('login Failed ')
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setCredential(prev => ({ ...prev, [name]: value }));
  };

  
  
  return(
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
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
  )
}
export default Login;