import React from "react";

const Link = ({ href, children }) => {
  
  const onClick = (event) => {
    // prevent full page reload
    event.preventDefault();
    // update url
    window.history.pushState({}, "", href);

    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
};

export default Link;