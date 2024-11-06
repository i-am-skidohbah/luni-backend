import React from "react";
import AddBlogPost from "../components/addPost";
import BlogSummaries from "../components/viewPost";
import 'bootstrap/dist/css/bootstrap.min.css';



function Blog() {
    return (
        
        <div class="container mt-3">
        <h2>Toggleable Tabs</h2>
       
        <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#home">Blog Post</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#menu1">Add Post</a>
          </li>
          
        </ul>
      
        <div class="tab-content">
          <div id="home" class="container tab-pane active "> <br />
            <BlogSummaries />
          </div>
          <div id="menu1" class="container tab-pane fade"> <br />
            <AddBlogPost />
          </div>
        </div>
      </div>
        
    );
}

export default Blog;