import type { Np2Flashcard, Np2SimuladoQuestion } from '../types/np2Training';

export const ENG_SOFT_NP2_FLASHCARDS: Np2Flashcard[] = [
  // --- DIAGRAMA DE SEQUÊNCIA ---
  {
    id: 1,
    categoria: 'Diagrama de Sequência',
    pergunta: 'O que representa a Linha de Vida (Lifeline) em um Diagrama de Sequência UML?',
    resposta:
      'Representa a existência e a passagem do tempo para um objeto ou ator participante da interação, desenhada como uma linha vertical tracejada que desce a partir do elemento.',
    dica: 'O tempo flui de cima para baixo no diagrama de sequência.',
  },
  {
    id: 2,
    categoria: 'Diagrama de Sequência',
    pergunta: 'O que indica a barra retangular vertical sobre a linha de vida (Foco de Controle / Ativação)?',
    resposta:
      'Indica o período durante o qual o objeto está executando uma ação ou processamento ativo (diretamente ou aguardando o retorno de uma chamada delegada).',
    dica: 'Retângulo estreito na linha tracejada = objeto trabalhando.',
  },
  {
    id: 3,
    categoria: 'Diagrama de Sequência',
    pergunta: 'Para que serve o fragmento combinado ALT em um Diagrama de Sequência?',
    resposta:
      'Representa ramificações alternativas exclusivas (equivalente ao IF-THEN-ELSE na programação). Apenas uma das seções divididas por linha tracejada será executada dependendo da guarda [condição].',
    dica: 'ALT = if/else (exclusivo). OPT = if simples (sem else).',
  },
  {
    id: 4,
    categoria: 'Diagrama de Sequência',
    pergunta: 'Qual a diferença gráfica entre mensagem síncrona e mensagem assíncrona?',
    resposta:
      'Mensagem síncrona: seta com ponta preenchida sólida (->) — o remetente bloqueia e aguarda resposta.\nMensagem assíncrona: seta com ponta aberta (->>) — o remetente prossegue sem esperar retorno.',
    dica: 'Ponta cheia = espera resposta. Ponta aberta = assíncrono.',
  },

  // --- DIAGRAMA DE CLASSES ---
  {
    id: 5,
    categoria: 'Diagrama de Classes',
    pergunta: 'O que significam os símbolos de visibilidade +, -, # e ~ na UML?',
    resposta:
      '+ indica Público (Public) — acessível por qualquer classe.\n- indica Privado (Private) — acessível apenas pela própria classe.\n# indica Protegido (Protected) — acessível pela classe e suas subclasses (herança).\n~ indica Pacote (Package/Default).',
    dica: 'Regra de ouro: + público, - privado, # protegido.',
  },
  {
    id: 6,
    categoria: 'Diagrama de Classes',
    pergunta: 'Qual a diferença conceitual e gráfica entre Agregação e Composição?',
    resposta:
      'Agregação (losango branco/oco): relação "todo-parte" fraca; a parte pode existir independentemente do todo (ex: Time e Jogador).\nComposição (losango preto/preenchido): relação "todo-parte" forte; a parte depende da existência do todo e é destruída junto com ele (ex: Pedido e ItemPedido).',
    dica: 'Losango preto = relação de vida e morte (se o todo morre, as partes morrem).',
  },
  {
    id: 7,
    categoria: 'Diagrama de Classes',
    pergunta: 'O que indica a multiplicidade "1..*" ao lado de uma classe na associação?',
    resposta:
      'Indica que deve haver no mínimo 1 e no máximo infinitos (muitos) objetos associados naquela ponta da relação.',
    dica: 'Ex: um Pedido deve ter pelo menos 1 item e pode ter vários (1..*).',
  },

  // --- MODELO 4+1 VISÕES DE KRUCHTEN ---
  {
    id: 8,
    categoria: 'Modelo 4+1 Visões',
    pergunta: 'Quais são as 5 visões do modelo arquitetural 4+1 de Philippe Kruchten?',
    resposta:
      '1. Visão Lógica (classes e serviços para analistas)\n2. Visão de Processos (concorrência e desempenho para integradores)\n3. Visão de Desenvolvimento/Implementação (módulos e código para devs)\n4. Visão Física/Implantação (servidores e nós para infra)\n+1. Visão de Cenários / Casos de Uso (orquestra e valida todas as outras quatro).',
    dica: 'O "+1" central são os Casos de Uso que validam as demais visões.',
  },
  {
    id: 9,
    categoria: 'Modelo 4+1 Visões',
    pergunta: 'Qual o papel da visão central (Cenários/Casos de Uso) no modelo 4+1?',
    resposta:
      'Serve de elo integrador. Demonstra como os elementos das outras quatro visões colaboram harmoniosamente para atender às necessidades reais dos usuários.',
    dica: 'Casos de uso unem devs, analistas e administradores do sistema.',
  },

  // --- PADRÕES ARQUITETURAIS: MVC & CAMADAS ---
  {
    id: 10,
    categoria: 'Padrões Arquiteturais',
    pergunta: 'Quais as responsabilidades de Model, View e Controller no padrão MVC?',
    resposta:
      '- Model: Regras de negócio, manipulação de dados e lógica interna.\n- View: Interface gráfica exibida ao usuário final.\n- Controller: Intermediário que recebe as requisições da View, aciona o Model correspondente e decide qual View atualizar.',
    dica: 'A View nunca altera o banco diretamente; ela fala com o Controller.',
  },
  {
    id: 11,
    categoria: 'Padrões Arquiteturais',
    pergunta: 'Qual a principal diferença entre arquitetura em Camadas (Monolito) e Microsserviços?',
    resposta:
      'Camadas (N-Tier): todos os módulos rodam no mesmo processo e compartilham a mesma base de código/banco de dados.\nMicrosserviços: o sistema é dividido em pequenos serviços autônomos, implantados de forma independente e comunicando-se por rede (HTTP/REST ou filas).',
    dica: 'Lousa do professor: microsserviços oferecem escalabilidade independente, mas trazem maior complexidade de rede.',
  },
  {
    id: 12,
    categoria: 'Requisitos de Software',
    pergunta: 'O que diferencia um Requisito Funcional (RF) de um Requisito Não Funcional (RNF)?',
    resposta:
      'RF descreve O QUE o sistema deve fazer (ações, funcionalidades, regras de cálculo, emissão de relatórios).\nRNF descreve COMO o sistema deve se comportar (qualidades globais: tempo de resposta, segurança, criptografia, disponibilidade, usabilidade).',
    dica: 'RF = funcionalidade. RNF = critério de qualidade ou restrição.',
  },
];

export const ENG_SOFT_NP2_SIMULADO_QUESTIONS: Np2SimuladoQuestion[] = [
  {
    id: 1,
    questionNumber: 1,
    title: 'Fragmento Combinado ALT',
    category: 'Diagrama de Sequência',
    enunciado:
      'Em um Diagrama de Sequência UML que modela a finalização de uma compra, o analista deseja representar que se o saldo for suficiente o pagamento é aprovado, senão exibe mensagem de recusa. Qual operador de fragmento combinado deve ser utilizado?',
    options: [
      { id: 'a', text: 'alt (Alternative)' },
      { id: 'b', text: 'loop (Iteration)' },
      { id: 'c', text: 'par (Parallel)' },
      { id: 'd', text: 'ref (Reference)' },
    ],
    correctAnswer: 'a',
    explanation:
      'O operador alt (alternativa) é o fragmento da UML utilizado para modelar ramificações condicionais mutuamente exclusivas (o clássico IF-ELSE). Se fosse apenas um IF sem alternativa, usaria-se opt.',
    decorebaRapida: 'IF-ELSE exclusivo no Diagrama de Sequência é sempre fragmento ALT!',
  },
  {
    id: 2,
    questionNumber: 2,
    title: 'Modificadores de Visibilidade UML',
    category: 'Diagrama de Classes',
    enunciado:
      'Na especificação de uma classe Cliente em UML, o atributo saldo está marcado como "#saldo: Double". Isso significa que o saldo possui qual nível de visibilidade?',
    options: [
      { id: 'a', text: 'Protegido (Protected)' },
      { id: 'b', text: 'Privado (Private)' },
      { id: 'c', text: 'Público (Public)' },
      { id: 'd', text: 'Estático (Static)' },
    ],
    correctAnswer: 'a',
    explanation:
      'Na notação UML padrão: "+" é público, "-" é privado, "#" é protegido (protected) e "~" é pacote (package). Sendo protegido, saldo só é acessível pela própria classe e suas filhas derivadas.',
    decorebaRapida: '+ Público | - Privado | # Protegido | ~ Pacote.',
  },
  {
    id: 3,
    questionNumber: 3,
    title: 'Composição vs Agregação',
    category: 'Diagrama de Classes',
    enunciado:
      'Em um sistema de vendas, ao excluir um Pedido, todos os seus ItensPedido vinculados são obrigatoriamente deletados, pois não faz sentido um item existir sem um pedido. Como essa relação é representada graficamente na UML?',
    options: [
      {
        id: 'a',
        text: 'Composição, representada por uma linha com um losango preto (preenchido) na extremidade da classe Pedido.',
      },
      {
        id: 'b',
        text: 'Agregação simples, representada por um losango branco (oco) na extremidade de ItensPedido.',
      },
      {
        id: 'c',
        text: 'Generalização, representada por uma seta com triângulo oco.',
      },
      {
        id: 'd',
        text: 'Dependência com linha tracejada e esteriótipo <<include>>.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'A Composição denota relação "todo-parte" de ciclo de vida forte (o item não existe sem o pedido). Na UML, a composição é desenhada com o losango preenchido (sólido) posicionado na classe que representa o "todo" (Pedido).',
    decorebaRapida: 'Vida e morte compartilhada = Composição = Losango PRETO.',
  },
  {
    id: 4,
    questionNumber: 4,
    title: 'Visão Central do Modelo 4+1',
    category: 'Modelo 4+1 Visões',
    enunciado:
      'No consagrado modelo arquitetural 4+1 de Philippe Kruchten, qual elemento ocupa o centro do diagrama e confere sentido ("+1") às outras quatro visões (Lógica, Processos, Implementação e Implantação)?',
    options: [
      { id: 'a', text: 'Cenários / Casos de Uso (Use Cases)' },
      { id: 'b', text: 'Diagrama de Entidade-Relacionamento (DER)' },
      { id: 'c', text: 'Código-fonte em linguagem C' },
      { id: 'd', text: 'Plano de testes unitários' },
    ],
    correctAnswer: 'a',
    explanation:
      'O "+1" é a Visão de Cenários (ou Casos de Uso). Ela une as quatro visões técnicas demonstrando como elas interagem na prática para satisfazer os objetivos reais do usuário final.',
    decorebaRapida: 'O "+1" do modelo de Kruchten é a visão de Cenários / Casos de Uso.',
  },
  {
    id: 5,
    questionNumber: 5,
    title: 'Responsabilidade do Controller no MVC',
    category: 'Padrões Arquiteturais',
    enunciado:
      'Em uma arquitetura baseada no padrão MVC (Model-View-Controller), qual é a responsabilidade PRIMÁRIA do Controller?',
    options: [
      {
        id: 'a',
        text: 'Interceptar as requisições da View, mediar a lógica acionando o Model e decidir qual resposta/View devolver ao usuário.',
      },
      {
        id: 'b',
        text: 'Desenhar os botões e renderizar as cores da tela.',
      },
      {
        id: 'c',
        text: 'Executar comandos DDL de criação de tabelas no banco de dados.',
      },
      {
        id: 'd',
        text: 'Armazenar fisicamente os registros em disco rígido.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'O Controller atua como cérebro coordenador: recebe as ações disparadas pela interface (View), invoca os métodos pertinentes nas regras de negócio (Model) e encaminha os dados para a exibição.',
    decorebaRapida: 'Controller é o intermediário: recebe da View e delega ao Model.',
  },
  {
    id: 6,
    questionNumber: 6,
    title: 'Classificação de Requisitos',
    category: 'Requisitos de Software',
    enunciado:
      '"O sistema de pagamento deve processar transações e retornar confirmação em menos de 1,5 segundos sob carga de até 5.000 usuários simultâneos." Como esse requisito é classificado?',
    options: [
      { id: 'a', text: 'Requisito Não Funcional (RNF) de Desempenho' },
      { id: 'b', text: 'Requisito Funcional (RF) de Interface' },
      { id: 'c', text: 'Regra de Negócio Exclusiva' },
      { id: 'd', text: 'Caso de Uso de Extensão' },
    ],
    correctAnswer: 'a',
    explanation:
      'Restrições de tempo de resposta, suporte a carga de usuários e critérios de eficiência técnica são Requisitos Não Funcionais (RNF) de desempenho/performance.',
    decorebaRapida: 'Tempo de resposta e limites de concorrência são RNF de Desempenho.',
  },
  {
    id: 7,
    questionNumber: 7,
    title: 'Fragmento LOOP em Sequência',
    category: 'Diagrama de Sequência',
    enunciado:
      'Para representar que a função "calcularImposto()" deve ser executada repetidamente para cada item contido no carrinho de compras, qual operador de fragmento combinado da UML é adotado?',
    options: [
      { id: 'a', text: 'loop' },
      { id: 'b', text: 'break' },
      { id: 'c', text: 'assert' },
      { id: 'd', text: 'critical' },
    ],
    correctAnswer: 'a',
    explanation:
      'O fragmento loop representa repetições e iterações (equivalente a for/while) em Diagramas de Sequência UML, indicando uma guarda de repetição, ex: loop [para cada item].',
    decorebaRapida: 'Repetição em diagrama de sequência usa o fragmento loop.',
  },
  {
    id: 8,
    questionNumber: 8,
    title: 'Multiplicidade em Classes UML',
    category: 'Diagrama de Classes',
    enunciado:
      'Em uma relação entre Professor e Turma, a extremidade de Turma possui a notação "0..*". O que essa notação expressa?',
    options: [
      {
        id: 'a',
        text: 'O professor pode estar alocado em zero, uma ou múltiplas turmas.',
      },
      {
        id: 'b',
        text: 'O professor deve obrigatoriamente ter pelo menos uma turma.',
      },
      {
        id: 'c',
        text: 'A turma não possui nenhum professor.',
      },
      {
        id: 'd',
        text: 'O sistema não permite turmas sem alunos.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      '"0..*" significa multiplicidade opcional e ilimitada (mínimo de zero e máximo de muitos). Ou seja, o professor pode não ter nenhuma turma ou ministrar em várias.',
    decorebaRapida: '0..* = Mínimo zero (opcional), máximo muitos (*).',
  },
  {
    id: 9,
    questionNumber: 9,
    title: 'Visão de Implantação (Física) do 4+1',
    category: 'Modelo 4+1 Visões',
    enunciado:
      'Qual visão do modelo 4+1 mapeia como os componentes de software são distribuídos fisicamente em nós de hardware, servidores em nuvem, balanceadores de carga e roteadores?',
    options: [
      { id: 'a', text: 'Visão Física / Implantação (Deployment View)' },
      { id: 'b', text: 'Visão Lógica (Logical View)' },
      { id: 'c', text: 'Visão de Processos (Process View)' },
      { id: 'd', text: 'Visão de Desenvolvimento (Implementation View)' },
    ],
    correctAnswer: 'a',
    explanation:
      'A Visão Física (Deployment/Implantação) atende aos engenheiros de infraestrutura e redes, mostrando como os artefatos de software rodam nas máquinas, containers e servidores físicos.',
    decorebaRapida: 'Hardware, servidores e nós pertencem à Visão Física/Implantação.',
  },
  {
    id: 10,
    questionNumber: 10,
    title: 'Mensagem de Retorno em Sequência',
    category: 'Diagrama de Sequência',
    enunciado:
      'Como a UML padroniza graficamente o envio de uma resposta de retorno (reply message) a uma chamada de método anterior em um Diagrama de Sequência?',
    options: [
      {
        id: 'a',
        text: 'Uma linha tracejada com seta aberta apontando de volta ao remetente (-->).',
      },
      {
        id: 'b',
        text: 'Uma linha contínua com losango sólido.',
      },
      {
        id: 'c',
        text: 'Um círculo vermelho com um X.',
      },
      {
        id: 'd',
        text: 'Duas barras paralelas em negrito.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'A mensagem de retorno (reply) de uma operação síncrona é desenhada como uma linha tracejada horizontal com ponta aberta (-->) voltando para a linha de vida chamadora.',
    decorebaRapida: 'Retorno (reply) = linha tracejada com seta aberta (-->).',
  },
];
