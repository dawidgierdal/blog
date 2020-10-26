import React, { FC } from 'react';
import { graphql } from 'gatsby';
import { SEO } from 'components/seo';

const NotFoundPage: FC = () => {
    return (
        <div>
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
        </div>
    );
};

export default NotFoundPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
