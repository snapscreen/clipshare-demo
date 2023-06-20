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
          <h1>ClipShare</h1>
          <p className="lead">Share your broadcast quality TV clip created with ClipShare.</p>
          <Button as="link" styleType="primary" to="/" className="w-full">
            Share
          </Button>
        </article>
    </Layout>
  );
};

export default Home;
