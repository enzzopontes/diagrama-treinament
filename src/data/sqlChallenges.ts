// Questões e exercícios reais extraídos das Aulas 12, 14, 16 e 18 do Prof. Me. Flávio Volpon (UNIP)

export interface SqlChallenge {
  id: number;
  title: string;
  aulaOrigin: string;
  category: 'DQL Básico' | 'Funções de Linha' | 'Condicionais' | 'JOINs';
  difficulty: 'Fácil' | 'Médio' | 'Avançado';
  enunciado: string;
  hint: string;
  initialCode: string;
  expectedQuery: string;
  explanation: string;
}

export const SQL_CHALLENGES: SqlChallenge[] = [
  {
    id: 1,
    title: '1. Todas as Cidades Cadastradas',
    aulaOrigin: 'Aula 12 - Exercício 1',
    category: 'DQL Básico',
    difficulty: 'Fácil',
    enunciado: 'Faça uma consulta SQL que retorne todas as colunas de todas as Cidades da tabela CIDADE.',
    hint: 'Use o asterisco (*) para projetar todas as colunas.',
    initialCode: 'SELECT * FROM CIDADE;',
    expectedQuery: 'SELECT * FROM CIDADE',
    explanation: 'O caractere asterisco (*) no SELECT recupera todas as colunas da tabela especificada na cláusula FROM.',
  },
  {
    id: 2,
    title: '2. Somente Nomes das Cidades Ordenadas',
    aulaOrigin: 'Aula 12 - Exercício 2 & 4',
    category: 'DQL Básico',
    difficulty: 'Fácil',
    enunciado: 'Faça uma consulta SQL que retorne somente a coluna CidNome de todas as Cidades, ordenadas alfabeticamente (A a Z).',
    hint: 'Projete apenas CidNome e utilize a cláusula ORDER BY CidNome ASC.',
    initialCode: 'SELECT CidNome FROM CIDADE ORDER BY CidNome;',
    expectedQuery: 'SELECT CidNome FROM CIDADE ORDER BY CidNome ASC',
    explanation: 'Ao especificar a coluna desejada (CidNome) e adicionar ORDER BY, os registros são classificados em ordem ascendente.',
  },
  {
    id: 3,
    title: '3. Cidades do Estado de São Paulo (SP)',
    aulaOrigin: 'Aula 12 - Exercício 5',
    category: 'DQL Básico',
    difficulty: 'Fácil',
    enunciado: 'Faça uma consulta SQL que retorne o nome de todas as cidades (CidNome) que pertencem ao estado com sigla "SP".',
    hint: 'Filtre com a cláusula WHERE UfSigla = \'SP\'.',
    initialCode: "SELECT CidNome FROM CIDADE WHERE UfSigla = 'SP';",
    expectedQuery: "SELECT CidNome FROM CIDADE WHERE UfSigla = 'SP'",
    explanation: 'A cláusula WHERE aplica o predicado booleano filtrando estritamente as tuplas onde UfSigla é igual a \'SP\'.',
  },
  {
    id: 4,
    title: '4. Nomes em Letras Maiúsculas (UPPER)',
    aulaOrigin: 'Aula 14 - Exercício 2',
    category: 'Funções de Linha',
    difficulty: 'Fácil',
    enunciado: 'Faça uma consulta SQL que retorne o nome de todas as Cidades com os caracteres convertidos para letras maiúsculas.',
    hint: 'Utilize a função de linha única UPPER(CidNome).',
    initialCode: 'SELECT UPPER(CidNome) AS CidadeMaiuscula FROM CIDADE;',
    expectedQuery: 'SELECT UPPER(CidNome) AS CidadeMaiuscula FROM CIDADE',
    explanation: 'A função UPPER() converte todos os caracteres alfabéticos da cadeia em caixa alta.',
  },
  {
    id: 5,
    title: '5. Tamanho do Nome das Pessoas (LEN)',
    aulaOrigin: 'Aula 13 - Funções de Texto',
    category: 'Funções de Linha',
    difficulty: 'Médio',
    enunciado: 'Faça uma consulta que projete o nome da Pessoa (PessoaNome) e a quantidade de caracteres do nome utilizando a função LEN (com alias TamanhoNome).',
    hint: 'SELECT PessoaNome, LEN(PessoaNome) AS TamanhoNome FROM PESSOA;',
    initialCode: 'SELECT PessoaNome, LEN(PessoaNome) AS TamanhoNome FROM PESSOA;',
    expectedQuery: 'SELECT PessoaNome, LEN(PessoaNome) AS TamanhoNome FROM PESSOA',
    explanation: 'No SQL Server, a função LEN() retorna o número de caracteres de uma expressão de texto, ignorando espaços finais.',
  },
  {
    id: 6,
    title: '6. Tratamento de Valores Nulos com ISNULL',
    aulaOrigin: 'Aula 15 - Expressões Condicionais',
    category: 'Condicionais',
    difficulty: 'Médio',
    enunciado: 'Faça uma consulta na tabela PESSOA retornando o nome (PessoaNome) e a data de expiração (PessoaDataExpCad). Caso a data seja nula (NULL), exiba o texto "Sem Vencimento" utilizando a função ISNULL.',
    hint: "Use ISNULL(PessoaDataExpCad, 'Sem Vencimento') AS StatusExp.",
    initialCode: "SELECT PessoaNome, ISNULL(PessoaDataExpCad, 'Sem Vencimento') AS Validade FROM PESSOA;",
    expectedQuery: "SELECT PessoaNome, ISNULL(PessoaDataExpCad, 'Sem Vencimento') AS Validade FROM PESSOA",
    explanation: 'A função ISNULL(expressao, valor_substituto) substitui valores NULL por um valor alternativo seguro.',
  },
  {
    id: 7,
    title: '7. Relatório de Classificação com CASE WHEN',
    aulaOrigin: 'Aula 16 - Exercício Proposto 2',
    category: 'Condicionais',
    difficulty: 'Médio',
    enunciado: 'Faça uma consulta na tabela PRODUTO retornando ProdNome e uma coluna chamada "StatusValidade" usando CASE WHEN: se ProdDataValidMax for menor que 2026-11-05 (ou hoje), retorne \'Vencido\', caso contrário retorne \'Dentro do Prazo\'.',
    hint: "CASE WHEN ProdDataValidMax < '2026-11-05' THEN 'Vencido' ELSE 'Dentro do Prazo' END AS StatusValidade",
    initialCode: `SELECT ProdNome,
  CASE
    WHEN ProdDataValidMax < '2026-11-05' THEN 'Vencido'
    ELSE 'Dentro do Prazo'
  END AS StatusValidade
FROM PRODUTO;`,
    expectedQuery: `SELECT ProdNome,
  CASE
    WHEN ProdDataValidMax < '2026-11-05' THEN 'Vencido'
    ELSE 'Dentro do Prazo'
  END AS StatusValidade
FROM PRODUTO`,
    explanation: 'O comando CASE WHEN avalia condições em sequência e retorna o valor correspondente ao primeiro predicado verdadeiro.',
  },
  {
    id: 8,
    title: '8. Junção Cidades e Estados (INNER JOIN)',
    aulaOrigin: 'Aula 18 - Exercício 1 Oficial',
    category: 'JOINs',
    difficulty: 'Médio',
    enunciado: 'Desenvolva uma consulta que retorne o nome da Cidade (CidNome) e o nome do Estado (UfNome), relacionando as tabelas CIDADE e UNIDADE_FEDERATIVA através de INNER JOIN.',
    hint: 'Faça CIDADE C INNER JOIN UNIDADE_FEDERATIVA U ON C.UfSigla = U.UfSigla.',
    initialCode: `SELECT C.CidNome, U.UfNome
FROM CIDADE C
INNER JOIN UNIDADE_FEDERATIVA U ON C.UfSigla = U.UfSigla;`,
    expectedQuery: `SELECT C.CidNome, U.UfNome
FROM CIDADE C
INNER JOIN UNIDADE_FEDERATIVA U ON C.UfSigla = U.UfSigla`,
    explanation: 'O INNER JOIN conecta tuplas de duas tabelas com base na chave primária/estrangeira especificada na cláusula ON (UfSigla).',
  },
  {
    id: 9,
    title: '9. Pessoas e suas Cidades de Moradia',
    aulaOrigin: 'Aula 18 - Exercício 2 Oficial',
    category: 'JOINs',
    difficulty: 'Médio',
    enunciado: 'Faça uma consulta que relacione PESSOA e CIDADE, retornando o nome da Pessoa (PessoaNome), o nome da Cidade (CidNome) e a Sigla do Estado (UfSigla).',
    hint: 'INNER JOIN entre PESSOA P e CIDADE C em P.CidCod = C.CidCod.',
    initialCode: `SELECT P.PessoaNome, C.CidNome, C.UfSigla
FROM PESSOA P
INNER JOIN CIDADE C ON P.CidCod = C.CidCod;`,
    expectedQuery: `SELECT P.PessoaNome, C.CidNome, C.UfSigla
FROM PESSOA P
INNER JOIN CIDADE C ON P.CidCod = C.CidCod`,
    explanation: 'O relacionamento 1:N entre CIDADE e PESSOA permite visualizar a localização geográfica de cada pessoa registrada.',
  },
  {
    id: 10,
    title: '10. Produtos e seus Fornecedores',
    aulaOrigin: 'Aula 18 - Exercício 3 Oficial',
    category: 'JOINs',
    difficulty: 'Avançado',
    enunciado: 'Faça uma consulta que liste o nome do Produto (ProdNome) e o nome do seu Fornecedor (PessoaNome), relacionando PRODUTO e PESSOA.',
    hint: 'PRODUTO PR INNER JOIN PESSOA PE ON PR.PessoaCodFornec = PE.PessoaCod.',
    initialCode: `SELECT PR.ProdNome, PE.PessoaNome AS Fornecedor
FROM PRODUTO PR
INNER JOIN PESSOA PE ON PR.PessoaCodFornec = PE.PessoaCod;`,
    expectedQuery: `SELECT PR.ProdNome, PE.PessoaNome AS Fornecedor
FROM PRODUTO PR
INNER JOIN PESSOA PE ON PR.PessoaCodFornec = PE.PessoaCod`,
    explanation: 'A chave estrangeira PessoaCodFornec na tabela PRODUTO referencia a chave primária PessoaCod na tabela PESSOA.',
  },
  {
    id: 11,
    title: '11. Junção Tríplice: Produto, Fornecedor e Cidade',
    aulaOrigin: 'Aula 17 - Joins Múltiplos',
    category: 'JOINs',
    difficulty: 'Avançado',
    enunciado: 'Faça uma consulta relacionando 3 tabelas (PRODUTO, PESSOA e CIDADE). Projete o nome do Produto (ProdNome), o nome do Fornecedor (PessoaNome) e a Cidade de origem (CidNome).',
    hint: 'Faça dois INNER JOINs encadeados conectando PRODUTO -> PESSOA e PESSOA -> CIDADE.',
    initialCode: `SELECT PR.ProdNome, PE.PessoaNome AS Fornecedor, CI.CidNome AS Cidade
FROM PRODUTO PR
INNER JOIN PESSOA PE ON PR.PessoaCodFornec = PE.PessoaCod
INNER JOIN CIDADE CI ON PE.CidCod = CI.CidCod;`,
    expectedQuery: `SELECT PR.ProdNome, PE.PessoaNome AS Fornecedor, CI.CidNome AS Cidade
FROM PRODUTO PR
INNER JOIN PESSOA PE ON PR.PessoaCodFornec = PE.PessoaCod
INNER JOIN CIDADE CI ON PE.CidCod = CI.CidCod`,
    explanation: 'Múltiplos JOINs permitem navegar pela cadeia relacional para consolidar dados distribuídos no modelo normalizado.',
  },
];
