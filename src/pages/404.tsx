import * as React from "react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

const NotFoundPage: React.FC = () => {
  const siteTitle = 'Not found';
  return (
    <Layout location={location} title={siteTitle}>
        <Container>
          <article className="prose prose-lg mt-8">
            <h1>Sorry</h1>
            <p className="lead">The content you are looking for is not here.</p>
            <Button as="link" styleType="primary" to="/">
              Start over
            </Button>
          </article>
        </Container>
    </Layout>
  );
};

export default NotFoundPage;
