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
      
        const [errors, setErrors] = useState({});
      
        const handleChange = (e) => {
          const { name, value, type, checked } = e.target;
          setCustomer({
            ...customer,
            [name]: type === 'checkbox' ? checked : value
          });
        };
      
        const validateForm = () => {
          let formErrors = {};
          if (!customer.fullName) formErrors.fullName = 'Full Name is required';
          if (!customer.email) formErrors.email = 'Email is required';
          if (!customer.phone) formErrors.phone = 'Phone Number is required';
          if (!customer.dob) formErrors.dob = 'Date of Birth is required';
          if (!customer.gender) formErrors.gender = 'Gender is required';
          if (!customer.preferredContactMethod) formErrors.preferredContactMethod = 'Preferred Contact Method is required';
          setErrors(formErrors);
          return Object.keys(formErrors).length === 0;
        };
      
        const handleSubmit = async (e) => {
          e.preventDefault();
          if (validateForm()) {
            try {
              await addDoc(collection(db, 'customers'), customer);
              alert('Customer added successfully');
            } catch (error) {
              console.error('Error adding customer: ', error);
            }
          }
        };
      
        return (
          <div className="container mt-5">
            <h2>Customer Information Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" name="fullName" value={customer.fullName} onChange={handleChange} />
                {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" name="email" value={customer.email} onChange={handleChange} />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input type="tel" className="form-control" name="phone" value={customer.phone} onChange={handleChange} />
                {errors.phone && <div className="text-danger">{errors.phone}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Mailing Address</label>
                <input type="text" className="form-control" name="address" value={customer.address} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Date of Birth</label>
                <input type="date" className="form-control" name="dob" value={customer.dob} onChange={handleChange} />
                {errors.dob && <div className="text-danger">{errors.dob}</div>}
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
                {errors.gender && <div className="text-danger">{errors.gender}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Preferred Contact Method</label>
                <input type="text" className="form-control" name="preferredContactMethod" value={customer.preferredContactMethod} onChange={handleChange} />
                {errors.preferredContactMethod && <div className="text-danger">{errors.preferredContactMethod}</div>}
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
