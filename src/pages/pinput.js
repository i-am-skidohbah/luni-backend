

import React, { useState } from 'react';
import { firestore, addDoc, collection } from "../firebase_config/firebase";
import { storage, ref, uploadBytes } from "../firebase_config/firebase";
// import {  } from "../firebase_config/firestore";


function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);


  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a reference to the storage bucket
    const storageRef = ref(storage, 'prpoduct_images');

    // Upload images to Firebase Storage
    const uploadTasks = images.map(image => {
      const imageRef = ref(storageRef, `${Date.now()}-${image.name}`);
      return uploadBytes(imageRef, image);
    });

    try {
      await Promise.all(uploadTasks);

      // Add product data to Firestore
      const productDocRef = await addDoc(collection(firestore, 'products'), {
        name,
        description,
        price,
        images: images.map(image => image.name) // Store image filenames in Firestore
      });

      console.log('Product added successfully!', productDocRef.id);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Product Name:</label>
        <input type="text" className="form-control"
          id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label htmlFor="description">Product
          Description:</label>
        <textarea className="form-control" id="description"
          value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label
          htmlFor="price">Product Price:</label>
        <input type="number" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)}
          required />
      </div>
      <div className="form-group">
        <label htmlFor="images">Product Images:</label>
        <input type="file" className="form-control" id="images" multiple onChange={handleImageChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Add Product</button>
    </form>
  );
}

export default AddProduct;