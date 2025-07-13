// A section to provide a brief introduction to the temple.
export default function AboutSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-4xl font-bold font-serif text-primary mb-4">A Legacy of Faith and Tradition</h2>
            <p className="text-lg text-text-dark mb-6 font-sans">
              The Shree Jagannatha Temple in Puri is one of the most revered Vaishnava sites in India, and one of the original Char Dham pilgrimage sites for Hindus. This brief introduction will share the temple's profound history and enduring spiritual significance.
            </p>
            <button className="px-6 py-2 bg-secondary hover:bg-primary text-white font-bold rounded-full transition-colors duration-300">
              Read More
            </button>
          </div>
          <div className="w-full md:w-1/2 px-4 mt-8 md:mt-0">
            <img 
              src="/assets/temple-old.jpg" 
              alt="An ancient depiction of the Shree Jagannatha Temple" 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 