// components/ScrollToTop.jsx

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object (which includes the pathname)
  const { pathname } = useLocation();

  // This effect runs every time the pathname changes (i.e., every navigation)
  useEffect(() => {
    // Scrolls the window to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // Re-run effect whenever the route changes

  // This component doesn't render anything visually
  return null;
};

export default ScrollToTop;