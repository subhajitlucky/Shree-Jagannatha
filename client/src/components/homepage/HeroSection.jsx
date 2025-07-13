export default function HeroSection() {
  return (
    <div
      className="relative bg-cover bg-center h-[85vh] flex items-center justify-center text-center"
      // Using a local image from the public folder
      style={{ backgroundImage: "url('/assets/temple-new.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-bold font-serif text-white leading-tight">
          Experience the Divine
        </h1>
        <p className="mt-4 text-lg md:text-xl font-sans text-text-light">
          Discover the ancient traditions and spiritual serenity of the Shree Jagannatha Temple.
        </p>
        <button className="mt-8 px-8 py-3 bg-accent hover:bg-secondary text-white font-bold rounded-full transition-colors duration-300">
          Explore the History
        </button>
      </div>
    </div>
  );
} 