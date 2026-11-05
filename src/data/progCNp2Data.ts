import type { Np2Flashcard, Np2SimuladoQuestion } from '../types/np2Training';

export const PROG_C_NP2_FLASHCARDS: Np2Flashcard[] = [
  // --- MATRIZES 2D & SINTAXE ---
  {
    id: 1,
    categoria: 'Matrizes 2D',
    pergunta: 'Como se declara uma matriz bidimensional de 5 linhas e 8 colunas de inteiros em C?',
    resposta:
      'int m[5][8];\n\nO primeiro colchete [5] indica o número de linhas (índices 0 a 4) e o segundo [8] indica as colunas (índices 0 a 7). Total de 40 posições contíguas na memória.',
    dica: 'Em C: tipo nome[LINHAS][COLUNAS]; Não confunda a ordem!',
    codigoExemplo: 'int cinema[5][8]; // 5 fileiras, 8 poltronas cada',
  },
  {
    id: 2,
    categoria: 'Matrizes 2D',
    pergunta: 'Quantos bytes são alocados na memória por "int m[5][8]" em um compilador de 32/64 bits (int = 4 bytes)?',
    resposta:
      '5 × 8 = 40 elementos.\n40 elementos × 4 bytes = 160 bytes contíguos na memória.',
    dica: 'Cálculo da prova: Linhas × Colunas × sizeof(tipo).',
    codigoExemplo: 'printf("Tamanho: %zu bytes", sizeof(m)); // 160 bytes',
  },
  {
    id: 3,
    categoria: 'Matrizes 2D',
    pergunta: 'Qual o laço padrão aninhado para percorrer e zerar toda uma matriz m[L][C]?',
    resposta:
      'Utiliza-se dois laços for aninhados: o externo varia a linha (i) de 0 até L-1, e o interno varia a coluna (j) de 0 até C-1.',
    dica: 'O laço externo fixa a linha enquanto o interno varre todas as colunas.',
    codigoExemplo: 'for (int i = 0; i < 5; i++) {\n  for (int j = 0; j < 8; j++) {\n    m[i][j] = 0;\n  }\n}',
  },
  {
    id: 4,
    categoria: 'Matrizes 2D',
    pergunta: 'O que acontece se você acessar m[5][8] em uma matriz declarada como int m[5][8]?',
    resposta:
      'Comportamento Indefinido (Undefined Behavior). Em C os índices válidos vão de 0 a 4 para linhas e 0 a 7 para colunas. Acessar [5][8] invade memória adjacente.',
    dica: 'Pegadinha certeira de prova: o último elemento válido é m[4][7]!',
  },

  // --- PONTEIROS: OPERADORES & E * ---
  {
    id: 5,
    categoria: 'Ponteiros',
    pergunta: 'Qual a diferença entre o operador & (endereço) e o operador * (desreferenciação)?',
    resposta:
      '&x retorna o ENDEREÇO de memória onde a variável x está alocada.\n*ptr acessa ou modifica o CONTEÚDO (valor) armazenado no endereço apontado por ptr.',
    dica: '& = "onde está?" | * = "o que tem lá dentro?"',
    codigoExemplo: 'int num = 42;\nint *ptr = &num; // ptr guarda o endereço de num\nprintf("%d", *ptr); // imprime 42',
  },
  {
    id: 6,
    categoria: 'Ponteiros',
    pergunta: 'Como se declara uma variável ponteiro para inteiro em C?',
    resposta:
      'int *p;\n\nO asterisco junto ao tipo indica que p não armazena um número inteiro comum, mas sim o endereço de memória de um inteiro.',
    dica: 'Pode escrever "int *p;" ou "int* p;".',
    codigoExemplo: 'int *p = NULL; // boa prática inicializar com NULL',
  },
  {
    id: 7,
    categoria: 'Ponteiros',
    pergunta: 'O que significa a expressão (*p)++ vs *p++?',
    resposta:
      '(*p)++ incrementa o VALOR contido na variável apontada por p.\n*p++ retorna o valor e em seguida move o PONTEIRO p para o próximo endereço de memória (devido à precedência de operadores).',
    dica: 'Parênteses (*p) garantem que a alteração seja no dado, não no ponteiro!',
    codigoExemplo: 'int v = 10;\nint *p = &v;\n(*p)++; // v agora vale 11',
  },

  // --- ARITMÉTICA DE PONTEIROS & MATRIZES ---
  {
    id: 8,
    categoria: 'Aritmética de Ponteiros',
    pergunta: 'Se p é um ponteiro int* que aponta para o endereço 1000, para onde apontará p + 1?',
    resposta:
      'Para o endereço 1004 (considerando int de 4 bytes).\nA aritmética de ponteiros avança em blocos equivalentes a sizeof(tipo).',
    dica: 'p + 1 NÃO soma 1 byte! Soma sizeof(tipo). Se fosse double*, somaria 8 bytes (1008).',
  },
  {
    id: 9,
    categoria: 'Aritmética de Ponteiros',
    pergunta: 'Como o nome de uma matriz se relaciona com ponteiros em C?',
    resposta:
      'Em C, o nome da matriz sem colchetes decai para um ponteiro que aponta para o primeiro elemento dela (&m[0][0]). A notação m[i][j] é equivalente a *(*(m + i) + j).',
    dica: 'Na memória física RAM, uma matriz é um vetor contínuo linearizado.',
  },

  // --- SISTEMA CINEMA.C DA AULA 11 ---
  {
    id: 10,
    categoria: 'Sistema Cinema.C',
    pergunta: 'No exercício Cinema.C da Aula 11, como o sistema representa assento livre vs ocupado?',
    resposta:
      '0 indica assento LIVRE (disponível para compra).\n1 indica assento OCUPADO (já vendido ou reservado).',
    dica: 'Antes de vender o assento [lin][col], testa se cinema[lin][col] == 0.',
    codigoExemplo: 'if (sala[f][p] == 1) {\n  printf("Poltrona já ocupada!\\n");\n} else {\n  sala[f][p] = 1; // reserva feita\n}',
  },
  {
    id: 11,
    categoria: 'Sistema Cinema.C',
    pergunta: 'Como validar se a fileira e poltrona digitadas pelo usuário são válidas na sala 5x8?',
    resposta:
      'Garante que f >= 0 && f < 5 para fileiras e p >= 0 && p < 8 para poltronas. Se o usuário digitar valores fora dessa faixa, exibe mensagem de erro e rejeita.',
    dica: 'Se usuário digitar de 1 a 5, você subtrai 1 antes de acessar a matriz: f = entrada - 1.',
  },
];

export const PROG_C_NP2_SIMULADO_QUESTIONS: Np2SimuladoQuestion[] = [
  {
    id: 1,
    questionNumber: 1,
    title: 'Declaração e Índices de Matrizes 2D',
    category: 'Matrizes 2D',
    enunciado:
      'Uma matriz é declarada da seguinte forma:\n\nint matriz[4][6];\n\nQual é o índice da PRIMEIRA posição e qual é o índice da ÚLTIMA posição válida dessa matriz?',
    options: [
      { id: 'a', text: 'Primeira: matriz[0][0] | Última: matriz[3][5]' },
      { id: 'b', text: 'Primeira: matriz[1][1] | Última: matriz[4][6]' },
      { id: 'c', text: 'Primeira: matriz[0][0] | Última: matriz[4][6]' },
      { id: 'd', text: 'Primeira: matriz[1][1] | Última: matriz[3][5]' },
    ],
    correctAnswer: 'a',
    explanation:
      'Em linguagem C, os índices são sempre baseados em zero (zero-indexed). Para 4 linhas, os índices são 0, 1, 2, 3. Para 6 colunas, os índices são 0, 1, 2, 3, 4, 5. Logo, a última posição válida é [3][5].',
    decorebaRapida: 'Em matriz[L][C], o primeiro elemento é [0][0] e o último é [L-1][C-1].',
  },
  {
    id: 2,
    questionNumber: 2,
    title: 'Rastreio de Laço Aninhado com Matriz',
    category: 'Matrizes 2D',
    enunciado:
      'Considere o seguinte trecho de código em C:\n\nint m[3][3], soma = 0;\nfor (int i = 0; i < 3; i++) {\n  for (int j = 0; j < 3; j++) {\n    if (i == j) m[i][j] = 2;\n    else m[i][j] = 0;\n    soma += m[i][j];\n  }\n}\nprintf("%d", soma);\n\nQual valor será exibido no console?',
    codeSnippet:
      'int m[3][3], soma = 0;\nfor (int i = 0; i < 3; i++) {\n  for (int j = 0; j < 3; j++) {\n    if (i == j) m[i][j] = 2;\n    else m[i][j] = 0;\n    soma += m[i][j];\n  }\n}\nprintf("%d", soma);',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '18' },
      { id: 'c', text: '2' },
      { id: 'd', text: '0' },
    ],
    correctAnswer: 'a',
    explanation:
      'A condição i == j preenche apenas a Diagonal Principal da matriz (posições [0][0], [1][1] e [2][2]) com o valor 2. As outras 6 posições recebem 0. A soma total é 2 + 2 + 2 = 6.',
    decorebaRapida: 'i == j é a Diagonal Principal! Três posições com valor 2 = 6.',
  },
  {
    id: 3,
    questionNumber: 3,
    title: 'Operadores de Ponteiro: * e &',
    category: 'Ponteiros',
    enunciado:
      'Analise o programa abaixo:\n\nint x = 15;\nint *p = &x;\n*p = *p + 5;\nprintf("%d", x);\n\nO que será impresso?',
    codeSnippet: 'int x = 15;\nint *p = &x;\n*p = *p + 5;\nprintf("%d", x);',
    options: [
      { id: 'a', text: '20' },
      { id: 'b', text: '15' },
      { id: 'c', text: 'O endereço de memória de x' },
      { id: 'd', text: 'Erro de compilação' },
    ],
    correctAnswer: 'a',
    explanation:
      'p guarda o endereço de x. A expressão *p acessa diretamente a posição de memória de x. Modificar *p altera diretamente o valor de x na memória: 15 + 5 = 20.',
    decorebaRapida: '*p = *p + 5 modifica a variável apontada (x vira 20).',
  },
  {
    id: 4,
    questionNumber: 4,
    title: 'Tamanho em Memória (sizeof)',
    category: 'Matrizes 2D',
    enunciado:
      'Considerando uma arquitetura padrão onde sizeof(int) == 4 bytes, qual o retorno da expressão sizeof(sala) para uma matriz declarada como:\n\nint sala[5][8];',
    options: [
      { id: 'a', text: '160' },
      { id: 'b', text: '40' },
      { id: 'c', text: '80' },
      { id: 'd', text: '13' },
    ],
    correctAnswer: 'a',
    explanation:
      'A matriz possui 5 × 8 = 40 elementos inteiros. Como cada int ocupa 4 bytes na memória, 40 × 4 = 160 bytes.',
    decorebaRapida: 'Linhas × Colunas × 4 bytes = 5 × 8 × 4 = 160 bytes.',
  },
  {
    id: 5,
    questionNumber: 5,
    title: 'Aritmética de Ponteiros',
    category: 'Ponteiros',
    enunciado:
      'Considere o vetor int v[5] = {10, 20, 30, 40, 50} e o ponteiro int *p = v;\n\nQual o valor de *(p + 3)?',
    codeSnippet: 'int v[5] = {10, 20, 30, 40, 50};\nint *p = v;\nprintf("%d", *(p + 3));',
    options: [
      { id: 'a', text: '40' },
      { id: 'b', text: '30' },
      { id: 'c', text: '13' },
      { id: 'd', text: '50' },
    ],
    correctAnswer: 'a',
    explanation:
      'p aponta para o primeiro elemento v[0] (10). p + 3 avança 3 posições inteiras no array, apontando para v[3]. Ao desreferenciar *(p + 3), obtemos o valor contido em v[3], que é 40.',
    decorebaRapida: '*(p + i) é idêntico a v[i]. v[3] = 40.',
  },
  {
    id: 6,
    questionNumber: 6,
    title: 'Lógica do Sistema Cinema.C',
    category: 'Sistema Cinema.C',
    enunciado:
      'No código Cinema.C (Aula 11), para reservar uma poltrona, o programa lê fileira f e poltrona p. Qual é a condição correta para verificar se a poltrona está LIVRE antes de confirmar a reserva?',
    options: [
      { id: 'a', text: 'if (sala[f][p] == 0)' },
      { id: 'b', text: 'if (sala[f][p] == 1)' },
      { id: 'c', text: 'if (sala[f][p] != 0)' },
      { id: 'd', text: 'if (&sala[f][p] == NULL)' },
    ],
    correctAnswer: 'a',
    explanation:
      'Na convenção definida no exercício, 0 representa poltrona desocupada (livre) e 1 representa poltrona já ocupada. Portanto, a venda só ocorre se sala[f][p] == 0.',
    decorebaRapida: '0 = Livre, 1 = Ocupado. Para reservar: if (sala[f][p] == 0).',
  },
  {
    id: 7,
    questionNumber: 7,
    title: 'Endereço vs Conteúdo no printf',
    category: 'Ponteiros',
    enunciado:
      'Dado o trecho de código abaixo:\n\nint a = 100;\nint *ptr = &a;\nprintf("%p - %d", ptr, *ptr);\n\nO que será impresso pelos especificadores %p e %d respectivamente?',
    options: [
      {
        id: 'a',
        text: 'O endereço hexadecimal de memória da variável a e o valor inteiro 100.',
      },
      {
        id: 'b',
        text: 'Dois números inteiros idênticos: 100 - 100.',
      },
      {
        id: 'c',
        text: 'Erro de execução por violação de acesso.',
      },
      {
        id: 'd',
        text: 'O valor 100 e depois o endereço de memória.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      '%p é o especificador para imprimir endereços de ponteiro (em notação hexadecimal). %d imprime o valor inteiro desreferenciado (*ptr = 100).',
    decorebaRapida: '%p imprime endereço hexadecimal; *ptr com %d imprime o valor.',
  },
  {
    id: 8,
    questionNumber: 8,
    title: 'Laço de Exibição de Matriz',
    category: 'Matrizes 2D',
    enunciado:
      'Para imprimir uma matriz 5x8 no formato de tabela com quebra de linha ao final de cada fileira, onde deve ficar a instrução printf("\\n")?',
    options: [
      {
        id: 'a',
        text: 'Dentro do laço externo de i, logo após o término do laço interno de j.',
      },
      {
        id: 'b',
        text: 'Dentro do laço interno de j, logo após imprimir cada elemento.',
      },
      {
        id: 'c',
        text: 'Antes de iniciar o primeiro laço for.',
      },
      {
        id: 'd',
        text: 'Não é possível quebrar linha em matrizes em C.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'O laço interno percorre todos os elementos de uma linha. Ao terminar essa linha, deve-se imprimir uma quebra de linha "\\n" antes que o laço externo incremente para a próxima fileira.',
    decorebaRapida: 'printf("\\n") fica no fim do for externo para quebrar cada linha da matriz.',
  },
  {
    id: 9,
    questionNumber: 9,
    title: 'Ponteiro Nulo (NULL)',
    category: 'Ponteiros',
    enunciado:
      'O que acontece se um programa tentar executar a operação *ptr = 50 quando ptr foi inicializado como NULL (int *ptr = NULL;)?',
    options: [
      {
        id: 'a',
        text: 'Erro de Falha de Segmentação (Segmentation Fault / crash em tempo de execução).',
      },
      {
        id: 'b',
        text: 'O ponteiro automaticamente aloca 4 bytes no endereço 0.',
      },
      {
        id: 'c',
        text: 'O compilador altera NULL para 50 sem nenhum erro.',
      },
      {
        id: 'd',
        text: 'O valor é salvo na variável especial do sistema operacional.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'Desreferenciar um ponteiro que aponta para NULL (endereço zero protegido pelo sistema operacional) provoca violação de memória (Segmentation Fault) e trava o programa imediatamente.',
    decorebaRapida: 'Desreferenciar ponteiro NULL dá Falha de Segmentação (crash)!',
  },
  {
    id: 10,
    questionNumber: 10,
    title: 'Matriz como Parâmetro de Função',
    category: 'Matrizes 2D',
    enunciado:
      'Ao declarar uma função que recebe uma matriz bidimensional como parâmetro em C, qual dimensão é OBRIGATÓRIA ser informada no cabeçalho?',
    options: [
      {
        id: 'a',
        text: 'A segunda dimensão (número de colunas), ex: void exibe(int m[][8], int lin);',
      },
      {
        id: 'b',
        text: 'Apenas a primeira dimensão (linhas), ex: void exibe(int m[5][]);',
      },
      {
        id: 'c',
        text: 'Nenhuma das dimensões precisa ser informada, apenas int m[][].',
      },
      {
        id: 'd',
        text: 'Matrizes bidimensionais não podem ser passadas como parâmetro em C.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'O compilador C precisa saber o número de colunas para calcular o deslocamento de memória de cada linha (offset = i * COLUNAS + j). O número de linhas pode ser omitido, mas as colunas são obrigatórias: m[][COLUNAS].',
    decorebaRapida: 'Em funções, a dimensão das COLUNAS é sempre obrigatória: m[][COLUNAS].',
  },
];
