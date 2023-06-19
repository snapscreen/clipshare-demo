import * as React from "react";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

interface PageProps {
  location: Location;
}

const Channels: React.FC<PageProps> = ({ location }) => {
  const siteTitle = 'Supported Channels | ClipShare';

  return (
    <Layout location={location} title={siteTitle}>
      <Container>
        <article className="prose prose-lg mt-8">
          <h1>Supported Channels</h1>
          <p className="lead">For this demo the following channels will work.</p>
        </article>
      </Container>
    </Layout>
  );
};

export default Channels;
