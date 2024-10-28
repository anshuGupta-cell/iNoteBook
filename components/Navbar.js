import React from 'react';
const{Link} = window.ReactRouterDOM;

const Navbar = () => {

  return (
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <div>
      <Link className="navbar-brand" to='/'>Home</Link>
      <Link className="navbar-brand" to='/about'>About</Link>
    </div>
    <form className="d-flex" role="search">
      <Link className="navbar-brand" to='/login'>Login</Link>
      <Link className="navbar-brand" to='/signUp'>Sign Up</Link>
    </form>
  </div>
</nav>
  );
};

export default Navbar;
