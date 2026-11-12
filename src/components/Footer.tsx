import React from 'react';
import { Layers, CheckCircle2, Shield, ArrowUp } from 'lucide-react';

interface FooterProps {
  onBackToTop?: () => void;
  accentColor?: string;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop, accentColor = 'text-blue-400' }) => {
  const scrollToTop = () => {
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const scrollable = document.querySelector('.overflow-y-auto');
      if (scrollable) {
        scrollable.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="w-full mt-12 pt-8 pb-32 sm:pb-20 border-t border-white/[0.08] bg-[#070a12]/90 backdrop-blur-sm text-zinc-400 text-xs">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
        {/* Linha Principal */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className={`font-mono font-bold tracking-wider text-sm ${accentColor}`}>
                NEXUS • ADS
              </span>
              <span className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] text-zinc-300 font-mono">
                NP2 • 2º Bimestre
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 max-w-md leading-relaxed">
              Portal Oficial de Treinamento e Fixação • Análise e Desenvolvimento de Sistemas (UNIP). Conteúdo 100% alinhado às provas oficiais aplicadas pelos professores.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 hover:text-white transition-all text-xs font-medium cursor-pointer active:scale-95"
          >
            <ArrowUp size={14} />
            <span>Voltar ao Topo</span>
          </button>
        </div>

        {/* Pilares do Portal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-white/[0.04] text-[11px]">
          <div className="flex items-center gap-2 text-zinc-400">
            <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
            <span>Gabaritos fundamentados item por item</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <Layers size={14} className="text-blue-400 shrink-0" />
            <span>Simulados com feedback em tempo real</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <Shield size={14} className="text-cyan-400 shrink-0" />
            <span>Macetes de decoreba rápida para a prova</span>
          </div>
        </div>

        {/* Linha Final de Segurança e Respiro */}
        <div className="pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] text-zinc-600 font-mono">
          <span>© 2026 NEXUS • Todos os direitos reservados aos estudantes.</span>
          <span>Role livremente • Safe Area Ativa</span>
        </div>
      </div>
    </footer>
  );
};
