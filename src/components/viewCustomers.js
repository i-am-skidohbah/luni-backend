import React, { useEffect, useState } from 'react';
import { db } from '../firebase_config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagination from 'react-bootstrap/Pagination';

function CustomerList () {
    const [customers, setCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [customersPerPage] = useState(2);
  
    useEffect(() => {
      const fetchCustomers = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, 'customers'));
          const customerData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setCustomers(customerData);
        } catch (error) {
          console.error('Error fetching customers: ', error);
        }
      };
  
      fetchCustomers();
    }, []);
  
    const indexOfLastCustomer = currentPage * customersPerPage;
    const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
    const currentCustomers = customers.slice(indexOfFirstCustomer, indexOfLastCustomer);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    return (
      <div className="container mt-5">
        <h2>Customer List</h2>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Gender</th>
              <th>Preferred Contact Method</th>
              <th>Consent for Marketing</th>
              <th>Notes/Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentCustomers.map((customer, index) => (
              <tr key={customer.id}>
                <td>{indexOfFirstCustomer + index + 1}</td>
                <td>{customer.fullName}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>{customer.address}</td>
                <td>{customer.dob}</td>
                <td>{customer.gender}</td>
                <td>{customer.preferredContactMethod}</td>
                <td>{customer.consentForMarketing ? 'Yes' : 'No'}</td>
                <td>{customer.notes}</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <div>
                      <button className="btn btn-sm btn-success">Edit</button>
                    </div>
                    <div>
                      <button className="btn btn-sm btn-danger">Delete</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination>
          {[...Array(Math.ceil(customers.length / customersPerPage)).keys()].map(number => (
            <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
              {number + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    )  
};

export default CustomerList;
