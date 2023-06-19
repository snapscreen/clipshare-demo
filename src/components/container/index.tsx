import React from "react";

import "./container.styles.css";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};
