import type { SubjectItem } from '../types/navigation';

export const DEFAULT_SUBJECTS: SubjectItem[] = [
  // ==========================================
  // DISCIPLINAS NP2 (2º BIMESTRE ATUAL - AULAS OUT/NOV 2026)
  // ==========================================
  {
    id: 'banco-de-dados-np2',
    title: 'Banco de Dados: Prova Oficial de Consultas SQL',
    code: 'BD-201',
    semester: 'NP2',
    category: 'SQL Server & Modelo Relacional',
    description:
      'Prova Oficial completa: Modelo Lógico (PAIS ➔ UF ➔ CIDADE ➔ PESSOA ➔ PEDIDO ➔ ITEM_PEDIDO ➔ PRODUTO), Junção implícita de tabelas, Filtros de data (MONTH/YEAR), ORDER BY duplo (DESC/ASC) e LIKE com ordem de cláusulas.',
    status: 'available',
    accentColor: 'text-blue-400',
    gradient: 'from-blue-600/10 via-slate-900 to-cyan-900/10',
    borderHover: 'hover:border-blue-500/50',
    iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    tagColor: 'text-blue-400 bg-blue-950/60 border-blue-800/40',
    badgeColor: 'bg-blue-950 text-blue-400 border-blue-800/60',
    modulesCount: 4,
    stats: {
      flashcards: 13,
      questions: 10,
      topics: 5,
      exercises: 11,
    },
    modules: [
      {
        id: 'resumo',
        title: 'Resumo Teórico & Gabarito Comentado SQL',
        tag: 'Prova Real • Gabarito 1-B, 2-D, 3-A, 4-D',
        badge: 'Gabarito Oficial',
        description:
          'Gabarito completo comentado das questões da prova oficial, análise detalhada das alternativas incorretas, modelo de dados e caminhos de chaves.',
        available: true,
      },
      {
        id: 'flashcards',
        title: 'Flashcards da Prova Oficial SQL',
        tag: '13 Cards • Questões, Junções & Macetes',
        badge: 'Memorização Ágil',
        description:
          'Memorize as consultas da prova oficial, caminhos de FKs, operadores de data, pegadinhas de produto cartesiano e sintaxe do ORDER BY.',
        available: true,
      },
      {
        id: 'simulado',
        title: 'Simulado Oficial da Prova SQL (10 Questões)',
        tag: 'Questões Reais da Prova • Gabarito Imediato',
        badge: 'Simulado Oficial',
        description:
          'Resolva as questões reais da prova de SQL com código T-SQL real, feedback imediato e decoreba rápida para gabaritar a avaliação.',
        available: true,
      },
      {
        id: 'diagramas',
        title: 'Laboratório Prático SQL (Banco Simulado)',
        tag: '11 Desafios + Modo Livre',
        badge: 'Treino Interativo',
        description:
          'Execute consultas reais no banco simulado (PAIS, CIDADE, PESSOA, PRODUTO), verifique se está correto e inspecione tabelas.',
        available: true,
      },
    ],
  },
  {
    id: 'programacao-em-c-np2',
    title: 'Programação em C: Simulado Oficial NP2',
    code: 'PC-201',
    semester: 'NP2',
    category: 'Linguagem C & Memória',
    description:
      'Simulado oficial de 20 questões: Matrizes (Q1-Q6), Ponteiros (Q7-Q13) e Manipulação de Arquivos (Q14-Q20) com macetes mentais para a prova.',
    status: 'available',
    accentColor: 'text-sky-400',
    gradient: 'from-sky-600/10 via-slate-900 to-indigo-900/10',
    borderHover: 'hover:border-sky-500/50',
    iconBg: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
    tagColor: 'text-sky-400 bg-sky-950/60 border-sky-800/40',
    badgeColor: 'bg-sky-950 text-sky-400 border-sky-800/60',
    modulesCount: 3,
    stats: {
      flashcards: 20,
      questions: 20,
      topics: 3,
      exercises: 20,
    },
    modules: [
      {
        id: 'resumo',
        title: 'Resumo Teórico Oficial do Simulado',
        tag: 'Guia Completo • 20 Questões',
        badge: 'Regras & Macetes',
        description:
          'Explicação linha a linha de Matrizes, Ponteiros e Manipulação de Arquivos com os 10 mandamentos para gabaritar a prova de alternativas.',
        available: true,
      },
      {
        id: 'flashcards',
        title: 'Flashcards de Fixação Rápida',
        tag: '20 Cards • Prova Objetiva',
        badge: 'Memorização Ágil',
        description:
          'Cards de fixação cobrindo cada pegadinha das 20 questões do simulado: & vs *, modos fopen, diagonal principal e retorno de fscanf.',
        available: true,
      },
      {
        id: 'simulado',
        title: 'Simulado Oficial NP2 (20 Questões)',
        tag: '20 Questões • Alternativas A a E',
        badge: 'Gabarito & Feedback',
        description:
          'Treine diretamente no teste de mesa com feedback imediato ou modo exame com as 20 questões idênticas ao simulado da UNIP.',
        available: true,
      },
    ],
  },
  {
    id: 'redes-sistemas-distribuidos-np2',
    title: 'Redes: Sub-redes IPv4 & Cabeçalho',
    code: 'RSD-202',
    semester: 'NP2',
    category: 'Infraestrutura & Redes',
    description:
      'Cálculo de sub-redes com máscara /22 (255.255.252.0), hosts válidos e broadcast. Anatomia campo a campo do cabeçalho IPv4 (20-60B, TTL com tracert, Protocol).',
    status: 'available',
    accentColor: 'text-cyan-400',
    gradient: 'from-cyan-600/10 via-slate-900 to-blue-900/10',
    borderHover: 'hover:border-cyan-500/50',
    iconBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    tagColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40',
    badgeColor: 'bg-cyan-950 text-cyan-400 border-cyan-800/60',
    modulesCount: 3,
    stats: {
      flashcards: 11,
      questions: 10,
      topics: 4,
      exercises: 4,
    },
    modules: [
      {
        id: 'resumo',
        title: 'Resumo Teórico NP2 + Calculadora /22',
        tag: 'Lousas 19/10, 29/10, 03/11',
        badge: 'Teoria + Prática',
        description:
          'Cálculo detalhado de sub-redes /22 com salto no 3º octeto e análise de todos os campos do cabeçalho IPv4.',
        available: true,
      },
      {
        id: 'flashcards',
        title: 'Flashcards de Redes: /22 & Pacote IPv4',
        tag: '11 Cards • Sub-redes & Datagrama',
        badge: 'Memorização Ágil',
        description:
          'Memorize máscaras de sub-rede, saltos, broadcast, cálculo de hosts úteis, HLEN, Total Length, TTL e Flags.',
        available: true,
      },
      {
        id: 'simulado',
        title: 'Simulado de Redes: Sub-redes e Protocolos',
        tag: '10 Questões • Prova Prof. Fábio',
        badge: 'Avaliação & Gabarito',
        description:
          'Cálculos práticos de faixas de IP /22, identificação de campos do cabeçalho IPv4 e lógica de roteamento.',
        available: true,
      },
    ],
  },
  {
    id: 'eng-software-np2',
    title: 'Engenharia de Software Ágil: Prova Oficial NP2',
    code: 'ES-202',
    semester: 'NP2',
    category: 'Engenharia de Software Ágil',
    description:
      'Prova Oficial completa com 10 questões: RNF (Manutenibilidade), MVC (Model), Visões 4+1 (Desenvolvimento), Evolução, V&V (Aceitação), Processo de Mudança, Manifesto Ágil, Sistemas Legados e Refatoração vs Reengenharia.',
    status: 'available',
    accentColor: 'text-emerald-400',
    gradient: 'from-emerald-600/10 via-slate-900 to-teal-900/10',
    borderHover: 'hover:border-emerald-500/50',
    iconBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
    tagColor: 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40',
    badgeColor: 'bg-emerald-950 text-emerald-400 border-emerald-800/60',
    modulesCount: 3,
    stats: {
      flashcards: 13,
      questions: 10,
      topics: 5,
    },
    modules: [
      {
        id: 'resumo',
        title: 'Resumo Teórico & Gabarito Comentado NP2',
        tag: 'Prova Real • 10 Questões + Macetes',
        badge: 'Gabarito Oficial',
        description:
          'Gabarito completo comentado das 10 questões da prova, tabela comparativa Refatoração vs Reengenharia, gatilhos de decoreba e Modelo 4+1.',
        available: true,
      },
      {
        id: 'flashcards',
        title: 'Flashcards de Fixação da Prova NP2',
        tag: '13 Cards • Questões, Respostas & Macetes',
        badge: 'Memorização Ágil',
        description:
          'Memorize as respostas exatas da prova com gatilhos mentais para cada questão: RNF, MVC, Visão de Dev, V&V, Scrum e Legados.',
        available: true,
      },
      {
        id: 'simulado',
        title: 'Simulado Oficial da Prova NP2 (10 Questões)',
        tag: '10 Questões Reais • Gabarito Oficial',
        badge: 'Simulado Idêntico',
        description:
          'Resolva a prova oficial questão por questão com feedback imediato, justificativas detalhadas do professor e decoreba rápida.',
        available: true,
      },
    ],
  },
  {
    id: 'pesquisa-ti',
    title: 'Pesquisa, Tecnologia e Informação',
    code: 'PTI-101',
    semester: 'NP2',
    category: 'Metodologia & Pesquisa',
    description:
      'Pasta vazia no Google Drive da turma até o momento. Aguardando disponibilização de materiais pelo professor.',
    status: 'upcoming',
    accentColor: 'text-purple-400',
    gradient: 'from-purple-600/10 via-slate-900 to-indigo-900/10',
    borderHover: 'hover:border-purple-500/50',
    iconBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
    tagColor: 'text-purple-400 bg-purple-950/60 border-purple-800/40',
    badgeColor: 'bg-purple-950 text-purple-400 border-purple-800/60',
    modulesCount: 0,
    stats: {},
    modules: [],
  },

  // ==========================================
  // DISCIPLINAS NP1 (1º BIMESTRE - CONTEÚDO ANTERIOR PRESERVADO)
  // ==========================================
  {
    id: 'banco-de-dados',
    title: 'Banco de Dados & NoSQL (B1/NP1)',
    code: 'BD-101',
    semester: 'NP1',
    category: 'Modelagem Conceitual',
    description:
      'Modelagem relacional (DER e brModelo), NoSQL (Key-Value, Documentos, Colunas, Grafos), cardinalidades e pegadinhas da prova.',
    status: 'available',
    accentColor: 'text-blue-400',
    gradient: 'from-blue-600/10 via-slate-900 to-cyan-900/10',
    borderHover: 'hover:border-blue-500/50',
    iconBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
    tagColor: 'text-blue-400 bg-blue-950/60 border-blue-800/40',
    badgeColor: 'bg-blue-950 text-blue-400 border-blue-800/60',
    modulesCount: 4,
    stats: {
      flashcards: 43,
      questions: 7,
      topics: 7,
      exercises: 52,
    },
    modules: [
      {
        id: 'resumo',
        title: 'Resumo Teórico B1',
        tag: '7 Tópicos Essenciais',
        badge: 'Teoria Direta',
        description:
          'Relacional vs NoSQL, DER e níveis (conceitual, lógico, físico), tipos de atributos e cardinalidades da prova.',
        available: true,
      },
      {
        id: 'simulado',
        title: 'Simulado Oficial B1',
        tag: '7 Questões • Vale 10,0',
        badge: 'Simulação de Prova',
        description:
          'Enunciados e alternativas originais, navegação 1 a 1, diagramas SVG redesenhados e correção detalhada no final.',
        available: true,
      },
      {
        id: 'flashcards',
        title: 'Flashcards de Fixação B1',
        tag: '43 Cartas • 7 Variedades',
        badge: 'Repetição Ativa',
        description:
          '43 flashcards divididos em 7 variedades: Questões da Prova, Relacional vs NoSQL, Atributos & Chaves, Cardinalidades, Transformação Lógica, Pegadinhas e NoSQL na Prática.',
        available: true,
      },
      {
        id: 'diagramas',
        title: 'Treino de Diagramas (brModelo)',
        tag: '52 Exercícios Práticos',
        badge: 'Modelagem Interativa',
        description:
          'Canvas interativo com peças estilo brModelo para montar e conectar entidades, atributos e relacionamentos.',
        available: true,
      },
    ],
  },
  {
    id: 'redes-sistemas-distribuidos',
    title: 'Redes e Sistemas Distribuídos (B1/NP1)',
    code: 'RSD-201',
    semester: 'NP1',
    category: 'Modelos OSI e TCP/IP',
    description:
      'Modelo OSI (7 camadas), TCP/IP (5 camadas), dispositivos intermediários vs hosts, LAN/WAN/Intranet, cálculo de IPv4 com máscara (/16), IPs privados (RFC 1918) e pegadinhas do Prof. Fábio.',
    status: 'available',
    accentColor: 'text-cyan-400',
    gradient: 'from-cyan-600/10 via-slate-900 to-blue-900/10',
    borderHover: 'hover:border-cyan-500/50',
    iconBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    tagColor: 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40',
    badgeColor: 'bg-cyan-950 text-cyan-400 border-cyan-800/60',
    modulesCount: 4,
    stats: {
      flashcards: 34,
      questions: 10,
      topics: 8,
      exercises: 10,
    },
    modules: [
      {
        id: 'flashcards',
        title: 'Flashcards de Fixação B1',
        tag: '34 Cartas • 7 Variedades',
        badge: 'Repetição Ativa',
        description:
          '34 flashcards divididos em: Camadas OSI, TCP/IP & PDUs, Dispositivos de Rede, Tipos de Rede, IPv4 & Máscaras, IPs Privados & Pegadinhas e Cola Rápida.',
        available: true,
      },
      {
        id: 'simulado',
        title: 'Simulado Oficial B1',
        tag: '10 Questões • Prova do Fábio',
        badge: 'Simulação de Prova',
        description:
          'As 10 questões da prova com gabarito oficial comentado (D, D, C, A, C, B, A, B, D, A) e explicações das pegadinhas de IP.',
        available: true,
      },
      {
        id: 'resumo',
        title: 'Resumo Teórico B1',
        tag: '8 Tópicos + Cola Rápida',
        badge: 'Teoria Direta',
        description:
          'Tabela comparativa OSI vs TCP/IP, dispositivos intermediários, cálculo de máscara (255 copia, 0 zera) e faixas privadas da RFC 1918.',
        available: true,
      },
      {
        id: 'diagramas',
        title: 'Laboratório Interativo & Calculadora IP',
        tag: 'Calculadora + Simulador',
        badge: 'Prática Interativa',
        description:
          'Calculadora visual de rede com máscara (/16, /24), identificador RFC 1918 (Privado vs Público) e inspetor visual das 7 camadas.',
        available: true,
      },
    ],
  },
  {
    id: 'programacao-em-c',
    title: 'Programação em C (B1/NP1)',
    code: 'PC-101',
    semester: 'NP1',
    category: 'Linguagem C & Algoritmos',
    description:
      'Declaração de tipos, operador resto (%), operadores relacionais e lógicos, if/else, switch-case (break e fall-through), laços (while, do-while, for), vetores e matrizes bidimensionais com foco na prova.',
    status: 'available',
    accentColor: 'text-sky-400',
    gradient: 'from-sky-600/10 via-slate-900 to-indigo-900/10',
    borderHover: 'hover:border-sky-500/50',
    iconBg: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
    tagColor: 'text-sky-400 bg-sky-950/60 border-sky-800/40',
    badgeColor: 'bg-sky-950 text-sky-400 border-sky-800/60',
    modulesCount: 4,
    stats: {
      flashcards: 23,
      questions: 10,
      topics: 10,
      exercises: 2,
    },
    modules: [
      {
        id: 'resumo',
        title: 'Resumo Teórico B1',
        tag: '10 Questões da Prova',
        badge: 'Teoria Direta',
        description:
          'Gabarito rápido (Q1 a Q8), o que cada questão cobra, decorebas rápidas e códigos completos explicados linha a linha.',
        available: true,
      },
      {
        id: 'simulado',
        title: 'Simulado Oficial B1',
        tag: '10 Questões • Vale 10,0',
        badge: 'Simulação de Prova',
        description:
          '8 questões de múltipla escolha com gabarito imediato e 2 questões discursivas de código com critérios de correção da prova.',
        available: true,
      },
      {
        id: 'flashcards',
        title: 'Flashcards de Fixação B1',
        tag: '23 Cartas • 7 Variedades',
        badge: 'Repetição Ativa',
        description:
          'Fixação ágil de declaração de variáveis, operador %, operadores lógicos, estruturas condicionais, laços, vetores e pegadinhas da prova.',
        available: true,
      },
      {
        id: 'diagramas',
        title: 'Laboratório & Treino de Código C',
        tag: 'Teclado Mobile + Terminal',
        badge: 'Prática de Código',
        description:
          'Sistema para treinar as 2 questões discursivas (Vetor e Matriz 3x3), com teclado móvel de atalhos {}, (), [], &, verificador de critérios e terminal GCC de execução.',
        available: true,
      },
    ],
  },
];
