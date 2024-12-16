import React, { useEffect, useState } from "react";
import { db } from "../firebase_config/firebase";
import { collection, getDocs } from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

function BlogSummaries() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchBlogPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "blogPosts"));
        const posts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogPosts(posts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts: ", error);
      }
    };

    fetchBlogPosts();
  }, []);
  // console.log(blogPosts);
  return (
    <div className="flex w-full h-full items-center justify-center px-6">
      <div className="px-5 py-6 w-full ">
        <h2 className="text-2xl font-bold capitalize">Blog Post Summaries</h2>
        {blogPosts.map((post) => (
          <div key={post.id} className="">
            <h3 className="text-2xl px-2">{post.title}</h3>
            <p className="text-xl px-2">
              <b>Category</b>: {post.category}
            </p>
            <p className="text-red-400 leading-10">
              {post.content.substring(0, 100)}...
            </p>
            <p>
              <small className="text-sm">
                Posted on: {new Date(post.createdAt.toDate()).toDateString()}
              </small>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogSummaries;
