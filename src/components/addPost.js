import React, { useState } from 'react';
import { db, storage } from '../firebase_config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddBlogPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postRef = await addDoc(collection(db, 'blogPosts'), {
        title,
        category,
        content,
        createdAt: new Date()
      });

      const imageUrls = await Promise.all(
        images.map((image) => {
          const storageRef = ref(storage, `blogPosts/${postRef.id}/${image.name}`);
          const uploadTask = uploadBytesResumable(storageRef, image);

          return new Promise((resolve, reject) => {
            uploadTask.on(
              'state_changed',
              null,
              (error) => reject(error),
              async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                resolve(downloadURL);
              }
            );
          });
        })
      );

      await addDoc(collection(db, 'blogPostImages'), {
        postId: postRef.id,
        urls: imageUrls,
      });

      alert('Blog post added successfully');
      setTitle('');
      setCategory('');
      setContent('');
      setImages([]);
    } catch (error) {
      console.error('Error adding blog post: ', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Images</label>
          <input type="file" className="form-control" multiple onChange={handleImageChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default AddBlogPost;
