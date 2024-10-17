// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { firestore } from '../firebase_config/firebase'; // Assuming you've imported Firebase configuration
// // import React, { useState, useEffect } from 'react';
// // import { collection, getDocs } from 'firebase/firestore';
// // import { firestore } from './firebase'; // Assuming you've imported Firebase configuration

// import React, { useEffect, useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/database';

// function ProductList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const databaseRef = firebase.database().ref('products');
//     databaseRef.on('value', (snapshot) => {
//       const productsData = snapshot.val();
//       const productsArray = Object.keys(productsData).map((key) => ({
//         ...productsData[key],
//         id: key,
//       }));
//       setProducts(productsArray);
//     });
//   }, []);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>Category: {product.category}</p>
//             <p>Images:</p>
//             <ul>
//               {product.images.map((image) => (
//                 <li key={image}>
//                   <img src={image} alt={product.name} width="200" height="200" />
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;