import type { Np2Flashcard, Np2SimuladoQuestion } from '../types/np2Training';

// ==========================================
// FLASHCARDS DE FIXAÇÃO: PROVA OFICIAL SQL SERVER
// Banco de Dados NP2 • Análise e Desenvolvimento de Sistemas
// ==========================================

export const BD_NP2_FLASHCARDS: Np2Flashcard[] = [
  // --- QUESTÕES DA PROVA OFICIAL ---
  {
    id: 1,
    categoria: 'Prova Oficial • Questão 1',
    pergunta: 'Como recuperar os nomes das pessoas que moram no estado de SP usando junção implícita?',
    resposta:
      'SELECT PESSOA.PessoaNome\nFROM PESSOA, CIDADE\nWHERE PESSOA.CidCod = CIDADE.CidCod\nAND CIDADE.UfSigla = \'SP\';\n\nRegras de ouro:\n1. Precisa da junção: PESSOA.CidCod = CIDADE.CidCod (senão vira produto cartesiano).\n2. A coluna do estado chama UfSigla (não "UF").\n3. Retorna PessoaNome (e não CidNome).',
    dica: 'Gabarito Q1 = B. Ligue CidCod e filtre UfSigla = \'SP\'.',
    codigoExemplo: 'SELECT PESSOA.PessoaNome FROM PESSOA, CIDADE\nWHERE PESSOA.CidCod = CIDADE.CidCod AND CIDADE.UfSigla = \'SP\';',
  },
  {
    id: 2,
    categoria: 'Prova Oficial • Questão 2',
    pergunta: 'Qual o caminho relacional para conectar PEDIDO a CIDADE e filtrar por mês/ano?',
    resposta:
      'Caminho em cadeia de 3 tabelas:\nPEDIDO.PessoaCod = PESSOA.PessoaCod\nAND PESSOA.CidCod = CIDADE.CidCod\n\nFiltro de data:\nAND MONTH(PEDIDODATACAD) = 3\nAND YEAR(PEDIDODATACAD) = 2026\nAND CIDADE.UfSigla = \'RJ\';\n\nPEDIDO não liga direto com CIDADE: precisa passar por PESSOA!',
    dica: 'Gabarito Q2 = D. PEDIDO ➔ PESSOA ➔ CIDADE com MONTH=3 e YEAR=2026.',
    codigoExemplo: 'WHERE PEDIDO.PESSOACOD = PESSOA.PESSOACOD\nAND PESSOA.CidCod = CIDADE.CidCod\nAND CIDADE.UfSigla = \'RJ\'\nAND MONTH(PEDIDODATACAD) = 3 AND YEAR(PEDIDODATACAD) = 2026',
  },
  {
    id: 3,
    categoria: 'Prova Oficial • Questão 3',
    pergunta: 'Como ordenar por dois critérios: valor total decrescente e data crescente como desempate?',
    resposta:
      'ORDER BY PEDIDO.PEDIDOVALORTOTAL DESC, PEDIDO.PEDIDODATACAD ASC;\n\nRegra:\n• 1º critério: Valor Total DESC (maior para o menor).\n• 2º critério (desempate): Data ASC (mais antigo para o mais novo).\n\nNunca esqueça a junção WHERE PEDIDO.PESSOACOD = PESSOA.PESSOACOD para não gerar produto cartesiano.',
    dica: 'Gabarito Q3 = A. Primeiro critério DESC, vírgula, segundo critério ASC.',
    codigoExemplo: 'ORDER BY PEDIDO.PEDIDOVALORTOTAL DESC, PEDIDO.PEDIDODATACAD ASC;',
  },
  {
    id: 4,
    categoria: 'Prova Oficial • Questão 4',
    pergunta: 'Qual a ordem correta entre WHERE e ORDER BY, e por que usar LIKE em vez de "="?',
    resposta:
      'Ordem obrigatória no SQL:\nSELECT ... FROM ... WHERE ... ORDER BY ...\n(O WHERE SEMPRE vem antes do ORDER BY! Inverter gera erro de sintaxe).\n\nOperador LIKE:\n• LIKE \'A%\': busca quem começa com a letra A (o % atua como curinga).\n• = \'A%\': procura quem se chama literalmente "A%" (não usa curinga).',
    dica: 'Gabarito Q4 = D. WHERE nome LIKE \'A%\' ORDER BY nome ASC.',
    codigoExemplo: 'SELECT * FROM clientes\nWHERE nome LIKE \'A%\'\nORDER BY nome ASC;',
  },
  {
    id: 5,
    categoria: 'Gabarito Relâmpago',
    pergunta: 'Qual é o gabarito oficial da prova de SQL da NP2 para bater o olho e gabaritar?',
    resposta:
      '1-B (SELECT PESSOA.PessoaNome ... PESSOA.CidCod = CIDADE.CidCod AND CIDADE.UfSigla = \'SP\')\n2-D (3 tabelas PEDIDO ➔ PESSOA ➔ CIDADE com MONTH=3 e YEAR=2026)\n3-A (ORDER BY VALOR DESC, DATA ASC com junção)\n4-D (WHERE nome LIKE \'A%\' ORDER BY nome ASC)',
    dica: 'Sequência das alternativas da prova: B, D, A, D.',
  },

  // --- MODELO RELACIONAL & CAMINHO DE CHAVES ---
  {
    id: 6,
    categoria: 'Modelo Relacional',
    pergunta: 'Qual o caminho de chaves para rastrear o cliente e cidade a partir de um item de pedido?',
    resposta:
      'ITEM_PEDIDO ➔ (PedidoNum) ➔ PEDIDO ➔ (PessoaCod) ➔ PESSOA ➔ (CidCod) ➔ CIDADE ➔ (UfSigla) ➔ UNIDADE_FEDERATIVA ➔ (PaisCod) ➔ PAIS.\n\nCada junção liga a Chave Estrangeira (FK) na tabela filha à Chave Primária (PK) na tabela pai.',
    dica: 'Memorize a cadeia: ITEM_PEDIDO ➔ PEDIDO ➔ PESSOA ➔ CIDADE ➔ UF ➔ PAIS.',
  },
  {
    id: 7,
    categoria: 'DQL & Junções',
    pergunta: 'O que acontece ao listar duas tabelas no FROM sem condição de junção no WHERE?',
    resposta:
      'Ocorre o Produto Cartesiano (CROSS JOIN).\nCada registro da primeira tabela é multiplicado por todos os registros da segunda tabela (N × M linhas), gerando dados duplicados e associações sem sentido no mundo real.',
    dica: 'Toda tabela adicional no FROM exige uma condição de ligação correspondente no WHERE!',
  },

  // --- DDL, CONSTRAINTS & FILTROS ESSENCIAIS ---
  {
    id: 8,
    categoria: 'DQL & Filtros',
    pergunta: 'No operador LIKE, qual a diferença entre % (porcentagem) e _ (underscore)?',
    resposta:
      '% (porcentagem): representa ZERO, UM ou MÚLTIPLOS caracteres quaisquer.\n_ (sublinhado): representa EXATAMENTE UM único caractere em posição fixa.\n\nExemplos:\n• \'A%\': começa com A\n• \'%A\': termina com A\n• \'_A%\': a 2ª letra é A',
    dica: '_ é 1 caractere exato; % é curinga de qualquer tamanho.',
    codigoExemplo: 'SELECT * FROM PESSOA WHERE PessoaNome LIKE \'_A%\';',
  },
  {
    id: 9,
    categoria: 'DQL & Filtros',
    pergunta: 'Por que "WHERE coluna = NULL" nunca retorna nenhuma linha no SQL Server?',
    resposta:
      'NULL indica ausência de valor (desconhecido). Qualquer comparação de igualdade com NULL resulta em UNKNOWN (falso na filtragem). Deve-se usar sempre IS NULL ou IS NOT NULL.',
    dica: 'Pegadinha clássica: nunca use = NULL, sempre IS NULL!',
    codigoExemplo: 'SELECT * FROM PRODUTO WHERE ProdDataValidMax IS NULL;',
  },
  {
    id: 10,
    categoria: 'Funções de Data',
    pergunta: 'Como funcionam MONTH(), YEAR(), DAY() e DATEDIFF() no SQL Server?',
    resposta:
      '• MONTH(data): extrai o mês como número inteiro (1 a 12).\n• YEAR(data): extrai o ano com 4 dígitos (ex: 2026).\n• DAY(data): extrai o dia do mês (1 a 31).\n• DATEDIFF(unidade, inicio, fim): calcula a diferença (fim - inicio) em DAY, MONTH, YEAR.',
    dica: 'Ex: MONTH(\'2026-03-15\') retorna 3. DATEDIFF(DAY, GETDATE(), data_fim) retorna dias restantes.',
    codigoExemplo: 'SELECT PedidoNum FROM PEDIDO WHERE MONTH(PedidoDataCad) = 3 AND YEAR(PedidoDataCad) = 2026;',
  },
  {
    id: 11,
    categoria: 'Funções de Texto',
    pergunta: 'Qual a diferença entre LEN() e DATALENGTH() no SQL Server?',
    resposta:
      '• LEN(texto): retorna a QUANTIDADE de caracteres, ignorando espaços em branco à direita.\n• DATALENGTH(texto): retorna a quantidade física de BYTES ocupados na memória (em colunas NVARCHAR, cada caractere ocupa 2 bytes).',
    dica: 'LEN(\'UNIP \') = 4. Para tamanho do texto, usa-se LEN().',
  },
  {
    id: 12,
    categoria: 'Condicionais',
    pergunta: 'O que faz a função ISNULL(expressão, substituto) e qual a sintaxe do CASE WHEN?',
    resposta:
      '• ISNULL(campo, 0): se o campo for NULL, substitui por 0; senão retorna o campo original.\n• CASE WHEN:\nCASE\n  WHEN condicao1 THEN resultado1\n  ELSE padrao\nEND (o END é obrigatório).',
    dica: 'ISNULL trata nulos diretamente. CASE WHEN é a estrutura condicional IF-THEN-ELSE no SELECT.',
    codigoExemplo: 'SELECT PedidoNum, ISNULL(PedidoValorTotal, 0) FROM PEDIDO;',
  },
  {
    id: 13,
    categoria: 'DDL & Restrições',
    pergunta: 'Qual a diferença entre PRIMARY KEY e FOREIGN KEY?',
    resposta:
      '• PRIMARY KEY (PK): Identificador exclusivo da tabela. Não aceita duplicatas e NUNCA aceita NULL (apenas uma por tabela).\n• FOREIGN KEY (FK): Chave estrangeira que aponta para a PK de outra tabela, garantindo a Integridade Referencial.',
    dica: 'PK identifica a linha. FK garante que a ligação com a tabela pai seja válida.',
  },
];

// ==========================================
// SIMULADO OFICIAL: PROVA DE CONSULTAS SQL
// Questões Reais da Prova NP2 + Complementares
// ==========================================

export const BD_NP2_SIMULADO_QUESTIONS: Np2SimuladoQuestion[] = [
  // --- QUESTÃO 1 DA PROVA REAL ---
  {
    id: 1,
    questionNumber: 1,
    title: 'Junção Implícita e Filtro por UF (Prova Real - Q1)',
    category: 'Consultas com Junção',
    enunciado:
      'Escreva uma consulta SQL que recupere os nomes das pessoas que moram no estado de São Paulo (SP), utilizando as tabelas PESSOA e CIDADE do modelo relacional:',
    codeSnippet:
      '-- Tabelas envolvidas:\n-- PESSOA (PessoaCod, PessoaNome, PessoaDataExpCad, CidCod)\n-- CIDADE (CidCod, CidNome, UfSigla)',
    options: [
      {
        id: 'a',
        text: "SELECT PessoaNome\nFROM   PESSOA, CIDADE\nWHERE  UF = 'SP';",
      },
      {
        id: 'b',
        text: "SELECT PESSOA.PessoaNome\nFROM   PESSOA, CIDADE\nWHERE  PESSOA.CidCod = CIDADE.CidCod\nAND    CIDADE.UfSigla = 'SP';",
      },
      {
        id: 'c',
        text: "SELECT CidNome\nFROM   PESSOA, CIDADE\nWHERE  PESSOA.CidCod = CIDADE.CidCod\nAND    CIDADE.UfSigla = 'SP';",
      },
      {
        id: 'd',
        text: "SELECT *\nFROM   PESSOA, CIDADE\nWHERE  PESSOA.CidCod = 'SP';",
      },
    ],
    correctAnswer: 'b',
    explanation:
      'Gabarito oficial da Prova (Questão 1):\n\n• Alternativa B (CORRETA): Faz a junção relacional entre PESSOA e CIDADE através da chave CidCod (PESSOA.CidCod = CIDADE.CidCod), filtra a unidade federativa através da coluna correta (CIDADE.UfSigla = \'SP\') e projeta exatamente o nome da pessoa (PESSOA.PessoaNome).\n\nAnálise dos erros das outras opções:\n• A: Não faz a junção entre as tabelas (gera produto cartesiano de todas as pessoas com todas as cidades) e a coluna "UF" não existe no modelo (o nome correto é UfSigla).\n• C: A junção e o filtro estão certos, mas retorna CidNome (nome da cidade), e o enunciado pediu o nome das pessoas.\n• D: Compara CidCod (número inteiro) com a string \'SP\', traz todas as colunas (*) e não faz a ligação entre as tabelas.',
    decorebaRapida: 'Ligue PESSOA.CidCod = CIDADE.CidCod, filtre UfSigla = \'SP\' e traga PessoaNome!',
  },

  // --- QUESTÃO 2 DA PROVA REAL ---
  {
    id: 2,
    questionNumber: 2,
    title: 'Junção de Três Tabelas e Filtro por Data (Prova Real - Q2)',
    category: 'Consultas com Junção',
    enunciado:
      'Escreva uma consulta SQL que recupere todos os pedidos do Rio de Janeiro (RJ) com data de cadastro em março de 2026, projetando o número do pedido, a data e o valor total:',
    codeSnippet:
      '-- Caminho no modelo: PEDIDO ➔ PESSOA ➔ CIDADE\n-- PEDIDO (PedidoNum, PedidoDataCad, PedidoValorTotal, PessoaCod)\n-- PESSOA (PessoaCod, CidCod)\n-- CIDADE (CidCod, UfSigla)',
    options: [
      {
        id: 'a',
        text: "SELECT PEDIDONUM\nFROM   PEDIDO, PESSOA, CIDADE\nWHERE  MONTH(PEDIDODATACAD) = 3\nAND    CIDADE.UfSigla = 'RJ';",
      },
      {
        id: 'b',
        text: "SELECT PEDIDONUM\nFROM   PEDIDO\nWHERE  PEDIDODATACAD BETWEEN '2026-03-01' AND '2026-06-31';",
      },
      {
        id: 'c',
        text: "SELECT *\nFROM   PEDIDO, CIDADE\nWHERE  UfSigla = 'RJ'\nAND    PEDIDODATACAD = '03/2026';",
      },
      {
        id: 'd',
        text: "SELECT PEDIDONUM, PEDIDODATACAD, PEDIDOVALORTOTAL\nFROM   PEDIDO, PESSOA, CIDADE\nWHERE  PEDIDO.PESSOACOD = PESSOA.PESSOACOD\nAND    PESSOA.CidCod = CIDADE.CidCod\nAND    CIDADE.UfSigla = 'RJ'\nAND    MONTH(PEDIDODATACAD) = 3\nAND    YEAR(PEDIDODATACAD) = 2026;",
      },
    ],
    correctAnswer: 'd',
    explanation:
      'Gabarito oficial da Prova (Questão 2):\n\n• Alternativa D (CORRETA): Percorre com perfeição o caminho de navegação do modelo relacional:\n1. PEDIDO.PESSOACOD = PESSOA.PESSOACOD (liga o pedido ao cliente);\n2. PESSOA.CidCod = CIDADE.CidCod (liga o cliente à cidade);\n3. CIDADE.UfSigla = \'RJ\' (filtra o estado do Rio de Janeiro);\n4. MONTH(PEDIDODATACAD) = 3 AND YEAR(PEDIDODATACAD) = 2026 (filtra rigorosamente o mês de março de 2026).\n\nAnálise dos erros das outras opções:\n• A: Falta as duas condições de junção (gera produto cartesiano colossal) e não filtra o ano, trazendo março de qualquer ano da história.\n• B: Não filtra o estado (RJ), o intervalo vai até junho e a data \'2026-06-31\' não existe no calendário (junho tem 30 dias).\n• C: PEDIDO não possui chave estrangeira direta para CIDADE (a relação passa obrigatoriamente por PESSOA) e comparar DATE diretamente com string \'03/2026\' é inválido.',
    decorebaRapida: '3 tabelas exigem 2 junções: PEDIDO-PESSOA e PESSOA-CIDADE, mais MONTH=3 e YEAR=2026!',
  },

  // --- QUESTÃO 3 DA PROVA REAL ---
  {
    id: 3,
    questionNumber: 3,
    title: 'ORDER BY Duplo e Desempate (Prova Real - Q3)',
    category: 'Ordenação & Junção',
    enunciado:
      'Escreva uma consulta SQL que recupere o número do pedido, o nome da pessoa e o valor total, ordenados decrescentemente pelo valor total e, em caso de empate, pela data do pedido em ordem crescente:',
    codeSnippet:
      '-- Junção entre PEDIDO e PESSOA\n-- Critério 1: Valor Total Decrescente (DESC)\n-- Critério 2: Data do Pedido Crescente (ASC)',
    options: [
      {
        id: 'a',
        text: 'SELECT   PEDIDO.PEDIDONUM, PessoaNome,\n         PEDIDO.PEDIDOVALORTOTAL, PEDIDO.PEDIDODATACAD\nFROM     PEDIDO, PESSOA\nWHERE    PEDIDO.PESSOACOD = PESSOA.PESSOACOD\nORDER BY PEDIDO.PEDIDOVALORTOTAL DESC, PEDIDO.PEDIDODATACAD ASC;',
      },
      {
        id: 'b',
        text: 'SELECT   PEDIDONUM, PessoaNome\nFROM     PEDIDO, PESSOA\nORDER BY PEDIDONUM;',
      },
      {
        id: 'c',
        text: 'SELECT   *\nFROM     PEDIDO, PESSOA\nORDER BY PEDIDOVALORTOTAL, PEDIDODATACAD DESC;',
      },
      {
        id: 'd',
        text: 'SELECT   PEDIDONUM\nFROM     PEDIDO, PESSOA\nWHERE    1=1\nORDER BY 3 DESC, 4 ASC;',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'Gabarito oficial da Prova (Questão 3):\n\n• Alternativa A (CORRETA): Realiza a junção entre PEDIDO e PESSOA pela chave comum (PEDIDO.PESSOACOD = PESSOA.PESSOACOD), projeta os campos solicitados e aplica a cláusula ORDER BY com múltiplos critérios:\n1. PEDIDOVALORTOTAL DESC (ordena do maior valor para o menor);\n2. PEDIDODATACAD ASC (em pedidos de mesmo valor, desempata pela data mais antiga primeiro).\n\nAnálise dos erros das outras opções:\n• B: Não realiza a junção WHERE (produto cartesiano), omite o valor total e ordena apenas por PedidoNum.\n• C: Sem condição de junção; além disso, ordena o valor em ordem crescente (padrão ASC quando omitido) e a data em ordem decrescente, o exato inverso do solicitado.\n• D: WHERE 1=1 não conecta as tabelas; ORDER BY 3 e 4 refere-se à 3ª e 4ª coluna, mas o SELECT pediu apenas 1 coluna.',
    decorebaRapida: 'ORDER BY valor DESC, data ASC com a junção PEDIDO.PESSOACOD = PESSOA.PESSOACOD!',
  },

  // --- QUESTÃO 4 DA PROVA REAL ---
  {
    id: 4,
    questionNumber: 4,
    title: 'Operador LIKE e Ordem de Cláusulas (Prova Real - Q4)',
    category: 'DQL & Sintaxe',
    enunciado:
      'Escreva uma consulta SQL que recupere todas as colunas da tabela de clientes para os clientes cujo nome começa com a letra "A", exibindo os resultados ordenados alfabeticamente pelo nome (de A a Z):',
    codeSnippet:
      '-- Tabela: clientes\n-- Condição: Nome começa com a letra "A"\n-- Ordenação: Alfabética (A a Z = ASC)',
    options: [
      {
        id: 'a',
        text: "SELECT * FROM clientes\nORDER BY nome LIKE 'A%' ASC;",
      },
      {
        id: 'b',
        text: "SELECT * FROM clientes\nWHERE nome = 'A%'\nORDER BY nome ASC;",
      },
      {
        id: 'c',
        text: "SELECT * FROM clientes\nORDER BY nome ASC\nWHERE nome LIKE 'A%';",
      },
      {
        id: 'd',
        text: "SELECT * FROM clientes\nWHERE nome LIKE 'A%'\nORDER BY nome ASC;",
      },
    ],
    correctAnswer: 'd',
    explanation:
      'Gabarito oficial da Prova (Questão 4):\n\n• Alternativa D (CORRETA): A cláusula WHERE aplica o filtro com o operador LIKE \'A%\' (o símbolo % atua como curinga para zero ou mais caracteres após a letra A). Em seguida, a cláusula ORDER BY nome ASC garante a ordenação alfabética crescente (de A a Z).\n\nAnálise dos erros das outras opções:\n• A: Coloca o operador LIKE dentro do ORDER BY, o que é um erro de sintaxe e não filtra nenhuma linha da tabela.\n• B: O operador de igualdade (=) desativa os curingas; essa consulta só traria pessoas que tivessem o nome literalmente cadastrado como "A%".\n• C: Erro fatal de ordem de cláusulas: o WHERE deve SEMPRE vir antes do ORDER BY. Colocar ORDER BY antes do WHERE gera erro de compilação SQL.',
    decorebaRapida: 'WHERE nome LIKE \'A%\' vem ANTES de ORDER BY nome ASC!',
  },

  // --- QUESTÕES COMPLEMENTARES ESSENCIAIS PARA NP2 ---
  {
    id: 5,
    questionNumber: 5,
    title: 'Tratamento de Nulos com IS NULL',
    category: 'DQL & Filtros',
    enunciado:
      'Deseja-se selecionar todos os produtos da tabela PRODUTO que ainda não possuem data máxima de validade cadastrada (campo nulo). Qual filtro WHERE produz o resultado correto?',
    codeSnippet: 'SELECT ProdCod, ProdNome FROM PRODUTO WHERE ???;',
    options: [
      { id: 'a', text: 'WHERE ProdDataValidMax IS NULL' },
      { id: 'b', text: 'WHERE ProdDataValidMax = NULL' },
      { id: 'c', text: "WHERE ProdDataValidMax = 'NULL'" },
      { id: 'd', text: 'WHERE ProdDataValidMax == 0' },
    ],
    correctAnswer: 'a',
    explanation:
      'No SQL padrão e no SQL Server, NULL representa a ausência de valor. Comparações aritméticas com = NULL retornam UNKNOWN. Para testar campos nulos, deve-se usar obrigatoriamente IS NULL ou IS NOT NULL.',
    decorebaRapida: 'Nunca use = NULL! Sempre use IS NULL.',
  },
  {
    id: 6,
    questionNumber: 6,
    title: 'Função de Tamanho de Texto LEN',
    category: 'Funções de Linha Única',
    enunciado:
      'No SQL Server, qual o resultado retornado pelo comando: SELECT LEN(\'SAO PAULO  \') AS Tamanho;?',
    codeSnippet: "SELECT LEN('SAO PAULO  ') AS Tamanho;",
    options: [
      { id: 'a', text: '9 (exclui os espaços em branco à direita)' },
      { id: 'b', text: '11 (conta todos os caracteres e espaços)' },
      { id: 'c', text: '18 (bytes ocupados)' },
      { id: 'd', text: 'Erro de compilação' },
    ],
    correctAnswer: 'a',
    explanation:
      'A função LEN() no SQL Server calcula o comprimento da string excluindo automaticamente os espaços em branco finais (trailing spaces). "SAO PAULO" possui 9 caracteres.',
    decorebaRapida: 'LEN() exclui espaços em branco do final da palavra.',
  },
  {
    id: 7,
    questionNumber: 7,
    title: 'Substituição de Nulos com ISNULL',
    category: 'Condicionais',
    enunciado:
      'Ao emitir um relatório de pedidos, se o valor total estiver nulo, deve ser exibido o número 0.00. Qual função nativa do SQL Server executa essa substituição diretamente?',
    codeSnippet: 'SELECT PedidoNum, ???(PedidoValorTotal, 0.00) FROM PEDIDO;',
    options: [
      { id: 'a', text: 'ISNULL(PedidoValorTotal, 0.00)' },
      { id: 'b', text: 'NVL(PedidoValorTotal, 0.00)' },
      { id: 'c', text: 'IFNULL(PedidoValorTotal, 0.00)' },
      { id: 'd', text: 'NULL_REPLACE(PedidoValorTotal, 0.00)' },
    ],
    correctAnswer: 'a',
    explanation:
      'No SQL Server (T-SQL), a função padrão para substituição de valores nulos é ISNULL(expressão, valor_substituto). (NVL é do Oracle e IFNULL é do MySQL).',
    decorebaRapida: 'SQL Server usa ISNULL(campo, substituto).',
  },
  {
    id: 8,
    questionNumber: 8,
    title: 'Diferença de Datas com DATEDIFF',
    category: 'Funções de Data',
    enunciado:
      'Qual comando calcula o número exato de DIAS decorridos entre a data do pedido e a data de hoje (GETDATE()) no SQL Server?',
    options: [
      { id: 'a', text: 'DATEDIFF(DAY, PedidoDataCad, GETDATE())' },
      { id: 'b', text: 'DATEDIFF(PedidoDataCad, GETDATE(), DAY)' },
      { id: 'c', text: 'GETDATE() - PedidoDataCad' },
      { id: 'd', text: 'DIAS_ENTRE(PedidoDataCad, HOJE())' },
    ],
    correctAnswer: 'a',
    explanation:
      'A sintaxe de DATEDIFF no SQL Server é DATEDIFF(datepart, startdate, enddate). Para dias, utiliza-se DAY (ou D, DD) como primeiro argumento.',
    decorebaRapida: 'DATEDIFF(unidade, data_inicio, data_fim) ➔ DATEDIFF(DAY, inicio, fim).',
  },
  {
    id: 9,
    questionNumber: 9,
    title: 'Estrutura Condicional CASE WHEN',
    category: 'Condicionais',
    enunciado:
      'Qual das seguintes opções apresenta a sintaxe correta de um comando condicional CASE no SELECT do SQL Server?',
    options: [
      {
        id: 'a',
        text: "CASE WHEN PedidoValorTotal > 1000 THEN 'VIP' ELSE 'Normal' END",
      },
      {
        id: 'b',
        text: "IF PedidoValorTotal > 1000 THEN 'VIP' ELSE 'Normal' FI",
      },
      {
        id: 'c',
        text: "CASE (PedidoValorTotal > 1000, 'VIP', 'Normal')",
      },
      {
        id: 'd',
        text: "SWITCH WHEN PedidoValorTotal > 1000: 'VIP' DEFAULT: 'Normal'",
      },
    ],
    correctAnswer: 'a',
    explanation:
      'A expressão CASE no SELECT requer a palavra-chave CASE, uma ou mais cláusulas WHEN condicao THEN retorno, o opcional ELSE e obrigatoriamente a palavra END.',
    decorebaRapida: 'CASE WHEN condição THEN resultado ELSE padrão END.',
  },
  {
    id: 10,
    questionNumber: 10,
    title: 'Integridade Referencial e Restrição FK',
    category: 'DDL & Restrições',
    enunciado:
      'Na tabela CIDADE, o campo UfSigla faz referência à tabela UNIDADE_FEDERATIVA. O que a restrição FOREIGN KEY garante?',
    options: [
      {
        id: 'a',
        text: 'Garante que nenhuma cidade seja cadastrada com uma sigla de UF que não exista na tabela UNIDADE_FEDERATIVA.',
      },
      {
        id: 'b',
        text: 'Exclui automaticamente o banco de dados caso uma cidade seja alterada.',
      },
      {
        id: 'c',
        text: 'Permite que cidades tenham múltiplos códigos primários duplicados.',
      },
      {
        id: 'd',
        text: 'Converte todas as letras da UF em minúsculas antes de gravar.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'A constraint FOREIGN KEY impõe a Integridade Referencial: nenhum registro filho pode referenciar um valor pai inexistente.',
    decorebaRapida: 'FK impede códigos órfãos e garante que a chave exista na tabela pai.',
  },
];
