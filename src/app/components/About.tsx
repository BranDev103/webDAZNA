import { Award, Users, CheckCircle, FolderCheck } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { icon: Award, value: "20+", label: "Años de Experiencia" },
  { icon: FolderCheck, value: "100+", label: "Proyectos Completados" },
  { icon: Users, value: "100+", label: "Profesionales" },
  { icon: CheckCircle, value: "100%", label: "Clientes Satisfechos" },
];

const values = [
  "Compromiso con la calidad",
  "Cumplimiento de plazos",
  "Tecnología de vanguardia",
  "Equipo profesional certificado",
  "Materiales de primera calidad",
  "Asesoría personalizada",
];

export function About() {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-bold md:text-5xl mb-6">Sobre Nosotros</h2>
            <p className="text-justify text-xl text-gray-600 mb-3">
              Somos un grupo de empresas fundadas en el año 2001 con el
              compromiso de operar de manera innovadora, eficiente, rentable y
              sustentable, somos empresas mexicanas con una amplia experiencia
              en Construcción de Infraestructura Pública y Privada. 
            </p>
            <p className="text-justify text-xl text-gray-600 mb-6">
              Nos caracterizamos por nuestra excelencia en el servicio,
              con tecnología de punta, equipo, maquinaria y transporte para atender
              diversos proyectos, satisfaciendo a nuestros clientes por medio de
              la exigencia en el control de calidad de nuestra obra terminada.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761227447538-f4e1ec0a9df6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXIlMjB0ZWFtJTIwc2l0ZXxlbnwxfHx8fDE3NzQ1NjE2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipo de construcción"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl mb-2 text-emerald-600">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
