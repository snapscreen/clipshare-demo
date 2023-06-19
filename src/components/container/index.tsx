import React from "react";

import "./container.styles.css";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  );
};
