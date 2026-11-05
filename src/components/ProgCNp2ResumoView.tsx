import React, { useState } from 'react';
import {
  ArrowLeft,
  Terminal,
  Cpu,
} from 'lucide-react';

interface ProgCNp2ResumoViewProps {
  onBack: () => void;
}

export const ProgCNp2ResumoView: React.FC<ProgCNp2ResumoViewProps> = ({ onBack }) => {
  // Estado interativo do Cinema (matriz 5x8 da Aula 11)
  const [sala, setSala] = useState<number[][]>([
    [0, 0, 1, 1, 0, 0, 0, 0], // Fileira A
    [0, 1, 1, 0, 0, 0, 1, 0], // Fileira B
    [0, 0, 0, 0, 0, 0, 0, 0], // Fileira C
    [1, 0, 0, 0, 0, 1, 1, 0], // Fileira D
    [0, 0, 0, 0, 0, 0, 0, 0], // Fileira E
  ]);

  const [selectedSeat, setSelectedSeat] = useState<{ row: number; col: number } | null>({
    row: 0,
    col: 2,
  });

  const fileirasLetras = ['A', 'B', 'C', 'D', 'E'];

  const toggleSeat = (r: number, c: number) => {
    setSelectedSeat({ row: r, col: c });
    setSala((prev) => {
      const copy = prev.map((row) => [...row]);
      copy[r][c] = copy[r][c] === 1 ? 0 : 1;
      return copy;
    });
  };

  return (
    <div className="w-screen h-screen h-[100dvh] overflow-y-auto bg-[#090d16] text-zinc-100 flex flex-col font-sans antialiased selection:bg-blue-600/30">
      {/* Top Bar Editorial */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#090d16]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto h-14 px-4 sm:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Voltar</span>
            </button>
            <span className="text-xs sm:text-sm font-semibold text-white truncate">
              Programação em C • Aula 11 (Matrizes & Ponteiros)
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-sky-900/20 via-slate-900/40 to-indigo-900/20 border border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1.5">
            <Terminal size={14} />
            <span>AULA 11 (22/10/2026) • PROF. ME. ANDERSON CLAITON LOPES</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Matrizes Bidimensionais, Ponteiros e Manipulação de Memória
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Dados organizados em linhas e colunas com acesso direto à memória através de endereços (operadores & e *). Inclui o laboratório interativo do sistema de cinema.
          </p>
        </div>

        {/* Simulador Interativo do Cinema.C */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                <Cpu size={16} className="text-sky-400" />
                <span>Simulador da Sala de Cinema (Matriz 5x8 com Ponteiros)</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Toque em um assento para alternar entre livre (0) e ocupado (1) e inspecionar o ponteiro de memória.
              </p>
            </div>
          </div>

          {/* Tela do Cinema */}
          <div className="w-full h-2 rounded-full bg-white/10 mb-5 relative overflow-hidden">
            <div className="absolute inset-0 bg-sky-400/30 blur-sm" />
          </div>
          <div className="text-center text-[10px] uppercase font-mono text-zinc-500 mb-4">
            TELA DO CINEMA
          </div>

          {/* Grade de Assentos 5x8 */}
          <div className="flex flex-col gap-2 items-center justify-center overflow-x-auto py-2">
            {sala.map((row, rIdx) => (
              <div key={rIdx} className="flex items-center gap-2">
                <span className="w-5 text-xs font-mono font-bold text-zinc-400 text-center">
                  {fileirasLetras[rIdx]}
                </span>
                <div className="flex gap-1.5">
                  {row.map((seat, cIdx) => {
                    const isSelected = selectedSeat?.row === rIdx && selectedSeat?.col === cIdx;
                    return (
                      <button
                        key={cIdx}
                        onClick={() => toggleSeat(rIdx, cIdx)}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg text-xs font-mono font-bold flex flex-col items-center justify-center transition-all cursor-pointer active:scale-95 border ${
                          isSelected
                            ? 'ring-2 ring-sky-400 border-white'
                            : ''
                        } ${
                          seat === 1
                            ? 'bg-rose-500/20 border-rose-500/40 text-rose-300 hover:bg-rose-500/30'
                            : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30'
                        }`}
                        title={`Fileira ${fileirasLetras[rIdx]}, Cadeira ${cIdx + 1} (${seat === 1 ? 'Ocupado' : 'Livre'})`}
                      >
                        <span>{cIdx + 1}</span>
                        <span className="text-[9px] opacity-75">{seat}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Painel do Ponteiro Selecionado */}
          {selectedSeat && (
            <div className="mt-5 p-3.5 rounded-xl bg-[#0b0f19] border border-white/[0.08] text-xs font-mono">
              <div className="text-zinc-400 mb-1">
                📍 Assento: <strong className="text-white">{fileirasLetras[selectedSeat.row]}{selectedSeat.col + 1}</strong> (Linha {selectedSeat.row}, Coluna {selectedSeat.col})
              </div>
              <div className="text-sky-300">
                Estado: <code>sala[{selectedSeat.row}][{selectedSeat.col}] = {sala[selectedSeat.row][selectedSeat.col]}</code> ({sala[selectedSeat.row][selectedSeat.col] === 1 ? 'Ocupado' : 'Livre'})
              </div>
              <div className="text-zinc-500 text-[11px] mt-1">
                Aritmética de Ponteiro: <code>int *p = &sala[0][0] + ({selectedSeat.row} * 8 + {selectedSeat.col}); // Deslocamento: {selectedSeat.row * 8 + selectedSeat.col} posições</code>
              </div>
            </div>
          )}
        </div>

        {/* Seção Teórica: O que cai na prova */}
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
            <h3 className="text-sm font-semibold text-white">
              1. Declaração e Acesso a Matrizes Bidimensionais
            </h3>
            <p className="text-xs text-zinc-300 leading-relaxed">
              Em C, uma matriz é um vetor de vetores contíguo na memória:
            </p>
            <div className="p-3 bg-[#0b0f19] rounded-xl font-mono text-xs text-sky-300 overflow-x-auto">
              <pre>{`int matriz[3][4]; // 3 linhas x 4 colunas = 12 inteiros na memoria
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 4; j++) {
        matriz[i][j] = i + j;
    }
}`}</pre>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2">
            <h3 className="text-sm font-semibold text-white">
              2. Ponteiros: Endereço (&) vs Conteúdo (*)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06]">
                <strong className="text-sky-400 block mb-1">Operador & (Endereço):</strong>
                Retorna o endereço físico da variável na memória RAM.<br />
                <code>int *p = &variavel;</code>
              </div>
              <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06]">
                <strong className="text-cyan-400 block mb-1">Operador * (Desreferência):</strong>
                Acessa ou modifica o valor guardado no endereço apontado.<br />
                <code>*p = 100; // Altera o valor da variavel</code>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
