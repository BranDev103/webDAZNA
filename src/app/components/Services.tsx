import { Building2, Home, Factory, Hammer, ClipboardCheck, Wrench } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Construcción Residencial',
    description: 'Casas, apartamentos y desarrollos residenciales de alta calidad.',
  },
  {
    icon: Building2,
    title: 'Construcción Comercial',
    description: 'Oficinas, locales comerciales y centros empresariales modernos.',
  },
  {
    icon: Factory,
    title: 'Construcción Industrial',
    description: 'Naves industriales, bodegas y plantas de producción.',
  },
  {
    icon: Hammer,
    title: 'Remodelaciones',
    description: 'Renovación y ampliación de espacios existentes.',
  },
  {
    icon: ClipboardCheck,
    title: 'Diseño y Planificación',
    description: 'Asesoría completa desde el diseño hasta la ejecución.',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description: 'Servicios de mantenimiento preventivo y correctivo.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold md:text-5xl mb-4">Nuestros Servicios</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de construcción adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-[#0d6efd]" />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
