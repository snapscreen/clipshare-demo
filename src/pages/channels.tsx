import * as React from "react";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

interface PageProps {
}

const Channels: React.FC<PageProps> = () => {
  const siteTitle = 'Supported Channels | ClipShare';

  return (
    <Layout title={siteTitle}>
        <article className="prose prose-lg mt-8">
          <h1>Supported Channels</h1>
          <p className="lead">For this demo the following channels will work.</p>
        </article>
    </Layout>
  );
};

export default Channels;
