# GUIA DEFINITIVO NP2: ENGENHARIA DE SOFTWARE ÁGIL
**UNIP — Campus São José do Rio Preto • Curso: ADS**  
**Docente:** Prof. Valter Canhizares Filho  
**Material:** Cruzamento Oficial da Prova NP2 com as Lousas do Guia Visual (20/10 e 27/10)

---

## SUMÁRIO RÁPIDO DO GABARITO (PARA DECORAR DE CABEÇA)

| Questão | Assunto da Prova | Resposta Correta | Gatilho Mental Imediato |
|:---:|---|:---:|---|
| **1** | RNF e Decisões Arquiteturais | **A** | **Manutenibilidade** (único RNF da lista; MVC é padrão, visões não são requisitos) |
| **2** | MVC: Lógica e Banco de Dados | **C** | **Modelo (Model)** (concentra regras e banco; View exibe, Controller faz meio-campo) |
| **3** | Modelo 4+1 p/ Gerentes e Líderes | **B** | **Visão de Desenvolvimento** (divide código em pacotes/módulos para alocar devs) |
| **4** | Motivações da Evolução Contínua | **B** | **Correção de bugs, desempenho e segurança** (regra dos 3 pilares; fuja de "apenas") |
| **5** | V&V: Foco em Validação | **A** | **Testes de aceitação do usuário** ("produto certo?"; teste unitário é verificação) |
| **6** | Sequência do Processo de Mudança | **A** | **Proposta → Análise req → Atualiza req → Desenvolvimento** (jamais programa antes) |
| **7** | Manifesto Ágil: 4 Valores | **C** | **Responder a mudanças mais que seguir um plano** (atenção às inversões da banca) |
| **8** | Dilema do Sistema Legado | **E** | **Falta de documentação esconde regras no código** (alto risco de parar a empresa) |
| **9** | Scrum: Sprints Iterativas | **B** | **Ciclos iterativos onde código é desenvolvido, testado e refinado** (incremento pronto) |
| **10** | Refatoração x Reengenharia | **Diss.** | **Refatorar:** código local, contínuo, preventivo, sem mudar externo.<br>**Reengenharia:** sistema todo (legado), pontual, corretivo/modernização. |

---

## PARTE 1 — ARQUITETURA, RNF E PADRÕES (LOUSA DE 20/10)

### 📌 QUESTÃO 1: RNF E DECISÕES ARQUITETURAIS
- **Enunciado Oficial:** *A escolha da arquitetura de um sistema é fortemente influenciada por requisitos não funcionais. Qual das seguintes características é um exemplo de RNF que impacta essa decisão?*
- **Alternativa Correta:** **A) Manutenibilidade.**

#### Cruzamento Didático com o Guia Visual (Pág. 6):
Na lousa de 20/10, o professor escreveu em destaque:
> **"ARQUITETURA E DESIGN TÊM A VER COM OS RNF!"**
- **Requisitos Funcionais (RF):** Dizem *o que* o sistema faz (ex.: "cadastrar cliente", "emitir nota fiscal").
- **Requisitos Não Funcionais (RNF):** Atributos de qualidade que definem *como* o sistema se comporta sob o ponto de vista da engenharia:
  1. **Segurança (Seg)**
  2. **Desempenho (Desemp)**
  3. **Disponibilidade (Disp)**
  4. **Manutenibilidade (Manut)**

#### Por que as outras alternativas são pegadinhas:
- **B e E (Visão Lógica e de Processo):** São *visões* do Modelo 4+1, não requisitos.
- **C (Padrão MVC):** É um *padrão arquitetural*, não um requisito.
- **D (Reengenharia):** É um *processo de evolução*, não um requisito.

> 💡 **Gatilho de Prova:** Só existe um atributo de qualidade nas alternativas: **Manutenibilidade**.

---

### 📌 QUESTÃO 2: O PADRÃO ARQUITETURAL MVC (MODEL-VIEW-CONTROLLER)
- **Enunciado Oficial:** *No padrão de arquitetura Modelo-Visão-Controlador (MVC), qual componente é fundamentalmente responsável por encapsular a lógica de negócio e o acesso ao banco de dados?*
- **Alternativa Correta:** **C) Modelo (Model).**

#### Cruzamento Didático com o Guia Visual (Págs. 7 e 8):
Na lousa de 20/10, o professor desenhou o fluxo real de uma requisição web:
1. **Navegador (Usuário):** Dispara a requisição HTTP.
2. **Controlador (Controller):** Recebe o evento/requisição, faz a validação inicial dos parâmetros e decide o que fazer.
3. **Modelo (Model):** **Coração da aplicação**. Encapsula as regras de negócio, cálculos tributários, validações pesadas e faz a comunicação com o Banco de Dados (SELECT, INSERT, UPDATE).
4. **Visão (View):** Pega os dados processados que o Model devolveu e monta a interface visual (HTML, JSON ou tela móvel) para entregar ao usuário.

#### Analogia da Lousa para Memorizar:
- **Restaurante:**
  - **Cliente:** Usuário final.
  - **Garçom (Controller):** Anota o pedido na mesa e leva para dentro.
  - **Chef na Cozinha + Despensa (Model):** Prepara a receita (regras de negócio) e pega os ingredientes no estoque (banco de dados).
  - **Prato Montado (View):** A apresentação visual da comida colocada na mesa.

> 💡 **Gatilho de Prova:** Banco de dados e regra de negócio = **MODEL**. A View só exibe; o Controller só orquestra.

---

### 📌 QUESTÃO 3: MODELO 4+1 VISÕES DE KRUCHTEN
- **Enunciado Oficial:** *Na documentação de arquitetura de software, diferentes visões são usadas para descrever o sistema a diferentes públicos. Qual visão é primariamente útil para gerentes e líderes técnicos?*
- **Alternativa Correta:** **B) Visão de Desenvolvimento.**

#### Cruzamento Didático com o Guia Visual (Págs. 6 e 7):
O professor colocou na lousa: *"Quais visões são úteis?"* para que cada profissional veja o projeto pela sua perspectiva técnica:

| Visão Arquitetural | Pergunta que responde na Lousa | Público-Alvo Principal | O que mostra |
|---|---|---|---|
| **1. Visão de Desenvolvimento** *(Questão 3)* | *"Como é a divisão do código?"* | **Gerentes e Líderes Técnicos** | Decomposição em subsistemas, módulos, pacotes e bibliotecas para distribuir o trabalho na equipe. |
| **2. Visão Lógica** | *"Como os requisitos se relacionam?"* | **Analistas e Usuários** | Classes, entidades de domínio, serviços e casos de uso do negócio. |
| **3. Visão de Processo** | *"Como se dá a interação entre processos?"* | **Integradores de Sistemas** | Concorrência, threads em execução, paralelismo e handshakes de rede. |
| **4. Visão Física (Implantação)** | *"Como se comporta no hardware?"* | **Engenheiros de Infra / Redes** | Distribuição física em servidores, containers, balanceadores e switches. |

> ⚠️ **Atenção à pegadinha da alternativa E:** "Visão de Evolução" **não existe** no Modelo 4+1.

> 💡 **Gatilho de Prova:** Gerente e líder técnico precisam organizar a equipe dividindo o código em pacotes = **Visão de Desenvolvimento**.

---

## PARTE 2 — EVOLUÇÃO, LEGADOS E QUALIDADE (LOUSA DE 27/10)

### 📌 QUESTÃO 4: MOTIVAÇÕES CENTRAIS DA EVOLUÇÃO DE SOFTWARE
- **Enunciado Oficial:** *A evolução contínua de software é crucial para que um sistema se mantenha útil e relevante. Quais das seguintes razões são motivações centrais para justificar atualizações constantes?*
- **Alternativa Correta:** **B) Correção de bugs, melhoria de desempenho e segurança.**

#### Cruzamento Didático com o Guia Visual (Págs. 9 e 10):
A lousa de 27/10 iniciou com a equação central:
> **MANUTENÇÃO = EVOLUÇÃO DO SOFTWARE**
O software não é estático; ele é um organismo vivo que precisa de atualizações constantes por três motivos universais da Engenharia de Software:
1. **Corretiva:** Eliminação de bugs e falhas em produção.
2. **Perfectiva:** Melhoria contínua de performance/desempenho e usabilidade.
3. **Segurança (CVEs):** Proteção contra novas vulnerabilidades catalogadas na internet.

#### Macete de Eliminação de Alternativas:
- Alternativas com palavras excludentes como **"Apenas"** (letra A) ou **"Somente"** (letra C) são quase sempre falsas.
- Padrões específicos de P.O.O. (Factory, Singleton, Observer - letra D) são ferramentas técnicas, não razões de negócio para evoluir um sistema.

> 💡 **Gatilho de Prova:** O trio essencial da evolução é: **bugs + desempenho + segurança**.

---

### 📌 QUESTÃO 5: VERIFICAÇÃO VS. VALIDAÇÃO (V&V)
- **Enunciado Oficial:** *No ciclo de vida do software, "Verificação" difere de "Validação". Qual técnica é especificamente focada na Validação do sistema?*
- **Alternativa Correta:** **A) Testes de aceitação do usuário.**

#### Cruzamento Didático com o Guia Visual (Págs. 9 e 10):
O professor colocou no canto da lousa a distinção consagrada de Barry Boehm:

| Conceito | Pergunta Filosófica da Lousa | Foco / Quem avalia | Técnicas Típicas |
|---|---|---|---|
| **VALIDAÇÃO** *(Questão 5)* | *"Estamos construindo o produto CERTO?"* | **Cliente / Usuário Final** | **Testes de Aceitação do Usuário (UAT)**, homologação, validação de regras de negócio reais. |
| **VERIFICAÇÃO** | *"Estamos construindo o produto CORRETAMENTE?"* | **Desenvolvedor / Equipe Técnica** | Testes de unidade, testes funcionais, revisões por pares, inspeções de código. |

#### Analogia da Lousa:
- Fazer um bolo de aniversário:
  - **Verificação:** Seguir a receita à risca, checar a temperatura do forno e não queimar a massa (processo técnico correto).
  - **Validação:** O aniversariante comer uma fatia e dizer se o bolo está gostoso e é o sabor que ele pediu (atende à expectativa real do cliente).

> 💡 **Gatilho de Prova:** Validação quem valida é o **usuário final** através de **testes de aceitação**.

---

### 📌 QUESTÃO 6: FLUXO PADRÃO DE IMPLEMENTAÇÃO DE MUDANÇA
- **Enunciado Oficial:** *Qual das alternativas apresenta a sequência correta de um processo padrão de implementação de mudança em um software?*
- **Alternativa Correta:** **A) Mudanças propostas → Análise de requisitos → Atualização de requisitos → Desenvolvimento de software.**

#### Cruzamento Didático com o Guia Visual (Pág. 9):
O ciclo de engenharia de software exige controle e rastreabilidade:
1. **1º passo (Entrada):** Chegam as **Mudanças propostas** (bugs reportados, novas leis, pedidos de clientes).
2. **2º passo (Análise):** Ocorre a **Análise de requisitos** (qual o impacto dessa mudança? quebra outros módulos? quanto custa?).
3. **3º passo (Formalização):** Realiza-se a **Atualização de requisitos** (atualiza a documentação e os critérios de aceite).
4. **4º passo (Execução):** Ocorre o **Desenvolvimento de software** (os programadores abrem o código e implementam a alteração).

#### Por que as outras estão erradas:
- Nenhuma equipe madura programa antes de analisar (letras C e D).
- Não se analisa requisitos se nem sequer foi apresentada uma proposta de mudança (letra B).

> 💡 **Gatilho de Prova:** Ordem cronológica lógica: **Proposta → Análise → Atualização → Desenvolvimento**.

---

### 📌 QUESTÃO 7: OS 4 VALORES DO MANIFESTO ÁGIL
- **Enunciado Oficial:** *O Manifesto Ágil estabeleceu quatro valores fundamentais para orientar a criação de software. Assinale a correta:*
- **Alternativa Correta:** **C) Responder a mudanças mais que seguir um plano.**

#### Cruzamento Didático com o Guia Visual (Págs. 10 e 11):
Na lousa de 27/10, o professor destacou: **"RÁPIDO ≠ ÁGIL"**. Ágil é adaptabilidade e entrega contínua de valor (MVP). Ele listou os 4 valores originais do Manifesto de 2001:

1. **Indivíduos e interações** MAIS QUE processos e ferramentas.
2. **Software em funcionamento** MAIS QUE documentação abrangente.
3. **Colaboração com o cliente** MAIS QUE negociação de contratos.
4. **Responder a mudanças** MAIS QUE seguir um plano. *(Opção C da prova)*

#### Pegadinha clássica da banca:
Nas opções A, B e D, a banca **inverteu** as frases de propósito:
- Disse "processos mais que pessoas" *(ERRADO!)*
- Disse "documentação mais que software funcionando" *(ERRADO!)*
- Disse "contratos mais que colaboração" *(ERRADO!)*
- A alternativa E descreve o Modelo Cascata (sequencial sem retorno), que é o oposto do ágil.

> 💡 **Gatilho de Prova:** Guarde a palavra-chave de ouro: **Responder a mudanças**.

---

### 📌 QUESTÃO 8: SISTEMAS LEGADOS E REGRAS DE NEGÓCIO EMBUTIDAS
- **Enunciado Oficial:** *Uma empresa precisa decidir o futuro do seu sistema legado de faturamento, que, apesar de obsoleto, lento e sem integração com novas soluções, é vital para o negócio. Qual alternativa descreve o principal dilema técnico e estratégico ao analisar esse sistema?*
- **Alternativa Correta:** **E) A falta de documentação dificulta entender as regras de negócio críticas embutidas no código, gerando alto risco de que a modernização ou substituição interrompa a operação da empresa.**

#### Cruzamento Didático com o Guia Visual (Págs. 9 e 10):
A lousa descreve:
> **"O PROBLEMA DO SISTEMA LEGADO: Hardware antigo + S.O. antigo + Linguagem antiga + Dependências. Quanto mais envelhece, mais difícil atualizar."**
- Em sistemas com 10, 15 ou 20 anos de uso, centenas de desenvolvedores passaram pela empresa e fizeram alterações pontuais sem documentar nada.
- O código-fonte tornou-se o **único lugar onde existem as regras tributárias e fiscais complexas da empresa**.
- Se a gerência tentar desligar o sistema antigo ou reescrever tudo do zero às pressas, o risco de deixar passar uma regra vital e paralisar as vendas da empresa é altíssimo.

#### Por que as outras são incorretas:
As opções A, B, C e D usam termos absolutos e falsos:
- "Impossibilidade técnica de criar APIs" *(Falso, sempre é possível criar wrappers ou gateways).*
- "Invalida o projeto" *(Falso, a resistência de usuários é tratada com treinamento).*
- "Exige compra contínua de hardware antigo" *(Falso, existem emuladores e virtualização).*

> 💡 **Gatilho de Prova:** O maior perigo do legado é: **regras críticas escondidas no código sem documentação**.

---

### 📌 QUESTÃO 9: SCRUM E SPRINTS ITERATIVAS
- **Enunciado Oficial:** *No Scrum, os projetos são divididos em ciclos curtos e repetidos chamados Sprints. Sobre as Sprints, assinale a correta:*
- **Alternativa Correta:** **B) São ciclos iterativos onde o código é desenvolvido, testado e refinado progressivamente.**

#### Cruzamento Didático com o Guia Visual (Págs. 10 e 11):
- As Sprints são ciclos com tempo determinado (time-box, geralmente de 2 a 4 semanas).
- Em cada Sprint, o time multifuncional planeja, desenvolve, testa e entrega um **incremento de software funcional pronto (Done / MVP)**.
- Requisitos **podem sim** mudar entre as Sprints através da repriorização contínua do Product Backlog com o Product Owner.

#### Armadilhas do Modelo Cascata descartadas:
- "Exigem documentação completa antes da codificação" *(Isso é cascata!)*
- "Impedem alterações de requisitos durante o projeto" *(Isso é cascata!)*
- "Seguem modelo sequencial sem retorno" *(Isso é cascata!)*
- "Priorizam documentos extensos em vez de software executável" *(Isso fere o manifesto ágil!)*

> 💡 **Gatilho de Prova:** Sprint = **ciclo iterativo com software testado e refinado**.

---

### 📌 QUESTÃO 10: DISSERTATIVA — REFATORAÇÃO VS. REENGENHARIA
- **Enunciado Oficial:** *Embora Reengenharia e Refatoração sejam conceitos ligados à evolução de software, eles têm escopos diferentes. Quais as diferenças entre esses conceitos?*

#### Resposta Dissertativa Oficial para Gabaritar (1,0 Ponto):

> **Refatoração:** É um processo contínuo e de pequena escala, realizado durante todo o desenvolvimento. Consiste em melhorar a estrutura interna do código (eliminar duplicações com DRY, simplificar métodos longos, melhorar nomes de variáveis e reduzir acoplamento) **sem alterar o comportamento externo** do software. Possui caráter **preventivo**, evitando o acúmulo de dívida técnica e facilitando futuras manutenções.
>
> **Reengenharia:** É um processo de escopo amplo, aplicado pontualmente a **sistemas legados** após anos de uso, quando o custo de manutenção torna-se excessivamente alto. Envolve reestruturar e redocumentar o sistema como um todo, podendo incluir engenharia reversa, modularização de monolitos, reengenharia do banco de dados e até a tradução do código-fonte para outra linguagem. Possui caráter **corretivo e de modernização**, visando manter as funções de negócio ativas sem precisar descartar o sistema.

#### Quadro Comparativo dos 5 Critérios da Lousa (Pág. 10):

| Critério de Comparação | Refatoração | Reengenharia |
|---|---|---|
| **1. Escopo** | Localizado (pequenos trechos de código, classes, funções) | Amplo (sistema inteiro ou grandes módulos legados) |
| **2. Frequência / Momento** | Contínua (no dia a dia do desenvolvimento) | Pontual (quando o sistema legado fica insustentável) |
| **3. Natureza** | **Preventiva** (evita degradação do código) | **Corretiva e de Modernização** (recupera o sistema) |
| **4. Comportamento Externo** | **Não muda nada** (as telas e saídas continuam idênticas) | Funcionalidades de negócio mantidas, mas tecnologia e dados mudam |
| **5. Exemplos da Lousa** | Renomear métodos, extrair funções, remover duplicidade | Engenharia reversa, migração de linguagem, quebra de monolito |

#### Analogia de Ouro da Lousa (Pág. 12):
- **Refatorar:** Organizar os cabos e fios soltos atrás da televisão para a sala ficar limpa.
- **Reengenharia:** Trocar toda a fiação elétrica e o quadro de disjuntores da casa inteira porque a rede antiga não suporta mais a carga moderna.

---

## RESUMO MNEMÔNICO FINAL PARA FIXAR EM 30 SEGUNDOS

```
Q1  -> RNF de qualidade?               -> [A] Manutenibilidade
Q2  -> Regra e Banco no MVC?           -> [C] Model (Modelo)
Q3  -> Visão 4+1 para Líder Técnico?   -> [B] Visão de Desenvolvimento
Q4  -> Motivo central de evoluir?      -> [B] Bugs, Desempenho e Segurança
Q5  -> Técnica de Validação?           -> [A] Aceitação do usuário (UAT)
Q6  -> Sequência de mudança?           -> [A] Proposta -> Análise -> Atualiza -> Dev
Q7  -> Valor do Manifesto Ágil?        -> [C] Responder a mudanças mais que plano
Q8  -> Risco número 1 do legado?       -> [E] Regras no código sem documentação
Q9  -> O que são Sprints?              -> [B] Ciclos iterativos com código testado
Q10 -> Refatorar x Reengenharia?       -> [Dissertativa] Local/preventivo vs Sistema todo/modernização
```
