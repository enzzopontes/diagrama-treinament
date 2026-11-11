import React, { useState } from 'react';
import {
  ArrowLeft,
  Terminal,
  Grid,
  Cpu,
  FileText,
  CheckCircle2,
  Zap,
} from 'lucide-react';

interface ProgCNp2ResumoViewProps {
  onBack: () => void;
}

export const ProgCNp2ResumoView: React.FC<ProgCNp2ResumoViewProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<'matrizes' | 'ponteiros' | 'arquivos' | 'decoreba'>('matrizes');

  return (
    <div className="w-screen h-screen h-[100dvh] overflow-y-auto touch-scroll pb-safe bg-[#090d16] text-zinc-100 flex flex-col font-sans antialiased selection:bg-sky-600/30">
      {/* Top Bar Editorial */}
      <header className="sticky top-0 z-40 w-full border-b border-white/[0.08] bg-[#090d16]/90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto h-14 px-4 sm:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] active:scale-95 border border-white/[0.08] text-xs font-medium text-zinc-300 hover:text-white transition-all cursor-pointer shrink-0"
            >
              <ArrowLeft size={14} />
              <span>Voltar</span>
            </button>
            <div className="flex items-center gap-2 min-w-0">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20 font-bold shrink-0">
                PC-201 • NP2
              </span>
              <span className="text-xs sm:text-sm font-semibold text-white truncate">
                Resumo Oficial do Simulado (20 Questões)
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 flex flex-col gap-6">
        {/* Banner Oficial */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900 to-indigo-950/30 border border-sky-500/20">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 mb-1.5">
            <Terminal size={14} />
            <span>UNIP • PROGRAMAÇÃO ESTRUTURADA EM C • PROF. ANDERSON CLAITON LOPES</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Guia Completo do Simulado NP2 (20 Questões)
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            Todas as regras mentais, pegadinhas de teste de mesa e padrões cobrados nas 20 questões objetivas. Sem código para digitar: foque em identificar o padrão e marcar a alternativa certa.
          </p>

          {/* Abas Rápidas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
            <button
              onClick={() => setActiveTab('matrizes')}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'matrizes'
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm'
                  : 'bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:bg-white/[0.05]'
              }`}
            >
              <Grid size={14} />
              <span>1. Matrizes (1-6)</span>
            </button>
            <button
              onClick={() => setActiveTab('ponteiros')}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'ponteiros'
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm'
                  : 'bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:bg-white/[0.05]'
              }`}
            >
              <Cpu size={14} />
              <span>2. Ponteiros (7-13)</span>
            </button>
            <button
              onClick={() => setActiveTab('arquivos')}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'arquivos'
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 shadow-sm'
                  : 'bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:bg-white/[0.05]'
              }`}
            >
              <FileText size={14} />
              <span>3. Arquivos (14-20)</span>
            </button>
            <button
              onClick={() => setActiveTab('decoreba')}
              className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'decoreba'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-white/[0.02] text-zinc-400 border-white/[0.06] hover:bg-white/[0.05]'
              }`}
            >
              <Zap size={14} />
              <span>10 Macetes de Prova</span>
            </button>
          </div>
        </div>

        {/* ======================================================== */}
        {/* PARTE 1: MATRIZES */}
        {/* ======================================================== */}
        {activeTab === 'matrizes' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Grid size={18} className="text-sky-400" />
                <span>Parte 1: Matrizes (Questões 1 a 6)</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">1. Índices e Último Elemento (Q1)</span>
                  <p className="text-zinc-300">
                    Em C, os índices vão sempre de <code>0</code> a <code>N-1</code>.
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    <code>float notas[3][4];</code><br />
                    • Alunos (linhas): 0, 1, 2 (último = 2)<br />
                    • Provas (colunas): 0, 1, 2, 3 (última = 3)<br />
                    👉 <strong>notas[2][3]</strong>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">2. Acesso Direto Linha x Coluna (Q2)</span>
                  <p className="text-zinc-300">
                    <code>m[linha][coluna]</code>:
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    m[2][3] = &#123; &#123;1, 2, 3&#125;, &#123;4, 5, 6&#125; &#125;;<br />
                    • m[1][0] = linha 1, col 0 = <strong>4</strong><br />
                    • m[0][2] = linha 0, col 2 = <strong>3</strong><br />
                    👉 4 + 3 = <strong>7</strong>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">3. Laço com continue (Q3)</span>
                  <p className="text-zinc-300">
                    <code>if (j &gt; i) continue;</code> pula elementos onde coluna &gt; linha (acima da diagonal).
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    • i=0: imprime j=0 (1)<br />
                    • i=1: imprime j=0,1 (4 5)<br />
                    • i=2: imprime j=0,1,2 (7 8 9)<br />
                    👉 <strong>1 / 4 5 / 7 8 9</strong>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">4. Diagonal Principal (Q4)</span>
                  <p className="text-zinc-300">
                    A condição <code>if (i == j)</code> pega unicamente a diagonal principal:
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    m[0][0]=4, m[1][1]=3, m[2][2]=2<br />
                    👉 Soma: 4 + 3 + 2 = <strong>9</strong>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">5. Matriz Transposta (Q5)</span>
                  <p className="text-zinc-300">
                    A transposta inverte posições: <code>t[j][i] = m[i][j]</code>.
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    Para achar <strong>t[2][1]</strong>, olhe para <strong>m[1][2]</strong>.<br />
                    Na matriz m, linha 1 col 2 é o valor <strong>6</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">6. Matriz Linearizada com Ponteiro (Q6)</span>
                  <p className="text-zinc-300">
                    Memória RAM linear: <code>*(p + i * COL + j)</code> é exatamente <code>m[i][j]</code>.
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    *(p + 1 * 3 + 1) = *(p + 4) = m[1][1].<br />
                    Linha 1, col 1 vale <strong>5</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PARTE 2: PONTEIROS */}
        {/* ======================================================== */}
        {activeTab === 'ponteiros' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <Cpu size={18} className="text-sky-400" />
                <span>Parte 2: Ponteiros (Questões 7 a 13)</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">Operador & (Q7)</span>
                  <p className="text-zinc-300">
                    O operador <code>&</code> retorna o <strong>endereço de memória</strong> da variável na RAM.
                  </p>
                  <p className="text-emerald-400 text-[11px] font-mono">
                    &x = "onde x está guardado"
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">Rastreio de Ponteiro p (Q8)</span>
                  <p className="text-zinc-300">
                    Acompanhe para onde a "seta" aponta:
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    1. p=&amp;a; *p=*p*2 &rarr; <strong>a vira 10</strong><br />
                    2. p=&amp;b; *p=*p+a &rarr; <strong>b vira 8+10 = 18</strong><br />
                    👉 Imprime: <strong>a=10 b=18 *p=18</strong>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">Passagem por Referência (Q9)</span>
                  <p className="text-zinc-300">
                    Se a função declara ponteiros <code>void trocar(int *a, int *b)</code>, a chamada na main tem que passar o <strong>endereço (&)</strong>:
                  </p>
                  <p className="text-emerald-400 font-mono text-[11px]">
                    👉 <strong>trocar(&m, &n);</strong>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">Passagem por Valor (Q10)</span>
                  <p className="text-zinc-300">
                    <code>void dobrar(int n)</code> recebe uma cópia. Alterar <code>n</code> NÃO muda o <code>x</code> da main!
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    int x = 4; dobrar(x);<br />
                    👉 printf("%d", x) imprime <strong>4</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">Aritmética de Ponteiro *(p + 2) (Q11)</span>
                  <p className="text-zinc-300">
                    O nome do vetor <code>v</code> aponta para o primeiro item <code>v[0]</code>.
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    *(p + 2) avança 2 posições = v[2].<br />
                    v = &#123;10, 20, 30, 40, 50&#125; &rarr; v[2] = <strong>30</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">Ponteiro Não Inicializado (Q12)</span>
                  <p className="text-zinc-300">
                    <code>int *p; *p = 10;</code>:
                  </p>
                  <p className="text-rose-400 font-mono text-[11px]">
                    ⚠️ O ponteiro p não foi inicializado (aponta para lixo/endereço desconhecido). A atribuição causa <strong>comportamento indefinido</strong> (crash).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5 sm:col-span-2">
                  <span className="text-sky-400 font-bold block">Especificador de Printf para Ponteiro (Q13)</span>
                  <p className="text-zinc-300">
                    Para exibir o endereço hexadecimal contido em um ponteiro com printf, usa-se o especificador <strong>%p</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PARTE 3: MANIPULAÇÃO DE ARQUIVOS */}
        {/* ======================================================== */}
        {activeTab === 'arquivos' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-3">
              <h2 className="text-base font-bold text-white flex items-center gap-2">
                <FileText size={18} className="text-sky-400" />
                <span>Parte 3: Manipulação de Arquivos (Questões 14 a 20)</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">1. Ciclo de Vida (Q14)</span>
                  <p className="text-zinc-300">
                    Ordem correta e obrigatória:
                  </p>
                  <p className="text-emerald-400 font-mono text-[11px]">
                    👉 <strong>Abrir (fopen) → usar (fprintf) → fechar (fclose)</strong>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">2. Modo "w" que já existe (Q15)</span>
                  <p className="text-zinc-300">
                    O que acontece?
                  </p>
                  <p className="text-rose-400 text-[11px]">
                    👉 <strong>Todo o conteúdo anterior é apagado</strong>, sem pedir confirmação, e a escrita começa do início.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">3. Gravar sem perder anteriores (Q16)</span>
                  <p className="text-zinc-300">
                    Para acrescentar vendas no final mantendo o histórico:
                  </p>
                  <p className="text-emerald-400 font-mono text-[11px]">
                    👉 Usar modo <strong>"a"</strong> (append / anexar).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">4. Quando fopen devolve NULL? (Q17)</span>
                  <p className="text-zinc-300">
                    Devolve NULL quando o arquivo <strong>não pode ser aberto</strong> (ex: modo "r" em arquivo inexistente, erro de permissão ou caminho errado).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">5. Checagem de Erro na Abertura (Q18)</span>
                  <p className="text-zinc-300">
                    Sintaxe exata:
                  </p>
                  <p className="text-emerald-400 font-mono text-[11px]">
                    👉 <code>if (arq == NULL) &#123; printf("Erro!"); return 1; &#125;</code><br />
                    <span className="text-zinc-500">(Dois iguais ==, sem * e sem &)</span>
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5">
                  <span className="text-sky-400 font-bold block">6. Pegadinha Teste de Mesa "w" x "a" (Q19)</span>
                  <p className="text-zinc-300">
                    2x com "a" (acumulou 4 linhas). Depois 1x com "w":
                  </p>
                  <p className="text-amber-400 font-mono text-[11px]">
                    O modo "w" apagou as 4 linhas velhas e escreveu apenas 2 novas.<br />
                    👉 Total de linhas ao final = <strong>2</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#0b0f19] border border-sky-500/20 space-y-1.5 sm:col-span-2">
                  <span className="text-sky-400 font-bold block">7. Leitura com fscanf e Média (Q20)</span>
                  <p className="text-zinc-300">
                    <code>while (fscanf(arq, "%s %f", nome, &nota) == 2)</code> lê 3 alunos:
                  </p>
                  <p className="text-zinc-400 font-mono text-[11px]">
                    Ana 8.0, Bruno 6.5, Carla 9.5<br />
                    Soma = 8.0 + 6.5 + 9.5 = 24.0. Quantidade = 3.<br />
                    👉 Média impressa: 24.0 / 3 = <strong>8.0</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* PARTE 4: OS 10 MACETES DE PROVA */}
        {/* ======================================================== */}
        {activeTab === 'decoreba' && (
          <div className="space-y-3 animate-in fade-in duration-200">
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-3">
              <h2 className="text-base font-bold text-amber-300 flex items-center gap-2">
                <Zap size={18} className="text-amber-400" />
                <span>Os 10 Macetes para Gabaritar a Prova de Alternativas</span>
              </h2>

              <ul className="space-y-2 text-xs text-zinc-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Último elemento de matriz:</strong> Se declarou [L][C], o último elemento é [L-1][C-1]. Nunca [L][C]!</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Diagonal Principal:</strong> Toda vez que ver <code>i == j</code>, é a diagonal principal (soma os elementos dela).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Transposta t[j][i]:</strong> Para saber t[A][B], basta olhar o elemento m[B][A] da matriz original.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Operador & vs *:</strong> <code>&</code> tira o endereço. <code>*</code> mexe no valor guardado lá dentro.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Trocar valores:</strong> Se a função pede ponteiro <code>int *a, int *b</code>, quem chama usa <code>trocar(&m, &n)</code>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Passagem por valor:</strong> Se a função não tem <code>*</code> no protótipo, ela recebe uma cópia e o original nunca muda!</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Aritmética de array:</strong> <code>*(p + i)</code> é exatamente a mesma coisa que <code>v[i]</code>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Ponteiro sem inicializar:</strong> <code>int *p; *p = 10;</code> é gravíssimo, dá comportamento indefinido (crash).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Modo "w" destrói:</strong> O modo <code>"w"</code> apaga todo o conteúdo velho. Para não perder dados use <code>"a"</code>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Checagem de arquivo:</strong> Sempre <code>if (arq == NULL)</code> (dois sinais de igual ==).</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
