import type { Np2Flashcard, Np2SimuladoQuestion } from '../types/np2Training';

export const BD_NP2_FLASHCARDS: Np2Flashcard[] = [
  // --- DDL & CONSTRAINTS ---
  {
    id: 1,
    categoria: 'DDL & Restrições',
    pergunta: 'Qual a diferença entre PRIMARY KEY e UNIQUE no SQL Server?',
    resposta:
      'PRIMARY KEY garante unicidade e NÃO permite NULL (apenas uma por tabela). UNIQUE também garante unicidade de valores, mas permite um valor NULL (pode haver múltiplas UNIQUE por tabela).',
    dica: 'PK = identificador único obrigatório (sem NULL). UNIQUE = não aceita duplicata, mas tolera 1 nulo.',
    codigoExemplo: 'PessoaCpf VARCHAR(14) NOT NULL UNIQUE,\nCONSTRAINT PK_Pessoa PRIMARY KEY (PessoaCod)',
  },
  {
    id: 2,
    categoria: 'DDL & Restrições',
    pergunta: 'Como funciona a constraint FOREIGN KEY e o que ela garante?',
    resposta:
      'A FOREIGN KEY (Chave Estrangeira) garante a Integridade Referencial. Ela impede a inserção de códigos que não existam na tabela pai referenciada e bloqueia exclusão de registros pai que tenham filhos vinculados.',
    dica: 'Exemplo: CidadeId na tabela PESSOA deve existir previamente na tabela CIDADE.',
    codigoExemplo: 'ALTER TABLE CIDADE\nADD CONSTRAINT FK_Cidade_UF\nFOREIGN KEY (UFSigla) REFERENCES UNIDADE_FEDERATIVA(UFSigla);',
  },
  {
    id: 3,
    categoria: 'DDL & Restrições',
    pergunta: 'O que faz a restrição CHECK em uma coluna do SQL Server?',
    resposta:
      'A constraint CHECK valida uma regra ou condição booleana antes de permitir INSERT ou UPDATE. Se a condição for falsa, o banco rejeita a transação.',
    dica: 'Ex: garantir que salário seja positivo ou sexo apenas M/F.',
    codigoExemplo: 'CONSTRAINT CK_ProdPreco CHECK (ProdPreco > 0)\nCONSTRAINT CK_PessoaSexo CHECK (PessoaSexo IN (\'M\', \'F\'))',
  },
  {
    id: 4,
    categoria: 'DDL & Restrições',
    pergunta: 'Para que serve a restrição DEFAULT no SQL Server?',
    resposta:
      'Atribui automaticamente um valor pré-definido à coluna caso nenhum valor seja fornecido no comando INSERT.',
    dica: 'Muito comum para data de cadastro ou status ativo.',
    codigoExemplo: 'PessoaDataCad DATETIME DEFAULT GETDATE(),\nPessoaAtivo CHAR(1) DEFAULT \'S\'',
  },

  // --- DQL & FILTROS ---
  {
    id: 5,
    categoria: 'DQL & Filtros',
    pergunta: 'No operador LIKE, qual a diferença exata entre % e _ (underscore)?',
    resposta:
      '% (porcentagem) representa ZERO, UM ou MÚLTIPLOS caracteres quaisquer.\n_ (underscore) representa EXATAMENTE UM único caractere em posição específica.',
    dica: '\'A%\' começa com A. \'_A%\' tem A como 2º caractere. \'%A\' termina com A.',
    codigoExemplo: '-- Nome cuja 2ª letra é \'A\':\nSELECT * FROM PESSOA WHERE PessoaNome LIKE \'_A%\';',
  },
  {
    id: 6,
    categoria: 'DQL & Filtros',
    pergunta: 'Por que "WHERE coluna = NULL" nunca retorna linhas no SQL?',
    resposta:
      'NULL não é um valor, é a AUSÊNCIA de valor (desconhecido). Qualquer comparação aritmética de igualdade com NULL resulta em UNKNOWN (falso). Deve-se usar sempre IS NULL ou IS NOT NULL.',
    dica: 'Pegadinha clássica de prova: nunca use = NULL, sempre IS NULL!',
    codigoExemplo: '-- Correto:\nSELECT * FROM PRODUTO WHERE ProdDataValidMax IS NULL;',
  },
  {
    id: 7,
    categoria: 'DQL & Filtros',
    pergunta: 'Qual a ordem correta de execução das cláusulas SELECT, FROM, WHERE, ORDER BY?',
    resposta:
      '1. FROM (identifica tabelas)\n2. WHERE (filtra linhas)\n3. SELECT (projeta colunas)\n4. ORDER BY (ordena resultado final)',
    dica: 'Por isso não dá para usar alias criado no SELECT dentro do WHERE!',
    codigoExemplo: 'SELECT PessoaNome AS Nome\nFROM PESSOA\nWHERE PessoaCod > 5 -- Não pode usar Nome aqui!\nORDER BY Nome; -- No ORDER BY pode!',
  },

  // --- FUNÇÕES DE LINHA ÚNICA ---
  {
    id: 8,
    categoria: 'Funções de Linha Única',
    pergunta: 'Qual a diferença entre LEN() e DATALENGTH() no SQL Server?',
    resposta:
      'LEN(texto) retorna a QUANTIDADE de caracteres excluindo espaços à direita.\nDATALENGTH(texto) retorna o número de BYTES ocupados na memória (colunas NVARCHAR ocupam 2 bytes por caractere).',
    dica: 'Prof. Flávio foca em LEN() para tamanho de texto nas provas.',
    codigoExemplo: 'SELECT LEN(\'UNIP \'); -- Retorna 4\nSELECT DATALENGTH(\'UNIP\'); -- Retorna 4 em VARCHAR',
  },
  {
    id: 9,
    categoria: 'Funções de Linha Única',
    pergunta: 'Como funciona a função SUBSTRING(string, inicio, tamanho)?',
    resposta:
      'Extrai uma parte do texto. No SQL Server, o índice inicial é 1 (e NÃO 0 como em C/Java!).\n\nSUBSTRING(\'SÃO PAULO\', 1, 3) retorna \'SÃO\'.',
    dica: 'Atenção: 1º caractere tem posição 1!',
    codigoExemplo: 'SELECT SUBSTRING(PessoaNome, 1, 5) FROM PESSOA;',
  },
  {
    id: 10,
    categoria: 'Funções de Linha Única',
    pergunta: 'O que fazem as funções GETDATE(), DAY(), MONTH() e YEAR()?',
    resposta:
      'GETDATE() retorna a data e hora atual do servidor.\nDAY(dt), MONTH(dt) e YEAR(dt) extraem respectivamente o dia, mês e ano numéricos inteiros da data informada.',
    dica: 'Ex: YEAR(\'2026-11-05\') retorna 2026 (número inteiro).',
    codigoExemplo: 'SELECT PessoaNome, YEAR(GETDATE()) - YEAR(PessoaDataNasc) AS IdadeAprox FROM PESSOA;',
  },
  {
    id: 11,
    categoria: 'Funções de Linha Única',
    pergunta: 'Como funciona DATEDIFF(unidade, data_inicio, data_fim)?',
    resposta:
      'Calcula a diferença entre duas datas na unidade especificada (DAY, MONTH, YEAR, HOUR, etc.).\nFórmula: data_fim - data_inicio.',
    dica: 'Se data_inicio for maior que data_fim, o resultado é NEGATIVO.',
    codigoExemplo: '-- Dias até vencer:\nSELECT ProdNome, DATEDIFF(DAY, GETDATE(), ProdDataValidMax) AS DiasRestantes\nFROM PRODUTO;',
  },

  // --- CONDICIONAIS: ISNULL & CASE WHEN ---
  {
    id: 12,
    categoria: 'ISNULL & CASE WHEN',
    pergunta: 'O que faz a função ISNULL(expressao, substituto)?',
    resposta:
      'Testa se a expressão é NULL. Se for NULL, retorna o valor substituto; caso contrário, retorna a própria expressão original.',
    dica: 'Usado para evitar NULL em relatórios ou somas.',
    codigoExemplo: 'SELECT ProdNome, ISNULL(ProdDataValidMax, \'1900-01-01\') AS Validade\nFROM PRODUTO;',
  },
  {
    id: 13,
    categoria: 'ISNULL & CASE WHEN',
    pergunta: 'Qual a estrutura sintática obrigatória de um comando CASE WHEN no SELECT?',
    resposta:
      'CASE\n  WHEN condicao1 THEN valor1\n  WHEN condicao2 THEN valor2\n  ELSE valor_padrao\nEND\n\n(A cláusula ELSE é opcional; se omitida e nada casar, retorna NULL. O END é obrigatório).',
    dica: 'Nunca esqueça o END no final do CASE!',
    codigoExemplo: 'SELECT ProdNome,\n  CASE\n    WHEN ProdPreco < 50 THEN \'Barato\'\n    WHEN ProdPreco <= 200 THEN \'Médio\'\n    ELSE \'Caro\'\n  END AS FaixaPreco\nFROM PRODUTO;',
  },

  // --- JOINS & CHAVES ---
  {
    id: 14,
    categoria: 'JOINs & Junções',
    pergunta: 'O que acontece se você fizer SELECT com duas tabelas sem a cláusula ON / WHERE?',
    resposta:
      'Ocorre um Produto Cartesiano (CROSS JOIN). Cada linha da primeira tabela é combinada com todas as linhas da segunda tabela (N × M linhas), gerando dados duplicados e inconsistentes.',
    dica: 'Se Tabela A tem 10 linhas e B tem 20, o produto cartesiano gera 200 linhas!',
  },
  {
    id: 15,
    categoria: 'JOINs & Junções',
    pergunta: 'Qual a diferença entre INNER JOIN e LEFT JOIN?',
    resposta:
      'INNER JOIN retorna apenas linhas que tenham correspondência exata em AMBAS as tabelas.\nLEFT JOIN (ou LEFT OUTER JOIN) retorna TODAS as linhas da tabela da esquerda; quando não há correspondência na direita, preenche as colunas com NULL.',
    dica: 'Para listar clientes que nunca compraram: LEFT JOIN + WHERE PedidoCod IS NULL.',
    codigoExemplo: 'SELECT C.CidadeNome, P.PessoaNome\nFROM CIDADE C\nINNER JOIN PESSOA P ON C.CidadeCod = P.CidadeCod;',
  },
  {
    id: 16,
    categoria: 'JOINs & Junções',
    pergunta: 'Como conectar 4 tabelas relacionais em cadeia (PAIS -> UF -> CIDADE -> PESSOA)?',
    resposta:
      'Faz-se múltiplos INNER JOINs em sequência, cada um conectando a chave estrangeira com a chave primária correspondente.',
    dica: 'PESSOA conecta com CIDADE, CIDADE conecta com UF, UF conecta com PAIS.',
    codigoExemplo: 'SELECT P.PessoaNome, C.CidadeNome, U.UFNome, PA.PaisNome\nFROM PESSOA P\nINNER JOIN CIDADE C ON P.CidadeCod = C.CidadeCod\nINNER JOIN UNIDADE_FEDERATIVA U ON C.UFSigla = U.UFSigla\nINNER JOIN PAIS PA ON U.PaisCod = PA.PaisCod;',
  },
];

export const BD_NP2_SIMULADO_QUESTIONS: Np2SimuladoQuestion[] = [
  {
    id: 1,
    questionNumber: 1,
    title: 'Integridade Referencial (Foreign Key)',
    category: 'DDL & Restrições',
    enunciado:
      'Na criação do banco de dados oficial da aula, foi executado o seguinte comando DDL:\n\nALTER TABLE CIDADE\nADD CONSTRAINT FK_Cidade_UF\nFOREIGN KEY (UFSigla) REFERENCES UNIDADE_FEDERATIVA (UFSigla);\n\nQual é o efeito imediato dessa instrução?',
    codeSnippet:
      'ALTER TABLE CIDADE\nADD CONSTRAINT FK_Cidade_UF\nFOREIGN KEY (UFSigla) REFERENCES UNIDADE_FEDERATIVA (UFSigla);',
    options: [
      {
        id: 'a',
        text: 'Permite cadastrar em CIDADE apenas siglas de UF que já estejam previamente cadastradas na tabela UNIDADE_FEDERATIVA.',
      },
      {
        id: 'b',
        text: 'Cria uma cópia física da tabela UNIDADE_FEDERATIVA dentro da tabela CIDADE.',
      },
      {
        id: 'c',
        text: 'Exclui automaticamente todas as cidades caso a tabela de UFs seja alterada.',
      },
      {
        id: 'd',
        text: 'Impede a criação de chaves primárias na tabela CIDADE.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'A constraint FOREIGN KEY estabelece integridade referencial entre a tabela filha (CIDADE) e a tabela pai (UNIDADE_FEDERATIVA). Ela impede a inserção de siglas inexistentes e bloqueia exclusões orfãs.',
    decorebaRapida: 'FK garante que a chave estrangeira exista na tabela pai referenciada!',
  },
  {
    id: 2,
    questionNumber: 2,
    title: 'Operador de Busca Parcial (LIKE)',
    category: 'DQL & Filtros',
    enunciado:
      'O professor solicitou uma consulta para listar todas as pessoas cujo nome tenha a letra "A" como SEGUNDA letra (ex: Carlos, Gabriel, Mariana). Qual filtro WHERE produz esse resultado exato?',
    options: [
      { id: 'a', text: "WHERE PessoaNome LIKE '_A%'" },
      { id: 'b', text: "WHERE PessoaNome LIKE '%A%'" },
      { id: 'c', text: "WHERE PessoaNome LIKE 'A_%'" },
      { id: 'd', text: "WHERE PessoaNome = '_A%'" },
    ],
    correctAnswer: 'a',
    explanation:
      'No SQL Server, o caractere sublinhado (_) representa exatamente 1 caractere qualquer. Portanto, "_A%" significa: primeiro caractere qualquer, segundo caractere letra A, seguido de zero ou mais caracteres (%).',
    decorebaRapida: '_ = 1 caractere exato | % = qualquer quantidade.',
  },
  {
    id: 3,
    questionNumber: 3,
    title: 'Tratamento de Nulos (IS NULL)',
    category: 'DQL & Filtros',
    enunciado:
      'Um desenvolvedor executou a seguinte consulta esperando encontrar produtos sem data de validade:\n\nSELECT ProdNome FROM PRODUTO WHERE ProdDataValidMax = NULL;\n\nA consulta retornou 0 registros, embora existam produtos sem validade. Por que isso ocorreu?',
    codeSnippet: 'SELECT ProdNome FROM PRODUTO WHERE ProdDataValidMax = NULL;',
    options: [
      {
        id: 'a',
        text: 'O operador = compara valores; como NULL é ausência de valor, o resultado da igualdade é UNKNOWN. Deve-se usar IS NULL.',
      },
      {
        id: 'b',
        text: 'O nome da tabela PRODUTO deve ser escrito sempre em letras minúsculas no SQL Server.',
      },
      {
        id: 'c',
        text: 'A coluna ProdDataValidMax não aceita valores nulos por padrão DDL.',
      },
      {
        id: 'd',
        text: 'O SQL Server exige aspas simples em volta da palavra NULL (\'NULL\').',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'NULL representa a ausência de valor no modelo relacional. Qualquer teste de igualdade (= NULL ou <> NULL) resulta no valor lógico UNKNOWN (três valores lógicos do SQL: TRUE, FALSE, UNKNOWN). Para testar nulos, utiliza-se IS NULL ou IS NOT NULL.',
    decorebaRapida: 'Nunca use = NULL! Sempre use IS NULL ou IS NOT NULL.',
  },
  {
    id: 4,
    questionNumber: 4,
    title: 'Função de Tamanho de Texto (LEN)',
    category: 'Funções de Linha Única',
    enunciado:
      'Considere o seguinte comando no SQL Server:\n\nSELECT LEN(\'BANCO DE DADOS  \') AS Resultado;\n\nQual valor numérico inteiro é retornado pelo SQL Server?',
    codeSnippet: "SELECT LEN('BANCO DE DADOS  ') AS Resultado;",
    options: [
      { id: 'a', text: '14' },
      { id: 'b', text: '16' },
      { id: 'c', text: '12' },
      { id: 'd', text: 'NULL' },
    ],
    correctAnswer: 'a',
    explanation:
      'A função LEN(string) no SQL Server conta o número de caracteres e DESCONSIDERA os espaços em branco à direita (trailing blanks). A frase "BANCO DE DADOS" tem exatamente 14 caracteres (12 letras + 2 espaços internos). Os 2 espaços finais são ignorados por LEN().',
    decorebaRapida: 'LEN() ignora espaços à direita! "BANCO DE DADOS  " = 14.',
  },
  {
    id: 5,
    questionNumber: 5,
    title: 'Diferença entre Datas (DATEDIFF)',
    category: 'Funções de Linha Única',
    enunciado:
      'Observe a expressão abaixo:\n\nSELECT DATEDIFF(YEAR, \'2000-12-31\', \'2026-01-01\') AS Dif;\n\nQual é o valor retornado pela função?',
    codeSnippet: "SELECT DATEDIFF(YEAR, '2000-12-31', '2026-01-01') AS Dif;",
    options: [
      { id: 'a', text: '26' },
      { id: 'b', text: '25' },
      { id: 'c', text: '25.5' },
      { id: 'd', text: '312' },
    ],
    correctAnswer: 'a',
    explanation:
      'DATEDIFF conta o número de limites de data (fronteiras) cruzados na unidade solicitada (YEAR). Ele calcula 2026 - 2000 = 26, sem considerar se os 365 dias do ano foram completados.',
    decorebaRapida: 'DATEDIFF(YEAR, d1, d2) faz ano(d2) - ano(d1) = 2026 - 2000 = 26.',
  },
  {
    id: 6,
    questionNumber: 6,
    title: 'Substituição com ISNULL',
    category: 'ISNULL & CASE WHEN',
    enunciado:
      'A tabela PRODUTO possui itens que não vencem (ProdDataValidMax com valor NULL). Deseja-se exibir a data de validade, mas se for nula, exibir a data "2099-12-31". Qual sintaxe está correta?',
    options: [
      {
        id: 'a',
        text: "SELECT ProdNome, ISNULL(ProdDataValidMax, '2099-12-31') FROM PRODUTO;",
      },
      {
        id: 'b',
        text: "SELECT ProdNome, NVL(ProdDataValidMax, '2099-12-31') FROM PRODUTO;",
      },
      {
        id: 'c',
        text: "SELECT ProdNome, IFNULL(ProdDataValidMax, '2099-12-31') FROM PRODUTO;",
      },
      {
        id: 'd',
        text: "SELECT ProdNome WHERE ProdDataValidMax = '2099-12-31' FROM PRODUTO;",
      },
    ],
    correctAnswer: 'a',
    explanation:
      'No SQL Server (T-SQL do Prof. Flávio), a função nativa é ISNULL(coluna, valor_se_nulo). NVL é exclusivo do Oracle e IFNULL pertence ao MySQL.',
    decorebaRapida: 'SQL Server usa ISNULL(coluna, substituto).',
  },
  {
    id: 7,
    questionNumber: 7,
    title: 'Lógica Condicional com CASE WHEN',
    category: 'ISNULL & CASE WHEN',
    enunciado:
      'Qual das seguintes alternativas apresenta uma estrutura sintática VÁLIDA para o comando CASE WHEN no SQL Server?',
    options: [
      {
        id: 'a',
        text: "SELECT CASE WHEN ProdPreco > 100 THEN 'Alto' ELSE 'Normal' END FROM PRODUTO;",
      },
      {
        id: 'b',
        text: "SELECT CASE WHEN ProdPreco > 100 DO 'Alto' ELSE DO 'Normal' STOP FROM PRODUTO;",
      },
      {
        id: 'c',
        text: "SELECT IF (ProdPreco > 100, 'Alto', 'Normal') FROM PRODUTO;",
      },
      {
        id: 'd',
        text: "SELECT CASE (ProdPreco > 100) THEN 'Alto' DEFAULT 'Normal' FROM PRODUTO;",
      },
    ],
    correctAnswer: 'a',
    explanation:
      'No padrão ANSI SQL e no SQL Server, a sintaxe obrigatória é: CASE WHEN <condicao> THEN <valor> [ELSE <padrao>] END. O termo final END é mandatório.',
    decorebaRapida: 'CASE WHEN ... THEN ... ELSE ... END.',
  },
  {
    id: 8,
    questionNumber: 8,
    title: 'Junção de Tabelas (INNER JOIN)',
    category: 'JOINs & Junções',
    enunciado:
      'Considere as tabelas PESSOA e CIDADE, onde PESSOA possui a coluna CidadeCod como FK referenciando CidadeCod em CIDADE. Qual comando lista o nome da pessoa e o nome de sua cidade correspondente?',
    options: [
      {
        id: 'a',
        text: 'SELECT P.PessoaNome, C.CidadeNome FROM PESSOA P INNER JOIN CIDADE C ON P.CidadeCod = C.CidadeCod;',
      },
      {
        id: 'b',
        text: 'SELECT P.PessoaNome, C.CidadeNome FROM PESSOA P INNER JOIN CIDADE C WHERE P.CidadeCod = C.CidadeCod;',
      },
      {
        id: 'c',
        text: 'SELECT P.PessoaNome, C.CidadeNome FROM PESSOA P JOIN CIDADE C ON P.PessoaCod = C.CidadeCod;',
      },
      {
        id: 'd',
        text: 'SELECT PessoaNome, CidadeNome MERGE PESSOA WITH CIDADE;',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'O INNER JOIN conecta as duas tabelas através da cláusula ON, comparando a chave estrangeira (P.CidadeCod) com a chave primária da tabela relacionada (C.CidadeCod).',
    decorebaRapida: 'FROM PESSOA P INNER JOIN CIDADE C ON P.CidadeCod = C.CidadeCod.',
  },
  {
    id: 9,
    questionNumber: 9,
    title: 'Junções em Cadeia (Múltiplos JOINs)',
    category: 'JOINs & Junções',
    enunciado:
      'Para exibir o nome do fornecedor (tabela PESSOA) de um produto (tabela PRODUTO) e a cidade desse fornecedor (tabela CIDADE), qual estrutura de FROM é correta?',
    options: [
      {
        id: 'a',
        text: 'FROM PRODUTO PR INNER JOIN PESSOA P ON PR.PessoaCodFornec = P.PessoaCod INNER JOIN CIDADE C ON P.CidadeCod = C.CidadeCod',
      },
      {
        id: 'b',
        text: 'FROM PRODUTO PR INNER JOIN CIDADE C ON PR.ProdCod = C.CidadeCod INNER JOIN PESSOA P ON C.CidadeCod = P.CidadeCod',
      },
      {
        id: 'c',
        text: 'FROM PRODUTO PR, PESSOA P, CIDADE C ON PR.ProdCod = P.PessoaCod',
      },
      {
        id: 'd',
        text: 'FROM PRODUTO PR INNER JOIN PESSOA P INNER JOIN CIDADE C ON PR.ProdCod = C.CidadeCod',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'PRODUTO se conecta a PESSOA através de PessoaCodFornec = PessoaCod. Em seguida, PESSOA se conecta a CIDADE através de CidadeCod = CidadeCod. Cada INNER JOIN exige sua respectiva cláusula ON.',
    decorebaRapida: 'Cada INNER JOIN deve ter seu próprio ON especificando a ligação PK/FK.',
  },
  {
    id: 10,
    questionNumber: 10,
    title: 'Eliminação de Duplicatas (DISTINCT)',
    category: 'DQL & Filtros',
    enunciado:
      'Uma consulta executada como "SELECT CidadeCod FROM PESSOA" retornou 500 linhas com códigos repetidos. Qual cláusula deve ser inserida imediatamente após o SELECT para retornar apenas os códigos distintos sem repetição?',
    options: [
      { id: 'a', text: 'DISTINCT' },
      { id: 'b', text: 'UNIQUE' },
      { id: 'c', text: 'GROUP ONLY' },
      { id: 'd', text: 'FILTER DIFFERENT' },
    ],
    correctAnswer: 'a',
    explanation:
      'A cláusula DISTINCT no SELECT elimina linhas duplicadas do conjunto de resultados, retornando cada valor único apenas uma vez.',
    decorebaRapida: 'SELECT DISTINCT Coluna FROM Tabela;',
  },
];
