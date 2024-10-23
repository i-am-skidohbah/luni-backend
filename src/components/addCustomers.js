import React, { useState } from 'react';
import { db } from '../firebase_config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCustomer = () => {
  const [customer, setCustomer] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    preferredContactMethod: '',
    consentForMarketing: false,
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCustomer({
      ...customer,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'customers'), customer);
      alert('Customer added successfully');
    } catch (error) {
      console.error('Error adding customer: ', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Customer Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input type="text" className="form-control" name="fullName" value={customer.fullName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value={customer.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="tel" className="form-control" name="phone" value={customer.phone} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Mailing Address</label>
          <input type="text" className="form-control" name="address" value={customer.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" className="form-control" name="dob" value={customer.dob} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" name="gender" value={customer.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Preferred Contact Method</label>
          <input type="text" className="form-control" name="preferredContactMethod" value={customer.preferredContactMethod} onChange={handleChange} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" name="consentForMarketing" checked={customer.consentForMarketing} onChange={handleChange} />
          <label className="form-check-label">Consent for Marketing</label>
        </div>
        <div className="mb-3">
          <label className="form-label">Notes/Comments</label>
          <textarea className="form-control" name="notes" value={customer.notes} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddCustomer;
