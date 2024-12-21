// import React, { useEffect, useState } from "react";
// import { db } from "../firebase_config/firebase";
// import { collection, getDocs } from "firebase/firestore";

// const ShowProduct = () => {
//   const [products, setProducts] = useState([]);
//   const [images, setImages] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       const productCollection = collection(db, "products");
//       const productSnapshot = await getDocs(productCollection);
//       const productList = productSnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setProducts(productList);

//       const imagesCollection = collection(db, "productImages");
//       const imagesSnapshot = await getDocs(imagesCollection);
//       const imagesList = imagesSnapshot.docs.reduce((acc, doc) => {
//         acc[doc.data().productId] = doc.data().urls;
//         return acc;
//       }, {});
//       setImages(imagesList);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Product List</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.name}</h3>
//             <p>Category: {product.category}</p>
//             <p>Description: {product.description}</p>
//             <p>Price: {product.price}</p>
//             <div>
//               {images[product.id] && images[product.id].map((url, index) => (
//                 <img key={index} src={url} alt={`product ${index}`} style={{ width: "100px", height: "100px" }} />
//               ))}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ShowProduct;
