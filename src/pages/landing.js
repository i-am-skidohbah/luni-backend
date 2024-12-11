import React from 'react';
import Layout from '../components/layout';
import Navv from '../components/nav'
import './css/Landing.css'

function Landing() {
  const style = {
    backgroundColor: 'green'
  }
  return (
    <>
      {/* <div className='container mt-5 border rounded '
       style={{ height: '800px', overflow: 'auto' }} >
       
      </div> */}
       <div className='container-fluid '>
       <Layout />
       </div>
    </>


  );
}

export default Landing;


