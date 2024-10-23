import React from "react";
import  Tab  from 'react-bootstrap/Tab';
import { Tabs } from "react-bootstrap";
import AddBlogPost from "../components/addPost";
import BlogSummaries from "../components/viewPost";



function Blog(){
    return (
        <div>
        <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Products">
      <AddBlogPost />
      </Tab>
      <Tab eventKey="profile" title="Add Product">
      <BlogSummaries />
      </Tab>
      
    </Tabs>
        </div>
    );
}

export default Blog;