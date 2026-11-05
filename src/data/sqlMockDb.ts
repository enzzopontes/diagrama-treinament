// Banco de dados simulado baseado fielmente no Script_Flavio_Volpon.sql da UNIP (Prof. Me. Flávio Volpon)
import alasql from 'alasql';

export interface TableColumn {
  name: string;
  type: string;
  isPk?: boolean;
  isFk?: boolean;
  fkRef?: string;
  nullable?: boolean;
}

export interface TableSchema {
  tableName: string;
  description: string;
  columns: TableColumn[];
}

export const MOCK_DATABASE_SCHEMA: TableSchema[] = [
  {
    tableName: 'PAIS',
    description: 'Cadastro de Países',
    columns: [
      { name: 'PaisCod', type: 'INT', isPk: true, nullable: false },
      { name: 'PaisNome', type: 'VARCHAR(255)', nullable: false },
    ],
  },
  {
    tableName: 'UNIDADE_FEDERATIVA',
    description: 'Estados vinculados a um País',
    columns: [
      { name: 'UfSigla', type: 'VARCHAR(2)', isPk: true, nullable: false },
      { name: 'UfNome', type: 'VARCHAR(255)', nullable: false },
      { name: 'PaisCod', type: 'INT', isFk: true, fkRef: 'PAIS(PaisCod)', nullable: false },
    ],
  },
  {
    tableName: 'CIDADE',
    description: 'Cidades vinculadas a um Estado',
    columns: [
      { name: 'CidCod', type: 'INT', isPk: true, nullable: false },
      { name: 'CidNome', type: 'VARCHAR(255)', nullable: false },
      { name: 'UfSigla', type: 'VARCHAR(2)', isFk: true, fkRef: 'UNIDADE_FEDERATIVA(UfSigla)', nullable: false },
    ],
  },
  {
    tableName: 'PESSOA',
    description: 'Pessoas e fornecedores residentes em uma Cidade',
    columns: [
      { name: 'PessoaCod', type: 'INT', isPk: true, nullable: false },
      { name: 'PessoaNome', type: 'VARCHAR(255)', nullable: false },
      { name: 'PessoaDataExpCad', type: 'DATETIME', nullable: true },
      { name: 'CidCod', type: 'INT', isFk: true, fkRef: 'CIDADE(CidCod)', nullable: false },
    ],
  },
  {
    tableName: 'PRODUTO',
    description: 'Produtos fornecidos por uma Pessoa',
    columns: [
      { name: 'ProdCod', type: 'INT', isPk: true, nullable: false },
      { name: 'ProdNome', type: 'VARCHAR(255)', nullable: false },
      { name: 'PessoaCodFornec', type: 'INT', isFk: true, fkRef: 'PESSOA(PessoaCod)', nullable: false },
      { name: 'ProdDataValidMax', type: 'DATETIME', nullable: true },
    ],
  },
];

// Inicialização das tabelas e dados no AlaSQL
export function initMockDatabase() {
  try {
    // Configurações e funções customizadas compatíveis com SQL Server
    const fn = alasql.fn as Record<string, (...args: any[]) => any>;
    fn.ISNULL = (val: any, fallback: any) => (val === null || val === undefined ? fallback : val);
    fn.GETDATE = () => new Date();
    fn.LEN = (str: any) => (str ? String(str).length : 0);
    fn.LENGTH = (str: any) => (str ? String(str).length : 0);
    fn.DAY = (dt: any) => new Date(dt).getDate();
    fn.MONTH = (dt: any) => new Date(dt).getMonth() + 1;
    fn.YEAR = (dt: any) => new Date(dt).getFullYear();
    fn.DATENAME = (part: any, dt: any) => {
      const d = new Date(dt);
      if (String(part).toLowerCase().includes('month')) {
        return d.toLocaleString('pt-BR', { month: 'long' });
      }
      return d.toLocaleDateString('pt-BR');
    };

    // Drop e recriação do esquema
    alasql(`
      DROP TABLE IF EXISTS PRODUTO;
      DROP TABLE IF EXISTS PESSOA;
      DROP TABLE IF EXISTS CIDADE;
      DROP TABLE IF EXISTS UNIDADE_FEDERATIVA;
      DROP TABLE IF EXISTS PAIS;

      CREATE TABLE PAIS (
        PaisCod INT PRIMARY KEY,
        PaisNome STRING
      );

      CREATE TABLE UNIDADE_FEDERATIVA (
        UfSigla STRING PRIMARY KEY,
        UfNome STRING,
        PaisCod INT
      );

      CREATE TABLE CIDADE (
        CidCod INT PRIMARY KEY,
        CidNome STRING,
        UfSigla STRING
      );

      CREATE TABLE PESSOA (
        PessoaCod INT PRIMARY KEY,
        PessoaNome STRING,
        PessoaDataExpCad DATE,
        CidCod INT
      );

      CREATE TABLE PRODUTO (
        ProdCod INT PRIMARY KEY,
        ProdNome STRING,
        PessoaCodFornec INT,
        ProdDataValidMax DATE
      );
    `);

    // Inserção dos dados realistas da aula do Prof. Flávio
    alasql(`
      INSERT INTO PAIS VALUES
        (1, 'Brasil'),
        (2, 'Argentina'),
        (3, 'Uruguai');

      INSERT INTO UNIDADE_FEDERATIVA VALUES
        ('SP', 'São Paulo', 1),
        ('RJ', 'Rio de Janeiro', 1),
        ('MG', 'Minas Gerais', 1),
        ('PR', 'Paraná', 1),
        ('BA', 'Bahia', 1);

      INSERT INTO CIDADE VALUES
        (1, 'São Paulo', 'SP'),
        (2, 'Campinas', 'SP'),
        (3, 'Santos', 'SP'),
        (4, 'Rio de Janeiro', 'RJ'),
        (5, 'Niterói', 'RJ'),
        (6, 'Belo Horizonte', 'MG'),
        (7, 'Uberlândia', 'MG'),
        (8, 'Curitiba', 'PR'),
        (9, 'Salvador', 'BA');

      INSERT INTO PESSOA VALUES
        (1, 'Ana Clara Silva', '2027-12-31', 1),
        (2, 'Carlos Eduardo Souza', NULL, 2),
        (3, 'Beatriz Santos', '2026-06-30', 3),
        (4, 'Daniel Ferreira', NULL, 4),
        (5, 'Eduarda Lima', '2028-01-15', 6),
        (6, 'Felipe Rocha', '2025-11-20', 8),
        (7, 'Gabriela Alves', NULL, 9);

      INSERT INTO PRODUTO VALUES
        (101, 'Café Torrado Especial', 1, '2027-10-15'),
        (102, 'Leite Integral Pasteurizado', 1, '2026-01-10'),
        (103, 'Queijo Minas Frescal', 5, '2026-03-22'),
        (104, 'Açúcar Orgânico Cristal', 2, '2028-05-30'),
        (105, 'Biscoito Amanteigado Caseiro', 3, '2025-12-01'),
        (106, 'Suco Natural de Laranja', 6, '2026-04-18');
    `);

    return true;
  } catch (err) {
    console.error('Erro ao inicializar mock database:', err);
    return false;
  }
}

// Execução segura de consulta do usuário
export function executeQuery(sql: string): {
  success: boolean;
  rows?: Record<string, unknown>[];
  columns?: string[];
  rowCount?: number;
  error?: string;
  executionTimeMs?: number;
} {
  const start = performance.now();
  try {
    const cleanSql = sql.trim().replace(/;+$/, '');
    if (!cleanSql) {
      return { success: false, error: 'Digite uma consulta SQL para executar.' };
    }

    // Executa no AlaSQL
    const result = alasql(cleanSql);
    const end = performance.now();

    if (!Array.isArray(result)) {
      return {
        success: true,
        rows: [],
        columns: [],
        rowCount: 0,
        executionTimeMs: Math.round(end - start),
      };
    }

    const rows = result as Record<string, unknown>[];
    const columns = rows.length > 0 ? Object.keys(rows[0]) : [];

    return {
      success: true,
      rows,
      columns,
      rowCount: rows.length,
      executionTimeMs: Math.round(end - start),
    };
  } catch (err: unknown) {
    return {
      success: false,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}
