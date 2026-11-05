import React, { useState } from 'react';
import {
  ArrowLeft,
  Code2,
  ChevronDown,
} from 'lucide-react';

interface EngSoftNp2ResumoViewProps {
  onBack: () => void;
}

export const EngSoftNp2ResumoView: React.FC<EngSoftNp2ResumoViewProps> = ({ onBack }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    sequencia: true,
    classes: true,
    arquitetura: true,
    padroes: true,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-screen h-screen h-[100dvh] overflow-y-auto bg-[#090d16] text-zinc-100 flex flex-col font-sans antialiased selection:bg-blue-600/30">
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
              Engenharia de Software • Resumo NP2
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-900/20 via-slate-900/40 to-teal-900/20 border border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1.5">
            <Code2 size={14} />
            <span>LOUSAS DE 06/10, 20/10 E 27/10 • ENGENHARIA DE SOFTWARE ÁGIL</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            UML (Sequência & Classes), RNF e Padrões de Arquitetura
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            A ponte entre requisitos e código: a transição de Caso de Uso para Diagrama de Sequência e Classes, modelo 4+1 visões e padrões arquiteturais (MVC, Camadas, Microsserviços e Cliente-Servidor).
          </p>
        </div>

        {/* 1. Diagrama de Sequência (Lousa de 06/10) */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('sequencia')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Diagrama de Sequência (UML / Astah): Objetos, Métodos e Bloco ALT
              </h2>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.sequencia ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.sequencia && (
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 space-y-3 border-t border-white/[0.04]">
              <p>
                Como interpretar o Diagrama de Sequência (anotado textualmente na lousa):
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-400">
                <li><strong>Objetos do sistema:</strong> Ficam na parte superior do diagrama.</li>
                <li><strong>Linha do tempo e tempo de vida:</strong> Traçado vertical que desce indicando a cronologia das ações.</li>
                <li><strong>Setas:</strong> Indicam chamadas de métodos (interações) e mensagens de resposta/retorno.</li>
                <li><strong>ALT = Sequência Alternativa:</strong> Bloco condicional que descreve "o que pode dar errado" ou desvios do fluxo principal (exceções).</li>
                <li><strong>Fluxo da lousa:</strong> Usuário ➔ Caso de Uso ➔ Diagrama de Sequência ➔ Diagrama de Classes ➔ Desenvolvedor.</li>
              </ul>
            </div>
          )}
        </div>

        {/* 2. Diagrama de Classes */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('classes')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Diagrama de Classes: "Parece o DER, mas não é!"
              </h2>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.classes ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.classes && (
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 space-y-3 border-t border-white/[0.04]">
              <p>
                O Diagrama de Classes é o mais próximo da P.O.O. (Programação Orientada a Objetos). Ele divide a estrutura em 3 compartimentos:
              </p>
              <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.08] font-mono text-xs text-emerald-300 space-y-2">
                <div className="border-b border-white/[0.08] pb-1 text-white font-bold">
                  [1] NOME DA CLASSE: FUNCIONÁRIO
                </div>
                <div className="border-b border-white/[0.08] pb-1 text-zinc-300">
                  [2] ATRIBUTOS: Nome, Telefone, E-mail
                </div>
                <div className="text-zinc-400">
                  [3] MÉTODOS: NovoFuncionario(), AlteraDados(), ExcluiFuncionario()
                </div>
              </div>
              <p className="text-xs text-zinc-400">
                <strong>Diferença do DER:</strong> O DER modela dados e persistência relacional. O Diagrama de Classes modela estrutura de código, encapsulamento e comportamentos (métodos).
              </p>
            </div>
          )}
        </div>

        {/* 3. Arquitetura, RNF e Modelo 4+1 (Lousa de 20/10) */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('arquitetura')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Design e Arquitetura: RNF e Modelo 4+1 Visões (Kruchten)
              </h2>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.arquitetura ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.arquitetura && (
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 space-y-3 border-t border-white/[0.04]">
              <p>
                "Arquitetura e Design tem a ver com os RNF!" (Requisitos Não Funcionais: Segurança, Desempenho, Disponibilidade, Manutenibilidade).
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-emerald-400 block mb-1">1. Visão Lógica:</strong>
                  Como os requisitos funcionais se relacionam (classes, serviços).
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-emerald-400 block mb-1">2. Visão de Processo:</strong>
                  Como se dá a interação entre processos (threads, concorrência).
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-emerald-400 block mb-1">3. Visão de Desenvolvimento:</strong>
                  Como é a divisão e organização do código (pacotes, módulos).
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-emerald-400 block mb-1">4. Visão Física:</strong>
                  Como o sistema se comporta no hardware (servidores, redes).
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4. Padrões de Arquitetura (MVC, Camadas, Microsserviços) */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('padroes')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                4
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Padrões Arquiteturais: Camadas, MVC, Microsserviços e C/S
              </h2>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.padroes ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.padroes && (
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 space-y-3 border-t border-white/[0.04]">
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.08]">
                  <strong className="text-emerald-400 block mb-1">🌐 Padrão MVC (Model-View-Controller) - Ex: App Web:</strong>
                  Navegador envia requisição ➔ <strong>Controlador</strong> faz processamento HTTP e validação ➔ consulta o <strong>Modelo</strong> (lógica de negócio e BD) ➔ encaminha dados para a <strong>Visão</strong> (renderização da página) ➔ devolve ao navegador.
                </div>
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.08]">
                  <strong className="text-cyan-400 block mb-1">📦 Padrão em Camadas (Monólito):</strong>
                  Hardware ➔ Firmware ➔ S.O. ➔ Bibliotecas ➔ Front/Back/Seg ➔ Banco de Dados. Simples de desenvolver no início, porém difícil de escalar separadamente.
                </div>
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.08]">
                  <strong className="text-indigo-400 block mb-1">⚡ Padrão Microsserviços:</strong>
                  Serviços menores desacoplados, cada um com sua stack e banco próprio, comunicando-se via rede. Alta resiliência e escalabilidade independente.
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
