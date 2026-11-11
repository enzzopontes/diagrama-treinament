import React, { useState } from 'react';
import {
  ArrowLeft,
  Database,
  Terminal,
  ChevronDown,
} from 'lucide-react';

interface BdNp2ResumoViewProps {
  onBack: () => void;
  onOpenSqlLab?: () => void;
}

export const BdNp2ResumoView: React.FC<BdNp2ResumoViewProps> = ({ onBack, onOpenSqlLab }) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    ddl: true,
    dql: true,
    funcoes: true,
    condicionais: true,
    joins: true,
  });

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

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
              Resumo Teórico NP2 • Banco de Dados & NoSQL
            </span>
          </div>

          {onOpenSqlLab && (
            <button
              onClick={onOpenSqlLab}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 active:scale-95 text-xs font-semibold text-white transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <Terminal size={13} />
              <span className="hidden sm:inline">Praticar no</span> Laboratório SQL
            </button>
          )}
        </div>
      </header>

      {/* Conteúdo Editorial */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Banner do Módulo */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-slate-900/40 to-cyan-900/20 border border-white/[0.08]">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1.5">
            <Database size={14} />
            <span>AULAS 10 A 18 • PROF. ME. FLÁVIO HENRIQUE VOLPON (UNIP)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Guia Definitivo de SQL Server (T-SQL) para NP2
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Todo o conteúdo oficial ministrado nas aulas laboratoriais: DDL estrutural, consultas DQL com filtros, funções de linha única (texto, data, números), condicionais com CASE WHEN e junções completas com JOINs.
          </p>
        </div>

        {/* 1. DDL e Criação de Tabelas */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('ddl')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                DDL no SQL Server: CREATE TABLE, Chaves e IDENTITY
              </h2>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.ddl ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.ddl && (
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 space-y-3 border-t border-white/[0.04]">
              <p>
                O DDL (Data Definition Language) cria e altera a estrutura do banco. Na Aula 10, o professor introduziu o script oficial <code>Script_Flavio_Volpon.sql</code> com as boas práticas de integridade:
              </p>
              <div className="bg-[#0b0f19] p-3.5 rounded-xl border border-white/[0.08] font-mono text-xs text-blue-300 overflow-x-auto">
                <pre>{`-- Exemplo oficial do Prof. Flávio (CIDADE -> UNIDADE_FEDERATIVA)
CREATE TABLE CIDADE (
    CidCod INT IDENTITY(1,1) NOT NULL,
    CidNome VARCHAR(255) NOT NULL,
    UfSigla VARCHAR(2) NOT NULL,
    CONSTRAINT pk_CIDADE PRIMARY KEY (CidCod),
    CONSTRAINT fk_CIDADE_UNIDADE_FEDERATIVA FOREIGN KEY (UfSigla) 
        REFERENCES UNIDADE_FEDERATIVA (UfSigla)
);`}</pre>
              </div>
              <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-400">
                <li><code>IDENTITY(1,1)</code>: Auto-incremento que inicia em 1 e salta de 1 em 1.</li>
                <li><code>PRIMARY KEY</code>: Garante unicidade e não aceita nulos.</li>
                <li><code>FOREIGN KEY ... REFERENCES</code>: Garante integridade referencial.</li>
              </ul>
            </div>
          )}
        </div>

        {/* 2. DQL: SELECT, WHERE, LIKE e BETWEEN */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('dql')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                DQL Básico: Projeção, Filtros (WHERE), LIKE e ORDER BY
              </h2>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.dql ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.dql && (
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 space-y-3 border-t border-white/[0.04]">
              <p>
                Nas Aulas 11 e 12, foram trabalhadas consultas com operadores relacionais e lógicos:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="bg-[#0b0f19] p-3 rounded-xl border border-white/[0.08]">
                  <span className="text-zinc-400 font-bold block mb-1">Operador LIKE:</span>
                  <code>WHERE CidNome LIKE 'S%'</code>: Começa com S.<br />
                  <code>WHERE CidNome LIKE '%a'</code>: Termina com a.<br />
                  <code>WHERE CidNome LIKE '%paulo%'</code>: Contém "paulo".
                </div>
                <div className="bg-[#0b0f19] p-3 rounded-xl border border-white/[0.08]">
                  <span className="text-zinc-400 font-bold block mb-1">Cláusulas de Conjunto:</span>
                  <code>WHERE UfSigla IN ('SP', 'RJ', 'MG')</code><br />
                  <code>WHERE ProdCod BETWEEN 100 AND 200</code><br />
                  <code>ORDER BY CidNome ASC, CidCod DESC</code>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3. Funções de Linha Única */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('funcoes')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Funções de Linha Única (Texto, Data e Numéricas)
              </h2>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.funcoes ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.funcoes && (
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 space-y-3 border-t border-white/[0.04]">
              <p>
                Aulas 13 e 14 focam em manipular valores individualmente por linha:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.08]">
                  <strong className="text-blue-400 block mb-1">🔤 Funções de Texto:</strong>
                  <code>UPPER(coluna)</code>: Converte para MAIÚSCULAS.<br />
                  <code>LOWER(coluna)</code>: Converte para minúsculas.<br />
                  <code>LEN(coluna)</code>: Retorna o comprimento da cadeia.<br />
                  <code>SUBSTRING(coluna, inicio, qtd)</code>: Extrai parte da cadeia.<br />
                  <code>REPLACE(coluna, 'antigo', 'novo')</code>: Substitui trecho da string.
                </div>
                <div className="p-3 bg-[#0b0f19] rounded-xl border border-white/[0.08]">
                  <strong className="text-cyan-400 block mb-1">📅 Funções de Data:</strong>
                  <code>GETDATE()</code>: Retorna a data e hora atual do sistema.<br />
                  <code>DAY(data)</code>, <code>MONTH(data)</code>, <code>YEAR(data)</code>: Extraem dia, mês ou ano.<br />
                  <code>DATEDIFF(day, data_inicio, data_fim)</code>: Diferença entre duas datas.<br />
                  <code>DATEADD(month, 2, data)</code>: Adiciona intervalo a uma data.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 4. Expressões Condicionais (ISNULL e CASE WHEN) */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('condicionais')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                4
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Condicionais no SQL: ISNULL e CASE WHEN
              </h2>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.condicionais ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.condicionais && (
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 space-y-3 border-t border-white/[0.04]">
              <p>
                Aulas 15 e 16 mostram como tratar nulos e criar regras de negócio em colunas calculadas:
              </p>
              <div className="bg-[#0b0f19] p-3.5 rounded-xl border border-white/[0.08] font-mono text-xs text-blue-300 overflow-x-auto">
                <pre>{`-- 1. ISNULL para substituir valor nulo
SELECT PessoaNome, ISNULL(PessoaDataExpCad, 'Sem Data') AS StatusData
FROM PESSOA;

-- 2. CASE WHEN para classificação lógica
SELECT ProdNome,
    CASE 
        WHEN ProdDataValidMax < GETDATE() THEN 'Produto Vencido'
        WHEN ProdDataValidMax BETWEEN GETDATE() AND DATEADD(month, 1, GETDATE()) THEN 'Vence em breve'
        ELSE 'Validade Segura'
    END AS SituacaoValidade
FROM PRODUTO;`}</pre>
              </div>
            </div>
          )}
        </div>

        {/* 5. Junções de Tabelas (JOINs) */}
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          <button
            onClick={() => toggleSection('joins')}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-white/[0.02] cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-md bg-blue-500/10 text-blue-400 font-mono text-xs font-bold flex items-center justify-center">
                5
              </span>
              <h2 className="text-sm sm:text-base font-semibold text-white">
                Junções Múltiplas (JOINs): INNER, LEFT, RIGHT e FULL
              </h2>
            </div>
            <ChevronDown
              size={18}
              className={`text-zinc-400 transition-transform ${openSections.joins ? 'rotate-180' : ''}`}
            />
          </button>

          {openSections.joins && (
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 space-y-3 border-t border-white/[0.04]">
              <p>
                Aulas 17 e 18 tratam de cruzamento de dados. O <code>INNER JOIN</code> é a junção mais cobrada na prova, pois retorna apenas as tuplas onde existe correspondência mútua na chave estrangeira:
              </p>
              <div className="bg-[#0b0f19] p-3.5 rounded-xl border border-white/[0.08] font-mono text-xs text-blue-300 overflow-x-auto">
                <pre>{`-- Exemplo de 3 tabelas interligadas (Aula 18)
SELECT 
    PR.ProdNome AS Produto,
    PE.PessoaNome AS Fornecedor,
    CI.CidNome AS CidadeOrigem
FROM PRODUTO PR
INNER JOIN PESSOA PE ON PR.PessoaCodFornec = PE.PessoaCod
INNER JOIN CIDADE CI ON PE.CidCod = CI.CidCod;`}</pre>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-center font-mono text-xs">
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <strong className="text-blue-400 block">INNER JOIN</strong>
                  <span className="text-[11px] text-zinc-400">Apenas interseção</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <strong className="text-cyan-400 block">LEFT JOIN</strong>
                  <span className="text-[11px] text-zinc-400">Toda tabela esquerda</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <strong className="text-indigo-400 block">RIGHT JOIN</strong>
                  <span className="text-[11px] text-zinc-400">Toda tabela direita</span>
                </div>
                <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                  <strong className="text-purple-400 block">FULL JOIN</strong>
                  <span className="text-[11px] text-zinc-400">Ambas as tabelas</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
