import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse = () => {
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
          <h1 className="font-display text-4xl md:text-5xl text-[#05261d] mb-10 font-bold">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
            <p>Ao acessar o site da Fly Drinks, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.</p>
            
            <h2 className="text-2xl font-bold text-[#05261d] mt-8">1. Uso de Licença</h2>
            <p>É concedida permissão para navegar pelo site e interagir com as funcionalidades disponíveis para fins de consulta e contratação de serviços.</p>
            
            <h2 className="text-2xl font-bold text-[#05261d] mt-8">2. Isenção de Responsabilidade</h2>
            <p>Os serviços prestados pela Fly Drinks são executados conforme acordado em contrato específico após o orçamento. As imagens neste site são ilustrativas da qualidade e estética dos nossos serviços reais.</p>

            <h2 className="text-2xl font-bold text-[#05261d] mt-8">3. Limitações</h2>
            <p>Em nenhum caso a Fly Drinks ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais no site.</p>

            <h2 className="text-2xl font-bold text-[#05261d] mt-8">4. Legislação Aplicável</h2>
            <p>Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.</p>

            <h2 className="text-2xl font-bold text-[#05261d] mt-8">5. Alterações</h2>
            <p>A Fly Drinks pode revisar estes termos de uso do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
            
            <p className="mt-12 text-sm text-gray-400 italic font-light">Última atualização: Abril de 2026</p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default TermsOfUse;
