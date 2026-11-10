import React from 'react';
import {
  ArrowLeft,
  BookOpen,
  Award,
  Sparkles,
  Layers,
  ArrowRight,
  Info,
  Clock,
  Smartphone,
  Terminal,
} from 'lucide-react';
import type { SubjectItem, AppModule } from '../types/navigation';

interface SubjectDetailViewProps {
  subject: SubjectItem;
  onBackToHub: () => void;
  onSelectModule: (module: AppModule) => void;
  onOpenBottomBarSettings?: () => void;
}

export const SubjectDetailView: React.FC<SubjectDetailViewProps> = ({
  subject,
  onBackToHub,
  onSelectModule,
  onOpenBottomBarSettings,
}) => {
  const getModuleIcon = (id: string) => {
    switch (id) {
      case 'resumo':
        return BookOpen;
      case 'simulado':
        return Award;
      case 'flashcards':
        return Sparkles;
      case 'diagramas':
        return subject.id.includes('banco-de-dados') ? Terminal : Layers;
      default:
        return Sparkles;
    }
  };

  const getModuleColor = (id: string) => {
    switch (id) {
      case 'resumo':
        return {
          gradient: 'from-blue-600/10 via-slate-900 to-cyan-900/10',
          borderHover: 'hover:border-blue-500/50',
          iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
          tagColor: 'text-blue-400 bg-blue-950/60 border-blue-800/40',
          accentColor: 'text-blue-400',
        };
      case 'simulado':
        return {
          gradient: 'from-emerald-600/10 via-slate-900 to-teal-900/10',
          borderHover: 'hover:border-emerald-500/50',
          iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
          tagColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40',
          accentColor: 'text-emerald-400',
        };
      case 'flashcards':
        return {
          gradient: 'from-indigo-600/10 via-slate-900 to-purple-900/10',
          borderHover: 'hover:border-indigo-500/50',
          iconBg: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-400',
          tagColor: 'text-indigo-400 bg-indigo-950/60 border-indigo-800/40',
          accentColor: 'text-indigo-400',
        };
      case 'diagramas':
        return {
          gradient: 'from-amber-600/10 via-slate-900 to-orange-900/10',
          borderHover: 'hover:border-amber-500/50',
          iconBg: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
          tagColor: 'text-amber-400 bg-amber-950/60 border-amber-800/40',
          accentColor: 'text-amber-400',
        };
      default:
        return {
          gradient: 'from-slate-700/10 via-slate-900 to-slate-900/10',
          borderHover: 'hover:border-slate-500/50',
          iconBg: 'bg-slate-700/10 border-slate-600/30 text-slate-300',
          tagColor: 'text-slate-300 bg-slate-900/60 border-slate-700/40',
          accentColor: 'text-slate-300',
        };
    }
  };

  return (
    <div
      data-page-bg="true"
      className="w-screen h-screen h-[100dvh] overflow-y-auto bg-[#090d16] text-zinc-100 flex flex-col font-sans antialiased selection:bg-blue-600/30 relative z-10"
    >
      {/* Header Superior Minimalista com Breadcrumb */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#090d16]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto h-14 px-3 sm:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={onBackToHub}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer touch-manipulation shrink-0"
              title="Voltar ao Hub de Matérias"
            >
              <ArrowLeft size={14} className="text-blue-400" />
              <span>Matérias</span>
            </button>

            <span className="text-zinc-600 font-mono text-xs hidden sm:inline">/</span>

            <div className="flex items-center gap-2 min-w-0">
              <span className="text-xs font-semibold text-white tracking-wide truncate">
                {subject.title}
              </span>
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold hidden md:inline shrink-0">
                {subject.code}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {onOpenBottomBarSettings && (
              <button
                onClick={onOpenBottomBarSettings}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/[0.08] text-zinc-300 hover:text-white text-[11px] font-medium transition-all cursor-pointer touch-manipulation"
                title="Ajuste de Botões do Celular (3 Botões / Gestos)"
              >
                <Smartphone size={13} className="text-zinc-400" />
                <span className="hidden xs:inline">Ajuste Celular</span>
              </button>
            )}
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-400">
              {subject.semester}
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo da Matéria */}
      <main
        data-page-bg="true"
        className="flex-1 max-w-6xl w-full mx-auto px-3.5 sm:px-8 py-6 sm:py-8 flex flex-col justify-center animate-fade-in"
      >
        {/* Banner da Matéria */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Módulos de Estudo Disponíveis</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {subject.title}
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            {subject.description}
          </p>
        </div>

        {/* Grade dos Módulos Desta Matéria */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {subject.modules.map((module) => {
            const Icon = getModuleIcon(module.id);
            const colors = getModuleColor(module.id);
            const isClickable = module.available;

            return (
              <div
                key={module.id}
                onClick={() => {
                  if (isClickable) {
                    onSelectModule(module.id);
                  }
                }}
                className={`group relative text-left bg-[#0c1220] border border-white/[0.08] rounded-2xl p-5 sm:p-6 transition-all duration-200 ${
                  isClickable
                    ? 'hover:border-white/20 hover:bg-[#0e1628] active:scale-[0.99] cursor-pointer touch-manipulation'
                    : 'opacity-70 cursor-not-allowed'
                } flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center ${colors.iconBg}`}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${colors.tagColor}`}
                    >
                      {module.tag}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {module.title}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {module.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold">
                  <span className="text-zinc-500 font-normal">
                    {module.badge}
                  </span>
                  {isClickable ? (
                    <div
                      className={`flex items-center gap-1.5 ${colors.accentColor} group-hover:translate-x-0.5 transition-transform`}
                    >
                      <span>Acessar Módulo</span>
                      <ArrowRight size={13} />
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-zinc-500">
                      <Clock size={12} />
                      <span>Em preparação</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Lembretes contextualizados das provas */}
        {subject.id === 'banco-de-dados-np2' && (
          <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-start gap-3 text-xs text-blue-200">
            <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Dica de Prova do Prof. Flávio:</strong>{' '}
              No SQL Server, WHERE filtra tuplas individuais antes de agrupar; no INNER JOIN, a amarração é feita via <code>ON chave_estrangeira = chave_primaria</code>. Para substituir nulos, lembre-se de <code>ISNULL(coluna, 'valor')</code>.
            </p>
          </div>
        )}

        {subject.id === 'programacao-em-c-np2' && (
          <div className="mt-6 p-4 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-start gap-3 text-xs text-sky-200">
            <Info size={16} className="text-sky-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Dica de Prova do Prof. Anderson (Simulado 2º Bimestre):</strong>{' '}
              A prova foca em 3 temas: <strong>Matrizes</strong> (último elemento <code>[L-1][C-1]</code>, <code>i==j</code> diagonal, <code>t[j][i]</code> transposta), <strong>Ponteiros</strong> (<code>&</code> endereço, <code>*</code> conteúdo, <code>%p</code> no printf, sem <code>*</code> no parâmetro não altera o original) e <strong>Arquivos</strong> (<code>"w"</code> apaga tudo, <code>"a"</code> anexa no final, checagem sempre <code>if (arq == NULL)</code>).
            </p>
          </div>
        )}

        {subject.id === 'redes-sistemas-distribuidos-np2' && (
          <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-start gap-3 text-xs text-cyan-200">
            <Info size={16} className="text-cyan-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Dica de Prova do Prof. Fábio:</strong>{' '}
              Na máscara /22 (255.255.252.0), o terceiro octeto salta de 4 em 4 (256 - 252 = 4). O TTL evita loops de roteamento e decresce 1 a cada salto.
            </p>
          </div>
        )}

        {subject.id === 'eng-software-np2' && (
          <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-start gap-3 text-xs text-emerald-200">
            <Info size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Dica de Prova de Eng. Software:</strong>{' '}
              O bloco ALT no Diagrama de Sequência mapeia fluxos alternativos e exceções. No MVC, o Controlador valida a requisição, o Modelo executa a lógica/banco e a Visão gera a interface.
            </p>
          </div>
        )}
      </main>

      {/* Rodapé Minimalista */}
      <footer className="w-full border-t border-white/[0.06] py-4 text-center text-xs text-zinc-500">
        Portal de Estudos • {subject.title} • {subject.semester}
      </footer>
    </div>
  );
};
