import { ImageWithFallback } from './figma/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    pauseOnHover: false,
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1762049297262-4eef6d6d4d7b?w=1920&q=80',
      alt: 'Construcción moderna',
    },
    {
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80',
      alt: 'Edificio en construcción',
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920&q=80',
      alt: 'Proyecto arquitectónico',
    },
    {
      image: '/src/assets/construction_1.png',
      alt: 'Construcción industrial',
    },
  ];

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Slider {...carouselSettings} className="h-full">
          {slides.map((slide, index) => (
            <div key={index} className="h-screen">
              <ImageWithFallback
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-6">
          Construimos tus sueños
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Más de 20 años de experiencia en construcción residencial, comercial e industrial
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('proyectos')}
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-lg"
          >
            Ver Proyectos
          </button>
          <button
            onClick={() => scrollToSection('contacto')}
            className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Solicitar Cotización
          </button>
        </div>
      </div>
    </section>
  );
}
