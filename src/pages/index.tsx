import * as React from "react";
import { Button } from "../components/button";
import { Container } from "../components/container";
import { Layout } from "../components/layout";

interface PageProps {
}

const Home: React.FC<PageProps> = () => {
  const siteTitle = `Netball ClipShare`;

    function fetchAccessTokenFromApi() {
        return fetch('/api/token', { mode: 'cors', cache: 'no-cache' }).then((response) => response.json());
    }

    const startClipShare = () => {
        SnapoddsSdk.clipShareBuilder()
            .setLanguage('en')
            .setSnapTarget('sport')
            .setAction('share')
            .setVibrate(true)
            .setApiUrl(`https://api.aus.snapscreen.com`)
            .setClipShareApiUrl(`https://clip.aus.snapscreen.com/api`)
            .setAccessTokenProvider(fetchAccessTokenFromApi)
            .onClipCreated((clip) => console.log('Clip shared', clip))
            .onClose(() => console.log('SDK:onClose'))
            .appendTo(document.body);
    };

  return (
    <Layout title={siteTitle}>
      <article className="prose prose-lg my-8 text-center mx-auto">
        <h1 className="sr-only"></h1>
        <p className="lead">Share your broadcast quality TV clip created with ClipShare.</p>
        <p className="maintenance">You could say an issue with our service provider means NetClips can’t be available tonight.  We look forward to helping you share magic moments again soon.</p>
      </article>
    </Layout>
  );
};

export default Home;
