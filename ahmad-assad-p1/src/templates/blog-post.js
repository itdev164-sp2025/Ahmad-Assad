import { GatsbyImage } from 'gatsby-plugin-image';

{heroImage && <GatsbyImage image={heroImage.gatsbyImageData} alt={title} />}
const { title, publishedDate, body, heroImage } = data.contentfulBlogPost;