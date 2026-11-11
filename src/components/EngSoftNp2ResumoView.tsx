import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Zap,
  Lightbulb,
} from 'lucide-react';

interface EngSoftNp2ResumoViewProps {
  onBack: () => void;
}

export const EngSoftNp2ResumoView: React.FC<EngSoftNp2ResumoViewProps> = ({ onBack }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    gabarito: true,
    q10: true,
    fundamentos: false,
    vv: false,
    agil: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const PROVA_QUESTOES = [
    {
      num: 1,
      assunto: 'Arquitetura de software - RNF e decisões arquiteturais',
      resposta: 'A) Manutenibilidade',
      gatilho: 'Manutenibilidade é o único RNF (atributo de qualidade). Visão Lógica e Processo são visões; MVC é padrão; Reengenharia é processo.',
      detalhe: 'A manutenibilidade influencia componentes pequenos, baixo acoplamento e separação de responsabilidades.',
    },
    {
      num: 2,
      assunto: 'Padrões arquiteturais - Modelo-Visão-Controlador (MVC)',
      resposta: 'C) Modelo (Model)',
      gatilho: 'Lógica de negócio + Acesso ao banco = MODEL. Visão apenas exibe e Controlador apenas media.',
      detalhe: 'Cliente e Navegador nem sequer fazem parte dos componentes do padrão MVC.',
    },
    {
      num: 3,
      assunto: 'Documentação de arquitetura - Visões arquiteturais (Modelo 4+1)',
      resposta: 'B) Visão de Desenvolvimento',
      gatilho: 'Gerentes e líderes técnicos usam a Visão de Desenvolvimento (decomposição em módulos e pacotes para organizar a equipe).',
      detalhe: 'Visão Lógica é para analistas/usuários; Processo é para integradores; Física é para infraestrutura/redes. Visão de Evolução NÃO existe no 4+1.',
    },
    {
      num: 4,
      assunto: 'Evolução de software - Motivações para manutenção contínua',
      resposta: 'B) Correção de bugs, melhoria de desempenho e segurança',
      gatilho: 'Evolução atende aos três pilares essenciais. Descarte alternativas com termos excludentes ("apenas", "somente").',
      detalhe: 'O software precisa evoluir para corrigir defeitos, adaptar-se a novos ambientes e otimizar desempenho/segurança.',
    },
    {
      num: 5,
      assunto: 'Verificação e Validação (V&V) - Técnicas de validação',
      resposta: 'A) Testes de aceitação do usuário',
      gatilho: 'Validação responde: "Estamos construindo o produto certo?" (confirmado pelo usuário). Verificação responde: "Construindo corretamente?" (testes unitários/inspeções).',
      detalhe: 'Refatoração e engenharia reversa são processos de evolução, não pertencem a V&V.',
    },
    {
      num: 6,
      assunto: 'Evolução de software - Processo de implementação de mudanças',
      resposta: 'A) Mudanças propostas → Análise de requisitos → Atualização de requisitos → Desenvolvimento de software',
      gatilho: 'Ordem lógica: Proposta primeiro → Analisa impacto → Atualiza especificação → Só então codifica.',
      detalhe: 'Codificar antes de analisar ou analisar requisitos antes de existir uma proposta inverte a lógica do fluxo.',
    },
    {
      num: 7,
      assunto: 'Métodos ágeis - Valores do Manifesto Ágil',
      resposta: 'C) Responder a mudanças mais que seguir um plano',
      gatilho: 'Atenção às inversões! Indivíduos > processos; software pronto > documentação; cliente > contratos; mudanças > plano.',
      detalhe: 'A banca costuma inverter os pares para tentar confundir. A alternativa C é a única na ordem correta.',
    },
    {
      num: 8,
      assunto: 'Sistemas legados - Modernização, riscos e regras de negócio',
      resposta: 'E) A falta de documentação dificulta entender as regras de negócio críticas embutidas no código, gerando alto risco de que a modernização ou substituição interrompa a operação da empresa',
      gatilho: 'Principal dilema do legado: regras críticas enterradas no código sem documentação = perigo de paralisar a empresa.',
      detalhe: 'Evite alternativas radicais com "impossibilidade técnica", "invalida o projeto" ou "exige compra de hardware".',
    },
    {
      num: 9,
      assunto: 'Scrum - Sprints e desenvolvimento iterativo e incremental',
      resposta: 'B) São ciclos iterativos onde o código é desenvolvido, testado e refinado progressivamente',
      gatilho: 'Sprints entregam incrementos prontos e testados a cada ciclo. Requisitos podem mudar entre as Sprints pelo Backlog.',
      detalhe: 'Opções que exigem documentação completa prévia ou proíbem mudanças descrevem o modelo cascata, não o Scrum.',
    },
    {
      num: 10,
      assunto: 'Evolução de software - Reengenharia x Refatoração (Dissertativa)',
      resposta: 'Refatoração = preventiva, contínua e local (código) | Reengenharia = corretiva, pontual e no sistema todo (legado)',
      gatilho: 'Refatorar NÃO muda comportamento externo. Reengenharia pode mudar estrutura, dados e até a linguagem.',
      detalhe: 'Veja a tabela comparativa completa na Seção 2 abaixo para memorizar todos os 5 critérios.',
    },
  ];

  return (
    <div className="w-screen h-screen h-[100dvh] overflow-y-auto touch-scroll pb-safe bg-[#090d16] text-zinc-100 flex flex-col font-sans antialiased selection:bg-emerald-600/30">
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
              Engenharia de Software Ágil • Prova Oficial NP2
            </span>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Gabarito 10/10
          </span>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Banner de Destaque da Prova */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-teal-950/40 border border-emerald-500/30 shadow-lg shadow-emerald-950/20">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-2">
            <Sparkles size={14} />
            <span>PROVA OFICIAL IMPRESSA • UNIP SÃO JOSÉ DO RIO PRETO • PROF. VALTER CANHIZARES FILHO</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Prova Oficial NP2: 100% Idêntica à Folha Impressa
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            As 10 questões abaixo são exatamente as mesmas da prova física entregue em sala (Questões 1 a 5 na frente, 6 a 10 no verso). Veja o gabarito oficial fundamentado item por item.
          </p>

          {/* Gabarito Rápido em Linha */}
          <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 mr-1 flex items-center gap-1">
              <Zap size={13} className="text-emerald-400" /> Gabarito Relâmpago:
            </span>
            {[
              { q: '1', r: 'A' },
              { q: '2', r: 'C' },
              { q: '3', r: 'B' },
              { q: '4', r: 'B' },
              { q: '5', r: 'A' },
              { q: '6', r: 'A' },
              { q: '7', r: 'C' },
              { q: '8', r: 'E' },
              { q: '9', r: 'B' },
              { q: '10', r: 'Diss.' },
            ].map((item) => (
              <span
                key={item.q}
                className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 font-mono text-xs font-bold"
              >
                {item.q}-{item.r}
              </span>
            ))}
          </div>
        </div>

        {/* 1. Gabarito Comentado das 10 Questões */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('gabarito')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Gabarito Completo Comentado (Questões 1 a 10)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Enunciados, alternativas corretas e gatilhos mentais para memorizar
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
              {PROVA_QUESTOES.map((q) => (
                <div
                  key={q.num}
                  className="p-4 rounded-xl bg-[#0b0f19] border border-white/[0.06] flex flex-col gap-2 hover:border-emerald-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-mono text-xs font-bold">
                        Q{q.num}
                      </span>
                      <span className="text-xs font-medium text-zinc-300">
                        {q.assunto}
                      </span>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-700/50 text-xs font-bold whitespace-nowrap">
                      {q.resposta}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {q.detalhe}
                  </p>

                  <div className="mt-1 flex items-start gap-2 p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-800/30 text-xs text-emerald-300">
                    <Lightbulb size={14} className="mt-0.5 shrink-0 text-emerald-400" />
                    <div>
                      <strong className="text-emerald-200">Gatilho de Prova: </strong>
                      {q.gatilho}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Questão 10: Tabela Comparativa Refatoração vs Reengenharia */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('q10')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Questão 10 Dissertativa: Refatoração x Reengenharia
                </h2>
                <p className="text-[11px] text-zinc-400">
                  A resposta exata da dissertativa e a tabela comparativa oficial
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.q10 ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.q10 && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-4 text-xs sm:text-sm text-zinc-300">
              {/* Síntese da Resposta Dissertativa */}
              <div className="p-4 rounded-xl bg-[#0b0f19] border border-white/[0.08] space-y-3">
                <div>
                  <h3 className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                    <CheckCircle2 size={15} /> Resposta Modelo para a Dissertativa
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    <strong>Refatoração:</strong> Processo contínuo e de pequena escala realizado durante todo o desenvolvimento. Consiste em melhorar a estrutura interna do código (eliminar duplicações, simplificar métodos, melhorar nomes, reduzir acoplamento) <em>sem alterar o comportamento externo</em> do software. Caráter <strong>preventivo</strong>: evita a degradação e facilita mudanças futuras.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    <strong>Reengenharia:</strong> Processo de escopo maior aplicado a <em>sistemas legados</em> após anos de manutenção, quando o custo de manter fica insustentável. Envolve reestruturar e redocumentar o sistema inteiro, podendo incluir engenharia reversa, tradução de código-fonte para outra linguagem, modularização e reengenharia de dados. Caráter <strong>corretivo e de modernização</strong>, com o objetivo de aumentar a manutenibilidade sem precisar descartar o sistema.
                  </p>
                </div>
              </div>

              {/* Tabela Comparativa da Prova */}
              <div className="overflow-x-auto rounded-xl border border-white/[0.08]">
                <table className="w-full text-left text-xs">
                  <thead className="bg-white/[0.04] text-zinc-200 border-b border-white/[0.08]">
                    <tr>
                      <th className="p-3 font-semibold text-zinc-400">Critério</th>
                      <th className="p-3 font-semibold text-emerald-400">Refatoração</th>
                      <th className="p-3 font-semibold text-cyan-400">Reengenharia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04] font-mono text-[11px] sm:text-xs">
                    <tr>
                      <td className="p-3 font-sans text-zinc-300 font-semibold">Escopo</td>
                      <td className="p-3 text-emerald-300">Trechos do código (localizado)</td>
                      <td className="p-3 text-cyan-300">Sistema inteiro ou grandes partes</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans text-zinc-300 font-semibold">Quando ocorre</td>
                      <td className="p-3 text-emerald-300">Continuamente, durante o desenvolvimento</td>
                      <td className="p-3 text-cyan-300">Pontualmente, em sistemas legados</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans text-zinc-300 font-semibold">Natureza</td>
                      <td className="p-3 text-emerald-300">Preventiva (evita degradação)</td>
                      <td className="p-3 text-cyan-300">Corretiva / de modernização</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans text-zinc-300 font-semibold">Comportamento externo</td>
                      <td className="p-3 text-emerald-300">NÃO MUDA (funcionalidade idêntica)</td>
                      <td className="p-3 text-cyan-300">Funcionalidades mantidas; dados/linguagem mudam</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-sans text-zinc-300 font-semibold">Exemplos</td>
                      <td className="p-3 text-emerald-300">Renomear, extrair método, DRY</td>
                      <td className="p-3 text-cyan-300">Engenharia reversa, tradução de código</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mnemônico */}
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
                <Zap size={15} className="text-emerald-400 shrink-0" />
                <span>
                  <strong>Em resumo de prova:</strong> A refatoração é preventiva, contínua e localizada no código; a reengenharia é corretiva, pontual e abrange o sistema inteiro.
                </span>
              </div>
            </div>
          )}
        </div>

        {/* 3. Arquitetura, RNF e Modelo 4+1 */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('fundamentos')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  RNF, Padrão MVC e Modelo 4+1 Visões (Questões 1, 2 e 3)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Como Requisitos Não Funcionais moldam a arquitetura e os papéis de cada visão
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.fundamentos ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.fundamentos && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06] space-y-1.5">
                  <span className="text-emerald-400 font-semibold block">🎯 RNF: Manutenibilidade (Q1)</span>
                  <p className="text-zinc-400 leading-relaxed">
                    Requisitos Não Funcionais (RNF) são atributos de qualidade. A manutenibilidade exige separação de responsabilidades, componentes menores e acoplamento fraco para que futuras manutenções sejam fáceis.
                  </p>
                </div>
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06] space-y-1.5">
                  <span className="text-emerald-400 font-semibold block">🌐 MVC: O Papel do Model (Q2)</span>
                  <p className="text-zinc-400 leading-relaxed">
                    O <strong>Model</strong> encapsula os dados, as regras de negócio e o acesso ao banco de dados. A <strong>View</strong> apenas renderiza a interface e o <strong>Controller</strong> faz o meio-campo.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06] space-y-2 text-xs">
                <span className="text-emerald-400 font-semibold block">📐 Modelo 4+1 de Kruchten e seus Públicos (Q3):</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <strong className="text-white">Visão de Desenvolvimento (Q3):</strong>
                    <span className="text-zinc-400 block mt-0.5">Módulos e código para gerentes de projeto e líderes técnicos organizarem o time.</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <strong className="text-white">Visão Lógica:</strong>
                    <span className="text-zinc-400 block mt-0.5">Classes, entidades e serviços do domínio para analistas e usuários.</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <strong className="text-white">Visão de Processo:</strong>
                    <span className="text-zinc-400 block mt-0.5">Threads, concorrência e tempo de execução para integradores de sistemas.</span>
                  </div>
                  <div className="p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                    <strong className="text-white">Visão Física (Implantação):</strong>
                    <span className="text-zinc-400 block mt-0.5">Hardware, servidores e redes para engenheiros de infraestrutura.</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4. Verificação vs Validação (V&V) e Mudança de Software */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('vv')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                4
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  V&V e Fluxo de Mudanças (Questões 4, 5 e 6)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Diferença clássica entre Verificação e Validação e as 4 etapas de mudança
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.vv ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.vv && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-emerald-500/30">
                  <span className="text-emerald-300 font-semibold block mb-1">
                    ✅ Validação ("Produto Certo?") - Q5
                  </span>
                  <p className="text-zinc-400 leading-relaxed">
                    Focada em garantir que o software atende aos objetivos reais do cliente.
                    Técnica principal: <strong>Testes de aceitação do usuário (UAT)</strong>.
                  </p>
                </div>
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <span className="text-zinc-300 font-semibold block mb-1">
                    🔍 Verificação ("Produto Corretamente?")
                  </span>
                  <p className="text-zinc-400 leading-relaxed">
                    Focada em checar a conformidade com a especificação técnica.
                    Técnicas: <strong>Revisões de código, inspeções e testes unitários</strong>.
                  </p>
                </div>
              </div>

              {/* Fluxo de Mudança */}
              <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06] text-xs space-y-2">
                <span className="text-emerald-400 font-semibold block">
                  🔄 Sequência Padrão de Implementação de Mudanças (Q6):
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-2 pt-1 font-mono text-[11px]">
                  <div className="px-3 py-2 rounded bg-white/[0.04] border border-white/[0.06] text-center w-full sm:w-auto">
                    1. Proposta de Mudança
                  </div>
                  <span className="text-emerald-400 font-bold hidden sm:inline">➔</span>
                  <span className="text-emerald-400 font-bold sm:hidden">↓</span>
                  <div className="px-3 py-2 rounded bg-white/[0.04] border border-white/[0.06] text-center w-full sm:w-auto">
                    2. Análise de Requisitos
                  </div>
                  <span className="text-emerald-400 font-bold hidden sm:inline">➔</span>
                  <span className="text-emerald-400 font-bold sm:hidden">↓</span>
                  <div className="px-3 py-2 rounded bg-white/[0.04] border border-white/[0.06] text-center w-full sm:w-auto">
                    3. Atualização de Requisitos
                  </div>
                  <span className="text-emerald-400 font-bold hidden sm:inline">➔</span>
                  <span className="text-emerald-400 font-bold sm:hidden">↓</span>
                  <div className="px-3 py-2 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 font-bold text-center w-full sm:w-auto">
                    4. Desenvolvimento
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 5. Manifesto Ágil, Sistemas Legados e Scrum */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('agil')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 font-mono text-xs font-bold flex items-center justify-center">
                5
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Manifesto Ágil, Legados e Sprints (Questões 7, 8 e 9)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Os 4 valores ágeis, o perigo oculto nos legados e a dinâmica de Sprints
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.agil ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.agil && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06] text-xs space-y-2">
                <span className="text-emerald-400 font-semibold block">📜 Os 4 Valores do Manifesto Ágil (Q7):</span>
                <ul className="space-y-1.5 text-zinc-300 pl-1">
                  <li>• <strong>Indivíduos e interações</strong> mais que processos e ferramentas</li>
                  <li>• <strong>Software em funcionamento</strong> mais que documentação abrangente</li>
                  <li>• <strong>Colaboração com o cliente</strong> mais que negociação de contratos</li>
                  <li className="text-emerald-300 font-semibold">• <strong>Responder a mudanças</strong> mais que seguir um plano (Alternativa correta na prova!)</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06] space-y-1.5">
                  <span className="text-emerald-400 font-semibold block">⚠️ O Dilema dos Legados (Q8)</span>
                  <p className="text-zinc-400 leading-relaxed">
                    Sistemas antigos vitais acumulam regras no código sem documentação. Ao modernizar, o risco de interromper a operação por não saber exatamente o que o código antigo faz é o maior desafio.
                  </p>
                </div>
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06] space-y-1.5">
                  <span className="text-emerald-400 font-semibold block">🏃 Sprints no Scrum (Q9)</span>
                  <p className="text-zinc-400 leading-relaxed">
                    Ciclos iterativos e curtos onde o software é desenvolvido, testado e refinado progressivamente. Não há fases rígidas em cascata nem impedimento de mudanças no Product Backlog.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
