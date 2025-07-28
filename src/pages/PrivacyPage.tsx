import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f2e9e2]">
      {/* Header */}
      <div className="bg-[#262c52] text-white py-4 sticky top-0 z-40 shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between min-h-[56px]">
          <Link to="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Volver</span>
          </Link>
          <h1 className="text-lg md:text-xl font-bold">Política de Privacidad</h1>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#262c52] mb-4">
            Política de Privacidad
          </h1>
          <p className="text-lg text-gray-600">
            Última actualización: Enero 2025
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[#262c52] mb-4">1. Información que Recopilamos</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                En UN-IR, recopilamos información que usted nos proporciona directamente cuando:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Se registra en nuestros talleres o cursos</li>
                <li>Completa formularios de contacto</li>
                <li>Se suscribe a nuestras comunicaciones</li>
                <li>Interactúa con nuestro sitio web</li>
              </ul>
              <p>
                Esta información puede incluir: nombre, dirección de correo electrónico, número de teléfono, 
                información profesional y cualquier otra información que decida compartir con nosotros.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#262c52] mb-4">2. Cómo Utilizamos su Información</h2>
            <div className="space-y-4 text-gray-700">
              <p>Utilizamos la información recopilada para:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Proporcionar y mejorar nuestros servicios educativos</li>
                <li>Comunicarnos con usted sobre talleres y actualizaciones</li>
                <li>Procesar inscripciones y pagos</li>
                <li>Enviar materiales educativos y certificaciones</li>
                <li>Responder a sus consultas y brindar soporte</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#262c52] mb-4">3. Compartir Información</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Con su consentimiento explícito</li>
                <li>Para procesar pagos a través de proveedores seguros como Mercado Pago</li>
                <li>Cuando sea requerido por ley</li>
                <li>Para proteger nuestros derechos legales</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#262c52] mb-4">4. Seguridad de los Datos</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
              </p>
              <p>
                Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico 
                es 100% seguro, por lo que no podemos garantizar la seguridad absoluta.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#262c52] mb-4">5. Sus Derechos</h2>
            <div className="space-y-4 text-gray-700">
              <p>Usted tiene derecho a:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Acceder a su información personal</li>
                <li>Corregir información inexacta</li>
                <li>Solicitar la eliminación de su información</li>
                <li>Oponerse al procesamiento de su información</li>
                <li>Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p>
                Para ejercer estos derechos, contáctenos a través de fernanda@un-ir.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#262c52] mb-4">6. Cookies y Tecnologías Similares</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro sitio web, 
                analizar el tráfico y personalizar el contenido. Puede configurar su navegador para rechazar 
                cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#262c52] mb-4">7. Retención de Datos</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Conservamos su información personal solo durante el tiempo necesario para cumplir con 
                los propósitos descritos en esta política, a menos que la ley requiera un período de 
                retención más largo.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#262c52] mb-4">8. Cambios a esta Política</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos sobre 
                cambios significativos publicando la nueva política en nuestro sitio web y actualizando 
                la fecha de "última actualización".
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#262c52] mb-4">9. Contacto</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Si tiene preguntas sobre esta Política de Privacidad o sobre cómo manejamos su información personal, 
                puede contactarnos:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>UN-IR | Lic. Fernanda Suárez</strong></p>
                <p>Email: fernanda@un-ir.com</p>
                <p>Instagram: @licfernandasuarez</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}