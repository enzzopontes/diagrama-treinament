import React, { useState } from 'react';
import {
  ArrowLeft,
  Terminal,
  ChevronDown,
  Sparkles,
  Zap,
  Lightbulb,
} from 'lucide-react';

interface BdNp2ResumoViewProps {
  onBack: () => void;
  onOpenSqlLab?: () => void;
}

export const BdNp2ResumoView: React.FC<BdNp2ResumoViewProps> = ({ onBack, onOpenSqlLab }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    gabarito: true,
    modelo: true,
    joins: false,
    filtros: false,
    funcoes: false,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const PROVA_SQL_QUESTOES = [
    {
      num: 1,
      pontos: '2,0 pontos',
      assunto: 'SELECT com junção (JOIN implícito no WHERE) e filtro por estado',
      pergunta: 'Recuperar os nomes das pessoas que moram no estado de São Paulo (SP):',
      respostaLetra: 'B',
      codigoCorreto: `SELECT PESSOA.PessoaNome
FROM   PESSOA, CIDADE
WHERE  PESSOA.CidCod = CIDADE.CidCod
AND    CIDADE.UfSigla = 'SP';`,
      gatilho: "Ligue a chave PESSOA.CidCod = CIDADE.CidCod e filtre CIDADE.UfSigla = 'SP'. Se esquecer a igualdade de chaves no WHERE, vira produto cartesiano!",
      analiseErros: [
        'A: Não faz a junção entre as tabelas (produto cartesiano) e a coluna "UF" não existe no modelo (o nome correto é UfSigla).',
        'C: A junção e o filtro estão certos, mas retorna CidNome (nome da cidade), e o enunciado pediu o nome das pessoas.',
        "D: Compara CidCod (INTEGER) com 'SP', traz todas as colunas (*) e não faz a junção das tabelas.",
      ],
    },
    {
      num: 2,
      pontos: '2,0 pontos',
      assunto: 'Junção entre três tabelas e filtro por data (MONTH/YEAR)',
      pergunta: 'Recuperar todos os pedidos do Rio de Janeiro (RJ) com data de cadastro em março de 2026:',
      respostaLetra: 'D',
      codigoCorreto: `SELECT PEDIDONUM, PEDIDODATACAD, PEDIDOVALORTOTAL
FROM   PEDIDO, PESSOA, CIDADE
WHERE  PEDIDO.PESSOACOD = PESSOA.PESSOACOD
AND    PESSOA.CidCod = CIDADE.CidCod
AND    CIDADE.UfSigla = 'RJ'
AND    MONTH(PEDIDODATACAD) = 3
AND    YEAR(PEDIDODATACAD) = 2026;`,
      gatilho: "Navegação em cadeia de 3 tabelas: PEDIDO ➔ PESSOA ➔ CIDADE. São obrigatórias 2 condições de junção, mais MONTH=3 e YEAR=2026.",
      analiseErros: [
        'A: Não tem as condições de junção (produto cartesiano brutal) e não filtra o ano, trazendo março de qualquer ano.',
        "B: Não filtra o estado (RJ), o intervalo vai até junho e '2026-06-31' é uma data inexistente (junho tem apenas 30 dias).",
        "C: PEDIDO não possui ligação direta com CIDADE (a chave passa por PESSOA) e comparar DATE diretamente com '03/2026' não funciona no SQL.",
      ],
    },
    {
      num: 3,
      pontos: '2,0 pontos',
      assunto: 'ORDER BY com múltiplos critérios (DESC e ASC) e junção',
      pergunta: 'Recuperar número do pedido, nome da pessoa e valor total, ordenados decrescentemente pelo valor e, no empate, pela data crescente:',
      respostaLetra: 'A',
      codigoCorreto: `SELECT   PEDIDO.PEDIDONUM, PessoaNome,
         PEDIDO.PEDIDOVALORTOTAL, PEDIDO.PEDIDODATACAD
FROM     PEDIDO, PESSOA
WHERE    PEDIDO.PESSOACOD = PESSOA.PESSOACOD
ORDER BY PEDIDO.PEDIDOVALORTOTAL DESC, PEDIDO.PEDIDODATACAD ASC;`,
      gatilho: '1º critério DESC (maior para o menor), vírgula, 2º critério ASC (desempate do mais antigo para o mais novo). Não esqueça da junção no WHERE.',
      analiseErros: [
        'B: Não faz a junção entre as tabelas, não traz o valor total e ordena apenas por PedidoNum.',
        'C: Sem junção; ordena o valor em ordem crescente (ASC padrão) e a data em ordem decrescente, o inverso do solicitado.',
        'D: WHERE 1=1 não liga tabelas; ORDER BY 3 e 4 referencia colunas inexistentes na projeção (o SELECT possui apenas 1 coluna).',
      ],
    },
    {
      num: 4,
      pontos: '2,0 pontos',
      assunto: 'Filtro com LIKE e ordem das cláusulas (WHERE antes de ORDER BY)',
      pergunta: 'Recuperar todas as colunas da tabela de clientes cujo nome começa com "A", ordenados de A a Z:',
      respostaLetra: 'D',
      codigoCorreto: `SELECT * FROM clientes
WHERE nome LIKE 'A%'
ORDER BY nome ASC;`,
      gatilho: "O WHERE vem SEMPRE antes do ORDER BY. O operador LIKE 'A%' usa o % como curinga para nomes que iniciam com A.",
      analiseErros: [
        'A: Coloca o LIKE dentro do ORDER BY, não filtrando nenhum registro da tabela.',
        "B: Com o operador '=', o % não atua como curinga; só traria pessoas com o nome literal 'A%'.",
        'C: Ordem das cláusulas invertida: colocou ORDER BY antes do WHERE (erro fatal de sintaxe SQL).',
      ],
    },
  ];

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
              Banco de Dados • Prova Oficial de Consultas SQL (NP2)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 hidden sm:inline-block">
              Gabarito: 1-B | 2-D | 3-A | 4-D
            </span>
            {onOpenSqlLab && (
              <button
                onClick={onOpenSqlLab}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-95 text-xs font-semibold text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
              >
                <Terminal size={13} />
                <span className="hidden sm:inline">Laboratório SQL</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Conteúdo Editorial */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Banner do Módulo */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-slate-900/60 to-cyan-950/40 border border-blue-500/30 shadow-lg shadow-blue-950/20">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
            <Sparkles size={14} />
            <span>PROVA OFICIAL DE CONSULTAS SQL • ANÁLISE E DESENVOLVIMENTO DE SISTEMAS (NP2)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Gabarito Oficial & Análise Completa da Prova de SQL
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            As questões completas da prova real de Consultas SQL e Modelagem Relacional, o gabarito fundamentado com justificativas técnicas de cada alternativa e o mapa do modelo lógico para não errar caminhos de chaves.
          </p>

          {/* Gabarito Rápido em Linha */}
          <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-zinc-400 mr-1 flex items-center gap-1">
              <Zap size={13} className="text-blue-400" /> Gabarito Relâmpago:
            </span>
            {[
              { q: '1', r: 'B' },
              { q: '2', r: 'D' },
              { q: '3', r: 'A' },
              { q: '4', r: 'D' },
            ].map((item) => (
              <span
                key={item.q}
                className="px-2.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 font-mono text-xs font-bold"
              >
                Q{item.q} ➔ {item.r}
              </span>
            ))}
          </div>
        </div>

        {/* 1. Gabarito Comentado das 4 Questões da Prova Real */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('gabarito')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                1
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Gabarito Completo Comentado da Prova de SQL (Questões 1 a 4)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Enunciados, código SQL correto, erros das alternativas e gatilhos de prova
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.gabarito ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.gabarito && (
            <div className="px-5 pb-5 pt-2 border-t border-white/[0.04] space-y-4">
              {PROVA_SQL_QUESTOES.map((q) => (
                <div
                  key={q.num}
                  className="p-4 rounded-xl bg-[#0b0f19] border border-white/[0.08] flex flex-col gap-3 hover:border-blue-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-blue-500/15 text-blue-400 font-mono text-xs font-bold">
                        Questão {q.num}
                      </span>
                      <span className="text-xs text-zinc-400 font-mono">
                        ({q.pontos})
                      </span>
                      <span className="text-xs font-medium text-zinc-300">
                        • {q.assunto}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded bg-blue-950 text-blue-300 border border-blue-700/50 text-xs font-bold font-mono">
                      Alternativa Correta: {q.respostaLetra}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-zinc-200">
                    {q.pergunta}
                  </p>

                  <div className="bg-[#070a12] p-3 rounded-lg border border-white/[0.06] font-mono text-xs text-blue-300 overflow-x-auto">
                    <pre>{q.codigoCorreto}</pre>
                  </div>

                  <div className="p-3 rounded-lg bg-blue-950/20 border border-blue-800/30 text-xs text-blue-300 flex items-start gap-2">
                    <Lightbulb size={15} className="mt-0.5 shrink-0 text-blue-400" />
                    <div>
                      <strong className="text-blue-200">Gatilho de Prova: </strong>
                      {q.gatilho}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/[0.04]">
                    <span className="text-[11px] font-semibold text-zinc-400 block mb-1.5">
                      Por que as outras alternativas estão erradas?
                    </span>
                    <ul className="space-y-1 text-[11px] text-zinc-400 pl-2">
                      {q.analiseErros.map((erro, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-red-400 font-bold shrink-0">✕</span>
                          <span>{erro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Modelo Lógico & Mapa de Chaves Estrangeiras */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('modelo')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                2
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Modelo Lógico Oficial Usado na Prova & Caminho de Junções
                </h2>
                <p className="text-[11px] text-zinc-400">
                  As 7 tabelas do exame, suas chaves PK/FK e a rota de navegação
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.modelo ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.modelo && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-4 text-xs sm:text-sm text-zinc-300">
              <p className="text-xs text-zinc-400 leading-relaxed">
                Todas as questões da prova foram construídas sobre este mesmo esquema relacional. Memorize o caminho das chaves estrangeiras:
              </p>

              {/* Rota de Junção */}
              <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-blue-500/30">
                <span className="text-blue-300 font-semibold block mb-2 font-mono text-xs">
                  🔗 CAMINHO MAIS COBRADO NAS CONSULTAS:
                </span>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-200">
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                    PEDIDO (PessoaCod)
                  </span>
                  <span className="text-blue-400 font-bold">➔</span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                    PESSOA (CidCod)
                  </span>
                  <span className="text-blue-400 font-bold">➔</span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                    CIDADE (UfSigla)
                  </span>
                  <span className="text-blue-400 font-bold">➔</span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08]">
                    UNIDADE_FEDERATIVA
                  </span>
                </div>
              </div>

              {/* Grade de Tabelas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-blue-400 block mb-1 font-mono">PAIS</strong>
                  <span className="text-zinc-400 block">PaisCod: INTEGER (PK) • PaisNome: VARCHAR</span>
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-blue-400 block mb-1 font-mono">UNIDADE_FEDERATIVA</strong>
                  <span className="text-zinc-400 block">UfSigla: VARCHAR (PK) • UfNome: VARCHAR • PaisCod: INTEGER (FK)</span>
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-blue-400 block mb-1 font-mono">CIDADE</strong>
                  <span className="text-zinc-400 block">CidCod: INTEGER (PK) • CidNome: VARCHAR • UfSigla: VARCHAR (FK)</span>
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-blue-400 block mb-1 font-mono">PESSOA</strong>
                  <span className="text-zinc-400 block">PessoaCod: INTEGER (PK) • PessoaNome: VARCHAR • PessoaDataExpCad: DATE • CidCod: INTEGER (FK)</span>
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-blue-400 block mb-1 font-mono">PEDIDO</strong>
                  <span className="text-zinc-400 block">PedidoNum: INTEGER (PK) • PedidoDataCad: DATE • PedidoValorTotal: NUMERIC • PessoaCod: INTEGER (FK)</span>
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-blue-400 block mb-1 font-mono">PRODUTO & ITEM_PEDIDO</strong>
                  <span className="text-zinc-400 block">ProdCod (PK), PessoaCodFornec (FK) • ITEM_PEDIDO (PedidoNum, ItemPedidoSeq)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. Junções de Tabelas (JOINs) & Produto Cartesiano */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('joins')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                3
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Junção Implícita (WHERE) vs Explícita (INNER JOIN)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Como funciona a ligação entre tabelas e a armadilha do produto cartesiano
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.joins ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.joins && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <p>
                Na prova, o professor cobrou a <strong>junção implícita</strong> clássica (com as tabelas separadas por vírgula no FROM e a condição de igualdade no WHERE):
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-blue-500/20">
                  <strong className="text-blue-400 block mb-1 font-mono">Junção Implícita (Estilo da Prova):</strong>
                  <pre className="font-mono text-[11px] text-zinc-300 mt-1">{`SELECT PESSOA.PessoaNome, CIDADE.CidNome
FROM   PESSOA, CIDADE
WHERE  PESSOA.CidCod = CIDADE.CidCod;`}</pre>
                </div>
                <div className="p-3.5 bg-[#0b0f19] rounded-xl border border-white/[0.06]">
                  <strong className="text-cyan-400 block mb-1 font-mono">Junção Explícita (ANSI):</strong>
                  <pre className="font-mono text-[11px] text-zinc-300 mt-1">{`SELECT PESSOA.PessoaNome, CIDADE.CidNome
FROM   PESSOA
INNER JOIN CIDADE 
    ON PESSOA.CidCod = CIDADE.CidCod;`}</pre>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-red-950/20 border border-red-800/30 text-xs text-red-200">
                <strong>⚠️ O Perigo do Produto Cartesiano (Pegadinha da Prova):</strong>
                <p className="mt-1 text-zinc-400">
                  Se você colocar duas tabelas no FROM (<code>FROM PESSOA, CIDADE</code>) e esquecer a igualdade de chaves (<code>WHERE PESSOA.CidCod = CIDADE.CidCod</code>), o SQL Server multiplica cada linha de PESSOA por todas as linhas de CIDADE (N × M linhas), trazendo dados errados e duplicados!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 4. Filtros, LIKE e Ordem de Execução */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('filtros')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                4
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Operador LIKE, Ordem das Cláusulas e Tratamento de Nulos
                </h2>
                <p className="text-[11px] text-zinc-400">
                  Curingas % e _, ordem obrigatória do SELECT e por que "= NULL" falha
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.filtros ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.filtros && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.08]">
                  <strong className="text-blue-400 block mb-1">🔤 LIKE vs '=' (Questão 4):</strong>
                  <code>WHERE nome LIKE 'A%'</code>: Começa com A.<br />
                  <code>WHERE nome LIKE '%A'</code>: Termina com A.<br />
                  <code>WHERE nome LIKE '%A%'</code>: Contém a letra A.<br />
                  <code>WHERE nome = 'A%'</code>: Busca apenas quem se chama literalmente "A%".
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.08]">
                  <strong className="text-cyan-400 block mb-1">📐 Ordem das Cláusulas:</strong>
                  <span className="font-mono text-zinc-300">
                    1. SELECT ...<br />
                    2. FROM ...<br />
                    3. WHERE ... (filtra ANTES!)<br />
                    4. ORDER BY ... (ordena no final)
                  </span>
                  <span className="text-[11px] text-red-400 block mt-1">Colocar ORDER BY antes do WHERE é erro de sintaxe.</span>
                </div>
              </div>

              <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.06] text-xs">
                <strong className="text-blue-400 block mb-1">🚫 Tratamento de Nulos (IS NULL):</strong>
                <p className="text-zinc-400">
                  NULL representa ausência de valor. Comparações com <code>= NULL</code> resultam em UNKNOWN. Por isso, usa-se exclusivamente <code>WHERE coluna IS NULL</code> ou <code>IS NOT NULL</code>.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* 5. Funções de Data e Linha Única */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('funcoes')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                5
              </span>
              <div>
                <h2 className="text-sm sm:text-base font-semibold text-white">
                  Funções de Data (MONTH, YEAR, DATEDIFF) e Funções de Texto (LEN)
                </h2>
                <p className="text-[11px] text-zinc-400">
                  As funções essenciais cobradas na prova para manipulação de campos
                </p>
              </div>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.funcoes ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.funcoes && (
            <div className="px-5 pb-5 pt-3 border-t border-white/[0.04] space-y-3.5 text-xs sm:text-sm text-zinc-300">
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.08]">
                  <strong className="text-blue-400 block mb-1">📅 Funções de Data (Questão 2):</strong>
                  <code>MONTH(PEDIDODATACAD) = 3</code>: Extrai o mês como número (3 = Março).<br />
                  <code>YEAR(PEDIDODATACAD) = 2026</code>: Extrai o ano como número (2026).<br />
                  <code>DAY(data)</code>: Extrai o dia do mês.<br />
                  <code>DATEDIFF(DAY, inicio, fim)</code>: Diferença de dias entre duas datas.<br />
                  <code>GETDATE()</code>: Retorna a data e hora do servidor.
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.08]">
                  <strong className="text-cyan-400 block mb-1">🔤 Funções de Texto e Condicionais:</strong>
                  <code>LEN(texto)</code>: Quantidade de caracteres (exclui espaços à direita).<br />
                  <code>ISNULL(campo, substituto)</code>: Substitui nulos por valor padrão.<br />
                  <code>CASE WHEN condicao THEN valor ELSE padrao END</code>: Condicional no SELECT.
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
