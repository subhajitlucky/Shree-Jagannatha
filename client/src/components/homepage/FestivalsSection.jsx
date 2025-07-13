// A section to highlight the major festivals.
export default function FestivalsSection() {
  const festivals = [
    {
      name: "Rath Yatra",
      description: "The grand chariot festival, where the deities embark on a public procession.",
      image: "/assets/temple-new.jpg" // Placeholder - replace with festival images
    },
    {
      name: "Snana Yatra",
      description: "The divine bathing ceremony of the deities, a prelude to the Rath Yatra.",
      image: "/assets/temple-old.jpg" // Placeholder - replace with festival images
    },
    {
      name: "Nabakalebara",
      description: "The unique and sacred ritual of the recreation of the wooden idols.",
      image: "/assets/temple-new.jpg" // Placeholder - replace with festival images
    }
  ];

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-serif text-white mb-12">Major Festivals</h2>
        <div className="flex flex-wrap -mx-4">
          {festivals.map((festival, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-background rounded-lg shadow-2xl overflow-hidden">
                <div className="w-full h-48 bg-secondary">
                  <img src={festival.image} alt={festival.name} className="w-full h-full object-contain"/>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-serif text-primary mb-2">{festival.name}</h3>
                  <p className="text-text-dark font-sans">{festival.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 