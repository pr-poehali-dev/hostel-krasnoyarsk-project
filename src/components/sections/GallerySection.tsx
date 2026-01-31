const GallerySection = () => {
  const images = [
    'https://cdn.poehali.dev/files/0ad0e3f9-3292-4355-8e4a-a5ad41a5459d.jpg'
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8 sm:mb-12">
          Галерея
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow aspect-[4/3]"
            >
              <img
                src={image}
                alt={`Фото хостела ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
