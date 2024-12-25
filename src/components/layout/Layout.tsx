import React, { ReactNode } from "react";
import { config } from "../../utils/config";
import "./layout.css";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const background_image = config.background.image.src;
  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background_image})` }}
    >
      {children}
    </div>
  );
};

export default Layout;
