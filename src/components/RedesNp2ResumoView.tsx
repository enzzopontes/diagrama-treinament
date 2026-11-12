import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  Sparkles,
  Zap,
  Lightbulb,
  Network,
  Cpu,
} from 'lucide-react';
import { Footer } from './Footer';

interface RedesNp2ResumoViewProps {
  onBack: () => void;
}

export const RedesNp2ResumoView: React.FC<RedesNp2ResumoViewProps> = ({ onBack }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    gabarito: true,
    mascara20: true,
    dispositivos: false,
    tcpip: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const PROVA_REDES_QUESTOES = [
    {
      num: 1,
      assunto: 'Camadas do modelo TCP/IP',
      respostaLetra: 'A',
      respostaTexto: 'Aplicação, Transporte, Rede, Enlace de Dados, Física.',
      gatilho: 'O modelo TCP/IP possui 5 camadas. Apresentação e Sessão pertencem ao modelo OSI (7 camadas) e NÃO entram no TCP/IP.',
      explicacao: 'A alternativa A lista rigorosamente as 5 camadas padronizadas. As opções B, C e D são armadilhas misturando camadas do modelo OSI.',
    },
    {
      num: 2,
      assunto: 'Dispositivo para rede local (LAN)',
      respostaLetra: 'B',
      respostaTexto: 'Switch.',
      gatilho: 'Encaminhar pacotes/quadros DENTRO de uma mesma rede local = SWITCH (opera na Camada 2 via endereço MAC).',
      explicacao: 'O switch comuta pacotes internamente na LAN através da sua tabela de endereços físicos MAC.',
    },
    {
      num: 3,
      assunto: 'Dispositivo entre redes distintas (WAN)',
      respostaLetra: 'A',
      respostaTexto: 'Roteador.',
      gatilho: 'Encaminhar pacotes ENTRE redes distintas (com faixas de IP diferentes) = ROTEADOR (opera na Camada 3 via endereço IP).',
      explicacao: 'O roteador é o dispositivo inteligente responsável por encontrar o melhor caminho e encaminhar dados entre redes remotas.',
    },
    {
      num: 4,
      assunto: 'Identificação da rede para o IP 192.168.5.20',
      respostaLetra: 'D',
      respostaTexto: '192.168.0.0/20.',
      gatilho: 'A rede /20 tem salto de 16 no 3º octeto e vai de 192.168.0.0 até 192.168.15.255. O número 5 está dentro desse intervalo!',
      explicacao: 'Nas outras opções: /24 vai só até 0.255 ou 1.255; /23 vai de 2.0 até 3.255. Nenhuma delas alcança o IP 192.168.5.20.',
    },
    {
      num: 5,
      assunto: 'Endereço de broadcast na camada de enlace (MAC)',
      respostaLetra: 'D',
      respostaTexto: 'FF-FF-FF-FF-FF-FF.',
      gatilho: 'Endereço MAC de broadcast = 48 bits em nível 1 = 6 pares de FF separados por hífen.',
      explicacao: 'O endereço físico (MAC) possui 48 bits (6 bytes). Cada byte é um par hexadecimal FF.',
    },
    {
      num: 6,
      assunto: 'Tamanho em bits de um endereço IPv4',
      respostaLetra: 'C',
      respostaTexto: '32.',
      gatilho: 'IPv4 = 32 bits (4 octetos de 8 bits). (IPv6 possui 128 bits).',
      explicacao: 'O IPv4 utiliza exatamente 32 bits binários, divididos em 4 octetos decimais separados por ponto (ex: 192.168.0.1).',
    },
    {
      num: 7,
      assunto: 'Máscara decimal da rede /20',
      respostaLetra: 'C',
      respostaTexto: '255.255.240.0.',
      gatilho: '/20 = 8 + 8 + 4 bits 1. No 3º octeto: 128 + 64 + 32 + 16 = 240. Máscara: 255.255.240.0.',
      explicacao: 'Os 20 bits de rede deixam 4 bits 1 no terceiro octeto (11110000 em binário = 240 em decimal).',
    },
    {
      num: 8,
      assunto: 'Total de IPs na rede /20',
      respostaLetra: 'D',
      respostaTexto: '4096.',
      gatilho: 'Bits de host = 32 - 20 = 12 bits. Total de IPs = 2^12 = 4096.',
      explicacao: 'A pergunta pede o total de endereços IP da rede (incluindo rede e broadcast). 2 elevado a 12 é 4096.',
    },
    {
      num: 9,
      assunto: 'Endereço de broadcast da rede 192.168.0.0/20',
      respostaLetra: 'D',
      respostaTexto: '192.168.15.255.',
      gatilho: 'Salto é 16, a próxima rede é 16.0. O último endereço antes dela é 192.168.15.255 (broadcast).',
      explicacao: 'A sub-rede /20 cobre do IP 192.168.0.0 até 192.168.15.255. O último endereço é sempre o broadcast da sub-rede.',
    },
    {
      num: 10,
      assunto: 'Quantidade de hosts alocáveis na rede /20',
      respostaLetra: 'D',
      respostaTexto: '4094.',
      gatilho: 'Hosts utilizáveis = Total de IPs menos 2 (rede e broadcast) = 4096 - 2 = 4094 hosts.',
      explicacao: 'Sempre subtrai-se 2 do total: o IP da rede (192.168.0.0) e o IP de broadcast (192.168.15.255).',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#090d16] text-zinc-100 flex flex-col font-sans antialiased selection:bg-cyan-600/30">
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
              Redes e Sistemas Distribuídos • Prova Oficial P2 / NP2
            </span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            Gabarito 10/10
          </span>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Banner de Destaque da Prova */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-900/60 to-blue-950/40 border border-cyan-500/30 shadow-lg shadow-cyan-950/20">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Sparkles size={14} />
            <span>PROVA OFICIAL P2 • ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Guia Completo da Prova de Redes: Gabarito & Cálculos /20
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Todas as 10 questões reais da prova resolvidas ponto a ponto: cálculo da máscara /20 (salto, broadcast e hosts), modelo TCP/IP de 5 camadas, Switch vs Roteador e broadcast de enlace MAC.
          </p>

          {/* Gabarito Rápido em Linha */}
          <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 mr-1 flex items-center gap-1">
              <Zap size={13} className="text-cyan-400" /> Gabarito Relâmpago:
            </span>
            {[
              { q: '1', r: 'A' },
              { q: '2', r: 'B' },
              { q: '3', r: 'A' },
              { q: '4', r: 'D' },
              { q: '5', r: 'D' },
              { q: '6', r: 'C' },
              { q: '7', r: 'C' },
              { q: '8', r: 'D' },
              { q: '9', r: 'D' },
              { q: '10', r: 'D' },
            ].map((item) => (
              <span
                key={item.q}
                className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 font-mono text-xs font-bold"
              >
                Q{item.q}-{item.r}
              </span>
            ))}
          </div>
        </div>

        {/* 1. Gabarito Comentado das 10 Questões da Prova */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('gabarito')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Gabarito Completo Comentado (Questões 1 a 10)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Enunciados, alternativas corretas e gatilhos mentais para gabaritar
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.gabarito ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.gabarito && (
            <div className="px-5 pb-5 pt-2 border-t border-white/[0.04] space-y-3.5">
              {PROVA_REDES_QUESTOES.map((q) => (
                <div
                  key={q.num}
                  className="p-4 rounded-xl bg-[#0b0f19] border border-white/[0.06] flex flex-col gap-2 hover:border-cyan-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400 font-mono text-xs font-bold">
                        Q{q.num}
                      </span>
                      <span className="text-xs font-medium text-zinc-300">
                        {q.assunto}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-700/50 text-xs font-bold font-mono">
                      {q.respostaLetra}) {q.respostaTexto}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {q.explicacao}
                  </p>

                  <div className="mt-1 flex items-start gap-2 p-2.5 rounded-lg bg-cyan-950/20 border border-cyan-800/30 text-xs text-cyan-300">
                    <Lightbulb size={14} className="mt-0.5 shrink-0 text-cyan-400" />
                    <div>
                      <strong className="text-cyan-200">Gatilho de Prova: </strong>
                      {q.gatilho}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. O Bloco Central da Prova: A Máscara /20 */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('mascara20')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  A Matemática da Máscara /20 (Questões 4, 7, 8, 9 e 10)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Cálculo de bits, máscara decimal, salto de 16, total de IPs e hosts válidos
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.mascara20 ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.mascara20 && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-4 text-xs sm:text-sm text-zinc-300">
              {/* Decomposição Passo a Passo */}
              <div className="p-4 rounded-xl bg-[#0b0f19] border border-cyan-500/30 space-y-3 font-mono text-xs">
                <span className="text-cyan-300 font-bold block text-sm">
                  ⚡ ANATOMIA COMPLETA DO PREFIXO /20:
                </span>
                <div className="p-2.5 rounded bg-black/40 border border-white/5 space-y-1">
                  <div>1. Máscara em Binário (20 bits 1 e 12 bits 0):</div>
                  <div className="text-white font-bold">11111111 . 11111111 . 11110000 . 00000000</div>
                  <div className="text-cyan-400 font-semibold pt-1">
                    ➔ 3º Octeto: 128 + 64 + 32 + 16 = 240
                  </div>
                  <div className="text-emerald-300 font-bold">
                    ➔ Máscara Decimal (Q7): 255.255.240.0
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-300 pt-1">
                  <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                    <strong className="text-cyan-300 block mb-0.5">2. Salto no 3º Octeto:</strong>
                    256 - 240 = <strong>16</strong>. As sub-redes andam de 16 em 16!
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                    <strong className="text-cyan-300 block mb-0.5">3. Total de IPs (Q8):</strong>
                    Bits de host = 32 - 20 = 12.<br />
                    2^12 = <strong>4096 endereços IP</strong>.
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                    <strong className="text-cyan-300 block mb-0.5">4. Broadcast da Rede (Q9):</strong>
                    Próxima rede é 192.168.16.0.<br />
                    Broadcast = <strong>192.168.15.255</strong>.
                  </div>
                  <div className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                    <strong className="text-cyan-300 block mb-0.5">5. Hosts Válidos (Q10):</strong>
                    4096 - 2 = <strong>4094 hosts alocáveis</strong>.
                  </div>
                </div>
              </div>

              {/* Tabela de Faixas */}
              <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/[0.04] text-zinc-200 border-b border-white/[0.08]">
                    <tr>
                      <th className="p-3 font-semibold text-zinc-400">Sub-rede</th>
                      <th className="p-3 font-semibold text-cyan-400">Primeiro IP Útil</th>
                      <th className="p-3 font-semibold text-emerald-400">Último IP Útil</th>
                      <th className="p-3 font-semibold text-amber-400">Broadcast (Q9)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] font-mono text-[11px] sm:text-xs">
                    <tr className="bg-cyan-500/5">
                      <td className="p-3 text-white font-bold">192.168.0.0/20 (Q4)</td>
                      <td className="p-3 text-zinc-300">192.168.0.1</td>
                      <td className="p-3 text-zinc-300">192.168.15.254</td>
                      <td className="p-3 text-amber-300 font-bold">192.168.15.255</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-zinc-400 font-bold">192.168.16.0/20</td>
                      <td className="p-3 text-zinc-400">192.168.16.1</td>
                      <td className="p-3 text-zinc-400">192.168.31.254</td>
                      <td className="p-3 text-zinc-400">192.168.31.255</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Justificativa Q4 */}
              <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-800/30 text-xs text-cyan-200 flex items-start gap-2">
                <Lightbulb size={15} className="mt-0.5 shrink-0 text-cyan-400" />
                <div>
                  <strong>Por que o IP 192.168.5.20 pertence a 192.168.0.0/20 (Questão 4)?</strong>
                  <p className="mt-0.5 text-zinc-300">
                    Porque a faixa desta sub-rede vai de <code>192.168.0.0</code> até <code>192.168.15.255</code>. O 3º octeto é 5 (que está entre 0 e 15). Portanto, 192.168.5.20 está perfeitamente contido dentro da rede 192.168.0.0/20!
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. Dispositivos de Rede: Switch vs Roteador */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('dispositivos')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Dispositivos: Switch vs Roteador (Questões 2 e 3)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Diferença fundamental entre comutação local (LAN) e roteamento inter-redes (WAN)
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.dispositivos ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.dispositivos && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-[#0b0f19] border border-cyan-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold font-mono text-sm">
                    <Network size={16} /> SWITCH (Questão 2)
                  </div>
                  <strong className="text-white block">Encaminha dentro de uma REDE LOCAL (LAN)</strong>
                  <ul className="space-y-1 text-zinc-400 pl-1 pt-1">
                    <li>• Opera na <strong>Camada 2 (Enlace de Dados)</strong></li>
                    <li>• Encaminha baseado em <strong>endereços físicos MAC</strong></li>
                    <li>• Cria domínios de colisão separados por porta</li>
                    <li>• Não divide domínios de broadcast</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#0b0f19] border border-blue-500/30 space-y-1.5">
                  <div className="flex items-center gap-2 text-blue-400 font-bold font-mono text-sm">
                    <Cpu size={16} /> ROTEADOR (Questão 3)
                  </div>
                  <strong className="text-white block">Encaminha entre REDES DISTINTAS (WAN)</strong>
                  <ul className="space-y-1 text-zinc-400 pl-1 pt-1">
                    <li>• Opera na <strong>Camada 3 (Rede)</strong></li>
                    <li>• Encaminha baseado em <strong>endereços lógicos IP</strong></li>
                    <li>• Interliga sub-redes com faixas de IP diferentes</li>
                    <li>• Bloqueia broadcasts por padrão</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4. Modelo TCP/IP & Broadcast de Enlace */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('tcpip')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-400 font-mono text-xs font-bold flex items-center justify-center">
                4
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Modelo TCP/IP (5 Camadas) & Broadcast MAC (Questões 1, 5 e 6)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Estrutura de camadas, 32 bits do IPv4 e o endereço FF-FF-FF-FF-FF-FF
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.tcpip ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.tcpip && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06] text-xs space-y-2">
                <span className="text-cyan-400 font-semibold block">📚 As 5 Camadas do Modelo TCP/IP (Q1):</span>
                <ol className="list-decimal pl-5 space-y-1 text-zinc-300 font-mono text-xs">
                  <li><strong>Aplicação:</strong> HTTP, DNS, DHCP, FTP, SSH</li>
                  <li><strong>Transporte:</strong> TCP (confiável) e UDP (rápido)</li>
                  <li><strong>Rede (Internet):</strong> IP (IPv4 32 bits, IPv6 128 bits), ICMP, ARP</li>
                  <li><strong>Enlace de Dados:</strong> Ethernet, Wi-Fi, endereços MAC (48 bits)</li>
                  <li><strong>Física:</strong> Cabos, conectores RJ-45, sinais elétricos e ópticos</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-cyan-300 block mb-1">📢 Broadcast de Enlace (Q5):</strong>
                  <code className="text-amber-300 font-bold font-mono">FF-FF-FF-FF-FF-FF</code>
                  <p className="text-zinc-400 mt-1">
                    Endereço MAC universal que envia o quadro para todas as placas de rede conectadas ao mesmo switch.
                  </p>
                </div>
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-cyan-300 block mb-1">🔢 Tamanho do IPv4 (Q6):</strong>
                  <code className="text-emerald-300 font-bold font-mono">32 bits</code>
                  <p className="text-zinc-400 mt-1">
                    Composto por 4 octetos (4 × 8 = 32 bits). Representado em decimal pontuado (ex: 192.168.0.1).
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer com Navegação e Safe Area para Mobile */}
      <Footer accentColor="text-cyan-400" />
    </div>
  );
};
