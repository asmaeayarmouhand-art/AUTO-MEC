/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Wrench, 
  Car, 
  Paintbrush, 
  CheckCircle2, 
  ChevronRight,
  Menu,
  X,
  UserPlus,
  LogIn,
  User as UserIcon,
  LogOut,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import AuthModal from './components/AuthModal';
import { useLanguage } from './LanguageContext';
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

function LandingPage() {
  const { language, setLanguage, t } = useLanguage();
  const [user, loading] = useAuthState(auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

  const openAuth = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    auth.signOut();
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">AUTO <span className="text-blue-600">MEC</span></span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center gap-2 mr-4">
                <Globe className="w-4 h-4 text-slate-400" />
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="bg-transparent text-sm font-semibold text-slate-600 outline-none cursor-pointer hover:text-blue-600 transition-colors"
                >
                  <option value="en">EN</option>
                  <option value="es">ES</option>
                </select>
              </div>
              <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">{t.nav.services}</a>
              <a href="#about" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">{t.nav.about}</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">{t.nav.contact}</a>
              <div className="h-6 w-px bg-slate-200 mx-2"></div>
              
              {loading ? (
                <div className="w-24 h-10 bg-slate-100 animate-pulse rounded-lg"></div>
              ) : user ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                      <UserIcon className="w-4 h-4" />
                    </div>
                    <span className="max-w-[120px] truncate">{user.displayName || 'User'}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="text-slate-500 hover:text-red-600 transition-colors p-2"
                    title={t.nav.logout}
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => openAuth('login')}
                    className="flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    {t.nav.login}
                  </button>
                  <button 
                    onClick={() => openAuth('signup')}
                    className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    <UserPlus className="w-4 h-4" />
                    {t.nav.signup}
                  </button>
                </>
              )}
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <div className="flex items-center justify-between py-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-slate-700">Language / Idioma</span>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setLanguage('en')}
                      className={`px-3 py-1 rounded-lg text-sm font-bold transition-all ${language === 'en' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                    >
                      EN
                    </button>
                    <button 
                      onClick={() => setLanguage('es')}
                      className={`px-3 py-1 rounded-lg text-sm font-bold transition-all ${language === 'es' ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}
                    >
                      ES
                    </button>
                  </div>
                </div>
                <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-slate-700">{t.nav.services}</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-slate-700">{t.nav.about}</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block text-lg font-medium text-slate-700">{t.nav.contact}</a>
                
                <div className="pt-4 border-t border-slate-100">
                  {loading ? (
                    <div className="w-full h-12 bg-slate-100 animate-pulse rounded-lg"></div>
                  ) : user ? (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-2xl">
                        <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                          <UserIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{user.displayName || 'User'}</p>
                          <p className="text-xs text-slate-500">{user.email}</p>
                        </div>
                      </div>
                      <button 
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center gap-2 py-3 text-red-600 font-medium border border-red-100 rounded-2xl hover:bg-red-50 transition-all"
                      >
                        <LogOut className="w-4 h-4" /> {t.nav.logout}
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => openAuth('login')}
                        className="flex items-center justify-center gap-2 py-3 border border-slate-200 rounded-lg font-medium"
                      >
                        <LogIn className="w-4 h-4" /> {t.nav.login}
                      </button>
                      <button 
                        onClick={() => openAuth('signup')}
                        className="flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-lg font-medium"
                      >
                        <UserPlus className="w-4 h-4" /> {t.nav.signup}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop" 
              alt="Workshop background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
            <div className="lg:max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
              >
                {t.hero.title} <span className="text-blue-500">{t.hero.titleAccent}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-xl text-slate-300 max-w-xl"
              >
                {t.hero.description}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="#appointment"
                  className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-900/20 text-center"
                >
                  {t.hero.ctaBook}
                </a>
                <a 
                  href="#services"
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all text-center"
                >
                  {t.hero.ctaServices}
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Account Status for Logged In Users */}
        {user && (
          <section className="py-12 bg-blue-50/50 border-y border-blue-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-blue-100 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4 text-center md:text-left">
                  <div className="bg-blue-600 p-3 rounded-2xl text-white">
                    <UserIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{t.status.welcome}, {user.displayName}!</h3>
                    <p className="text-slate-500">{t.status.active}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-100">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  {t.status.verified}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Info Cards */}
        <section className="py-12 -mt-10 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{t.info.call}</p>
                  <a href="tel:+34698552431" className="text-lg font-bold text-slate-900 hover:text-blue-600 transition-colors">+34 698 552 431</a>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{t.info.hours}</p>
                  <p className="text-lg font-bold text-slate-900">{t.info.hoursVal}</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{t.info.location}</p>
                  <p className="text-lg font-bold text-slate-900">{t.info.locationVal}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{t.services.title}</h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
              <p className="mt-6 text-lg text-slate-600">
                {t.services.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.services.items.map((service: any, index: number) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all group"
                >
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                    {index === 0 && <CheckCircle2 className="w-8 h-8 text-blue-600" />}
                    {index === 1 && <Wrench className="w-8 h-8 text-blue-600" />}
                    {index === 2 && <Clock className="w-8 h-8 text-blue-600" />}
                    {index === 3 && <Car className="w-8 h-8 text-blue-600" />}
                    {index === 4 && <Paintbrush className="w-8 h-8 text-blue-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: t.about.experience, value: "17+", sub: "Years" },
                { label: "Professionals", value: "10+", sub: "Experts" },
                { label: "Happy Clients", value: "5k+", sub: "Satisfied" },
                { label: "Courtesy Cars", value: "Available", sub: "For you" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl sm:text-5xl font-extrabold text-blue-600 mb-2">{stat.value}</p>
                  <p className="text-lg font-bold text-slate-900">{stat.label}</p>
                  <p className="text-sm text-slate-500">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{t.about.title}</h2>
                <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
                <div className="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed">
                  <p>
                    {t.about.p1}
                  </p>
                  <p>
                    {t.about.p2}
                  </p>
                  <p>
                    {t.about.p3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">{t.why.title}</h2>
                <p className="text-slate-400 text-lg mb-10">
                  {t.why.description}
                </p>
                <div className="space-y-6">
                  {t.why.items.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mt-1">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop" 
                  alt="Car repair 1" 
                  className="rounded-2xl h-64 w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <img 
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000&auto=format&fit=crop" 
                  alt="Car repair 2" 
                  className="rounded-2xl h-64 w-full object-cover mt-8"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{t.testimonials.title}</h2>
              <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
              <p className="mt-6 text-lg text-slate-600">
                {t.testimonials.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.items.map((testimonial: any, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-slate-50 rounded-3xl border border-slate-100 relative"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <CheckCircle2 key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-6">"{testimonial.text}"</p>
                  <p className="font-bold text-slate-900">— {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">{t.contact.title}</h2>
                <div className="w-20 h-1.5 bg-blue-600 mt-4 rounded-full"></div>
                <p className="mt-6 text-lg text-slate-600">
                  {t.contact.description}
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl mt-1">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t.contact.address}</p>
                      <p className="text-slate-600">4 C. Torre Quebrada, 18008 Granada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl mt-1">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t.contact.phone}</p>
                      <a href="tel:+34698552431" className="text-slate-600 hover:text-blue-600 transition-colors">+34 698 552 431</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-xl mt-1">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{t.contact.email}</p>
                      <p className="text-slate-600">info@automec.site</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="appointment" className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t.contact.formTitle}</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder={t.contact.formName} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                    <input 
                      type="email" 
                      placeholder={t.contact.formEmail} 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>
                  <input 
                    type="tel" 
                    placeholder={t.contact.formPhone} 
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                  <textarea 
                    placeholder={t.contact.formMessage} 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  ></textarea>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="privacy" className="mt-1.5" required />
                    <label htmlFor="privacy" className="text-sm text-slate-500 leading-tight">
                      {t.contact.formPrivacy}
                    </label>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10">
                    {t.contact.formSubmit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">{t.cta.title}</h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
              {t.cta.description}
            </p>
            <a 
              href="#appointment"
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl inline-block"
            >
              {t.cta.button}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Wrench className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">AUTO MEC</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t.footer.desc}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.footer.links}</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">{t.nav.about}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
                <li><a href="#appointment" className="hover:text-white transition-colors">{t.hero.ctaBook}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.footer.services}</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#services" className="hover:text-white transition-colors">{t.services.items[1].title}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{t.services.items[4].title}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{t.services.items[3].title}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{t.services.items[0].title}</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.footer.contact}</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>4 C. Torre Quebrada, Granada</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <a href="tel:+34698552431" className="hover:text-white transition-colors">+34 698 552 431</a>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>info@automec.site</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p>© 2026 AUTO MEC Granada. {t.footer.rights}</p>
            <div className="flex gap-8">
              <Link to="/legal-notice" className="hover:text-white transition-colors">{t.footer.legal}</Link>
              <Link to="/cookie-policy" className="hover:text-white transition-colors">{t.footer.cookie}</Link>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            </div>
          </div>
        </div>
      </footer>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authMode}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}
