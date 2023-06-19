import * as React from "react";
import { Layout } from "../components/layout";

interface PageProps {
  location: Location;
}

const Home: React.FC<PageProps> = ({ location }) => {
  const siteTitle = `Welcome`;

  return (
    <Layout location={location} title={siteTitle}>
      Hi
    </Layout>
  );
};

export default Home;
