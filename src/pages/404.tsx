import React, { FC } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

interface Props {
    data: {
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
    location: Location;
}

const NotFoundPage: FC<Props> = ({ location, data }: Props) => {
    const siteTitle = data.site.siteMetadata.title;

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="404: Not Found" />
            <h1>Not Found</h1>
            <p>You just hit a route that doesn&apos;t exist... the sadness.</p>
        </Layout>
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
