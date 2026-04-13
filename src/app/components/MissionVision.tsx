import { Target, Eye, HeartHandshake } from "lucide-react";

export function MissionVision() {
  return (
    <section
      id="mision-vision"
      className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4">Nuestra Filosofía</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Los principios que guían cada uno de nuestros proyectos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Misión */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-100 p-4 rounded-full">
                <Target className="w-10 h-10 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-2xl text-center mb-4 text-emerald-600">Misión</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              Ser una empresa dedicada al ramo de la construcción. Promover el
              desempeño honesto, eficaz y eficiente de nuestros colaboradores
              con el propósito de ofrecer un servicio de calidad a nuestros
              clientes en base al esfuerzo, honestidad, trabajo en equipo, orden
              y servicio.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-100 p-4 rounded-full">
                <Eye className="w-10 h-10 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-2xl text-center mb-4 text-emerald-600">Visión</h3>
            <p className="text-gray-600 text-center leading-relaxed">
                Ser una empresa sólida, logrando así la confianza y credibilidad de
                nuestros clientes mediante la entrega en tiempo y forma de cada uno
                de nuestros proyectos, consolidando nuestro compromiso de ser una empresa
                estable dentro del estado de Hidalgo y a nivel nacional.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-100 p-4 rounded-full">
                <HeartHandshake className="w-10 h-10 text-emerald-600" />
              </div>
            </div>
            <h3 className="text-2xl text-center mb-4 text-emerald-600">Valores</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                <span>Integridad y respeto</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                <span>Compromiso con la calidad</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                <span>Innovación constante</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                <span>Trabajo en equipo</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                <span>Pasión por lo que hacemos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
