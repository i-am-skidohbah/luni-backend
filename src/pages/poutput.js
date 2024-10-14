import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../firebase_config/firebase'; // Assuming you've imported Firebase configuration
// import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { firestore } from './firebase'; // Assuming you've imported Firebase configuration

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'products'));
        const productsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}> {/* Use product.id as key */}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {product.images && product.images.length > 0 && ( // Check if images exist
            <div>
              {product.images.map(imageUrl => (
                <img src={'imageUrl'}  alt={product.name} key={imageUrl} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;