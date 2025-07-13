import Navbar from './Navbar';
import Footer from './Footer';

// This component wraps page content with the Navbar and Footer
export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-dark font-sans">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
} 