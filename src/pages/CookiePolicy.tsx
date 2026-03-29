import React from 'react';
import { Wrench, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm py-4">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">AUTO <span className="text-blue-600">MEC</span></span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="flex-grow py-12 px-4">
        <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
          <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Cookies</h1>
          
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario cuando visita un sitio web. Su finalidad es recordar información sobre la visita del usuario para mejorar la experiencia de navegación.
              </p>
              <p className="mt-4">
                El sitio web de AUTO MEC utiliza cookies propias y de terceros con el objetivo de mejorar la navegación del usuario, analizar el uso del sitio web y ofrecer contenidos adaptados a los intereses de los usuarios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Qué tipos de cookies utilizamos?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Cookies técnicas</h3>
                  <p>Son aquellas necesarias para el funcionamiento básico del sitio web y permiten la navegación y el uso de sus diferentes opciones o servicios.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Cookies de análisis</h3>
                  <p>Estas cookies permiten analizar el comportamiento de los usuarios en el sitio web con el fin de mejorar el funcionamiento del mismo.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Cookies de personalización</h3>
                  <p>Permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Cookies de terceros</h3>
                  <p>Este sitio web puede utilizar servicios de terceros que recopilarán información con fines estadísticos y de uso del sitio web.</p>
                  <p className="mt-2">Entre ellos pueden incluirse herramientas como:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Google Analytics para el análisis del tráfico web.</li>
                    <li>Integraciones de WhatsApp para facilitar el contacto con los usuarios.</li>
                  </ul>
                  <p className="mt-2">Estas herramientas pueden utilizar cookies para recopilar información anónima sobre el uso del sitio web.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">¿Cómo gestionar o desactivar las cookies?</h2>
              <p>
                El usuario puede permitir, bloquear o eliminar las cookies instaladas en su dispositivo mediante la configuración de las opciones del navegador utilizado.
              </p>
              <p className="mt-4">
                A continuación se proporcionan enlaces con información sobre cómo gestionar las cookies en los navegadores más utilizados:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-blue-600">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="mt-4 italic">
                La desactivación de cookies puede afectar al funcionamiento correcto del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Aceptación de la política de cookies</h2>
              <p>
                Al acceder a este sitio web, el usuario verá un aviso o banner de cookies. Al continuar navegando o aceptar el aviso, el usuario consiente el uso de cookies conforme a esta política.
              </p>
              <p className="mt-4">
                El usuario puede modificar su consentimiento en cualquier momento a través de la configuración de su navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Cambios en la política de cookies</h2>
              <p>
                AUTO MEC se reserva el derecho a modificar la presente política de cookies para adaptarla a cambios legislativos o técnicos. Se recomienda a los usuarios revisar esta página periódicamente.
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 AUTO MEC Granada. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
