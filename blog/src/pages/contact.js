import * as React from "react";
import { graphql } from "gatsby";

const ContactPage = ({ data }) => {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>Name: {data.site.siteMetadata.contact.name}</p>
      <p>Email: {data.site.siteMetadata.contact.email}</p>
    </main>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        contact {
          name
          email
        }
      }
    }
  }
`;

export default ContactPage;