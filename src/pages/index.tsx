import * as React from "react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

interface PageProps {
}

const Home: React.FC<PageProps> = () => {
  const siteTitle = `Welcome`;

    function fetchAccessTokenFromApi() {
        return fetch('/api/token', { mode: 'cors', cache: 'no-cache' }).then((response) => response.json());
    }

    const startClipShare = () => {
        SnapoddsSdk.clipShareBuilder()
            .setLanguage('en')
            .setSnapTarget('sport')
            .setAction('share')
            .setVibrate(true)
            .setApiUrl(`https://${process.env.API_HOST}`)
            .setClipShareApiUrl(`https://${process.env.CLIP_SHARE_API_HOST}/api`)
            .setAccessTokenProvider(fetchAccessTokenFromApi)
            .onClipCreated((clip) => console.log('Clip shared', clip))
            .onClose(() => console.log('SDK:onClose'))
            .appendTo(document.body);
    };

  return (
    <Layout title={siteTitle}>
        <article className="prose prose-lg mt-8">
          <h1>ClipShare</h1>
          <p className="lead">Share your broadcast quality TV clip created with ClipShare.</p>
          <Button styleType="primary" onClick={startClipShare} className="w-full">
            Share
          </Button>
        </article>
    </Layout>
  );
};

export default Home;
