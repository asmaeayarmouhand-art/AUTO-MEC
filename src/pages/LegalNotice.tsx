import React from 'react';
import { Wrench, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LegalNotice() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Aviso Legal</h1>
          
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
            <p>
              En cumplimiento con el deber de información establecido en la Ley 34/2002 de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan a continuación los datos identificativos del titular del sitio web.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Datos identificativos</h2>
              <ul className="list-none space-y-2">
                <li><strong>Titular:</strong> AUTO MEC</li>
                <li><strong>Dirección:</strong> Granada, España</li>
                <li><strong>Teléfono:</strong> +34 698 552 431</li>
                <li><strong>Correo electrónico:</strong> info@automec.site</li>
              </ul>
              <p className="mt-4 italic">
                El presente sitio web tiene como finalidad ofrecer información sobre los servicios de mecánica a domicilio ofrecidos por AUTO MEC.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Condiciones de uso</h2>
              <p>
                El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas las disposiciones incluidas en este Aviso Legal.
              </p>
              <p>
                El usuario se compromete a utilizar el sitio web de conformidad con la ley, la buena fe, el orden público y el presente Aviso Legal.
              </p>
              <p>
                Queda prohibido el uso del sitio web con fines ilícitos o que puedan causar perjuicios a AUTO MEC o a terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, diseños, estructura, código fuente y demás elementos, están protegidos por la normativa de propiedad intelectual e industrial.
              </p>
              <p>
                Queda prohibida su reproducción, distribución o modificación sin la autorización previa y expresa del titular del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Responsabilidad</h2>
              <p>
                AUTO MEC no se responsabiliza de los daños o perjuicios derivados del uso de la información contenida en este sitio web ni de posibles errores u omisiones en los contenidos.
              </p>
              <p>
                Asimismo, AUTO MEC no garantiza la disponibilidad permanente del sitio web ni se hace responsable de posibles interrupciones del servicio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Enlaces externos</h2>
              <p>
                Este sitio web puede contener enlaces a sitios web de terceros. AUTO MEC no se responsabiliza del contenido, políticas o prácticas de dichos sitios externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Protección de datos personales</h2>
              <p>
                Los datos personales que el usuario facilite a través del sitio web serán tratados de conformidad con lo establecido en el General Data Protection Regulation y la Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
              </p>
              <p>
                Para más información sobre el tratamiento de los datos personales, el usuario puede consultar la correspondiente Política de Privacidad del sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Legislación aplicable y jurisdicción</h2>
              <p>
                La relación entre AUTO MEC and el usuario se regirá por la normativa vigente en Spain.
              </p>
              <p>
                Para la resolución de cualquier controversia que pudiera surgir en relación con el acceso o uso del sitio web, las partes se someterán a los juzgados y tribunales de Granada, salvo que la legislación aplicable disponga otra cosa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Resolución de conflictos en línea</h2>
              <p>
                De acuerdo con la normativa europea de protección al consumidor, los usuarios tienen la posibilidad de acudir a la plataforma de resolución de litigios en línea facilitada por la European Commission.
              </p>
              <p>
                La plataforma está disponible en el siguiente enlace: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>
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
