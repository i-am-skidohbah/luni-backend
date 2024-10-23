import React, { useState } from "react";
import { db, storage } from "../firebase_config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const uploadProduct = async () => {
    try {
      const productRef = await addDoc(collection(db, "products"), {
        name,
        category,
        description,
        price,
      });

      const promises = images.map((image) => {
        const storageRef = ref(storage, `products/${productRef.id}/${image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, image);

        return new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            null,
            (error) => reject(error),
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve(downloadURL);
            }
          );
        });
      });

      const imageUrls = await Promise.all(promises);
      await addDoc(collection(db, "productImages"), {
        productId: productRef.id,
        urls: imageUrls,
      });

      console.log("Product successfully uploaded!");
    } catch (error) {
      console.error("Error uploading product: ", error);
    }
  };

  return (
    <div>
      <h2>Upload Product</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Images</label>
          <input
            type="file"
            className="form-control"
            multiple
            onChange={handleImageChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={uploadProduct}>
          Upload
          </button>
        </form>
        
    </div>
  );
};

export default AddProduct;
