import React from "react";

import "./footer.styles.css";

type FooterProps = {
};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      ClipShare is a product by {' '}
      <a href="http://snapscreen.com" target="_blank">Snapscreen</a>.
    </footer>
  );
};
