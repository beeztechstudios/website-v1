// File Path: app/layout.js

import './globals.css'; // Your global styles (you might rename this to globals.css later)
import Navbar from '../components/Navbar'; // Adjust path if components folder is outside 'app'
import Footer from '../components/Footer'; // Adjust path if components folder is outside 'app'
import ScrollToTop from '../components/ScrollToTop'; // This component might need review in Next.js

// 1. Define Metadata (crucial for SEO)
// This should contain high-level metadata for Beeztech Agency
export const metadata = {
  title: 'Beeztech Agency - Web Development, UI/UX & Digital Solutions',
  description: 'Your trusted partner for modern web development, UI/UX design, and digital transformation.',
  // You will want to customize this further for Beeztech Agency SEO
};

export default function RootLayout({ children }) {
  return (
    // 2. The Next.js <html> and <body> tags are necessary here
    <html lang="en">
      <body>
        {/*
          3. ScrollToTop is often handled differently in Next.js,
          but we'll keep it here for now if it contains a wrapper.
          If it's just a side effect, we'll convert it to a Client Component.
        */}
        <ScrollToTop />
        
        {/* 4. Navbar and Footer wrap the entire application content */}
        <Navbar />
        
        {/* 5. {children} is where all your routed PAGES will be rendered */}
        <main>
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}

// NOTE: You will need to make sure the paths to your components are correct.
// If your components are in a root 'components' folder, the path should be '../components/Navbar', etc.