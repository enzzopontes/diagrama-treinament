import React, { useState, useEffect, useMemo } from 'react';
import {
  ArrowLeft,
  Database,
  Play,
  RotateCcw,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  Table as TableIcon,
  ChevronRight,
  ChevronLeft,
  Terminal,
  Code2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  initMockDatabase,
  executeQuery,
  MOCK_DATABASE_SCHEMA,
} from '../data/sqlMockDb';
import { SQL_CHALLENGES, type SqlChallenge } from '../data/sqlChallenges';

interface SqlPracticeLabViewProps {
  onBack: () => void;
  onOpenBottomBarSettings?: () => void;
}

export const SqlPracticeLabView: React.FC<SqlPracticeLabViewProps> = ({ onBack }) => {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [userQuery, setUserQuery] = useState('');
  const [isFreeMode, setIsFreeMode] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'schema' | 'tables'>('editor');
  const [selectedSchemaTable, setSelectedSchemaTable] = useState('CIDADE');

  // Resultado da execução
  const [executionResult, setExecutionResult] = useState<{
    success: boolean;
    rows?: Record<string, unknown>[];
    columns?: string[];
    rowCount?: number;
    error?: string;
    executionTimeMs?: number;
  } | null>(null);

  // Status de validação do desafio
  const [validationStatus, setValidationStatus] = useState<'idle' | 'success' | 'failed'>('idle');
  const [validationMessage, setValidationMessage] = useState('');

  // Desafio ativo
  const challenge = useMemo<SqlChallenge>(() => {
    return SQL_CHALLENGES[currentChallengeIndex];
  }, [currentChallengeIndex]);

  // Inicializa o banco em memória ao montar o componente
  useEffect(() => {
    initMockDatabase();
  }, []);

  // Atualiza o editor ao trocar de desafio
  useEffect(() => {
    if (!isFreeMode && challenge) {
      setUserQuery(challenge.initialCode);
      setShowHint(false);
      setValidationStatus('idle');
      setValidationMessage('');
      setExecutionResult(null);
    }
  }, [challenge, isFreeMode]);

  // Atalhos rápidos para teclado mobile
  const quickSqlTokens = [
    'SELECT',
    'FROM',
    'WHERE',
    'INNER JOIN',
    'ON',
    'ORDER BY',
    'ASC',
    'DESC',
    'UPPER()',
    'ISNULL()',
    'CASE WHEN',
    'THEN',
    'ELSE',
    'END',
    '*',
    ';',
  ];

  const handleInsertToken = (token: string) => {
    setUserQuery((prev) => prev + (prev.endsWith(' ') || prev.length === 0 ? '' : ' ') + token);
  };

  // Executa a consulta do usuário e valida contra o gabarito
  const handleExecute = () => {
    if (!userQuery.trim()) {
      setExecutionResult({
        success: false,
        error: 'Digite um comando SQL antes de executar.',
      });
      return;
    }

    const res = executeQuery(userQuery);
    setExecutionResult(res);

    if (isFreeMode) {
      setValidationStatus('idle');
      return;
    }

    if (!res.success) {
      setValidationStatus('failed');
      setValidationMessage('A consulta falhou com erro de sintaxe ou execução.');
      return;
    }

    // Executa a consulta esperada para comparar os resultados
    const expectedRes = executeQuery(challenge.expectedQuery);
    if (!expectedRes.success || !expectedRes.rows) {
      setValidationStatus('idle');
      return;
    }

    const userRows = res.rows || [];
    const expRows = expectedRes.rows || [];

    // Compara quantidade de linhas
    if (userRows.length !== expRows.length) {
      setValidationStatus('failed');
      setValidationMessage(
        `Sua consulta retornou ${userRows.length} linha(s), mas o esperado são ${expRows.length} linha(s).`
      );
      return;
    }

    // Validação comparativa dos dados retornados
    const normalizeRow = (r: Record<string, unknown>) =>
      Object.values(r)
        .map((v) => (v === null || v === undefined ? 'null' : String(v).trim().toLowerCase()))
        .sort()
        .join('|');

    const userSignature = userRows.map(normalizeRow).sort().join('###');
    const expSignature = expRows.map(normalizeRow).sort().join('###');

    if (userSignature === expSignature) {
      setValidationStatus('success');
      setValidationMessage('Parabéns! Sua consulta retornou os dados corretos conforme o gabarito da aula.');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
        });
      } catch {
        // ignore
      }
    } else {
      setValidationStatus('failed');
      setValidationMessage(
        'A quantidade de linhas confere, mas os valores ou colunas retornadas diferem do esperado.'
      );
    }
  };

  // Carrega os dados da tabela para visualização
  const currentTableData = useMemo(() => {
    if (activeTab !== 'tables') return null;
    return executeQuery(`SELECT * FROM ${selectedSchemaTable}`);
  }, [activeTab, selectedSchemaTable]);

  return (
    <div className="w-screen h-screen h-[100dvh] overflow-y-auto touch-scroll pb-safe bg-[#090d16] text-zinc-100 flex flex-col font-sans antialiased selection:bg-blue-600/30">
      {/* Top Bar Editorial Clean */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#090d16]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto h-14 px-3 sm:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Voltar</span>
            </button>
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <h1 className="text-xs sm:text-sm font-semibold text-white truncate">
                Laboratório Prático SQL • Prof. Flávio Volpon
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => {
                setIsFreeMode(!isFreeMode);
                setExecutionResult(null);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                isFreeMode
                  ? 'bg-blue-600 text-white border-blue-500 shadow-sm'
                  : 'bg-white/[0.03] text-zinc-400 border-white/[0.08] hover:text-zinc-200'
              }`}
            >
              {isFreeMode ? 'Modo Livre Ativo' : 'Modo Livre'}
            </button>
          </div>
        </div>
      </header>

      {/* Navegação entre Abas (Editor / Esquema / Tabelas) */}
      <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 pt-4">
        <div className="flex items-center gap-2 border-b border-white/[0.08] pb-2">
          <button
            onClick={() => setActiveTab('editor')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'editor'
                ? 'bg-white/[0.1] text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Terminal size={13} />
            <span>Editor & Desafios</span>
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'schema'
                ? 'bg-white/[0.1] text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Code2 size={13} />
            <span>Esquema das Tabelas</span>
          </button>
          <button
            onClick={() => setActiveTab('tables')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'tables'
                ? 'bg-white/[0.1] text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <TableIcon size={13} />
            <span>Explorar Dados</span>
          </button>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 py-4 flex flex-col gap-4">
        {activeTab === 'editor' && (
          <>
            {/* Header do Desafio (quando não estiver no modo livre) */}
            {!isFreeMode && (
              <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-mono font-medium">
                      {challenge.aulaOrigin}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-400 text-[11px]">
                      {challenge.category}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-medium">
                      Dificuldade: {challenge.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      disabled={currentChallengeIndex === 0}
                      onClick={() => setCurrentChallengeIndex((p) => Math.max(0, p - 1))}
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-30 disabled:pointer-events-none text-zinc-300"
                      title="Desafio anterior"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <span className="text-xs font-mono text-zinc-400 px-1">
                      {currentChallengeIndex + 1} / {SQL_CHALLENGES.length}
                    </span>
                    <button
                      disabled={currentChallengeIndex === SQL_CHALLENGES.length - 1}
                      onClick={() =>
                        setCurrentChallengeIndex((p) => Math.min(SQL_CHALLENGES.length - 1, p + 1))
                      }
                      className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] disabled:opacity-30 disabled:pointer-events-none text-zinc-300"
                      title="Próximo desafio"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                <h2 className="text-sm sm:text-base font-semibold text-white mb-1.5">
                  {challenge.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {challenge.enunciado}
                </p>

                {/* Dica / Ajuda */}
                <div className="mt-3 flex items-center gap-2">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 cursor-pointer"
                  >
                    <Lightbulb size={13} />
                    <span>{showHint ? 'Ocultar Dica' : 'Ver Dica de Sintaxe'}</span>
                  </button>
                </div>

                {showHint && (
                  <div className="mt-2.5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200 text-xs font-mono leading-relaxed">
                    💡 Dica: {challenge.hint}
                  </div>
                )}
              </div>
            )}

            {/* Painel do Editor SQL */}
            <div className="bg-[#0b0f19] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col">
              <div className="px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-zinc-400">SQL Server (T-SQL) Console</span>
                </div>
                <button
                  onClick={() => setUserQuery(isFreeMode ? '' : challenge.initialCode)}
                  className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-200 cursor-pointer"
                  title="Restaurar código inicial"
                >
                  <RotateCcw size={12} />
                  <span>Restaurar</span>
                </button>
              </div>

              {/* Textarea do Código */}
              <div className="p-3">
                <textarea
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  placeholder="Escreva sua consulta SQL aqui (ex: SELECT * FROM CIDADE;)..."
                  rows={4}
                  className="w-full bg-transparent font-mono text-xs sm:text-sm text-blue-300 placeholder:text-zinc-600 focus:outline-none resize-y"
                  spellCheck={false}
                />
              </div>

              {/* Barra de Ações e Atalhos Mobile */}
              <div className="px-3 pb-3 pt-1 border-t border-white/[0.04] flex flex-col gap-2">
                {/* Carrossel de palavras-chave rápidas */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                  <span className="text-[10px] font-mono text-zinc-500 shrink-0">Atalhos:</span>
                  {quickSqlTokens.map((tok) => (
                    <button
                      key={tok}
                      onClick={() => handleInsertToken(tok)}
                      className="px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/[0.06] text-[11px] font-mono text-zinc-300 shrink-0 cursor-pointer"
                    >
                      {tok}
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-zinc-500">
                    Ctrl+Enter ou clique para rodar
                  </span>
                  <button
                    onClick={handleExecute}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-xs font-semibold text-white shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                  >
                    <Play size={13} fill="currentColor" />
                    <span>Executar Consulta</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Banner de Validação do Desafio */}
            {validationStatus !== 'idle' && (
              <div
                className={`p-4 rounded-2xl border flex items-start gap-3 transition-all ${
                  validationStatus === 'success'
                    ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
                }`}
              >
                {validationStatus === 'success' ? (
                  <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={18} className="text-rose-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold">
                    {validationStatus === 'success' ? 'Resultado Aprovado!' : 'Ajuste Necessário'}
                  </h4>
                  <p className="text-xs mt-0.5 opacity-90 leading-relaxed">{validationMessage}</p>
                  {validationStatus === 'success' && challenge.explanation && (
                    <div className="mt-2 pt-2 border-t border-emerald-500/20 text-[11px] text-emerald-200/90 font-mono">
                      📚 {challenge.explanation}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Tabela de Resultados da Execução */}
            {executionResult && (
              <div className="bg-[#0b0f19] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col">
                <div className="px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TableIcon size={14} className="text-blue-400" />
                    <span className="text-xs font-semibold text-white">Resultado da Consulta</span>
                  </div>
                  {executionResult.success && (
                    <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
                      <span>{executionResult.rowCount} linha(s)</span>
                      <span>•</span>
                      <span>{executionResult.executionTimeMs} ms</span>
                    </div>
                  )}
                </div>

                {executionResult.error ? (
                  <div className="p-4 text-xs font-mono text-rose-300 bg-rose-950/20">
                    ❌ Erro SQL: {executionResult.error}
                  </div>
                ) : executionResult.rows && executionResult.rows.length === 0 ? (
                  <div className="p-8 text-center text-xs text-zinc-500">
                    A consulta foi executada com sucesso, mas retornou 0 registros.
                  </div>
                ) : (
                  <div className="overflow-x-auto max-h-80">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-white/[0.03] border-b border-white/[0.08]">
                          {executionResult.columns?.map((col) => (
                            <th
                              key={col}
                              className="px-3.5 py-2 font-mono text-[11px] font-semibold text-zinc-300 uppercase tracking-wider whitespace-nowrap"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04]">
                        {executionResult.rows?.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-white/[0.02]">
                            {executionResult.columns?.map((col) => {
                              const val = row[col];
                              return (
                                <td
                                  key={col}
                                  className="px-3.5 py-2 font-mono text-zinc-300 whitespace-nowrap"
                                >
                                  {val === null || val === undefined ? (
                                    <span className="italic text-zinc-600">NULL</span>
                                  ) : (
                                    String(val)
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Aba de Esquema das Tabelas */}
        {activeTab === 'schema' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_DATABASE_SCHEMA.map((tbl) => (
              <div
                key={tbl.tableName}
                className="bg-[#0b0f19] border border-white/[0.08] rounded-2xl p-4 sm:p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-mono font-bold text-blue-400 flex items-center gap-1.5">
                      <Database size={14} />
                      {tbl.tableName}
                    </h3>
                    <span className="text-[11px] text-zinc-500">{tbl.columns.length} colunas</span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-3">{tbl.description}</p>

                  <div className="divide-y divide-white/[0.04] border border-white/[0.06] rounded-xl overflow-hidden">
                    {tbl.columns.map((c) => (
                      <div
                        key={c.name}
                        className="px-3 py-1.5 flex items-center justify-between text-xs font-mono"
                      >
                        <div className="flex items-center gap-1.5">
                          {c.isPk && (
                            <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold">
                              PK
                            </span>
                          )}
                          {c.isFk && (
                            <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-400 text-[10px] font-bold">
                              FK
                            </span>
                          )}
                          <span className="text-zinc-200">{c.name}</span>
                        </div>
                        <span className="text-[11px] text-zinc-500">{c.type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedSchemaTable(tbl.tableName);
                    setActiveTab('tables');
                  }}
                  className="mt-4 w-full py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-xs font-medium text-zinc-300 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <TableIcon size={13} />
                  <span>Ver Dados de {tbl.tableName}</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Aba de Exploração de Dados */}
        {activeTab === 'tables' && (
          <div className="bg-[#0b0f19] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col">
            <div className="px-4 py-3 border-b border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                {MOCK_DATABASE_SCHEMA.map((t) => (
                  <button
                    key={t.tableName}
                    onClick={() => setSelectedSchemaTable(t.tableName)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                      selectedSchemaTable === t.tableName
                        ? 'bg-blue-600 text-white'
                        : 'bg-white/[0.03] text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {t.tableName}
                  </button>
                ))}
              </div>

              <span className="text-[11px] text-zinc-500">
                Mostrando tabela simulada em memória
              </span>
            </div>

            {currentTableData && currentTableData.rows && (
              <div className="overflow-x-auto max-h-[60vh]">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-white/[0.03] border-b border-white/[0.08]">
                      {currentTableData.columns?.map((col) => (
                        <th
                          key={col}
                          className="px-3.5 py-2 font-mono text-[11px] font-semibold text-zinc-300 uppercase tracking-wider whitespace-nowrap"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/[0.04]">
                    {currentTableData.rows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02]">
                        {currentTableData.columns?.map((col) => (
                          <td
                            key={col}
                            className="px-3.5 py-2 font-mono text-zinc-300 whitespace-nowrap"
                          >
                            {row[col] === null || row[col] === undefined ? (
                              <span className="italic text-zinc-600">NULL</span>
                            ) : (
                              String(row[col])
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};
