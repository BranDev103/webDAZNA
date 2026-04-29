import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from '../../assets/logo_header.png';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={logo} alt="Logo" className="h-12 w-auto object-contain"/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Nosotros
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors outline-hidden">
                Interno
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => window.open("/inventario", "_blank")}
                  className="cursor-pointer"
                >
                  Inventario
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => window.open("https://dazna.mx/interno/rh/login.html", "_blank")}
                  className="cursor-pointer"
                >
                  Obras
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-[#0d6efd] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Proyectos
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-gray-700 hover:text-blue-600 transition-colors text-left"
            >
              Nosotros
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors text-left outline-hidden">
                Interno
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => window.open("/inventario", "_blank")}
                  className="cursor-pointer"
                >
                  Gestión de Inventario
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => window.open("/rh", "_blank")}
                  className="cursor-pointer"
                >
                  Recursos Humanos
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-[#0d6efd] text-white px-6 py-2 rounded-lg hover:bg-[#0d6efd]-700 transition-colors text-left"
            >
              Contacto
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
