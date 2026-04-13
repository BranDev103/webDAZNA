import { Facebook, Twitter, Instagram, Linkedin} from 'lucide-react';

export function Footer() {

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl mb-4 text-emerald-700">CONSTRUCTORA DAZNA S.A de C.V.</h3>
            <p className="text-gray-400">
              "Construyendo el futuro con esfuerzo, honestidad, trabajo en equipo, orden y servicio".
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#servicios" className="hover:text-emerald-600 transition-colors">Construcción Residencial</a></li>
              <li><a href="#servicios" className="hover:text-emerald-600 transition-colors">Construcción Comercial</a></li>
              <li><a href="#servicios" className="hover:text-emerald-600 transition-colors">Construcción Industrial</a></li>
              <li><a href="#servicios" className="hover:text-emerald-600 transition-colors">Remodelaciones</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Enlaces</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-emerald-600 transition-colors">Inicio</a></li>
              <li><a href="#proyectos" className="hover:text-amber-600 transition-colors">Proyectos</a></li>
              <li><a href="#nosotros" className="hover:text-amber-600 transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-amber-600 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Constructora Dazna S.A. de C.V. - Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
