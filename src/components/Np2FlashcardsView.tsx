import React, { useState, useMemo, useCallback } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Sparkles,
  BookOpen,
  Filter,
} from 'lucide-react';
import type { Np2Flashcard } from '../types/np2Training';

interface Np2FlashcardsViewProps {
  title: string;
  subjectCode: string;
  data: Np2Flashcard[];
  accentColor?: string;
  onBack: () => void;
}

export const Np2FlashcardsView: React.FC<Np2FlashcardsViewProps> = ({
  title,
  subjectCode,
  data,
  accentColor = 'text-blue-400',
  onBack,
}) => {
  const [deck, setDeck] = useState<Np2Flashcard[]>(data);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const [knownCardIds, setKnownCardIds] = useState<number[]>([]);
  const [reviewCardIds, setReviewCardIds] = useState<number[]>([]);
  const [onlyReviewMode, setOnlyReviewMode] = useState(false);

  // Categorias únicas
  const categories = useMemo(() => {
    const cats = Array.from(new Set(data.map((c) => c.categoria)));
    return ['Todas', ...cats];
  }, [data]);

  // Deck filtrado
  const activeDeck = useMemo(() => {
    return deck.filter((c) => {
      const matchCat =
        selectedCategory === 'Todas' || c.categoria === selectedCategory;
      const matchReview = !onlyReviewMode || reviewCardIds.includes(c.id);
      return matchCat && matchReview;
    });
  }, [deck, selectedCategory, onlyReviewMode, reviewCardIds]);

  const totalCards = activeDeck.length;
  const currentCard = activeDeck[currentIndex] || activeDeck[0];

  const handleNext = useCallback(() => {
    setIsFlipped(false);
    setShowClue(false);
    setCurrentIndex((prev) => (prev < totalCards - 1 ? prev + 1 : 0));
  }, [totalCards]);

  const handlePrev = useCallback(() => {
    setIsFlipped(false);
    setShowClue(false);
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : Math.max(totalCards - 1, 0)));
  }, [totalCards]);

  const handleShuffle = () => {
    setIsFlipped(false);
    setShowClue(false);
    const shuffled = [...deck].sort(() => Math.random() - 0.5);
    setDeck(shuffled);
    setCurrentIndex(0);
  };

  const handleReset = () => {
    setKnownCardIds([]);
    setReviewCardIds([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setShowClue(false);
    setOnlyReviewMode(false);
    setDeck(data);
  };

  const markKnown = () => {
    if (!currentCard) return;
    setKnownCardIds((prev) => Array.from(new Set([...prev, currentCard.id])));
    setReviewCardIds((prev) => prev.filter((id) => id !== currentCard.id));
    handleNext();
  };

  const markReview = () => {
    if (!currentCard) return;
    setReviewCardIds((prev) => Array.from(new Set([...prev, currentCard.id])));
    setKnownCardIds((prev) => prev.filter((id) => id !== currentCard.id));
    handleNext();
  };

  const progressPercent =
    totalCards > 0 ? Math.round((knownCardIds.length / data.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header Fixo */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onBack}
              className="p-2 -ml-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors touch-manipulation active:scale-95"
              aria-label="Voltar"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold">
                  {subjectCode} • NP2
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Flashcards de Fixação
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white truncate">
                {title}
              </h1>
            </div>
          </div>

          <button
            onClick={handleShuffle}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-750 border border-slate-700/60 text-slate-300 hover:text-white transition-all text-xs font-medium flex items-center gap-1.5 shrink-0 touch-manipulation active:scale-95"
            title="Embaralhar cards"
          >
            <Shuffle size={14} />
            <span className="hidden sm:inline">Embaralhar</span>
          </button>
        </div>

        {/* Barra de Progresso de Domínio */}
        <div className="max-w-3xl mx-auto mt-2.5">
          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
            <span>Progresso de Domínio: {knownCardIds.length} de {data.length} ({progressPercent}%)</span>
            {reviewCardIds.length > 0 && (
              <span className="text-amber-400 font-medium">
                {reviewCardIds.length} para revisar
              </span>
            )}
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-500 rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Abas de Categorias com Rolagem Horizontal Suave */}
        <div className="max-w-3xl mx-auto mt-3 overflow-x-auto no-scrollbar flex items-center gap-1.5 pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all touch-manipulation ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-700/40'
              }`}
            >
              {cat}
            </button>
          ))}

          {/* Filtro: Apenas as que marquei para revisar */}
          {reviewCardIds.length > 0 && (
            <button
              onClick={() => {
                setOnlyReviewMode(!onlyReviewMode);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1 touch-manipulation ${
                onlyReviewMode
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
              }`}
            >
              <Filter size={12} />
              Revisar ({reviewCardIds.length})
            </button>
          )}
        </div>
      </header>

      {/* Conteúdo Principal / Card Interativo */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 flex flex-col justify-center">
        {totalCards === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center max-w-md mx-auto my-auto">
            <Sparkles className="mx-auto text-emerald-400 mb-3" size={32} />
            <h3 className="text-base font-bold text-white mb-1">
              Todos os cards deste filtro dominados!
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Você não possui nenhum card pendente nesta seleção.
            </p>
            <button
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold cursor-pointer"
            >
              Reiniciar Todos
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {/* Indicador de posição */}
            <div className="w-full flex items-center justify-between text-xs text-slate-400 mb-2 px-1">
              <span className="font-mono">
                Card {currentIndex + 1} de {totalCards}
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 border border-slate-700/60 text-slate-300">
                {currentCard.categoria}
              </span>
            </div>

            {/* CARD PRINCIPAL COM FLIP NO TOQUE */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full min-h-[300px] sm:min-h-[340px] bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-all shadow-xl shadow-black/40 relative select-none touch-manipulation group active:scale-[0.99]"
            >
              {/* Topo do Card */}
              <div className="flex items-center justify-between text-xs">
                <span
                  className={`text-[11px] font-semibold tracking-wide uppercase ${
                    isFlipped ? 'text-emerald-400' : accentColor
                  }`}
                >
                  {isFlipped ? 'RESPOSTA & EXPLICAÇÃO' : 'PERGUNTA / CONCEITO'}
                </span>
                <span className="text-[10px] text-slate-500 bg-slate-800/80 px-2 py-0.5 rounded-full border border-slate-700/40">
                  {isFlipped ? 'Toque para ver a pergunta' : 'Toque no card para virar'}
                </span>
              </div>

              {/* Meio do Card: Pergunta ou Resposta */}
              <div className="my-auto py-4">
                {!isFlipped ? (
                  <div className="text-center">
                    <h2 className="text-base sm:text-xl font-bold text-white leading-relaxed">
                      {currentCard.pergunta}
                    </h2>

                    {/* Dica opcional */}
                    {currentCard.dica && (
                      <div className="mt-4">
                        {showClue ? (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs rounded-xl p-3 text-left inline-block max-w-lg"
                          >
                            <span className="font-bold flex items-center gap-1 mb-1">
                              <HelpCircle size={13} /> Dica de Estudo:
                            </span>
                            {currentCard.dica}
                          </div>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowClue(true);
                            }}
                            className="text-xs text-amber-400/80 hover:text-amber-300 underline underline-offset-4 flex items-center gap-1 mx-auto cursor-pointer"
                          >
                            <HelpCircle size={13} /> Ver dica do professor
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line font-normal">
                      {currentCard.resposta}
                    </p>

                    {currentCard.codigoExemplo && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs text-emerald-300 overflow-x-auto whitespace-pre leading-relaxed select-text"
                      >
                        {currentCard.codigoExemplo}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Base do Card */}
              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <BookOpen size={12} />
                  {isFlipped ? 'Gabarito Oficial' : 'Fixação Rápida'}
                </span>
                <span className="text-[11px] text-slate-400">
                  {knownCardIds.includes(currentCard.id) ? (
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 size={12} /> Já Dominado
                    </span>
                  ) : reviewCardIds.includes(currentCard.id) ? (
                    <span className="text-amber-400 flex items-center gap-1">
                      <XCircle size={12} /> Em Revisão
                    </span>
                  ) : (
                    'Não avaliado'
                  )}
                </span>
              </div>
            </div>

            {/* AÇÕES DE AVALIAÇÃO: "Preciso Revisar" ou "Já Dominei" */}
            <div className="w-full mt-4 grid grid-cols-2 gap-3">
              <button
                onClick={markReview}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/30 font-semibold text-xs sm:text-sm transition-all touch-manipulation active:scale-95 cursor-pointer"
              >
                <XCircle size={16} />
                <span>Preciso Revisar</span>
              </button>

              <button
                onClick={markKnown}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold text-xs sm:text-sm transition-all touch-manipulation active:scale-95 cursor-pointer"
              >
                <CheckCircle2 size={16} />
                <span>Já Dominei!</span>
              </button>
            </div>

            {/* NAVEGAÇÃO ANTERIOR / PRÓXIMO */}
            <div className="w-full mt-3 flex items-center justify-between gap-3">
              <button
                onClick={handlePrev}
                className="flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-all touch-manipulation active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={16} />
                <span>Anterior</span>
              </button>

              <button
                onClick={() => setIsFlipped(!isFlipped)}
                className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/60 text-xs font-semibold transition-all touch-manipulation active:scale-95 cursor-pointer"
              >
                Virar Card
              </button>

              <button
                onClick={handleNext}
                className="flex-1 flex items-center justify-center gap-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs font-medium transition-all touch-manipulation active:scale-95 cursor-pointer"
              >
                <span>Próximo</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </main>

      {/* Barra Inferior com Reset de Progresso */}
      <footer className="border-t border-slate-900 p-3 bg-slate-950/80 text-center">
        <button
          onClick={handleReset}
          className="text-xs text-slate-500 hover:text-slate-300 flex items-center gap-1 mx-auto cursor-pointer"
        >
          <RotateCcw size={12} /> Zerar progresso de estudo desta matéria
        </button>
      </footer>
    </div>
  );
};
