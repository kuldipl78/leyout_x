import React, { Component } from 'react';

const ConfigurationContext = React.createContext();

class ConfigurationProvider extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  };

  onToggleShowContent = () => {
    this.setState(prevState => ({ showContent: !prevState.showContent }));
  };

  onToggleShowLeftNavbar = () => {
    this.setState(prevState => ({ showLeftNavbar: !prevState.showLeftNavbar }));
  };

  onToggleShowRightNavbar = () => {
    this.setState(prevState => ({ showRightNavbar: !prevState.showRightNavbar }));
  };

  render() {
    const { children } = this.props;
    const { showContent, showLeftNavbar, showRightNavbar } = this.state;
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        {children}
      </ConfigurationContext.Provider>
    );
  }
}

export { ConfigurationProvider, ConfigurationContext };
