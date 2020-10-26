import React, { FC } from 'react';
import { Link, graphql } from 'gatsby';
import { SEO } from 'components/seo';
import { rhythm } from 'utils/typography';

interface SiteMetadata {
    siteMetadata: {
        title: string;
    };
}

interface Edge {
    node: {
        excerpt: string;
        fields: {
            slug: string;
        };
        frontmatter: {
            date: Date;
            description: string;
            title: string;
        };
    };
}

interface SiteData {
    data: {
        site: SiteMetadata;
        allMarkdownRemark: {
            edges: Edge[];
        };
    };
}

const BlogIndex: FC<SiteData> = ({ data }: SiteData) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <div>
            <SEO title="All posts" />
            {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                    <article key={node.fields.slug}>
                        <header>
                            <h3
                                style={{
                                    marginBottom: rhythm(1 / 4),
                                }}>
                                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                                    {title}
                                </Link>
                            </h3>
                            <small>{node.frontmatter.date}</small>
                        </header>
                        <section>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: node.frontmatter.description || node.excerpt,
                                }}
                            />
                        </section>
                    </article>
                );
            })}
        </div>
    );
};

export default BlogIndex;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        description
                    }
                }
            }
        }
    }
`;
