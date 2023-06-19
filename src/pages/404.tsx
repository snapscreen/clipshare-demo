import * as React from "react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

const NotFoundPage: React.FC = () => {
  const siteTitle = 'Not found';
  return (
    <Layout title={siteTitle}>
          <article className="prose prose-lg mt-8">
            <h1>Sorry</h1>
            <p className="lead">The content you are looking for is not here.</p>
            <Button as="link" styleType="primary" to="/">
              Start over
            </Button>
          </article>
    </Layout>
  );
};

export default NotFoundPage;
