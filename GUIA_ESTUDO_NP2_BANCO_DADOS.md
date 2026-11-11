# GUIA DEFINITIVO NP2: CONSULTAS SQL & MODELO RELACIONAL
**UNIP — Análise e Desenvolvimento de Sistemas • Prova Oficial NP2**  
**Disciplina:** Banco de Dados & Modelagem Relacional (SQL Server / T-SQL)  
**Material:** Análise Completa das Questões da Prova, Gabarito Comentado e Modelo Lógico

---

## SUMÁRIO RÁPIDO DO GABARITO OFICIAL

| Questão | Assunto da Consulta | Resposta Oficial | Gatilho Mental para a Prova |
|:---:|---|:---:|---|
| **1** | Junção PESSOA-CIDADE e filtro SP | **B** | **SELECT PESSOA.PessoaNome ... PESSOA.CidCod = CIDADE.CidCod AND CIDADE.UfSigla = 'SP'** (sem junção vira produto cartesiano; coluna chama UfSigla, não "UF") |
| **2** | 3 Tabelas: PEDIDO ➔ PESSOA ➔ CIDADE (RJ em Março/2026) | **D** | **Duas junções obrigatórias + MONTH=3 + YEAR=2026 + UfSigla='RJ'** (PEDIDO não liga direto com CIDADE; '2026-06-31' não existe) |
| **3** | ORDER BY duplo: Valor DESC e Data ASC | **A** | **ORDER BY PEDIDOVALORTOTAL DESC, PEDIDODATACAD ASC** (primeiro critério DESC, desempate ASC, com junção PEDIDO.PESSOACOD = PESSOA.PESSOACOD) |
| **4** | LIKE 'A%' e ordem WHERE antes de ORDER BY | **D** | **WHERE nome LIKE 'A%' ORDER BY nome ASC** (WHERE SEMPRE vem antes do ORDER BY; o '=' não interpreta '%' como curinga) |

---

## O MODELO LÓGICO OFICIAL DA PROVA

Todas as questões da prova foram formuladas utilizando a estrutura relacional abaixo:

```
[ PAIS ] (1,1) ───────< (0,n) [ UNIDADE_FEDERATIVA ]
  PaisCod (PK)                  UfSigla (PK)
  PaisNome                      UfNome
                                PaisCod (FK)
                                      │ (1,1)
                                      ▼ (0,n)
                                 [ CIDADE ]
                                   CidCod (PK)
                                   CidNome
                                   UfSigla (FK)
                                      │ (1,1)
                                      ▼ (0,n)
                                 [ PESSOA ] (1,1) ───────< (0,n) [ PRODUTO ]
                                   PessoaCod (PK)                  ProdCod (PK)
                                   PessoaNome                      ProdNome
                                   PessoaDataExpCad                ProdDataValidMax
                                   CidCod (FK)                     PessoaCodFornec (FK)
                                      │ (1,1)                            │ (0,1)
                                      ▼ (0,n)                            ▼ (0,n)
                                 [ PEDIDO ] (1,1) ───────< (1,n) [ ITEM_PEDIDO ]
                                   PedidoNum (PK)                  PedidoNum (PK/FK)
                                   PedidoDataCad                   ItemPedidoSeq (PK)
                                   PedidoValorTotal                ItemPedidoValor
                                   PessoaCod (FK)                  ProdCod (FK)
```

### ROTA DE JUNÇÃO MAIS COBRADA EM PROVA:
$$\text{PEDIDO}.\text{PessoaCod} = \text{PESSOA}.\text{PessoaCod} \;\longrightarrow\; \text{PESSOA}.\text{CidCod} = \text{CIDADE}.\text{CidCod} \;\longrightarrow\; \text{CIDADE}.\text{UfSigla}$$

---

## ANÁLISE DETALHADA QUESTÃO POR QUESTÃO

---

### 📌 QUESTÃO 1 (2,0 PONTOS)
**Assunto:** SELECT com junção (JOIN implícito no WHERE) e filtro por estado.  
**Enunciado:** *Escreva uma consulta SQL que recupere os nomes das pessoas que moram no estado de São Paulo (SP):*

#### Código Correto (Alternativa B):
```sql
SELECT PESSOA.PessoaNome
FROM   PESSOA, CIDADE
WHERE  PESSOA.CidCod = CIDADE.CidCod
AND    CIDADE.UfSigla = 'SP';
```

#### Justificativa Técnica da Banca:
1. **Junção Relacional:** Conecta a chave estrangeira de `PESSOA` (`CidCod`) com a chave primária de `CIDADE` (`CidCod`).
2. **Filtro de Estado:** A tabela `CIDADE` possui o campo `UfSigla`, filtrando rigorosamente `'SP'`.
3. **Projeção:** Retorna o campo `PessoaNome` da tabela `PESSOA`.

#### Análise das Pegadinhas (Por que as outras estão erradas):
- **A:** `WHERE UF = 'SP'` ➔ **Erro duplo:** Não faz a junção entre `PESSOA` e `CIDADE` (gera **produto cartesiano**) e a coluna `"UF"` simplesmente **não existe** no modelo (chama-se `UfSigla`).
- **C:** `SELECT CidNome ...` ➔ A junção e o filtro estão certos, mas o comando projeta o nome da **cidade** (`CidNome`), quando o enunciado pediu o nome das **pessoas** (`PessoaNome`).
- **D:** `WHERE PESSOA.CidCod = 'SP'` ➔ Compara uma coluna de código numérico inteiro (`INTEGER`) com uma string (`'SP'`), projeta todas as colunas (`*`) e não faz a ligação entre as tabelas.

> 💡 **Gatilho de Prova:** Junção `PESSOA.CidCod = CIDADE.CidCod` + filtro `CIDADE.UfSigla = 'SP'` + projeção `PESSOA.PessoaNome`.

---

### 📌 QUESTÃO 2 (2,0 PONTOS)
**Assunto:** Junção entre três tabelas e filtro por data (MONTH e YEAR).  
**Enunciado:** *Escreva uma consulta SQL que recupere todos os pedidos do Rio de Janeiro (RJ) com data de cadastro em março de 2026:*

#### Código Correto (Alternativa D):
```sql
SELECT PEDIDONUM, PEDIDODATACAD, PEDIDOVALORTOTAL
FROM   PEDIDO, PESSOA, CIDADE
WHERE  PEDIDO.PESSOACOD = PESSOA.PESSOACOD
AND    PESSOA.CidCod = CIDADE.CidCod
AND    CIDADE.UfSigla = 'RJ'
AND    MONTH(PEDIDODATACAD) = 3
AND    YEAR(PEDIDODATACAD) = 2026;
```

#### Justificativa Técnica da Banca:
1. **Caminho em Cadeia de 3 Tabelas:** A tabela `PEDIDO` não possui chave de cidade; ela se conecta a `PESSOA` (`PEDIDO.PESSOACOD = PESSOA.PESSOACOD`), e `PESSOA` se conecta a `CIDADE` (`PESSOA.CidCod = CIDADE.CidCod`).
2. **Filtro Geográfico:** `CIDADE.UfSigla = 'RJ'`.
3. **Filtro Temporal Exato:** As funções nativas `MONTH(PEDIDODATACAD) = 3` e `YEAR(PEDIDODATACAD) = 2026` garantem exatamente o mês de março de 2026.

#### Análise das Pegadinhas (Por que as outras estão erradas):
- **A:** Não possui as duas cláusulas de junção (gera produto cartesiano de todos os pedidos com todas as pessoas e cidades) e não filtra o ano (`YEAR`), trazendo março de qualquer ano.
- **B:** Não filtra o estado (RJ), o intervalo vai até junho (não apenas março) e a data `'2026-06-31'` é **inválida** (junho tem apenas 30 dias).
- **C:** Faz `FROM PEDIDO, CIDADE` sem passar por `PESSOA` (não existe chave direta entre Pedido e Cidade) e compara um campo `DATE` diretamente com a string `'03/2026'`, o que falha no SQL Server.

> 💡 **Gatilho de Prova:** 3 tabelas exigem **2 condições de junção** (`PEDIDO-PESSOA` e `PESSOA-CIDADE`) + `MONTH=3` e `YEAR=2026`.

---

### 📌 QUESTÃO 3 (2,0 PONTOS)
**Assunto:** ORDER BY com múltiplos critérios (DESC e ASC) e junção.  
**Enunciado:** *Escreva uma consulta SQL que recupere o número do pedido, o nome da pessoa e o valor total, ordenados decrescentemente pelo valor total e, em empate, pela data do pedido crescente:*

#### Código Correto (Alternativa A):
```sql
SELECT   PEDIDO.PEDIDONUM, PessoaNome,
         PEDIDO.PEDIDOVALORTOTAL, PEDIDO.PEDIDODATACAD
FROM     PEDIDO, PESSOA
WHERE    PEDIDO.PESSOACOD = PESSOA.PESSOACOD
ORDER BY PEDIDO.PEDIDOVALORTOTAL DESC, PEDIDO.PEDIDODATACAD ASC;
```

#### Justificativa Técnica da Banca:
1. **Junção Relacional:** Liga `PEDIDO` a `PESSOA` através de `PEDIDO.PESSOACOD = PESSOA.PESSOACOD`.
2. **Critério 1:** `PEDIDOVALORTOTAL DESC` (ordena do maior valor para o menor).
3. **Critério 2 (Desempate):** `PEDIDODATACAD ASC` (se dois pedidos tiverem o mesmo valor, desempata pela data do mais antigo para o mais novo).

#### Análise das Pegadinhas (Por que as outras estão erradas):
- **B:** Não faz a junção relacional (produto cartesiano), omite o valor total e ordena apenas por `PEDIDONUM`.
- **C:** Sem condição de junção; ordena o valor de forma crescente (`ASC` por padrão quando omitido) e a data decrescente, o exato inverso do solicitado.
- **D:** `WHERE 1=1` não conecta tabelas; `ORDER BY 3 DESC, 4 ASC` tenta ordenar pela 3ª e 4ª coluna, mas a instrução `SELECT` só pediu uma única coluna (`PEDIDONUM`).

> 💡 **Gatilho de Prova:** Primeiro critério `DESC`, vírgula, segundo critério `ASC`, com junção `PEDIDO.PESSOACOD = PESSOA.PESSOACOD`.

---

### 📌 QUESTÃO 4 (2,0 PONTOS)
**Assunto:** Filtro com LIKE e ordem obrigatória das cláusulas (WHERE antes de ORDER BY).  
**Enunciado:** *Escreva uma consulta SQL que recupere todas as colunas da tabela de clientes para os clientes cujo nome começa com a letra "A", exibindo os resultados ordenados alfabeticamente pelo nome (de A a Z):*

#### Código Correto (Alternativa D):
```sql
SELECT * FROM clientes
WHERE nome LIKE 'A%'
ORDER BY nome ASC;
```

#### Justificativa Técnica da Banca:
1. **Ordem de Execução SQL:** A cláusula `WHERE` filtra os registros **antes** de ordenar. O `ORDER BY` vem sempre no final da consulta.
2. **Operador LIKE com Curinga:** `LIKE 'A%'` significa: primeiro caractere é a letra "A", seguido de zero ou mais caracteres quaisquer (`%`).
3. **Ordenação Alfabética:** `ORDER BY nome ASC` (de A a Z).

#### Análise das Pegadinhas (Por que as outras estão erradas):
- **A:** `ORDER BY nome LIKE 'A%' ASC` ➔ Colocou o `LIKE` dentro do `ORDER BY`, não filtrando nenhum registro.
- **B:** `WHERE nome = 'A%'` ➔ O operador de igualdade (`=`) **não interpreta** o caractere `%` como curinga. Só retornaria registros se o cliente se chamasse literalmente `"A%"`.
- **C:** `ORDER BY ... WHERE ...` ➔ **Erro fatal de sintaxe SQL**: colocou o `ORDER BY` antes do `WHERE`. O `WHERE` filtra primeiro, o `ORDER BY` ordena depois.

> 💡 **Gatilho de Prova:** `WHERE nome LIKE 'A%'` vem **ANTES** de `ORDER BY nome ASC`.

---

## REGRAS DE OURO DO SQL SERVER PARA GABARITAR A NP2

1. **A Armadilha do Produto Cartesiano:**
   - Colocou $N$ tabelas no `FROM`? Você precisa de no mínimo $N - 1$ condições de junção no `WHERE` ou no `ON`.
   - Se esquecer a condição, o banco multiplica todas as linhas ($N \times M$), gerando notas zero em provas.
2. **Operador LIKE e Curingas:**
   - `%` = Zero, um ou vários caracteres quaisquer.
   - `_` = Exatamente UM único caractere em posição específica.
   - `=` **nunca** funciona com curingas.
3. **Ordem Sagrada do SELECT:**
   $$\text{SELECT} \;\longrightarrow\; \text{FROM} \;\longrightarrow\; \text{WHERE} \;\longrightarrow\; \text{GROUP BY} \;\longrightarrow\; \text{HAVING} \;\longrightarrow\; \text{ORDER BY}$$
4. **Funções de Data:**
   - `MONTH(data)`: Retorna o mês inteiro (1 a 12).
   - `YEAR(data)`: Retorna o ano inteiro (ex: 2026).
   - `DATEDIFF(DAY, dt_inicio, dt_fim)`: Retorna dias decorridos.
5. **Nulos nunca se comparam com "=":**
   - `WHERE campo = NULL` ➔ **ERRADO** (retorna 0 linhas).
   - `WHERE campo IS NULL` ou `IS NOT NULL` ➔ **CORRETO**.
