import React from 'react';
import { Wrench, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-slate-900 mb-8 border-b border-slate-100 pb-4">Privacidad</h1>
          
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
            <p>
              De conformidad con lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (GDPR) y la Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), se informa a los usuarios del sitio web de la siguiente política de privacidad relativa al tratamiento de datos personales.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Responsable del tratamiento</h2>
              <ul className="list-none space-y-2">
                <li><strong>Razón social:</strong> AUTO MEC</li>
                <li><strong>Dirección:</strong> Granada, España</li>
                <li><strong>Teléfono:</strong> +34 642 379 218</li>
                <li><strong>Correo electrónico:</strong> info@automec.site</li>
              </ul>
              <p className="mt-4">
                AUTO MEC es responsable del tratamiento de los datos personales recogidos a través de este sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Finalidad del tratamiento de los datos</h2>
              <p>
                Los datos personales que el usuario facilite a través de los formularios de contacto del sitio web serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestionar solicitudes de información o presupuestos.</li>
                <li>Atender consultas o peticiones realizadas por los usuarios.</li>
                <li>Gestionar la prestación de servicios mecánicos a domicilio.</li>
                <li>Mantener la comunicación con los clientes y potenciales clientes.</li>
                <li>Elaborar, en su caso, un perfil comercial basado en la información facilitada para ofrecer servicios relacionados.</li>
              </ul>
              <p className="mt-4">
                No se tomarán decisiones automatizadas basadas en perfiles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Legitimación para el tratamiento de datos</h2>
              <p>
                La base legal para el tratamiento de los datos personales es:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>El consentimiento del interesado, otorgado al aceptar el formulario de contacto o al comunicarse con AUTO MEC.</li>
                <li>El interés legítimo del responsable para atender solicitudes y prestar los servicios solicitados.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Conservación de los datos</h2>
              <p>
                Los datos personales se conservarán mientras exista una relación comercial o mientras el usuario no solicite su supresión. Cuando los datos ya no sean necesarios para los fines para los que fueron recogidos, serán eliminados aplicando las medidas de seguridad adecuadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Destinatarios de los datos</h2>
              <p>
                Los datos personales no se cederán a terceros, salvo en los siguientes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cuando exista una obligación legal.</li>
                <li>Cuando sea necesario para la prestación del servicio solicitado.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Derechos de los usuarios</h2>
              <p>
                Los usuarios tienen derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Solicitar el acceso a sus datos personales.</li>
                <li>Solicitar la rectificación de datos inexactos.</li>
                <li>Solicitar la supresión de sus datos (derecho al olvido).</li>
                <li>Solicitar la limitación del tratamiento.</li>
                <li>Oponerse al tratamiento de sus datos.</li>
                <li>Solicitar la portabilidad de los datos.</li>
                <li>Retirar el consentimiento en cualquier momento.</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, el usuario puede contactar con el responsable a través del correo electrónico: <a href="mailto:info@automec.site" className="text-blue-600 hover:underline">info@automec.site</a>
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
