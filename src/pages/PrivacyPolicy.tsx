import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { trackMetaEvent } from '../lib/metaEvents';

const PrivacyPolicy = () => {
  useEffect(() => {
    trackMetaEvent("PageView");
  }, []);
  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#333] font-sans">
      <header className="bg-[#05261d] py-10">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-white/60 hover:text-white flex items-center gap-2 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </Link>
          <img src="https://iili.io/Bs0Ilv1.png" alt="Fly Drinks" className="h-12 brightness-0 invert" />
          <div className="w-20" /> {/* Spacer */}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-8 md:p-16 shadow-sm"
        >
          <h1 className="font-display text-4xl md:text-5xl text-[#05261d] mb-10 font-bold">Políticas de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>A Fly Drinks valoriza a privacidade dos seus usuários e está comprometida em proteger as informações coletadas por meio deste site.</p>
            
            <h2 className="text-2xl font-bold text-[#05261d] mt-8">1. Coleta de Informações</h2>
            <p>Coletamos informações básicas quando você entra em contato conosco via WhatsApp ou formulários, como nome e detalhes do evento, para que possamos fornecer o melhor atendimento possível.</p>
            
            <h2 className="text-2xl font-bold text-[#05261d] mt-8">2. Uso das Informações</h2>
            <p>As informações são utilizadas exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Processar orçamentos e pedidos de serviço;</li>
              <li>Aprimorar nossos serviços e experiência do cliente;</li>
              <li>Comunicações relacionadas ao seu evento.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#05261d] mt-8">3. Proteção de Dados</h2>
            <p>Implementamos medidas de segurança para manter a segurança de suas informações pessoais. Não vendemos, trocamos ou transferimos suas informações para terceiros.</p>

            <h2 className="text-2xl font-bold text-[#05261d] mt-8">4. Cookies</h2>
            <p>Podemos utilizar cookies para melhorar a navegação no site. Você pode optar por desativar os cookies nas configurações do seu navegador.</p>

            <h2 className="text-2xl font-bold text-[#05261d] mt-8">5. Contato</h2>
            <p>Para dúvidas sobre nossa política de privacidade, entre em contato pelo email: contatoflydrinks@gmail.com</p>
            
            <p className="mt-12 text-sm text-gray-400 italic font-light">Última atualização: Abril de 2026</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
