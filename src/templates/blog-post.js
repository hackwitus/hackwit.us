import React from "react";
import Helmet from "react-helmet";

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div className="container" style={{
                "textAlign": "left",
                "paddingLeft": "15px",
                "paddingRight": "15px",
            }}>
                <div className="col-10">
                    <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
                    <h1>{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <hr />
                </div>
            </div>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
