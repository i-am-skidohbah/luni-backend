import React, { useEffect, useState } from 'react';
import { db } from '../firebase_config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlogSummaries () {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'blogPosts'));
        const posts = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setBlogPosts(posts);
      } catch (error) {
        console.error('Error fetching blog posts: ', error);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Blog Post Summaries</h2>
      {blogPosts.map(post => (
        <div key={post.id} className="mb-3">
          <h3>{post.title}</h3>
          <p>Category: {post.category}</p>
          <p>{post.content.substring(0, 100)}...</p>
          <p><small>Posted on: {new Date(post.createdAt.toDate()).toDateString()}</small></p>
        </div>
      ))}
    </div>
  );
};

export default BlogSummaries;
