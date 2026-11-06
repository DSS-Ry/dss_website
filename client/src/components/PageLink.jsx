import React from 'react';

export const pageNames = ['home', 'manufacturers', 'services', 'about', 'contact'];
export const pagePath = (page) => page === 'home' ? '/' : `/${page}`;

export const pageFromPath = (pathname) => {
  const page = pathname.replace(/^\/|\/$/g, '') || 'home';
  return pageNames.includes(page) ? page : 'home';
};

const PageLink = function({page, onClick, children, ...props}) {
  return (
    <a {...props} href={pagePath(page)} onClick={(event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey ||
          event.ctrlKey || event.shiftKey || event.altKey ||
          (event.currentTarget.target && event.currentTarget.target !== '_self')) return;
      event.preventDefault();
      if (window.location.pathname !== pagePath(page)) {
        window.history.pushState(null, '', pagePath(page));
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      onClick?.(event);
    }}>
      {children}
    </a>
  );
};

export default PageLink;
