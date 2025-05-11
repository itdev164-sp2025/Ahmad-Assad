import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Box, Image, Text, Link } from "rebass";
import styled from 'styled-components';
import { Box, Card, Heading } from 'rebass';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Box textAlign="center" py={4}>
        <Image
          src="../images/example.png"
          sx={{ width: 64, height: 64, mb: 3 }}
          alt="Example"
        />
        <Text as="h1" fontSize={4} fontWeight="bold">
          Welcome to <b>Gatsby!</b>
        </Text>
        <Text fontSize={2} mt={2}>
          <b>Example pages:</b>{" "}
          {data.allMarkdownRemark.edges.map(({ node }, i) => (
            <React.Fragment key={node.id}>
              <Link href={node.frontmatter.url} sx={{ mx: 1, color: "primary" }}>
                {node.frontmatter.title}
              </Link>
              {i !== data.allMarkdownRemark.edges.length - 1 && <> · </>}
            </React.Fragment>
          ))}
        </Text>
      </Box>

      <List width={["100%", "80%", "60%"]} p={3} mx="auto">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ListItem key={node.id} p={2} bg="muted" sx={{ borderRadius: 4 }}>
            <Text fontSize={2}>{node.frontmatter.title}</Text>
          </ListItem>
        ))}
      </List>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            url
          }
        }
      }
    }
  }
`;

export default IndexPage;