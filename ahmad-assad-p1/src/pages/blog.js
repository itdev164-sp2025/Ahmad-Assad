import React from 'react';
import Layout from '../components/Layouts';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

const BlogPage = ({ data }) => (
  <Layout>
    <h1>Blog Posts</h1>
    {data.allContentfulBlogPost.nodes.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.excerpt}</p>
        <Link to={`/${post.slug}`}>Read more</Link>
      </div>
    ))}
  </Layout>
);

export const query = graphql`
  query {
    allContentfulBlogPost {
      nodes {
        id
        title
        excerpt
        slug
      }
    }
  }
`;

export default BlogPage;