import React, { useContext } from 'react';
import { ConfigurationContext } from '../../ConfigurationContext';
import './index.css';

const Layout = () => {
  const { showContent, showLeftNavbar, showRightNavbar } = useContext(ConfigurationContext);

  return (
    <div className="layout">
      <h1>Layout</h1>
      {showContent && <div className="content">Content</div>}
      {showLeftNavbar && <div className="left-navbar">Left Navbar</div>}
      {showRightNavbar && <div className="right-navbar">Right Navbar</div>}
    </div>
  );
};

export default Layout;
