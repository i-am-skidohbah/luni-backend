import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase_config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import logo from '../assets/luni_logo.png'
import solar from '../assets/soolar.jpg';
// import './css/Login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const logo_style = {
    height: '60px',
    width: '100px'
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the user is an admin
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists() && userDoc.data().role === 'admin') {
        navigate('/admin');
      } else {
        setError('You are not authorized to access this page');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
      <div className="container">
        <div className="card login-card bg-light">
          <div className="row g-0">
            <div className="col-md-5">
              <img src={solar} alt="login" className="img-fluid login-card-img" />
              
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <div className="brand-wrapper">
                    <img src={logo} style={logo_style}  alt='logo' className='logo' />
                </div>
                <p className="login-card-description">Sign into your account</p>
                <form onSubmit={handleLogin}>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control"
                      placeholder="***********"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <div className="text-danger">{error}</div>}
                  <button className="btn btn-outline-danger btn-block login-btn mb-4" type="submit">Login</button>
                </form>
                <a href="#!" className="forgot-password-link">Forgot password?</a>
                <p className="login-card-footer-text">Don't have an account? <a href="#!" className="text-reset">Register here</a></p>
                <nav className="login-card-footer-nav">
                  <a href="#!">Terms of use.</a>
                  <a href="#!">Privacy policy</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
