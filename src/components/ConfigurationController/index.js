import React, { useContext } from 'react';
import { ConfigurationContext } from '../../ConfigurationContext';
import './index.css';

const ConfigurationController = () => {
  const {
    showContent,
    showLeftNavbar,
    showRightNavbar,
    onToggleShowContent,
    onToggleShowLeftNavbar,
    onToggleShowRightNavbar,
  } = useContext(ConfigurationContext);

  return (
    <div className="configuration-controller">
      <h1>Layout Configuration</h1>
      <div>
        <input
          type="checkbox"
          id="content-checkbox"
          checked={showContent}
          onChange={onToggleShowContent}
        />
        <label htmlFor="content-checkbox">Content</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="left-navbar-checkbox"
          checked={showLeftNavbar}
          onChange={onToggleShowLeftNavbar}
        />
        <label htmlFor="left-navbar-checkbox">Left Navbar</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="right-navbar-checkbox"
          checked={showRightNavbar}
          onChange={onToggleShowRightNavbar}
        />
        <label htmlFor="right-navbar-checkbox">Right Navbar</label>
      </div>
    </div>
  );
};

export default ConfigurationController;
