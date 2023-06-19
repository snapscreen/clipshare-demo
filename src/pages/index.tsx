import * as React from "react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

interface PageProps {
}

const Home: React.FC<PageProps> = () => {
  const siteTitle = `Welcome`;

  return (
    <Layout title={siteTitle}>
        <article className="prose prose-lg mt-8">
          <h1>Clip Share Demo</h1>
          <p className="lead">Create broadcast quality TV clips in a Snap for sharing. Snap your TV, edit the clip and share.</p>
          <Button as="link" styleType="primary" to="/">
            Start
          </Button>
        </article>
    </Layout>
  );
};

export default Home;
