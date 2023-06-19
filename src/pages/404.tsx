import * as React from "react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

const NotFoundPage: React.FC = () => {
  const siteTitle = 'Not found';
  return (
    <Layout location={location} title={siteTitle}>
        <Container>
          <article className="prose lg:prose-xl mt-16">
            <h1>Sorry.</h1>
            <Button as="link" styleType="primary" to="/">
              Meet ClipShare
            </Button>
          </article>
        </Container>
    </Layout>
  );
};

export default NotFoundPage;