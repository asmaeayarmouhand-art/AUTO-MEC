export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      services: "Services",
      about: "About Us",
      contact: "Contact",
      login: "Login",
      signup: "Sign Up",
      logout: "Logout"
    },
    hero: {
      title: "Expert Car Care &",
      titleAccent: "Reliable Repairs",
      description: "With over 17 years of experience in Granada, our team of professionals provides high-quality automotive services at unbeatable prices.",
      ctaBook: "Book an Appointment",
      ctaServices: "View Our Services"
    },
    info: {
      call: "Call Us",
      hours: "Opening Hours",
      hoursVal: "Mon - Fri: 07:30 - 15:30",
      location: "Location",
      locationVal: "4 C. Torre Quebrada, Granada"
    },
    services: {
      title: "Our Professional Services",
      description: "We offer a wide range of automotive solutions to keep your vehicle in perfect condition.",
      items: [
        {
          title: "Pre-ITV Line",
          description: "Quick mechanics, brake tester, suspension diagnosis, alignment."
        },
        {
          title: "General Mechanics",
          description: "General mechanics, diagnosis, gas machine, air conditioning charging."
        },
        {
          title: "Quick Mechanics",
          description: "Fast service for routine maintenance and minor repairs."
        },
        {
          title: "Tires",
          description: "We work with all brands - mounting, balancing, and alignment."
        },
        {
          title: "Bodywork & Painting",
          description: "State-of-the-art machinery, ecological paint, and courtesy car."
        }
      ]
    },
    about: {
      title: "About Our Workshop",
      experience: "Years Experience",
      p1: "AUTO MEC is a company founded in Granada with more than 17 years of experience dedicated to the integral repair of vehicles.",
      p2: "Our team consists of more than ten professionals with extensive experience to offer our clients a fast and excellent quality service at an unbeatable price with the most modern technologies.",
      p3: "Aware of the urgent need for a vehicle, we provide our clients with courtesy vehicles, which can be used during the period of your car's repair."
    },
    why: {
      title: "Why Choose AUTO MEC?",
      description: "We combine traditional expertise with modern technology to provide the best care for your vehicle.",
      items: [
        { title: "Expert Technicians", desc: "Our team consists of certified professionals with decades of experience." },
        { title: "Modern Equipment", desc: "We use the latest diagnostic tools and machinery for precise repairs." },
        { title: "Transparent Pricing", desc: "No hidden costs. We provide detailed quotes before any work begins." },
        { title: "Customer Satisfaction", desc: "Our priority is your safety and satisfaction on the road." }
      ]
    },
    testimonials: {
      title: "What Our Clients Say",
      description: "Real reviews from our customers who trust us with their vehicles.",
      items: [
        {
          name: "Victor Luque",
          text: "Pleasantly surprised by the great treatment. Javier was very professional and kind. AUTO MEC is now our trusted workshop."
        },
        {
          name: "Maria Diverxa",
          text: "Found them online and couldn't be happier. Very professional staff, perfect repair, and the car was returned shiny and clean."
        },
        {
          name: "Alonso Martin",
          text: "Great workshop! They attended to me without an appointment, explained the fault clearly with photos, and fixed it the same morning."
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      description: "Have a question or need a quote? Fill out the form and our team will get back to you shortly.",
      address: "Address",
      phone: "Phone",
      email: "Email",
      formTitle: "Request an Appointment",
      formName: "Your Name",
      formEmail: "Your Email",
      formPhone: "Phone Number",
      formMessage: "Subject / Message",
      formPrivacy: "I have read and accept the privacy policy.",
      formSubmit: "Send Message"
    },
    cta: {
      title: "Ready to give your car the care it deserves?",
      description: "Book your appointment today and experience professional service with a personal touch.",
      button: "Book Now"
    },
    footer: {
      desc: "Professional car mechanic workshop with over 17 years of experience in Granada.",
      links: "Quick Links",
      services: "Our Services",
      contact: "Contact Info",
      rights: "All rights reserved.",
      legal: "Legal Notice",
      cookie: "Cookie Policy",
      privacy: "Privacy Policy"
    },
    auth: {
      welcome: "Welcome Back",
      create: "Create Account",
      loginSub: "Login to manage your appointments",
      signupSub: "Join us to get the best care for your car",
      fullName: "Full Name",
      email: "Email Address",
      password: "Password",
      forgot: "Forgot password?",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      login: "Login",
      signup: "Sign Up"
    },
    status: {
      welcome: "Welcome",
      active: "Your account is active. You will receive email updates about your vehicle status.",
      verified: "Account Verified"
    }
  },
  es: {
    nav: {
      services: "Servicios",
      about: "Nosotros",
      contact: "Contacto",
      login: "Iniciar Sesión",
      signup: "Registrarse",
      logout: "Cerrar Sesión"
    },
    hero: {
      title: "Cuidado Experto y",
      titleAccent: "Reparaciones Fiables",
      description: "Con más de 17 años de experiencia en Granada, nuestro equipo de profesionales ofrece servicios automotrices de alta calidad a precios inmejorables.",
      ctaBook: "Pedir Cita",
      ctaServices: "Ver Nuestros Servicios"
    },
    info: {
      call: "Llámanos",
      hours: "Horario",
      hoursVal: "Lun - Vie: 07:30 - 15:30",
      location: "Ubicación",
      locationVal: "4 C. Torre Quebrada, Granada"
    },
    services: {
      title: "Nuestros Servicios Profesionales",
      description: "Ofrecemos una amplia gama de soluciones automotrices para mantener su vehículo en perfectas condiciones.",
      items: [
        {
          title: "Línea Pre-ITV",
          description: "Mecánica rápida, frenómetro, diagnosis de suspensión, alineación."
        },
        {
          title: "Mecánica General",
          description: "Mecánica general, diagnosis, máquina de gases, carga de aire acondicionado."
        },
        {
          title: "Mecánica Rápida",
          description: "Servicio rápido para mantenimiento de rutina y reparaciones menores."
        },
        {
          title: "Neumáticos",
          description: "Trabajamos con todas las marcas: montaje, equilibrado y alineación."
        },
        {
          title: "Chapa y Pintura",
          description: "Maquinaria de última generación, pintura ecológica y coche de cortesía."
        }
      ]
    },
    about: {
      title: "Sobre Nuestro Taller",
      experience: "Años de Experiencia",
      p1: "Talleres AUTO MEC es una empresa fundada en Granada con más de 17 años de experiencia dedicados a la reparación integral de vehículos.",
      p2: "Nuestro equipo consta de más de diez profesionales con una amplia experiencia para ofrecer a sus clientes un servicio rápido y de excelente calidad a un precio inmejorable con las más modernas tecnologías.",
      p3: "Conscientes de la urgente necesidad de disponer de vehículo, ponemos a disposición de nuestros clientes vehículos de cortesía, que podrán ser utilizados durante el periodo de reparación."
    },
    why: {
      title: "¿Por qué elegir AUTO MEC?",
      description: "Combinamos la experiencia tradicional con la tecnología moderna para brindar el mejor cuidado a su vehículo.",
      items: [
        { title: "Técnicos Expertos", desc: "Nuestro equipo está formado por profesionales certificados con décadas de experiencia." },
        { title: "Equipamiento Moderno", desc: "Utilizamos las últimas herramientas de diagnóstico y maquinaria para reparaciones precisas." },
        { title: "Precios Transparentes", desc: "Sin costes ocultos. Proporcionamos presupuestos detallados antes de comenzar cualquier trabajo." },
        { title: "Satisfacción del Cliente", desc: "Nuestra prioridad es su seguridad y satisfacción en la carretera." }
      ]
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      description: "Opiniones reales de nuestros clientes que nos confían sus vehículos.",
      items: [
        {
          name: "Víctor Luque",
          text: "Gratamente sorprendidos por el buen trato. Javier fue muy profesional y amable. AUTO MEC ya es nuestro taller de confianza."
        },
        {
          name: "María Diverxa",
          text: "Los encontré por internet y no puedo estar más contenta. Personal muy profesional, reparación perfecta y el coche impecable."
        },
        {
          name: "Alonso Martín",
          text: "¡Gran taller! Me atendieron sin cita previa, me explicaron la avería claramente con fotos y lo arreglaron la misma mañana."
        }
      ]
    },
    contact: {
      title: "Contacta con nosotros",
      description: "¿Tiene alguna pregunta o necesita un presupuesto? Rellene el formulario y nuestro equipo le responderá pronto.",
      address: "Dirección",
      phone: "Teléfono",
      email: "Correo",
      formTitle: "Solicitar una Cita",
      formName: "Su Nombre",
      formEmail: "Su Correo",
      formPhone: "Número de Teléfono",
      formMessage: "Asunto / Mensaje",
      formPrivacy: "He leído y acepto la política de privacidad.",
      formSubmit: "Enviar Mensaje"
    },
    cta: {
      title: "¿Listo para darle a su coche el cuidado que merece?",
      description: "Reserve su cita hoy y experimente un servicio profesional con un toque personal.",
      button: "Reservar Ahora"
    },
    footer: {
      desc: "Taller mecánico profesional con más de 17 años de experiencia en Granada.",
      links: "Enlaces Rápidos",
      services: "Nuestros Servicios",
      contact: "Información de Contacto",
      rights: "Todos los derechos reservados.",
      legal: "Aviso Legal",
      cookie: "Política de Cookies",
      privacy: "Política de Privacidad"
    },
    auth: {
      welcome: "Bienvenido de nuevo",
      create: "Crear Cuenta",
      loginSub: "Inicie sesión para gestionar sus citas",
      signupSub: "Únase a nosotros para obtener el mejor cuidado para su coche",
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      password: "Contraseña",
      forgot: "¿Olvidó su contraseña?",
      noAccount: "¿No tiene una cuenta?",
      hasAccount: "¿Ya tiene una cuenta?",
      login: "Iniciar Sesión",
      signup: "Registrarse"
    },
    status: {
      welcome: "Bienvenido",
      active: "Su cuenta está activa. Recibirá actualizaciones por correo sobre el estado de su vehículo.",
      verified: "Cuenta Verificada"
    }
  }
};
