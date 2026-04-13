import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Estamos listos para ayudarte a hacerlo
            realidad
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-gray-700 mb-2">Nombre Completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-gray-700 mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  placeholder=""
                  maxLength={10}
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-gray-700 mb-2">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />Enviar Mensaje
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-gray-800 mb-1">Teléfono</div>
                    <a
                      href="tel:+1234567890"
                      className="text-xl text-gray-800 hover:text-emerald-600">+52 7714897084
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-gray-700 mb-1">Email</div>
                    <a
                      href="mailto:contacto@dazna.mx"
                      className="text-xl text-gray-800 hover:text-emerald-600">
                      contacto@dazna.mx
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-gray-700 mb-1">Dirección</div>
                    <address className="text-xl text-gray-800 not-italic hover:text-emerald-600">
                      <a href="https://maps.app.goo.gl/EfipwvC5R4h4n4Lk9" target="_blank">Blvd. Valle de San Javier, N. 101, 3er piso, Col. Valle de
                      San Javier, C.P. 42086, Pachuca de Soto, Hgo.</a>
                    </address>
                
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-8 rounded-xl border-2 border-emerald-200">
              <h3 className="text-2xl mb-4">Horario de Atención</h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">Lunes a Viernes:</span> 9:00 AM - 5:00 PM
                </p>
                <p>
                  <span className="font-semibold">Sábado:</span> 9:00 AM - 1:00 PM
                </p>
                <p>
                  <span className="font-semibold">Domingo:</span> Cerrado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
