import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Clock, ShieldCheck, Star, ChevronRight, Car, User, Instagram } from 'lucide-react';

// --- Components ---

const WhatsAppButton = () => (
  <a
    href="https://wa.me/5588988564447?text=Ol%C3%A1.%20Gostaria%20de%20agendar%20uma%20viagem"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-green-600 hover:shadow-green-500/30 animate-bounce-slow"
    aria-label="Falar no WhatsApp"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  </a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Motorista', href: '#motorista' },
    { name: 'Áreas de atendimento', href: '#areas' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`} role="navigation" aria-label="Menu principal">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" aria-label="Souto Táxi - Página inicial">
          <img src="/Logo do topo do site.svg" alt="Logotipo Souto Táxi - Transporte Executivo" className="h-12 md:h-14 transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-sm font-semibold transition-colors hover:text-souto-600 ${scrolled ? 'text-slate-700' : 'text-slate-700'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="bg-souto-600 hover:bg-souto-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-souto-500/30 flex items-center gap-2"
          >
            <Phone size={16} /> Contato
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-700 focus:outline-none"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-slate-700 font-medium py-2 border-b border-slate-100 hover:text-souto-600"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato"
            onClick={() => setIsOpen(false)}
            className="bg-souto-600 text-white text-center py-3 rounded-xl font-bold mt-2"
          >
            Agende Sua Viagem
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-20 md:pb-0 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-souto-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 md:space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-souto-100 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs font-bold text-souto-800 uppercase tracking-wider">Disponível 24 Horas</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
            Viaje com <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-souto-700 to-souto-500">
              Excelência
            </span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed">
            Especialista em viagens intermunicipais e interestaduais. 
            Conforto, pontualidade e a segurança que sua família merece no Cariri.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <a 
              href="https://wa.me/5588988564447?text=Ol%C3%A1.%20Gostaria%20de%20agendar%20uma%20viagem" 
              className="bg-souto-600 hover:bg-souto-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all hover:shadow-xl hover:shadow-souto-500/30 flex items-center justify-center gap-2 group"
            >
              Agendar Viagem
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#diferenciais" 
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all hover:shadow-md flex items-center justify-center"
            >
              Saiba Mais
            </a>
          </div>

          <div className="pt-6 md:pt-8 flex items-center gap-4 md:gap-6 border-t border-slate-200">
            <div className="group flex-1 bg-gradient-to-br from-souto-50 to-white p-4 md:p-5 rounded-2xl border-2 border-souto-100 hover:border-souto-300 transition-all duration-300 hover:shadow-lg hover:shadow-souto-100/50 hover:-translate-y-1">
              <div className="flex items-baseline gap-2">
                <p className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-souto-700 to-souto-500 bg-clip-text text-transparent animate-pulse whitespace-nowrap">
                  + de 5 mil
                </p>
                <svg className="w-5 h-5 md:w-6 md:h-6 text-souto-600 group-hover:scale-110 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1">Viagens Realizadas</p>
            </div>
            <div className="group flex-1 bg-gradient-to-br from-emerald-50 to-white p-4 md:p-5 rounded-2xl border-2 border-emerald-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-100/50 hover:-translate-y-1">
              <div className="flex items-baseline gap-2">
                <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  100%
                </p>
                <svg className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <p className="text-xs md:text-sm text-slate-600 font-semibold mt-1">Satisfação</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-right order-first md:order-last">
          <div className="relative z-10">
            <img 
              src="/Foto 1.webp" 
              alt="Veículo Souto Táxi - Sedan confortável com ar-condicionado para viagens em Juazeiro do Norte" 
              className="rounded-2xl md:rounded-3xl shadow-2xl w-full object-cover h-[300px] md:h-[500px]"
              style={{ objectPosition: 'center' }}
              loading="eager"
              fetchpriority="high"
            />
            {/* Badge */}
            <div className="absolute -bottom-4 md:-bottom-6 -left-4 md:-left-6 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl flex items-center gap-3 md:gap-4 max-w-xs">
              <div className="bg-souto-100 p-2 md:p-3 rounded-full text-souto-600">
                <ShieldCheck size={24} className="md:w-7 md:h-7" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm md:text-base">Segurança Garantida</p>
                <p className="text-xs text-slate-500">Motorista profissional e credenciado</p>
              </div>
            </div>
          </div>
          {/* Decorative Pattern - Only on desktop */}
          <div className="hidden md:block absolute top-10 right-10 w-full h-full border-2 border-souto-200 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Car className="h-8 w-8" />,
      title: "Carro Moderno",
      description: "Veículo novo, higienizado e com ar-condicionado para seu máximo conforto."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Pontualidade",
      description: "Respeito absoluto ao seu horário. Agende sua viagem e estaremos lá."
    },
    {
      icon: <User className="h-8 w-8" />,
      title: "Motorista Experiente",
      description: "Profissional com anos de estrada, direção defensiva e conhecimento total da região."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Viagens Longas",
      description: "Especialista em trajetos intermunicipais e interestaduais saindo do Cariri."
    }
  ];

  return (
    <section id="diferenciais" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-souto-600 font-bold tracking-wider uppercase text-sm">Nossos Diferenciais</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Por que escolher o Souto Táxi?</h2>
          <p className="text-slate-600">Oferecemos mais que uma corrida, oferecemos uma experiência de viagem tranquila e segura.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white border border-slate-100 group">
              <div className="bg-white border border-slate-200 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-souto-600 group-hover:border-souto-600 transition-colors text-souto-600 group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutDriver = () => {
  return (
    <section id="motorista" className="py-16 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
         <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
             <div className="relative">
                <img 
                  src="/Foto 2.webp" 
                  alt="Francisco Souto - Motorista profissional com direção defensiva certificada e experiência em viagens interestaduais" 
                  className="rounded-2xl shadow-2xl border-4 border-slate-700/50 w-full max-w-md mx-auto transform rotate-2 hover:rotate-0 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-souto-600 p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center gap-2 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-yellow-400" />)}
                  </div>
                  <p className="font-bold text-white">Motorista 5 Estrelas</p>
                </div>
             </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Conheça seu Motorista</h2>
            <div className="h-1 w-20 bg-souto-500 rounded-full"></div>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              <span className="text-white font-semibold">Francisco Souto</span> possui anos de experiência ao volante, realizando viagens de curta, média e longa distância por diversos estados do Nordeste. Com profundo conhecimento das rodovias do Ceará e regiões vizinhas, o <span className="text-white font-semibold">Souto Táxi</span> é sinônimo de confiança e segurança.
            </p>

            <p className="text-slate-300 text-lg leading-relaxed">
              Cada passageiro recebe atendimento personalizado e tratamento VIP, independentemente do destino.
            </p>

            <h3 className="text-xl font-bold text-white pt-4">Diferenciais</h3>
            
            <ul className="space-y-4">
              {[
                "Direção Defensiva Certificada",
                "Expertise nas rotas do CraJuBar e todo o Nordeste",
                "Discrição e Profissionalismo em todas as viagens",
                "Disponibilidade para deslocamentos urgentes"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="bg-souto-500/20 p-1 rounded-full">
                    <ShieldCheck size={18} className="text-souto-400" />
                  </div>
                  <span className="text-slate-200">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6">
              <a href="#contato" className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-bold transition-colors inline-flex items-center gap-2">
                Falar com o Motorista <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Locations = () => {
  const cities = [
    { name: "Juazeiro do Norte", image: "/Juazeiro do Norte.webp" },
    { name: "Crato", image: "/Crato.webp" },
    { name: "Barbalha", image: "/Barbalha.webp" },
  ];

  return (
    <section id="areas" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Área de Atendimento</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Atendemos com agilidade em todo o triângulo CraJuBar e realizamos viagens para qualquer destino do Nordeste sob consulta.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <div key={city.name} className="group relative overflow-hidden rounded-2xl h-64 shadow-md cursor-pointer">
              <img 
                src={city.image} 
                alt={`Serviço de táxi 24 horas em ${city.name} - Souto Táxi atende com pontualidade`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <MapPin size={16} className="text-souto-400" />
                    <span className="text-sm font-medium text-souto-200">Atendimento Rápido</span>
                  </div>
                  <h3 className="text-2xl font-bold">{city.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LocationMap = () => {
  return (
    <section id="localizacao" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.14823990075!2d-39.32527502423381!3d-7.223926992782052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a1835c6428075b%3A0xe9b642d2599823c5!2sSouto%20T%C3%A1xi%20-%20Taxista%2024h!5e0!3m2!1spt-BR!2sbr!4v1755709010917!5m2!1spt-BR!2sbr"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Souto Táxi"
            ></iframe>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
             <div className="inline-block p-3 bg-green-100 rounded-full text-green-700 mb-2">
                <MapPin size={32} />
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Minha Localização</h2>
             <p className="text-slate-600 text-lg">
               Atuo em Juazeiro do Norte - CE, com cobertura estratégica para atender toda a região com agilidade e pontualidade.
             </p>
             <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-slate-100 p-2 rounded-lg">
                    <Clock size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Horário de Atendimento</h4>
                    <p className="text-slate-600">Disponível 24 horas (agendamentos antecipados para horários especiais)</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-slate-100 p-2 rounded-lg">
                    <MapPin size={20} className="text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Área de Atuação</h4>
                    <p className="text-slate-600">Juazeiro do Norte - CE e região</p>
                  </div>
                </div>
             </div>
             <div className="pt-6">
               <a 
                 href="https://maps.app.goo.gl/frNPzYiHfoPSesXG7" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-souto-700 font-bold hover:underline flex items-center gap-2"
               >
                 Abrir no Google Maps <ChevronRight size={16} />
               </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contato" className="py-16 md:py-24 bg-souto-900 text-white relative">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para viajar com segurança?</h2>
        <p className="text-slate-300 text-lg mb-10">
          Não arrisque seu conforto. Chame o Souto Táxi agora mesmo e garanta um serviço de excelência. Aceitamos cartões de crédito, débito, dinheiro físico e PIX.
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          <a 
            href="https://wa.me/5588988564447?text=Ol%C3%A1.%20Gostaria%20de%20agendar%20uma%20viagem" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-green-900/50"
          >
            <Phone size={24} />
            Chamar no WhatsApp
          </a>
          <a 
            href="https://www.instagram.com/taxistasouto/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white py-4 px-6 rounded-xl font-bold text-lg transition-transform hover:scale-105 border border-white/20"
          >
            <Instagram size={24} />
            Ver Instagram
          </a>
        </div>
        
        <p className="mt-8 text-slate-400 text-sm">
          Atendimento rápido • Preço Justo • Conforto
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 md:py-12 border-t border-slate-900" role="contentinfo">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 md:relative">
          <div className="flex items-center gap-2 md:absolute md:left-0">
            <img src="/Logo do fundo do site.svg" alt="Logotipo Souto Táxi" className="h-8 md:h-10" />
          </div>
          
          <nav className="flex gap-4 md:gap-6 text-xs md:text-sm font-medium" aria-label="Menu rodapé">
             <a href="#diferenciais" className="hover:text-white transition-colors">Serviços</a>
             <a href="#areas" className="hover:text-white transition-colors">Áreas de atendimento</a>
             <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>
          
          <div className="text-xs md:text-sm text-center md:absolute md:right-0">
            © {new Date().getFullYear()} Souto Táxi. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-green-200">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AboutDriver />
        <Locations />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;