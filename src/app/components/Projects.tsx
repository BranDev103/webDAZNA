import { ImageWithFallback } from './figma/ImageWithFallback';
import hospitalAguascalientes from "../../assets/hospital_aguascalientes.jpg";
import cumar from "../../assets/Cumar-manzanillo.jpg";
import reynosa from "../../assets/Terminal_reynosa.png";
import conavi from "../../assets/Nissan-renault aguascalientes.jpg";

const projects = [
  {
    image: hospitalAguascalientes,
    title: 'Hospital General de Zona Aguascalientes',
    category: 'Comercial',
    description: 'Hospital de 200 camas con áreas de urgencias, quirófanos y consultorios',
  },
  {
    image: cumar,
    title: 'Instalaciones CUMAR Puerto Manzanillo',
    category: 'Mantenimiento',
    description: 'Mantenimiento integral para complejo aeroportuario en Manzanillo',
  },
  {
    image: reynosa,
    title: 'Terminal de Pasajeros Reynosa',
    category: 'Comercial',
    description: 'Terminal de pasajeros del aeropuerto internacional de Reynosa',
  },
  {
    image: conavi,
    title: 'Edificios del bienestar',
    category: 'Residencial',
    description: 'Viviendas para el programa del bienestar en Tepeji del Río, Hidalgo',
  },
  /*
  {
    image: hospitalAguascalientes,
    title: 'Hospital General de Zona Aguascalientes',
    category: 'Comercial',
    description: 'Hospital de 200 camas con áreas de urgencias, quirófanos y consultorios',
  },
  {
    image: cumar,
    title: 'Instalaciones CUMAR Puerto Manzanillo',
    category: 'Mantenimiento',
    description: 'Mantenimiento integral para complejo aeroportuario en Manzanillo',
  },
  */
];

export function Projects() {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4">Proyectos Destacados</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre algunos de nuestros trabajos más representativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block bg-[#0d6efd] text-white px-3 py-1 rounded-full text-sm mb-3">
                  {project.category}
                </span>
                <h3 className="text-2xl mb-2">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
