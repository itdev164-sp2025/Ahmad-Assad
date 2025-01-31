import * as React from "react";
import { graphql } from "gatsby";

const AboutPage = ({ data }) => {
  return (
    <main>
      <h1>About Us</h1>
      <p>{data.site.siteMetadata.description}</p>
    </main>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

export default AboutPage;