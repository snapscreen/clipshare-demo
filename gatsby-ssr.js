const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link key="clipShareSdkCss" href="https://cdn.snapodds.com/sdk/v1/clipshare-sdk.css" type="text/css" rel="stylesheet"/>,
    <script rel="prefetch" key="clipShareSdkJs" src="https://cdn.snapodds.com/sdk/v1/clipshare-sdk.js" type="text/javascript"></script>,
    <script rel="prefetch" key="clipShareSdkPlayer" type="text/javascript" src="https://cdn.jwplayer.com/libraries/ptBc3HHU.js"></script>,
    <script
      defer
      key="darkmode"
      dangerouslySetInnerHTML={{
        __html: `(function() {
            function setTheme(theme) {
              window.__theme = theme;
              if (theme === 'dark') {
                document.documentElement.className = 'dark';
              } else {
                document.documentElement.className = '';
              }
            };
            window.__setPreferredTheme = function(theme) {
              setTheme(theme);
              try {
                localStorage.setItem('color-theme', theme);
              } catch (e) {}
            };
            let preferredTheme;
            try {
              preferredTheme = localStorage.getItem('color-theme');
            } catch (e) {}
            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
          })();`,
      }}
    />,
  ]);
};
