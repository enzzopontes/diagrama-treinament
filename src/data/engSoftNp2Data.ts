import type { Np2Flashcard, Np2SimuladoQuestion } from '../types/np2Training';

// ==========================================
// FLASHCARDS DE FIXAÇÃO: PROVA OFICIAL NP2
// Engenharia de Software Ágil • ADS UNIP
// ==========================================

export const ENG_SOFT_NP2_FLASHCARDS: Np2Flashcard[] = [
  // --- QUESTÃO 1 ---
  {
    id: 1,
    categoria: 'Arquitetura & RNF',
    pergunta: 'Qual característica é um exemplo de Requisito Não Funcional (RNF) que impacta a decisão arquitetural?',
    resposta:
      'Manutenibilidade.\n\nManutenibilidade é um atributo de qualidade de software (RNF) e orienta decisões como componentização, baixo acoplamento e separação de responsabilidades.\n\nPegadinhas da prova descartadas:\n• Visão Lógica e Visão de Processo = visões arquiteturais (Modelo 4+1)\n• MVC = padrão arquitetural\n• Reengenharia = processo de evolução',
    dica: 'Atributo de qualidade = RNF = Manutenibilidade. Visões e padrões não são requisitos!',
  },

  // --- QUESTÃO 2 ---
  {
    id: 2,
    categoria: 'Padrão MVC',
    pergunta: 'No padrão arquitetural MVC, qual componente encapsula a lógica de negócio e o acesso ao banco de dados?',
    resposta:
      'Modelo (Model).\n\nNo MVC:\n• Model: concentra dados, regras de negócio e persistência no banco.\n• View: exibe a interface e apresenta informações ao usuário.\n• Controller: recebe eventos/requisições do usuário e orquestra a comunicação entre Model e View.\n\nCliente e Navegador não fazem parte do padrão MVC.',
    dica: 'Regra de negócio + Banco de dados = SEMPRE o Model!',
  },

  // --- QUESTÃO 3 ---
  {
    id: 3,
    categoria: 'Modelo 4+1 Visões',
    pergunta: 'No modelo 4+1 de Kruchten, qual visão arquitetural é primariamente útil para gerentes de software e líderes técnicos?',
    resposta:
      'Visão de Desenvolvimento (Development / Implementation View).\n\nEla mostra como o sistema é decomposto em subsistemas, módulos, pacotes e componentes físicos para ser construído pela equipe de desenvolvimento.\n\nOutras visões do 4+1:\n• Visão Lógica: abstrações, classes e serviços (foco no usuário/analista)\n• Visão de Processo: concorrência, threads e desempenho em execução (foco em integradores)\n• Visão Física: mapeamento em hardware e servidores (foco em infra/redes)\n• Visão de Cenários (+1): casos de uso que validam todas as visões\n* "Visão de Evolução" NÃO existe no modelo 4+1.',
    dica: 'Organizar trabalho da equipe e módulos de código = Visão de Desenvolvimento.',
  },

  // --- QUESTÃO 4 ---
  {
    id: 4,
    categoria: 'Evolução de Software',
    pergunta: 'Quais são as motivações centrais que justificam a evolução contínua e manutenções em um software?',
    resposta:
      'Correção de bugs, melhoria de desempenho e segurança.\n\nO software precisa evoluir para:\n1. Corrigir falhas e defeitos (manutenção corretiva)\n2. Adaptar-se a novas plataformas/ambientes operacionais (adaptativa)\n3. Aprimorar desempenho, usabilidade e segurança (perfectiva)\n\nCuidado na prova: alternativas com "apenas", "somente" ou restritas a padrões de projeto específicos são pegadinhas.',
    dica: 'Evolução real = bugs, performance e segurança. Desconfie de palavras absolutas (apenas, somente).',
  },

  // --- QUESTÃO 5 ---
  {
    id: 5,
    categoria: 'Verificação e Validação (V&V)',
    pergunta: 'Qual técnica do ciclo de vida é especificamente focada na VALIDAÇÃO do software?',
    resposta:
      'Testes de aceitação do usuário.\n\nRegra de ouro de Boehm:\n• Validação: "Estamos construindo o produto CERTO?" -> valida se atende às reais necessidades e expectativas do cliente/usuário (testes de aceitação).\n• Verificação: "Estamos construindo o produto CORRETAMENTE?" -> checa se o código cumpre as especificações técnicas (revisões de código, inspeções e testes unitários).\n\nRefatoração e engenharia reversa são processos de evolução, não de V&V.',
    dica: 'Validação = Usuário valida se é o produto certo (Aceitação). Verificação = Desenvolvedor confere se está bem feito.',
  },

  // --- QUESTÃO 6 ---
  {
    id: 6,
    categoria: 'Processo de Mudança',
    pergunta: 'Qual é a sequência cronológica correta do processo padrão de implementação de mudanças em software?',
    resposta:
      '1. Mudanças propostas\n2. Análise de requisitos (avaliação de impacto e viabilidade)\n3. Atualização de requisitos\n4. Desenvolvimento de software\n\nLógica do processo: primeiro recebe a proposta, depois estuda o impacto nos requisitos existentes, formaliza a alteração e, por último, codifica a nova versão.',
    dica: 'Mnemônico: Proposta -> Análise -> Atualiza -> Desenvolve. Jamais desenvolve antes de analisar!',
  },

  // --- QUESTÃO 7 ---
  {
    id: 7,
    categoria: 'Manifesto Ágil',
    pergunta: 'Qual dos 4 valores fundamentais do Manifesto Ágil afirma a postura diante do planejamento?',
    resposta:
      'Responder a mudanças mais que seguir um plano.\n\nOs 4 valores oficiais do Manifesto Ágil:\n1. Indivíduos e interações MAIS QUE processos e ferramentas\n2. Software em funcionamento MAIS QUE documentação abrangente\n3. Colaboração com o cliente MAIS QUE negociação de contratos\n4. Responder a mudanças MAIS QUE seguir um plano\n\nPegadinha de prova: as bancas frequentemente invertem a ordem desses pares!',
    dica: 'Ágil prefere responder a mudanças a ficar preso a um cronograma rígido.',
  },

  // --- QUESTÃO 8 ---
  {
    id: 8,
    categoria: 'Sistemas Legados',
    pergunta: 'Qual o principal dilema técnico e estratégico ao lidar com um sistema legado crítico para o negócio?',
    resposta:
      'A falta de documentação dificulta entender as regras de negócio críticas embutidas no código, gerando alto risco de que a modernização ou substituição interrompa a operação da empresa.\n\nCom o passar dos anos e sucessivas manutenções sem documentação, o código vira a única "fonte da verdade". Mexer ou reescrever do zero sem mapear tudo pode quebrar a operação da empresa.',
    dica: 'Dilema do legado = regras vitais enterradas no código + falta de documentação = alto risco de parar a empresa.',
  },

  // --- QUESTÃO 9 ---
  {
    id: 9,
    categoria: 'Scrum & Sprints',
    pergunta: 'No framework Scrum, como funcionam as Sprints no desenvolvimento de software?',
    resposta:
      'São ciclos iterativos onde o código é desenvolvido, testado e refinado progressivamente.\n\nCada Sprint tem duração fixa (time-box, geralmente 1 a 4 semanas) e entrega um incremento funcional pronto (Done). O Scrum acolhe mudanças de requisitos entre as Sprints através da repriorização do Product Backlog.\n\nNão exige documentação engessada prévia nem segue o modelo cascata.',
    dica: 'Sprint = ciclo curto, iterativo e incremental, gerando software funcional testado a cada ciclo.',
  },

  // --- QUESTÃO 10: REFATORAÇÃO ---
  {
    id: 10,
    categoria: 'Refatoração x Reengenharia',
    pergunta: 'O que caracteriza a REFATORAÇÃO e qual o seu escopo e objetivo?',
    resposta:
      '• Escopo: Pequena escala, trechos localizados de código.\n• Quando ocorre: Continuamente, durante todo o ciclo de desenvolvimento.\n• Natureza: Preventiva (evita degradação da arquitetura e "dívida técnica").\n• Comportamento externo: NÃO MUDA! (a funcionalidade permanece idêntica).\n• Exemplos: Renomear variáveis/métodos, extrair funções, eliminar duplicações de código (DRY), reduzir acoplamento.',
    dica: 'Refatoração = contínua, preventiva, no código local, SEM mudar comportamento externo.',
  },

  // --- QUESTÃO 10: REENGENHARIA ---
  {
    id: 11,
    categoria: 'Refatoração x Reengenharia',
    pergunta: 'O que caracteriza a REENGENHARIA e quando ela é aplicada?',
    resposta:
      '• Escopo: Amplo, sistema inteiro ou grandes subsistemas.\n• Quando ocorre: Pontualmente, em sistemas legados após anos de manutenção quando o custo fica insustentável.\n• Natureza: Corretiva / Modernizadora.\n• Comportamento externo: Funcionalidades mantidas, mas a estrutura, arquitetura, modelo de dados e até a linguagem de programação podem mudar.\n• Exemplos: Engenharia reversa, modularização de monolito, migração de COBOL/Delphi para arquitetura moderna, reengenharia de banco de dados.',
    dica: 'Reengenharia = pontual, cara, no sistema legado inteiro, modernização ampla.',
  },

  // --- TABELA RESUMO REFATORAÇÃO VS REENGENHARIA ---
  {
    id: 12,
    categoria: 'Refatoração x Reengenharia',
    pergunta: 'Quais os 5 critérios comparativos entre Refatoração e Reengenharia da prova?',
    resposta:
      '1. Escopo: Refatoração = trechos localizados | Reengenharia = sistema inteiro.\n2. Quando ocorre: Refatoração = contínua (dia a dia) | Reengenharia = pontual (legados).\n3. Natureza: Refatoração = preventiva | Reengenharia = corretiva / modernização.\n4. Comportamento externo: Refatoração = não muda nada | Reengenharia = preserva funções, mas moderniza tecnologia.\n5. Exemplos: Refatoração = extrair método, renomear | Reengenharia = engenharia reversa, tradução de código.',
    dica: 'Refatoração = preventiva/local/código. Reengenharia = corretiva/ampla/legado.',
  },

  // --- GABARITO COMPLETO DA PROVA NP2 ---
  {
    id: 13,
    categoria: 'Gabarito Oficial NP2',
    pergunta: 'Qual é o gabarito das 10 questões da prova NP2 para bater o olho e gabaritar?',
    resposta:
      '1-A (Manutenibilidade)\n2-C (Modelo - Model no MVC)\n3-B (Visão de Desenvolvimento no 4+1)\n4-B (Correção de bugs, desempenho e segurança)\n5-A (Testes de aceitação do usuário = Validação)\n6-A (Proposta -> Análise -> Atualização -> Dev)\n7-C (Responder a mudanças mais que plano)\n8-E (Falta de documentação esconde regras no legado)\n9-B (Ciclos iterativos com código testado e refinado)\n10-Dissertativa (Refatoração preventiva/local vs Reengenharia corretiva/ampla)',
    dica: 'Sequência das objetivas: A, C, B, B, A, A, C, E, B.',
  },
];

// ==========================================
// SIMULADO OFICIAL: PROVA COMPLETA NP2
// 10 Questões Reais com Enunciados e Gabarito
// ==========================================

export const ENG_SOFT_NP2_SIMULADO_QUESTIONS: Np2SimuladoQuestion[] = [
  {
    id: 1,
    questionNumber: 1,
    title: 'RNF e Decisões Arquiteturais',
    category: 'Arquitetura de Software',
    enunciado:
      'A escolha da arquitetura de um sistema é fortemente influenciada por requisitos não funcionais. Qual das seguintes características é um exemplo de RNF que impacta essa decisão?',
    options: [
      { id: 'a', text: 'Manutenibilidade.' },
      { id: 'b', text: 'Visão Lógica.' },
      { id: 'c', text: 'Padrão MVC.' },
      { id: 'd', text: 'Reengenharia.' },
      { id: 'e', text: 'Visão de Processo.' },
    ],
    correctAnswer: 'a',
    explanation:
      'Manutenibilidade é um atributo de qualidade, portanto um requisito não funcional, e influencia diretamente a forma de organizar a arquitetura (componentes pequenos, baixo acoplamento, separação de responsabilidades). Visão Lógica e Visão de Processo são visões arquiteturais, MVC é um padrão arquitetural e Reengenharia é um processo de evolução: nenhum deles é requisito.',
    decorebaRapida: 'RNF = Atributo de qualidade = Manutenibilidade. Visões e padrões não são requisitos!',
  },
  {
    id: 2,
    questionNumber: 2,
    title: 'Componentes do Padrão MVC',
    category: 'Padrões Arquiteturais',
    enunciado:
      'No padrão de arquitetura Modelo-Visão-Controlador (MVC), qual componente é fundamentalmente responsável por encapsular a lógica de negócio e o acesso ao banco de dados?',
    options: [
      { id: 'a', text: 'Visão (View).' },
      { id: 'b', text: 'Controlador (Controller).' },
      { id: 'c', text: 'Modelo (Model).' },
      { id: 'd', text: 'Cliente (Client).' },
      { id: 'e', text: 'Navegador (Navigator).' },
    ],
    correctAnswer: 'c',
    explanation:
      'No MVC, o Modelo concentra os dados, as regras de negócio e o acesso ao banco. A Visão apresenta as informações ao usuário e o Controlador recebe as interações e coordena Modelo e Visão. Cliente e Navegador não são componentes do padrão.',
    decorebaRapida: 'Regra de negócio + Banco de dados = MODEL. View mostra, Controller media.',
  },
  {
    id: 3,
    questionNumber: 3,
    title: 'Visões Arquiteturais (Modelo 4+1)',
    category: 'Documentação de Arquitetura',
    enunciado:
      'Na documentação de arquitetura de software, diferentes visões são usadas para descrever o sistema a diferentes públicos. Qual visão é primariamente útil para gerentes e líderes técnicos?',
    options: [
      { id: 'a', text: 'Visão Lógica.' },
      { id: 'b', text: 'Visão de Desenvolvimento.' },
      { id: 'c', text: 'Visão de Processo.' },
      { id: 'd', text: 'Visão Física.' },
      { id: 'e', text: 'Visão de Evolução.' },
    ],
    correctAnswer: 'b',
    explanation:
      'A Visão de Desenvolvimento mostra como o software é decomposto em módulos e componentes para ser construído, sendo útil para gerentes de software e líderes técnicos organizarem o trabalho da equipe. A Visão Lógica apresenta as abstrações principais do sistema; a de Processo trata da execução e interação em tempo de execução; a Física mostra a distribuição em hardware e interessa aos engenheiros de sistemas. Visão de Evolução não faz parte do modelo 4+1.',
    decorebaRapida: 'Gerentes e líderes de equipe usam a Visão de Desenvolvimento para dividir o trabalho.',
  },
  {
    id: 4,
    questionNumber: 4,
    title: 'Motivações da Evolução de Software',
    category: 'Evolução de Software',
    enunciado:
      'A evolução contínua de software é crucial para que um sistema se mantenha útil e relevante. Quais das seguintes razões são motivações centrais para justificar atualizações constantes?',
    options: [
      { id: 'a', text: 'Apenas para implementar a arquitetura em camadas.' },
      { id: 'b', text: 'Correção de bugs, melhoria de desempenho e segurança.' },
      { id: 'c', text: 'Somente para realizar a tradução de código-fonte.' },
      { id: 'd', text: 'Para aplicar os padrões Factory, Singleton e Observer.' },
      { id: 'e', text: 'Para eliminar a Visão Física do projeto.' },
    ],
    correctAnswer: 'b',
    explanation:
      'O software evolui para corrigir defeitos, adaptar-se a novos ambientes e melhorar atributos como desempenho e segurança. As demais alternativas são restritivas ("apenas", "somente") ou citam técnicas e padrões que não são, por si sós, motivações para evoluir o sistema.',
    decorebaRapida: 'Motivação de evolução = bugs, desempenho e segurança. Fuja de alternativas com "apenas".',
  },
  {
    id: 5,
    questionNumber: 5,
    title: 'Verificação vs Validação (V&V)',
    category: 'Qualidade de Software',
    enunciado:
      'No ciclo de vida do software, "Verificação" difere de "Validação". Qual técnica é especificamente focada na Validação do sistema?',
    options: [
      { id: 'a', text: 'Testes de aceitação do usuário.' },
      { id: 'b', text: 'Revisões e inspeções de código.' },
      { id: 'c', text: 'Testes de unidade e testes funcionais.' },
      { id: 'd', text: 'Refatoração de sistemas.' },
      { id: 'e', text: 'Engenharia reversa.' },
    ],
    correctAnswer: 'a',
    explanation:
      'Validação responde "estamos construindo o produto certo?", ou seja, se o sistema atende às necessidades reais do cliente, o que é confirmado nos testes de aceitação. Verificação responde "estamos construindo o produto corretamente?", com técnicas como revisões, inspeções e testes de unidade. Refatoração e engenharia reversa são atividades de evolução, não de V&V.',
    decorebaRapida: 'Validação = produto certo = testes de aceitação do usuário. Teste unitário é verificação.',
  },
  {
    id: 6,
    questionNumber: 6,
    title: 'Processo de Mudança de Software',
    category: 'Evolução de Software',
    enunciado:
      'Qual das alternativas apresenta a sequência correta de um processo padrão de implementação de mudança em um software?',
    options: [
      {
        id: 'a',
        text: 'Mudanças propostas → Análise de requisitos → Atualização de requisitos → Desenvolvimento de software.',
      },
      {
        id: 'b',
        text: 'Análise de requisitos → Atualização de requisitos → Mudanças propostas → Desenvolvimento de software.',
      },
      {
        id: 'c',
        text: 'Desenvolvimento de software → Análise de requisitos → Mudanças propostas.',
      },
      {
        id: 'd',
        text: 'Mudanças propostas → Desenvolvimento de software → Análise de requisitos.',
      },
      {
        id: 'e',
        text: 'Novo sistema → Propostas de mudança → Análise de requisitos.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'O processo parte das mudanças propostas, que são analisadas para identificar seu impacto nos requisitos; em seguida os requisitos são atualizados e, só então, ocorre o desenvolvimento da nova versão. Desenvolver antes de analisar (C e D) ou analisar antes de existir uma proposta (B) inverte a lógica do processo.',
    decorebaRapida: 'Proposta → Análise → Atualização de requisitos → Desenvolvimento.',
  },
  {
    id: 7,
    questionNumber: 7,
    title: 'Valores do Manifesto Ágil',
    category: 'Métodos Ágeis',
    enunciado:
      'O Manifesto Ágil estabeleceu quatro valores fundamentais para orientar a criação de software. Assinale a correta:',
    options: [
      { id: 'a', text: 'Processos e ferramentas mais que indivíduos e interações.' },
      { id: 'b', text: 'Documentação abrangente mais que software em funcionamento.' },
      { id: 'c', text: 'Responder a mudanças mais que seguir um plano.' },
      { id: 'd', text: 'Negociação de contratos mais que colaboração com o cliente.' },
      { id: 'e', text: 'Execução sequencial das fases sem retorno mais que ciclos iterativos.' },
    ],
    correctAnswer: 'c',
    explanation:
      'Os quatro valores são: indivíduos e interações mais que processos e ferramentas; software em funcionamento mais que documentação abrangente; colaboração com o cliente mais que negociação de contratos; responder a mudanças mais que seguir um plano. As alternativas A, B e D estão invertidas, e a E descreve o modelo cascata, que não faz parte do manifesto.',
    decorebaRapida: 'Ágil: valoriza responder a mudanças acima de seguir um plano rígido.',
  },
  {
    id: 8,
    questionNumber: 8,
    title: 'Sistemas Legados e Regras de Negócio',
    category: 'Sistemas Legados',
    enunciado:
      'Uma empresa precisa decidir o futuro do seu sistema legado de faturamento, que, apesar de obsoleto, lento e sem integração com novas soluções, é vital para o negócio. Qual alternativa descreve o principal dilema técnico e estratégico ao analisar esse sistema?',
    options: [
      { id: 'a', text: 'O custo de treinar desenvolvedores na linguagem antiga supera o de novas licenças.' },
      { id: 'b', text: 'A impossibilidade técnica de criar APIs para o sistema legado força sua substituição imediata.' },
      { id: 'c', text: 'A resistência dos usuários em migrar da interface antiga para a nova invalida o projeto.' },
      { id: 'd', text: 'A incapacidade de virtualizar o sistema exige a compra contínua de hardware antigo.' },
      {
        id: 'e',
        text: 'A falta de documentação dificulta entender as regras de negócio críticas embutidas no código, gerando alto risco de que a modernização ou substituição interrompa a operação da empresa.',
      },
    ],
    correctAnswer: 'e',
    explanation:
      'Em sistemas legados, as regras de negócio costumam estar embutidas no código e pouco documentadas. Como o sistema é vital, qualquer substituição ou modernização mal compreendida pode parar a operação. As demais alternativas usam afirmações absolutas ("impossibilidade", "invalida", "exige") que não representam o dilema central.',
    decorebaRapida: 'Risco principal do legado: regras críticas embutidas no código sem documentação.',
  },
  {
    id: 9,
    questionNumber: 9,
    title: 'Scrum: Sprints e Ciclos Iterativos',
    category: 'Framework Scrum',
    enunciado:
      'No Scrum, os projetos são divididos em ciclos curtos e repetidos chamados Sprints. Sobre as Sprints, assinale a correta:',
    options: [
      { id: 'a', text: 'Exigem documentação completa antes da codificação.' },
      { id: 'b', text: 'São ciclos iterativos onde o código é desenvolvido, testado e refinado progressivamente.' },
      { id: 'c', text: 'Impedem alterações de requisitos durante o projeto.' },
      { id: 'd', text: 'Seguem o modelo em cascata, sem retorno às etapas anteriores.' },
      { id: 'e', text: 'Priorizam documentos extensos em vez de software executável.' },
    ],
    correctAnswer: 'b',
    explanation:
      'Cada Sprint entrega um incremento de software funcional, desenvolvido, testado e refinado a cada ciclo. O Scrum aceita mudanças de requisitos entre as Sprints (via Product Backlog) e valoriza software executável. As alternativas A, C, D e E descrevem características do modelo cascata.',
    decorebaRapida: 'Sprints = ciclos iterativos com código desenvolvido, testado e refinado progressivamente.',
  },
  {
    id: 10,
    questionNumber: 10,
    title: 'Evolução: Refatoração x Reengenharia',
    category: 'Evolução de Software',
    enunciado:
      'Embora Reengenharia e Refatoração sejam conceitos ligados à evolução de software, eles têm escopos diferentes. Qual alternativa resume com precisão a distinção entre esses dois conceitos (Questão 10 dissertativa da prova)?',
    options: [
      {
        id: 'a',
        text: 'A refatoração é preventiva, contínua e restrita a trechos de código sem alterar o comportamento externo; a reengenharia é corretiva/modernizadora, pontual e abrange o sistema inteiro (geralmente legado).',
      },
      {
        id: 'b',
        text: 'A refatoração altera o comportamento externo para criar novas funcionalidades; a reengenharia apenas limpa comentários e renomeia variáveis.',
      },
      {
        id: 'c',
        text: 'A refatoração só pode ser aplicada uma única vez ao final da vida útil do sistema; a reengenharia é executada a cada commit diário.',
      },
      {
        id: 'd',
        text: 'A refatoração exige reescrever o banco de dados e trocar de servidor; a reengenharia ocorre apenas na camada de apresentação.',
      },
      {
        id: 'e',
        text: 'Ambos os conceitos possuem idênticos escopos e impactos, diferindo unicamente pelo fato de a refatoração ser exclusiva do modelo em cascata.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'Síntese da resposta dissertativa da Questão 10:\n\n• Refatoração: Processo contínuo e de pequena escala, realizado durante todo o desenvolvimento. Melhora a estrutura interna do código (eliminar duplicações, simplificar métodos, melhorar nomes, reduzir acoplamento) SEM alterar o comportamento externo. Tem caráter PREVENTIVO.\n\n• Reengenharia: Processo de escopo maior, aplicado a sistemas legados após anos de manutenção quando o custo se torna insustentável. Envolve reestruturar e redocumentar o sistema como um todo (pode incluir engenharia reversa, tradução de código para nova linguagem, modularização e reengenharia de dados). Tem caráter CORRETIVO / MODERNIZADOR.\n\nCritérios da prova:\n• Escopo: Refatoração = trechos localizados | Reengenharia = sistema inteiro\n• Quando ocorre: Refatoração = contínuo no dev | Reengenharia = pontual em legados\n• Natureza: Refatoração = preventiva | Reengenharia = corretiva / modernização\n• Comportamento externo: Refatoração = não muda | Reengenharia = funções mantidas, dados e linguagens podem mudar',
    decorebaRapida: 'Refatoração = preventiva, contínua e código local. Reengenharia = corretiva, pontual e sistema inteiro.',
  },
];
