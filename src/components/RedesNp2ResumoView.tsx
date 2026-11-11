import React, { useState } from 'react';
import {
  ArrowLeft,
  Network,
  Calculator,
} from 'lucide-react';

interface RedesNp2ResumoViewProps {
  onBack: () => void;
}

export const RedesNp2ResumoView: React.FC<RedesNp2ResumoViewProps> = ({ onBack }) => {
  // Calculadora de sub-rede /22 interativa
  const [subredeIndex, setSubredeIndex] = useState(0);

  const subredesExemplo = [
    {
      num: 1,
      rede: '192.168.0.0/22',
      mascara: '255.255.252.0',
      primeiroIp: '192.168.0.1',
      ultimoIp: '192.168.3.254',
      broadcast: '192.168.3.255',
      hosts: 1022,
    },
    {
      num: 2,
      rede: '192.168.4.0/22',
      mascara: '255.255.252.0',
      primeiroIp: '192.168.4.1',
      ultimoIp: '192.168.7.254',
      broadcast: '192.168.7.255',
      hosts: 1022,
    },
    {
      num: 3,
      rede: '192.168.8.0/22',
      mascara: '255.255.252.0',
      primeiroIp: '192.168.8.1',
      ultimoIp: '192.168.11.254',
      broadcast: '192.168.11.255',
      hosts: 1022,
    },
    {
      num: 4,
      rede: '192.168.12.0/22',
      mascara: '255.255.252.0',
      primeiroIp: '192.168.12.1',
      ultimoIp: '192.168.15.254',
      broadcast: '192.168.15.255',
      hosts: 1022,
    },
  ];

  const currentRede = subredesExemplo[subredeIndex];

  return (
    <div className="w-screen h-screen h-[100dvh] overflow-y-auto touch-scroll pb-safe bg-[#090d16] text-zinc-100 flex flex-col font-sans antialiased selection:bg-blue-600/30">
      {/* Top Bar Minimalista */}
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
              Redes e Sistemas Distribuídos • Resumo NP2
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-900/20 via-slate-900/40 to-blue-900/20 border border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1.5">
            <Network size={14} />
            <span>LOUSAS DE 19/10, 29/10 E 03/11 • PROF. FÁBIO (UNIP)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Cálculo de Sub-redes IPv4 (/22) e Anatomia do Cabeçalho
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Resumo dos dois tópicos centrais de NP2 explicados na lousa: a divisão de redes com máscaras variáveis (VLSM) e os campos do cabeçalho IPv4 (20 a 60 bytes, TTL, HLEN).
          </p>
        </div>

        {/* 1. Simulador Interativo da Lousa: Máscara /22 */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                <Calculator size={16} className="text-cyan-400" />
                <span>Cálculo de Sub-redes: Rede 192.168.0.0/22 (Exato da Lousa)</span>
              </h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                Na lousa de 29/10, o professor demonstrou o desdobramento da máscara /22.
              </p>
            </div>
          </div>

          {/* Decomposição Binária da Lousa */}
          <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-white/[0.08] font-mono text-xs text-cyan-300 space-y-1 overflow-x-auto mb-4">
            <div>Máscara /22 = 22 bits 1 e 10 bits 0:</div>
            <div className="text-white font-bold">11111111 . 11111111 . 11111100 . 00000000</div>
            <div className="text-zinc-400">
              Decimal: <strong>255 . 255 . 252 . 0</strong> (Salto de rede no 3º octeto: 256 - 252 = <strong>4</strong>)
            </div>
          </div>

          {/* Seletor de Redes Calculadas */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 no-scrollbar">
            {subredesExemplo.map((sr, idx) => (
              <button
                key={sr.num}
                onClick={() => setSubredeIndex(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all cursor-pointer ${
                  subredeIndex === idx
                    ? 'bg-cyan-600 text-white border-cyan-500 shadow-sm'
                    : 'bg-white/[0.04] text-zinc-400 border-white/[0.06] hover:text-white'
                }`}
              >
                {sr.num}ª Rede ({sr.rede})
              </button>
            ))}
          </div>

          {/* Detalhes da Sub-rede Ativa */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06]">
              <span className="text-zinc-500 block mb-1 text-[11px]">Endereço de Rede</span>
              <strong className="text-white text-sm">{currentRede.rede}</strong>
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06]">
              <span className="text-zinc-500 block mb-1 text-[11px]">1º IP Útil (Host)</span>
              <strong className="text-emerald-400 text-sm">{currentRede.primeiroIp}</strong>
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06]">
              <span className="text-zinc-500 block mb-1 text-[11px]">Último IP Útil</span>
              <strong className="text-cyan-400 text-sm">{currentRede.ultimoIp}</strong>
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06]">
              <span className="text-zinc-500 block mb-1 text-[11px]">Broadcast</span>
              <strong className="text-rose-400 text-sm">{currentRede.broadcast}</strong>
            </div>
          </div>
        </div>

        {/* 2. Cabeçalho IPv4 (Lousa de 19/10) */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 sm:p-6 space-y-4">
          <h2 className="text-sm sm:text-base font-semibold text-white">
            Anatomia do Cabeçalho IPv4 (20 a 60 Bytes)
          </h2>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Na lousa de 19/10, foi desenhada a estrutura interna do pacote IP que circula entre roteadores:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06] space-y-1">
              <strong className="text-cyan-400 block font-mono">Version (4 bits):</strong>
              Versão do protocolo (sempre 4 para IPv4). Faixa: 0 a 15.
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06] space-y-1">
              <strong className="text-cyan-400 block font-mono">HLEN (Header Length - 4 bits):</strong>
              Comprimento do cabeçalho em múltiplos de 32 bits (4 Bytes). Mínimo 5 (20 B) e Máximo 15 (60 B).
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06] space-y-1">
              <strong className="text-cyan-400 block font-mono">Total Length (16 bits):</strong>
              Tamanho total do pacote (cabeçalho + carga útil) em bytes. Máximo teórico: 65.535 Bytes.
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06] space-y-1">
              <strong className="text-rose-400 block font-mono">TTL - Time To Live (8 bits):</strong>
              Evita que pacotes fiquem em loop infinito na rede. Cada roteador decrementa o TTL em 1. Se chegar a 0, o pacote é descartado (usado pelo comando <code>tracert</code> / <code>traceroute</code>).
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06] space-y-1">
              <strong className="text-cyan-400 block font-mono">Protocol (8 bits):</strong>
              Identifica qual protocolo está dentro do campo Data (ex: 6 para TCP, 17 para UDP, 1 para ICMP).
            </div>
            <div className="p-3 rounded-xl bg-[#0b0f19] border border-white/[0.06] space-y-1">
              <strong className="text-cyan-400 block font-mono">Header Checksum (16 bits):</strong>
              Verifica erros de transmissão exclusivamente no cabeçalho do pacote.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
