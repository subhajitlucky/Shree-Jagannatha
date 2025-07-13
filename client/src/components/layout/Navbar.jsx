import { Link } from 'react-router-dom';

// Responsive Navbar with sticky positioning
export default function Navbar() {
  return (
    <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold font-serif">Shree Jagannatha Temple</Link>
        <div className="flex space-x-6 md:space-x-4 flex-col md:flex-row">
          <Link to="/" className="hover:text-accent transition-colors duration-300">Home</Link>
          <Link to="/history" className="hover:text-accent transition-colors duration-300">History</Link>
          <Link to="/deities" className="hover:text-accent transition-colors duration-300">Deities</Link>
          <Link to="/festivals" className="hover:text-accent transition-colors duration-300">Festivals</Link>
          <Link to="/visit" className="hover:text-accent transition-colors duration-300">Visit</Link>
          <Link to="/gallery" className="hover:text-accent transition-colors duration-300">Gallery</Link>
        </div>
      </div>
    </nav>
  );
} 