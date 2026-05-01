import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageCircle, ChevronLeft, ChevronRight, Check, Building2, Cake, Lock, Star, Heart } from 'lucide-react';
import { trackMetaEvent } from '../lib/metaEvents';

const Button = ({ children, className = "", onClick, icon = true }: any) => (
  <button 
    onClick={onClick}
    className={`flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 active:scale-95 shadow-md ${className}`}
  >
    {children}
    {icon && (
      <div className="bg-[#25d366]/10 p-1 rounded-full">
        <MessageCircle className="w-5 h-5 text-[#25d366] fill-[#25d366]" fillOpacity={0.2} />
      </div>
    )}
  </button>
);

const Home = () => {
  const whatsappLink = "https://wa.me/553194708831?text=Ol%C3%A1%21%20Gostaria%20de%20receber%20um%20or%C3%A7amento%20da%20Fly%20Drinks%20para%20meu%20evento.";

  useEffect(() => {
    trackMetaEvent("PageView");
  }, []);

  const handleWhatsAppClick = () => {
    trackMetaEvent("Contact");
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#333] font-sans selection:bg-[#05261d] selection:text-white">
      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Logo Centralizada no Topo */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 z-30">
          <img 
            src="https://iili.io/Bs0Ilv1.png" 
            alt="Fly Drink Logo" 
            className="h-20 md:h-28 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
          />
        </div>

        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://iili.io/BsuYnJs.jpg" 
            alt="Premium Bar Background" 
            className="w-full h-full object-cover"
          />
          {/* Green Gradient Overlay for Brand Identity and Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#05221a]/95 via-[#05221a]/85 to-[#05221a]/98 z-10" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 pt-32 pb-20 text-center md:-translate-y-16 lg:translate-y-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h1 className="font-display text-4xl lg:text-[45px] text-white mb-8 leading-tight font-bold drop-shadow-2xl max-w-5xl">
              <span className="lg:inline">Open bar premium para eventos que exigem</span> <br className="hidden lg:block" />
              excelência, segurança e experiência
            </h1>
            <p className="text-white/90 text-base md:text-lg lg:text-xl mb-12 max-w-5xl font-light leading-relaxed drop-shadow-lg">
              Bebidas originais, equipe profissional e operação completa de bar para casamentos, <br className="hidden sm:block" />
              eventos corporativos e festas privadas em Belo Horizonte e região.
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white text-[#05261d] hover:bg-gray-50 px-6 py-3.5 md:px-10 md:py-5 text-sm md:text-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] whitespace-nowrap"
            >
              Solicitar orçamento no WhatsApp
            </Button>
          </motion.div>
        </div>
      </header>

      {/* --- GRID SECTION --- */}
      <section className="pt-10 pb-20 md:pt-16 md:pb-28 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Drinks autorais exclusivos",
                desc: "Receitas criadas para impressionar clientes, colaboradores e convidados.",
                img: "https://iili.io/Bs04oTQ.png"
              },
              {
                title: "Bebidas 100% originais",
                desc: "Zero risco, zero substituições, zero surpresas. Segurança e qualidade são prioridades.",
                img: "https://iili.io/Bs0Pgkb.png"
              },
              {
                title: "Equipe treinada e profissional",
                desc: "Bartenders uniformizados, atendimento excelente e postura corporativa.",
                img: "https://iili.io/Bs0QGn4.png"
              },
              {
                title: "Montagem premium e estética impecável",
                desc: "Bar que compõe o ambiente e eleva a experiência visual do evento.",
                img: "https://iili.io/Bs0tcQf.png"
              },
              {
                title: "Processo organizado e pontualidade",
                desc: "Chegamos cedo, montamos rápido e deixamos tudo impecável.",
                img: "https://iili.io/Bs0D4l2.png"
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl overflow-hidden group shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-display text-base sm:text-lg mb-1.5 sm:mb-2 text-[#05261d] font-semibold">{card.title}</h3>
                  <p className="text-gray-400 text-[11px] sm:text-xs leading-relaxed font-light">{card.desc}</p>
                </div>
              </motion.div>
            ))}
            
            {/* CTA CARD */}
            <div className="bg-[#05261d] rounded-3xl p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center text-white shadow-xl order-last h-full min-h-[280px] sm:min-h-0">
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8 leading-tight">
                Consultar<br />disponibilidade para<br />o meu evento
              </h3>
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-white text-[#05261d] w-full justify-center text-base sm:text-lg md:text-xl px-6 py-4 md:py-6 whitespace-nowrap font-bold"
                icon={false}
              >
                Fazer orçamento
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* --- MIDDLE BANNER --- */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://iili.io/Bs1zits.png" 
            alt="Bartender smiling" 
            className="w-full h-full object-cover" 
          />
          {/* Gradient Overlay matching attachment */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05261d] via-[#05261d]/90 to-transparent z-10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full py-16 text-left">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-[45px] text-white mb-6 leading-tight font-medium">
              Quando o bar falha,<br />o evento sente.
            </h2>
            <div className="space-y-3 text-white/90 text-base md:text-lg font-light leading-relaxed">
              <p>
                Em um evento importante,<br /> não existe espaço para improviso.
              </p>
              <p>
                Atraso, bebida ruim, equipe despreparada ou desorganização<br className="hidden md:block" /> podem comprometer a experiência dos convidados e gerar<br className="hidden md:block" /> dor de cabeça para quem contratou.
              </p>
              <p className="font-bold text-white text-lg md:text-xl pt-2">
                A Fly existe para que isso não aconteça.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE FLY (4TH SECTION) --- */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#05261d] lg:bg-transparent">
        <div className="absolute inset-0 z-0 hidden lg:block">
          <img 
            src="https://iili.io/BslO7UB.png" 
            alt="Event Detail Background" 
            className="w-full h-full object-cover scale-x-[-1]" 
          />
          {/* Inverted Gradient Overlay: from right to left */}
          <div className="absolute inset-0 bg-gradient-to-l from-[#05261d] via-[#05261d]/90 to-transparent z-10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full py-16 text-left lg:text-right flex justify-start lg:justify-end">
          <div className="max-w-lg">
            <h2 className="font-display text-4xl md:text-[56px] text-white mb-6 leading-[1.1] font-medium">
              Por que escolher a Fly para o seu evento
            </h2>
            <p className="text-white/90 text-lg md:text-xl font-light mb-10">
              Unimos o que o cliente mais valoriza em um evento importante: <span className="font-bold text-white">confiança</span>, <span className="font-bold text-white">estética</span> e <span className="font-bold text-white">excelência na execução</span>.
            </p>
            <ul className="space-y-4 text-white/90 text-base md:text-lg font-light">
              {[
                "Bebidas originais e procedência segura",
                "Equipe profissional e educada",
                "Pontualidade e organização",
                "Atendimento consultivo",
                "Experiência visual premium",
                "Adaptação para diferentes tipos de evento"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 justify-start lg:justify-end">
                  <span className="bg-white/10 p-1.5 rounded-full backdrop-blur-sm border border-white/20 shrink-0">
                    <Check className="w-5 h-5 text-white" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- EVENT PROFILES SECTION --- */}
      <section className="py-12 md:py-20 bg-white text-[#05261d]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 md:mb-12"
          >
            <h2 className="font-display text-4xl md:text-[45px] mb-6 font-medium">
              Atendemos diferentes perfis de evento
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-y-10 gap-x-6 sm:gap-x-10 md:gap-x-12 lg:gap-x-16 mb-12 max-w-6xl mx-auto">
            {[
              { label: "Casamentos", icon: Heart },
              { label: "Eventos corporativos", icon: Building2 },
              { label: "Aniversários", icon: Cake },
              { label: "Festas privadas", icon: Lock },
              { label: "Eventos premium", icon: Star },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center group cursor-default w-[130px] sm:w-[150px] md:w-[170px]"
              >
                <div className="bg-[#05261d]/5 p-5 md:p-6 rounded-2xl mb-4 transition-all duration-300 group-hover:bg-[#05261d]/10 group-hover:scale-110">
                  <event.icon className="w-8 h-8 md:w-10 md:h-10 text-[#05261d]" strokeWidth={1.5} />
                </div>
                <span className="text-sm md:text-lg font-bold text-[#05261d]/80 group-hover:text-[#05261d] transition-colors text-center leading-tight">
                  {event.label}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#05261d] text-white hover:bg-[#073327] px-12 py-5 text-base md:text-lg font-bold uppercase tracking-widest shadow-xl rounded-full"
              icon={false}
            >
              QUERO CONTRATAR
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --- PORTFOLIO --- */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-[#d9e3de]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
            <h2 className="font-display text-4xl md:text-[45px] text-[#05261d] leading-[1.1] font-medium max-w-2xl mx-auto md:mx-0">
              Experiência que entregamos<br />em cada detalhe
            </h2>
            <div className="flex gap-4 mb-2 justify-center md:justify-end">
              <button 
                onClick={() => {
                  const el = document.getElementById('gallery-slider');
                  if (el) el.scrollBy({ left: -el.offsetWidth / 2, behavior: 'smooth' });
                }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#05261d] hover:text-white transition-all shadow-sm group"
              >
                <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              </button>
              <button 
                onClick={() => {
                  const el = document.getElementById('gallery-slider');
                  if (el) el.scrollBy({ left: el.offsetWidth / 2, behavior: 'smooth' });
                }}
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#05261d] hover:text-white transition-all shadow-sm group"
              >
                <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          
          <div 
            id="gallery-slider"
            className="flex gap-4 md:gap-6 overflow-x-auto pb-12 snap-x no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              "https://iili.io/BsW20Cl.jpg",
              "https://iili.io/BsWdtku.jpg",
              "https://iili.io/BsW2AYX.jpg",
              "https://iili.io/BsW2jTb.jpg",
              "https://iili.io/BsW2y9n.jpg",
              "https://iili.io/BsW33Ml.jpg",
              "https://iili.io/BsW3uMQ.jpg",
              "https://iili.io/BsWC8xe.jpg",
              "https://iili.io/BsWCy0v.jpg",
              "https://iili.io/BsWnKzX.jpg"
            ].map((img, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.1 }}
                className="relative flex-none w-[85%] sm:w-[45%] lg:w-[calc(25%-18px)] aspect-[3/4] rounded-3xl overflow-hidden shadow-lg snap-start group"
              >
                <img src={img} alt={`Event detail ${i + 1}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05261d]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS SECTION --- */}
      <section className="bg-[#05261d] flex flex-col lg:flex-row overflow-hidden">
        {/* Left Side: Content */}
        <div className="flex-1 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative">
          {/* Subtle background texture or element to match brand */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="font-display text-4xl md:text-5xl text-white mb-16 leading-tight font-medium">
              Como funciona a <br />contratação
            </h2>
            
            <div className="space-y-12 mb-16">
              {[
                { title: "Você envia os dados do evento", desc: "Tipo de evento, data, local e número de convidados." },
                { title: "Entendemos o perfil da comemoração", desc: "Indicamos a melhor composição para a sua necessidade." },
                { title: "Enviamos a solução ideal", desc: "Montamos uma proposta alinhada ao evento." },
                { title: "Fechamento e operação", desc: "Com tudo aprovado, seguimos para o planejamento da entrega." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex-none">
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 font-display text-sm group-hover:border-white/60 group-hover:text-white transition-colors">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    <p className="text-white/60 text-base font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white text-[#05261d] hover:bg-gray-100 px-12 py-5 text-lg font-bold shadow-2xl"
            >
              Falar com nossa equipe
            </Button>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-[45%] h-[400px] md:h-[600px] lg:h-auto relative">
          <img 
            src="https://iili.io/BsWhN2f.png" 
            alt="Pessoas brindando em evento fly" 
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#05261d] via-transparent to-transparent blend-overlay opacity-30" />
        </div>
      </section>

      {/* --- FOOTER (REBUILT IN CODE) --- */}
      <footer className="bg-[#061311] text-white py-12 md:py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm md:text-base font-light tracking-wide mb-10 opacity-80">
              Mais que um bar, uma experiência no seu evento.
            </p>
            
            <div className="w-full h-px bg-white/10 mb-12" />
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="flex-1 flex justify-center md:justify-start">
                <img 
                  src="https://iili.io/Bs0Ilv1.png" 
                  alt="Fly Drink Logo" 
                  className="h-18 md:h-20 w-auto object-contain"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium opacity-60">
                <Link to="/politica-de-privacidade" className="hover:text-white transition-colors whitespace-nowrap">Políticas de Privacidade</Link>
                <Link to="/termos-de-uso" className="hover:text-white transition-colors whitespace-nowrap">Termos de uso</Link>
              </div>

              <div className="flex-1 flex justify-center md:justify-end gap-3">
                <a href="https://www.instagram.com/fly_drinks/" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                  <img src="https://iili.io/BsXBOss.png" alt="Instagram" className="h-8 md:h-9 w-auto object-contain opacity-60" />
                </a>
                <a href="https://www.facebook.com/flydrinksbh" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
                  <img src="https://iili.io/BsXnnFj.png" alt="Facebook" className="h-8 md:h-9 w-auto object-contain opacity-60" />
                </a>
              </div>
            </div>

            <div className="mt-16 text-[9px] md:text-[10px] uppercase tracking-widest opacity-30">
              © 2026 Fly Drinks - Todos os direitos reservados.
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
