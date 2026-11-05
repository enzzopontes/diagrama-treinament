import React, { useState, useMemo } from 'react';
import {
  Database,
  Code2,
  Network,
  Cpu,
  BookPlus,
  ArrowRight,
  BookOpen,
  Clock,
  Layers3,
  Search,
  Terminal,
  Flame,
} from 'lucide-react';
import { HubHeader } from './HubHeader';
import { DEFAULT_SUBJECTS } from '../data/subjects';
import type { SubjectItem, AppModule } from '../types/navigation';

interface HubViewProps {
  onSelectSubject: (subject: SubjectItem) => void;
  onQuickLaunchModule: (subject: SubjectItem, module: AppModule) => void;
  onOpenBottomBarSettings?: () => void;
}

export const HubView: React.FC<HubViewProps> = ({
  onSelectSubject,
  onQuickLaunchModule,
  onOpenBottomBarSettings,
}) => {
  const subjects = DEFAULT_SUBJECTS;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<'NP2' | 'NP1' | 'all'>('NP2');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'available' | 'upcoming'>('all');

  // Ícones por ID ou nome
  const getSubjectIcon = (id: string) => {
    if (id.includes('banco-de-dados')) return Database;
    if (id.includes('redes')) return Network;
    if (id.includes('programacao-em-c')) return Terminal;
    if (id.includes('eng-software')) return Code2;
    if (id.includes('estrutura-dados')) return Cpu;
    return BookPlus;
  };

  // Filtragem com busca e bimestre
  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      const matchesSemester =
        selectedSemester === 'all' || subject.semester === selectedSemester;

      const matchesStatus =
        selectedFilter === 'all' || subject.status === selectedFilter;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        subject.title.toLowerCase().includes(q) ||
        subject.code.toLowerCase().includes(q) ||
        subject.category.toLowerCase().includes(q) ||
        subject.description.toLowerCase().includes(q);

      return matchesSemester && matchesStatus && matchesSearch;
    });
  }, [subjects, selectedSemester, selectedFilter, searchQuery]);

  const np2Count = subjects.filter((s) => s.semester === 'NP2').length;
  const np1Count = subjects.filter((s) => s.semester === 'NP1').length;
  const activeCount = subjects.filter((s) => s.status === 'available').length;
  const totalCount = subjects.length;

  return (
    <div
      data-page-bg="true"
      className="w-screen h-screen h-[100dvh] overflow-y-auto bg-[#090d16] text-zinc-100 flex flex-col font-sans antialiased selection:bg-blue-600/30 relative z-10"
    >
      {/* Header Minimalista Estilo Linear/Raycast */}
      <HubHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeCount={activeCount}
        totalCount={totalCount}
        onOpenBottomBarSettings={onOpenBottomBarSettings}
      />

      {/* Conteúdo Principal do Hub */}
      <main
        data-page-bg="true"
        className="flex-1 max-w-7xl w-full mx-auto px-3.5 sm:px-6 py-6 sm:py-8 flex flex-col"
      >
        {/* Hero Minimalista Editorial */}
        <div className="max-w-3xl mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-300 text-xs font-medium mb-3 shadow-sm">
            <Layers3 size={13} className="text-blue-400" />
            <span>Portal de Estudos ADS • Grade Curricular</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Central de Estudos por Matéria
          </h1>
          <p className="mt-2 text-xs sm:text-base text-zinc-400 leading-relaxed">
            Materiais fiéis às aulas e lousas dos professores: resumos direcionados, simulador de laboratório prático e fixação sem adivinhações.
          </p>
        </div>

        {/* Seletor de Bimestre (NP2 Atual vs NP1 Anterior) - 100% Mobile Friendly */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
          {/* Tabs de Bimestre */}
          <div className="inline-flex p-1 rounded-xl bg-white/[0.03] border border-white/[0.08] shrink-0 self-start sm:self-auto">
            <button
              onClick={() => setSelectedSemester('NP2')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 ${
                selectedSemester === 'NP2'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Flame size={13} className={selectedSemester === 'NP2' ? 'text-amber-300' : 'text-zinc-500'} />
              <span>NP2 (Bimestre Atual)</span>
              <span className="px-1.5 py-0.2 rounded-md bg-white/20 text-[10px]">
                {np2Count}
              </span>
            </button>
            <button
              onClick={() => setSelectedSemester('NP1')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation flex items-center gap-1.5 ${
                selectedSemester === 'NP1'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <span>NP1 (Anterior)</span>
              <span className="px-1.5 py-0.2 rounded-md bg-white/20 text-[10px]">
                {np1Count}
              </span>
            </button>
            <button
              onClick={() => setSelectedSemester('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer touch-manipulation ${
                selectedSemester === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Todas
            </button>
          </div>

          {/* Filtro de Status */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer shrink-0 ${
                selectedFilter === 'all'
                  ? 'bg-white/[0.08] text-white border-white/[0.15]'
                  : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-300'
              }`}
            >
              Todas ({filteredSubjects.length})
            </button>
            <button
              onClick={() => setSelectedFilter('available')}
              className={`px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                selectedFilter === 'available'
                  ? 'bg-white/[0.08] text-white border-white/[0.15]'
                  : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-300'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Disponíveis</span>
            </button>
            <button
              onClick={() => setSelectedFilter('upcoming')}
              className={`px-2.5 py-1.5 rounded-lg border transition-all cursor-pointer shrink-0 ${
                selectedFilter === 'upcoming'
                  ? 'bg-white/[0.08] text-white border-white/[0.15]'
                  : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-300'
              }`}
            >
              Em Breve
            </button>
          </div>
        </div>

        {/* Grade de Matérias Sóbria e Profissional */}
        {filteredSubjects.length === 0 ? (
          <div className="text-center py-16 px-4 border border-dashed border-white/[0.08] rounded-3xl bg-white/[0.01] animate-fade-in">
            <Search size={32} className="mx-auto text-zinc-500 mb-3" />
            <h3 className="text-base font-semibold text-white">
              Nenhuma matéria encontrada
            </h3>
            <p className="mt-1 text-xs text-zinc-400">
              Não encontramos resultados para &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSemester('NP2');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] active:scale-95 text-xs font-medium text-zinc-200 transition-all cursor-pointer touch-manipulation"
            >
              Limpar busca
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {filteredSubjects.map((subject, index) => {
              const Icon = getSubjectIcon(subject.id);
              const isAvailable = subject.status === 'available';

              return (
                <div
                  key={subject.id}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`group relative text-left bg-[#0c1220] border border-white/[0.08] rounded-2xl p-5 sm:p-6 transition-all duration-200 ${
                    isAvailable
                      ? 'hover:border-white/20 hover:bg-[#0e1628]'
                      : 'opacity-70 hover:border-white/10'
                  } flex flex-col justify-between`}
                >
                  <div>
                    {/* Topo do Card */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl border flex items-center justify-center ${subject.iconBg}`}
                        >
                          <Icon size={18} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono font-bold text-zinc-400">
                              {subject.code}
                            </span>
                            <span
                              className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-bold ${
                                subject.semester === 'NP2'
                                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                  : 'bg-white/[0.04] text-zinc-400 border border-white/[0.08]'
                              }`}
                            >
                              {subject.semester}
                            </span>
                          </div>
                          <span className="text-[11px] text-zinc-500 font-medium">
                            {subject.category}
                          </span>
                        </div>
                      </div>

                      {/* Status */}
                      {isAvailable ? (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span>Ativo</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 shrink-0">
                          <Clock size={11} />
                          <span>Aguardando material</span>
                        </span>
                      )}
                    </div>

                    {/* Título e Descrição */}
                    <h2
                      onClick={() => isAvailable && onSelectSubject(subject)}
                      className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors cursor-pointer"
                    >
                      {subject.title}
                    </h2>
                    <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-2">
                      {subject.description}
                    </p>

                    {/* Módulos Disponíveis */}
                    {isAvailable && subject.modules.length > 0 && (
                      <div className="mt-3.5 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                        {subject.modules.map((mod) => (
                          <span
                            key={mod.id}
                            className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-300"
                          >
                            {mod.id === 'diagramas' && subject.id.includes('banco-de-dados')
                              ? '⚡ Laboratório SQL'
                              : mod.id === 'resumo'
                              ? '📘 Resumo Oficial'
                              : mod.id === 'diagramas'
                              ? '📐 Prática'
                              : mod.id === 'simulado'
                              ? '🏆 Simulado'
                              : '🃏 Flashcards'}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Ações do Card */}
                  <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <button
                      onClick={() => isAvailable && onSelectSubject(subject)}
                      disabled={!isAvailable}
                      className={`flex items-center justify-center gap-1.5 px-4 py-2 min-h-[38px] rounded-xl text-xs font-semibold transition-all touch-manipulation active:scale-95 ${
                        isAvailable
                          ? 'bg-white/[0.08] hover:bg-white/[0.12] text-white border border-white/[0.1] cursor-pointer'
                          : 'bg-white/[0.02] text-zinc-600 border border-white/[0.04] cursor-not-allowed'
                      }`}
                    >
                      <span>{isAvailable ? 'Abrir Módulos' : 'Em Breve'}</span>
                      {isAvailable && <ArrowRight size={13} />}
                    </button>

                    {/* Atalhos Rápidos */}
                    {isAvailable && (
                      <div className="flex items-center gap-1.5">
                        {subject.modules.some((m) => m.id === 'diagramas') && (
                          <button
                            onClick={() => onQuickLaunchModule(subject, 'diagramas')}
                            className="px-3 py-1.5 min-h-[38px] rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs font-medium transition-all cursor-pointer flex items-center gap-1"
                            title="Prática / Laboratório"
                          >
                            <Terminal size={13} />
                            <span>{subject.id.includes('banco-de-dados') ? 'Praticar SQL' : 'Laboratório'}</span>
                          </button>
                        )}
                        <button
                          onClick={() => onQuickLaunchModule(subject, 'resumo')}
                          className="px-3 py-1.5 min-h-[38px] rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-zinc-300 text-xs font-medium transition-all cursor-pointer flex items-center gap-1"
                          title="Resumo Teórico"
                        >
                          <BookOpen size={13} />
                          <span>Resumo</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Rodapé Minimalista */}
      <footer className="w-full border-t border-white/[0.06] py-4 px-4 text-center text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-zinc-300">ADS UNIP</span>
          <span className="text-zinc-600">•</span>
          <span>Portal de Estudos NP1 & NP2</span>
        </div>
        <p className="text-[11px] sm:text-xs">Sincronizado com os materiais oficiais de aula</p>
      </footer>
    </div>
  );
};
