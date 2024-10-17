import React, { useState } from 'react';
import firebase from '../firebase_config/firebase';




function AddProduct() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');  

  const [images, setImages] = useState([]);  


  const handleNameChange = (e) => setName(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);  

  const handlePriceChange = (e) => setPrice(e.target.value);

  const handleImageChange  
 = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  


    // Create a reference to the Firebase Storage folder
    const storageRef = firebase.storage().ref('product_images');

    // Upload images to Firebase Storage
    const uploadTasks = images.map((image) => {
      const uploadTask = storageRef.child(image.name).put(image);
      return uploadTask;
    });

    // Wait for all image uploads to complete
    await Promise.all(uploadTasks);

    // Get download URLs for the uploaded images
    const downloadURLs = await Promise.all(
      uploadTasks.map((uploadTask) => uploadTask.snapshot.ref.getDownloadURL())
    );

    // Add product data to Firebase Realtime Database
    const databaseRef = firebase.database().ref('products');
    const newProductRef = databaseRef.push();
    newProductRef.set({
      name,
      category,
      description,
      price,
      images: downloadURLs,
    });

    // Reset form fields
    setName('');
    setCategory('');
    setDescription('');
    setPrice('');
    setImages([]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={handleNameChange} />
      <br />
      <label>Category:</label>
      <input type="text" value={category} onChange={handleCategoryChange} />
      <br />
      <label>Description:</label>
      <textarea value={description} onChange={handleDescriptionChange} />
      <br />
      <label>Price:</label>
      <input type="number" value={price} onChange={handlePriceChange} />
      <br />
      <label>Images:</label>
      <input type="file" multiple onChange={handleImageChange} />
      <br />
      <button type="submit">Upload Product</button>
    </form>
  );
}

export default AddProduct;