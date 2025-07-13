// A section to introduce the Holy Trinity.
export default function DeitiesSection() {
  const deities = [
    {
      name: "Lord Jagannatha",
      description: "The Lord of the Universe, a form of Vishnu. His large, round eyes signify his compassion for all beings.",
      image: "/assets/temple-new.jpg" // Placeholder
    },
    {
      name: "Lord Balabhadra",
      description: "The elder brother of Jagannatha, considered to be an incarnation of Shesha.",
      image: "/assets/temple-old.jpg" // Placeholder
    },
    {
      name: "Devi Subhadra",
      description: "The sister of Jagannatha and Balabhadra, a symbol of divine energy.",
      image: "/assets/temple-new.jpg" // Placeholder
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif text-primary mb-12">The Holy Trinity</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {deities.map((deity, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-background overflow-hidden">
                  <img src={deity.image} alt={deity.name} className="w-full h-full object-contain"/>
                </div>
                <h3 className="text-2xl font-bold font-serif text-secondary mb-2">{deity.name}</h3>
                <p className="text-text-dark font-sans">{deity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 