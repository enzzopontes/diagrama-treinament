import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  CheckCircle2,
  XCircle,
  Sparkles,
  Award,
  Zap,
  Lightbulb,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Footer } from './Footer';
import type { Np2SimuladoQuestion } from '../types/np2Training';

interface Np2SimuladoViewProps {
  title: string;
  subjectCode: string;
  questions: Np2SimuladoQuestion[];
  onBack: () => void;
}

export const Np2SimuladoView: React.FC<Np2SimuladoViewProps> = ({
  title,
  subjectCode,
  questions,
  onBack,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, 'a' | 'b' | 'c' | 'd' | 'e'>
  >({});
  const [studyMode, setStudyMode] = useState(true); // Feedback imediato por padrão
  const [isFinished, setIsFinished] = useState(false);

  const totalQuestions = questions.length;
  const currentQuestion: Np2SimuladoQuestion = questions[currentIndex];
  const currentSelected = selectedAnswers[currentQuestion.id];
  const isAnswered = currentSelected !== undefined;

  const handleSelectOption = (optId: 'a' | 'b' | 'c' | 'd' | 'e') => {
    if (isFinished) return;
    // Em modo estudo, se já respondeu, permite re-selecionar ou mantém
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: optId,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleFinish = () => {
    setIsFinished(true);
    // Calcular nota
    let acertos = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        acertos++;
      }
    });
    if (acertos >= 7) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setCurrentIndex(0);
    setIsFinished(false);
  };

  // Estatísticas
  const totalAnswered = Object.keys(selectedAnswers).length;
  const totalCorrect = questions.filter(
    (q) => selectedAnswers[q.id] === q.correctAnswer
  ).length;
  const score = ((totalCorrect / totalQuestions) * 10).toFixed(1);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col touch-scroll pb-safe">
      {/* Header Fixo */}
      <header className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={onBack}
              className="p-2 -ml-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors touch-manipulation active:scale-95 cursor-pointer"
              aria-label="Voltar"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  {subjectCode} • NP2
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Simulado Oficial
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white truncate">
                {title}
              </h1>
            </div>
          </div>

          {/* Toggle Modo Estudo vs Prova */}
          <button
            onClick={() => setStudyMode(!studyMode)}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all touch-manipulation cursor-pointer ${
              studyMode
                ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <Zap size={13} className={studyMode ? 'text-emerald-400' : 'text-slate-500'} />
            <span className="hidden sm:inline">
              {studyMode ? 'Feedback Imediato' : 'Modo Exame'}
            </span>
            <span className="sm:hidden">
              {studyMode ? 'Imediato' : 'Exame'}
            </span>
          </button>
        </div>

        {/* Barra de Progresso e Navegador de Questões */}
        <div className="max-w-3xl mx-auto mt-3">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span>
              Respondidas: {totalAnswered} de {totalQuestions}
            </span>
            {isFinished && (
              <span className="text-emerald-400 font-bold">
                Nota Final: {score} / 10.0
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {questions.map((q, idx) => {
              const answered = selectedAnswers[q.id];
              const isCorrect = answered === q.correctAnswer;
              const isCurrent = idx === currentIndex;

              let btnBg = 'bg-slate-800 text-slate-400 border-slate-700/60';
              if (studyMode && answered) {
                btnBg = isCorrect
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                  : 'bg-rose-500/20 text-rose-400 border-rose-500/40';
              } else if (answered) {
                btnBg = 'bg-blue-600/30 text-blue-300 border-blue-500/40';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold shrink-0 border transition-all touch-manipulation cursor-pointer ${btnBg} ${
                    isCurrent ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-slate-900 scale-105' : ''
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 flex flex-col justify-start">
        {isFinished ? (
          /* TELA DE RESULTADO FINAL */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 text-center my-auto shadow-2xl">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <Award size={32} />
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">
              Simulado Concluído!
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Confira seu desempenho nas {totalQuestions} questões no estilo da prova NP2.
            </p>

            <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-6">
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
                <span className="text-[11px] text-slate-500 uppercase font-semibold">
                  Nota Estimada
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 mt-1">
                  {score}
                </p>
              </div>

              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4">
                <span className="text-[11px] text-slate-500 uppercase font-semibold">
                  Acertos
                </span>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-400 mt-1">
                  {totalCorrect} / {totalQuestions}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setIsFinished(false);
                  setCurrentIndex(0);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                Revisar Questões
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <RotateCcw size={14} /> Fazer Novamente
              </button>
            </div>
          </div>
        ) : (
          /* TELA DA QUESTÃO ATIVA */
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-xl">
            {/* Topo da Questão */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-slate-400">
                  Questão {currentIndex + 1} de {totalQuestions}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                  {currentQuestion.category}
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                1.0 ponto
              </span>
            </div>

            {/* Título e Enunciado */}
            <h2 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
              {currentQuestion.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line mb-4">
              {currentQuestion.enunciado}
            </p>

            {/* Trecho de Código opcional */}
            {currentQuestion.codeSnippet && (
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 font-mono text-xs text-sky-300 mb-4 overflow-x-auto whitespace-pre leading-relaxed select-text">
                {currentQuestion.codeSnippet}
              </div>
            )}

            {/* Opções A, B, C, D */}
            <div className="space-y-2.5 mt-4">
              {currentQuestion.options.map((opt) => {
                const isChosen = currentSelected === opt.id;
                const showFeedback = studyMode && isAnswered;
                const isCorrect = opt.id === currentQuestion.correctAnswer;

                let optStyle =
                  'bg-slate-950/70 hover:bg-slate-800/80 border-slate-800 text-slate-200';

                if (showFeedback) {
                  if (isCorrect) {
                    optStyle =
                      'bg-emerald-500/15 border-emerald-500/50 text-emerald-200 font-medium';
                  } else if (isChosen && !isCorrect) {
                    optStyle =
                      'bg-rose-500/15 border-rose-500/50 text-rose-200 font-medium';
                  } else {
                    optStyle = 'bg-slate-950/40 border-slate-850 text-slate-500 opacity-60';
                  }
                } else if (isChosen) {
                  optStyle =
                    'bg-blue-600/20 border-blue-500 text-white font-medium shadow-sm shadow-blue-500/20';
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3 touch-manipulation active:scale-[0.99] cursor-pointer ${optStyle}`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold uppercase shrink-0 mt-0.5 ${
                        showFeedback
                          ? isCorrect
                            ? 'bg-emerald-500 text-slate-950'
                            : isChosen
                            ? 'bg-rose-500 text-white'
                            : 'bg-slate-800 text-slate-400'
                          : isChosen
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-300'
                      }`}
                    >
                      {opt.id}
                    </span>
                    <span className="text-xs sm:text-sm leading-relaxed flex-1">
                      {opt.text}
                    </span>
                    {showFeedback && isCorrect && (
                      <CheckCircle2
                        size={18}
                        className="text-emerald-400 shrink-0 mt-0.5"
                      />
                    )}
                    {showFeedback && isChosen && !isCorrect && (
                      <XCircle
                        size={18}
                        className="text-rose-400 shrink-0 mt-0.5"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback e Explicação em Modo Estudo */}
            {studyMode && isAnswered && (
              <div
                className={`mt-5 p-4 rounded-xl border animate-in fade-in slide-in-from-top-2 duration-200 ${
                  currentSelected === currentQuestion.correctAnswer
                    ? 'bg-emerald-950/30 border-emerald-500/30 text-emerald-200'
                    : 'bg-rose-950/30 border-rose-500/30 text-rose-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-2 font-bold text-xs sm:text-sm">
                  {currentSelected === currentQuestion.correctAnswer ? (
                    <>
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      <span>Resposta Correta!</span>
                    </>
                  ) : (
                    <>
                      <XCircle size={16} className="text-rose-400" />
                      <span>
                        Incorreto. A alternativa certa é a letra{' '}
                        {currentQuestion.correctAnswer.toUpperCase()}.
                      </span>
                    </>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {currentQuestion.explanation}
                </p>

                <div className="bg-slate-950/60 border border-white/5 rounded-lg p-2.5 flex items-start gap-2 text-xs text-amber-300 font-medium">
                  <Lightbulb size={14} className="shrink-0 mt-0.5 text-amber-400" />
                  <span>
                    <strong className="text-amber-200">Decoreba da Prova: </strong>
                    {currentQuestion.decorebaRapida}
                  </span>
                </div>
              </div>
            )}

            {/* Controles de Navegação */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 disabled:opacity-40 disabled:cursor-not-allowed text-xs font-semibold text-slate-300 transition-all touch-manipulation active:scale-95 cursor-pointer"
              >
                <ChevronLeft size={16} />
                <span>Anterior</span>
              </button>

              {currentIndex === totalQuestions - 1 ? (
                <button
                  onClick={handleFinish}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg shadow-emerald-600/30 touch-manipulation active:scale-95 cursor-pointer"
                >
                  <Sparkles size={14} />
                  <span>Finalizar Simulado</span>
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all touch-manipulation active:scale-95 cursor-pointer"
                >
                  <span>Próxima</span>
                  <ChevronRight size={16} />
                </button>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer com Navegação e Safe Area para Mobile */}
      <Footer accentColor="text-blue-400" />
    </div>
  );
};
