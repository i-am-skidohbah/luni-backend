import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import BlogSummaries from '../components/viewPost';  // Replace with your actual import
import AddBlogPost from '../components/addPost';      // Replace with your actual import

function Blog () {
  const [key, setKey] = useState('home');

  return (
    <div className="container mt-3">
      <h2>Toggleable Tabs</h2>
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link eventKey="home">Blog Post</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="menu1">Add Post</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="home">
            <BlogSummaries />
          </Tab.Pane>
          <Tab.Pane eventKey="menu1">
            <AddBlogPost />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Blog;
