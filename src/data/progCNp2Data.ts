import type { Np2Flashcard, Np2SimuladoQuestion } from '../types/np2Training';

export const PROG_C_NP2_FLASHCARDS: Np2Flashcard[] = [
  // ==========================================
  // PARTE 1 - MATRIZES (QUESTÕES 1 A 6)
  // ==========================================
  {
    id: 1,
    categoria: 'Matrizes',
    pergunta: 'Em uma matriz float notas[3][4], qual o índice do último aluno e da última prova?',
    resposta:
      'notas[2][3]\n\nEm C os índices começam em 0. Para 3 alunos, os índices são 0, 1 e 2 (último = 2). Para 4 provas, os índices são 0, 1, 2 e 3 (última = 3).',
    dica: 'Regra de ouro: declaração [L][C] -> último elemento válido é SEMPRE [L-1][C-1]!',
    codigoExemplo: 'float notas[3][4];\nnotas[2][3] = 10.0; // Ultima prova do ultimo aluno',
  },
  {
    id: 2,
    categoria: 'Matrizes',
    pergunta: 'Dada a matriz m[2][3] = { {1,2,3}, {4,5,6} }, como localizar m[1][0] e m[0][2]?',
    resposta:
      'm[1][0] = 4 (linha 1, coluna 0)\nm[0][2] = 3 (linha 0, coluna 2)\nSoma = 4 + 3 = 7.\n\nLinha 0: [1, 2, 3]\nLinha 1: [4, 5, 6]',
    dica: 'Primeiro colchete é Linha (de cima pra baixo). Segundo colchete é Coluna (da esquerda pra direita).',
    codigoExemplo: 'int m[2][3] = {{1,2,3}, {4,5,6}};\n// m[1][0] = 4, m[0][2] = 3',
  },
  {
    id: 3,
    categoria: 'Matrizes',
    pergunta: 'O que o comando "if (j > i) continue;" faz ao percorrer uma matriz 3x3?',
    resposta:
      'Ele pula qualquer impressão onde a coluna j for maior que a linha i. Isso imprime apenas o triângulo inferior e a diagonal principal:\nLinha 0: 1\nLinha 1: 4 5\nLinha 2: 7 8 9',
    dica: 'j > i representa os elementos ACIMA da diagonal principal. O continue pula esses elementos.',
    codigoExemplo: '// i=0: imprime j=0 (1)\n// i=1: imprime j=0,1 (4,5)\n// i=2: imprime j=0,1,2 (7,8,9)',
  },
  {
    id: 4,
    categoria: 'Matrizes',
    pergunta: 'O que a condição "if (i == j)" seleciona em uma matriz quadrada?',
    resposta:
      'A DIAGONAL PRINCIPAL!\nSempre que i == j, estamos na diagonal principal: m[0][0], m[1][1], m[2][2]...',
    dica: 'Se a questão tiver soma += m[i][j] dentro de if (i == j), basta somar os elementos da diagonal.',
    codigoExemplo: 'int m[3][3] = {{4,1,2}, {0,3,7}, {5,6,2}};\n// Diagonal: 4 + 3 + 2 = 9',
  },
  {
    id: 5,
    categoria: 'Matrizes',
    pergunta: 'Como funciona a transposta t[j][i] = m[i][j] e como achar o valor de t[2][1]?',
    resposta:
      'A transposta inverte linhas e colunas.\nPara achar t[2][1], basta olhar o elemento original invertendo os índices: m[1][2].\nSe m[1][2] vale 6, então t[2][1] vale 6.',
    dica: 'Macetão de prova: t[A][B] na transposta SEMPRE é igual a m[B][A] na matriz original!',
    codigoExemplo: 't[2][1] = m[1][2]; // Se m[1][2] == 6, entao t[2][1] == 6',
  },
  {
    id: 6,
    categoria: 'Matrizes',
    pergunta: 'Como a memória linear calcula o endereço de m[i][j] usando *(p + i * COL + j)?',
    resposta:
      'Em C, matrizes são armazenadas linha após linha de forma contígua na memória RAM.\nA fórmula de deslocamento é: deslocamento = (linha * total_colunas) + coluna.\nPara m[1][1] com COL=3: *(p + 1*3 + 1) = *(p + 4), que acessa exatamente m[1][1].',
    dica: 'Cada linha completa pula "COL" elementos. 1*COL pula toda a linha 0 e cai no início da linha 1.',
    codigoExemplo: 'int m[2][3] = {{1,2,3},{4,5,6}};\nint *p = &m[0][0];\n// *(p + 1*3 + 1) acessa m[1][1] = 5',
  },

  // ==========================================
  // PARTE 2 - PONTEIROS (QUESTÕES 7 A 13)
  // ==========================================
  {
    id: 7,
    categoria: 'Ponteiros',
    pergunta: 'Qual a diferença essencial entre o operador & e o operador *?',
    resposta:
      '& (E comercial) = Retorna o ENDEREÇO DE MEMÓRIA da variável.\n* (Asterisco de desreferência) = Acessa ou altera o VALOR/CONTEÚDO guardado no endereço apontado.',
    dica: '& tira o RG (onde está). * abre a porta da casa (quem mora lá).',
    codigoExemplo: 'int x = 10;\nint *p = &x; // p guarda o endereco de x\n*p = 20;     // x agora vale 20',
  },
  {
    id: 8,
    categoria: 'Ponteiros',
    pergunta: 'O que acontece ao reatribuir um ponteiro: p = &b seguido de *p = *p + a?',
    resposta:
      'Quando faz p = &b, o ponteiro passa a apontar para a variável b.\nA operação seguinte (*p = *p + a) altera a variável b, somando o valor atual de a.',
    dica: 'Desenhe as caixinhas na folha de rascunho: aponte a seta de p para onde ele foi atribuído!',
    codigoExemplo: 'int a = 5, b = 8;\nint *p = &a; *p = *p * 2; // a vira 10\np = &b;      *p = *p + a; // b vira 8+10=18\n// a=10, b=18, *p=18',
  },
  {
    id: 9,
    categoria: 'Ponteiros',
    pergunta: 'Como chamar uma função void trocar(int *a, int *b) para inverter as variáveis m e n da main?',
    resposta:
      'trocar(&m, &n);\n\nComo os parâmetros da função são ponteiros (int *), quem chama deve passar os ENDEREÇOS das variáveis usando o operador &.',
    dica: 'Se a função tem * no protótipo, você passa & na chamada!',
    codigoExemplo: 'int m = 4, n = 9;\ntrocar(&m, &n); // Passa endereco com &',
  },
  {
    id: 10,
    categoria: 'Ponteiros',
    pergunta: 'Por que a função "void dobrar(int n) { n = n * 2; }" NÃO altera a variável x na main?',
    resposta:
      'Porque parâmetros comuns em C são passados POR VALOR (cópia).\nA função altera apenas a variável local cópia "n". A variável original "x" na main permanece intacta (continua 4).',
    dica: 'Para alterar o original precisaria de ponteiro (int *n) e chamada dobrar(&x). Sem asterisco, o original nunca muda!',
    codigoExemplo: 'int x = 4;\ndobrar(x);\nprintf("%d", x); // Imprime 4 (original inalterado)',
  },
  {
    id: 11,
    categoria: 'Ponteiros',
    pergunta: 'Se int *p = v (onde v é um array), o que significa a expressão *(p + 2)?',
    resposta:
      'Acessa o valor do elemento no índice 2 do array: v[2].\nA aritmética de ponteiros avança posições no array: p + 0 é v[0], p + 1 é v[1], p + 2 é v[2]. O asterisco externo desreferencia e obtém o valor.',
    dica: 'Regra de equivalência fundamental em C: *(p + i) é EXATAMENTE a mesma coisa que v[i]!',
    codigoExemplo: 'int v[5] = {10, 20, 30, 40, 50};\nint *p = v;\n// *(p + 2) == v[2] == 30',
  },
  {
    id: 12,
    categoria: 'Ponteiros',
    pergunta: 'Qual o erro crítico em "int *p; *p = 10;"?',
    resposta:
      'Ponteiro não inicializado (ponteiro selvagem / lixo de memória).\nO ponteiro p não aponta para nenhum endereço válido conhecido. Tentar gravar 10 em *p causa COMPORTAMENTO INDEFINIDO (Segmentation Fault / crash do programa).',
    dica: 'Antes de usar *p, o ponteiro DEVE apontar para algo: int x; p = &x;',
    codigoExemplo: 'int *p;    // PERIGO: aponta para endereco desconhecido!\n*p = 10;   // Comportamento indefinido (Crash!)',
  },
  {
    id: 13,
    categoria: 'Ponteiros',
    pergunta: 'Qual o especificador de formato no printf para imprimir o endereço de memória de um ponteiro?',
    resposta:
      '%p\n\nO especificador %p exibe o endereço em formato hexadecimal (ex: 0x7ffd98b4).',
    dica: 'Decoreba de letras: %d = decimal | %f = float | %c = char | %s = string | %p = POINTER (endereço).',
    codigoExemplo: 'int a = 10;\nint *p = &a;\nprintf("%p", p); // Exibe endereco hexadecimal',
  },

  // ==========================================
  // PARTE 3 - MANIPULAÇÃO DE ARQUIVOS (QUESTÕES 14 A 20)
  // ==========================================
  {
    id: 14,
    categoria: 'Arquivos',
    pergunta: 'Qual é o ciclo de vida obrigatório de um arquivo em linguagem C?',
    resposta:
      '1º Abrir (fopen)\n2º Usar / Processar (fprintf, fscanf, fgetc...)\n3º Fechar (fclose)\n\nNunca se usa arquivo antes de abrir, nem se esquece de fechar.',
    dica: 'Ciclo natural: Abre a porta (fopen) -> faz o trabalho (fprintf) -> fecha a porta (fclose).',
    codigoExemplo: 'FILE *arq = fopen("arq.txt", "w");\nfprintf(arq, "Ola");\nfclose(arq);',
  },
  {
    id: 15,
    categoria: 'Arquivos',
    pergunta: 'O que acontece ao abrir um arquivo existente com o modo "w" (fopen("dados.txt", "w"))?',
    resposta:
      'TODO O CONTEÚDO ANTERIOR É APAGADO instantaneamente sem pedir confirmação, e a nova gravação começa do início do arquivo!',
    dica: 'Lembre-se: "w" de Wipe/Write do zero! Se o arquivo já existia, tudo dentro dele é destruído!',
    codigoExemplo: '// Se dados.txt tinha 1000 linhas, fopen("dados.txt", "w") zera o arquivo para 0 bytes.',
  },
  {
    id: 16,
    categoria: 'Arquivos',
    pergunta: 'Qual modo de abertura usar para gravar novos dados SEM PERDER os dados anteriores?',
    resposta:
      'Modo "a" (Append / Anexar).\nO modo "a" posiciona o cursor no final do arquivo existente e acrescenta os novos registros sem apagar nada do passado.',
    dica: 'Vendas, logs e cadastros cumulativos = sempre modo "a"!',
    codigoExemplo: 'FILE *f = fopen("vendas.txt", "a"); // Anexa no final',
  },
  {
    id: 17,
    categoria: 'Arquivos',
    pergunta: 'Em que situações a função fopen devolve NULL?',
    resposta:
      'Quando o arquivo NÃO PODE SER ABERTO.\nExemplos: modo "r" tentando abrir arquivo que não existe, caminho de pasta incorreto, falta de permissão no disco ou memória esgotada.',
    dica: 'fopen nunca devolve NULL quando abre com sucesso; devolve NULL exclusivamente em caso de FALHA.',
    codigoExemplo: 'FILE *f = fopen("inexistente.txt", "r");\nif (f == NULL) printf("Falha na abertura!");',
  },
  {
    id: 18,
    categoria: 'Arquivos',
    pergunta: 'Qual o teste correto em C para verificar se a abertura do arquivo falhou?',
    resposta:
      'if (arq == NULL) { printf("Erro!"); return 1; }\n\nCompara-se a variável arq usando operador de igualdade (==) contra NULL.',
    dica: 'Cuidado com pegadinhas de prova: arq = NULL é atribuição (bug); *arq ou &arq estão errados.',
    codigoExemplo: 'FILE *arq = fopen("notas.txt", "r");\nif (arq == NULL) {\n    printf("Erro!");\n    return 1;\n}',
  },
  {
    id: 19,
    categoria: 'Arquivos',
    pergunta: 'Executou 2 vezes com modo "a" (2 linhas cada vez). Depois executou 1 vez com modo "w" (2 linhas). Quantas linhas restam?',
    resposta:
      'Apenas 2 linhas!\n\nAs primeiras 2 execuções com "a" acumularam 4 linhas. Porém, ao executar com "w", o arquivo foi COMPLETAMENTE LIMPO (zerado), e foram gravadas apenas as 2 novas linhas.',
    dica: 'Pegadinha clássica de teste de mesa: basta um único fopen com "w" para jogar fora tudo que o "a" fez antes!',
    codigoExemplo: '// Modo "a" x 2 = 4 linhas\n// Modo "w" x 1 = apaga as 4 anteriores e grava 2\n// Total final = 2 linhas',
  },
  {
    id: 20,
    categoria: 'Arquivos',
    pergunta: 'Como funciona o laço "while (fscanf(arq, "%s %f", nome, &nota) == 2)" para ler um arquivo até o final?',
    resposta:
      'A função fscanf devolve a quantidade de campos lidos com sucesso.\nComo o formato pede 2 campos ("%s %f"), enquanto conseguir ler ambos ela retorna 2 e o laço continua. Quando atinge o fim do arquivo (EOF), devolve valor diferente e o laço para.',
    dica: 'Para calcular média: soma += nota; cont++; depois faz soma / cont.',
    codigoExemplo: 'while (fscanf(arq, "%s %f", nome, &nota) == 2) {\n    soma += nota;\n    cont++;\n}\n// media = soma / cont;',
  },
];

export const PROG_C_NP2_SIMULADO_QUESTIONS: Np2SimuladoQuestion[] = [
  // ==========================================
  // PARTE 1 - MATRIZES (QUESTÕES 1 A 6)
  // ==========================================
  {
    id: 1,
    questionNumber: 1,
    title: 'Posição e Índices de Matriz 2D',
    category: 'Matrizes',
    enunciado:
      'Uma turma tem 3 alunos e cada um fez 4 provas, guardadas em float notas[3][4]; . Qual posição guarda a última prova do último aluno?',
    options: [
      { id: 'a', text: 'notas[3][4]' },
      { id: 'b', text: 'notas[2][3]' },
      { id: 'c', text: 'notas[4][3]' },
      { id: 'd', text: 'notas[3][3]' },
      { id: 'e', text: 'notas[1][1]' },
    ],
    correctAnswer: 'b',
    explanation:
      'Em linguagem C, os índices são indexados em zero (0 a N-1). Para 3 alunos (linhas), os índices são 0, 1 e 2 (último aluno = 2). Para 4 provas (colunas), os índices são 0, 1, 2 e 3 (última prova = 3). Logo, a última prova do último aluno é guardada em notas[2][3].',
    decorebaRapida: 'Declaração [L][C] -> o último elemento é SEMPRE [L-1][C-1]. 3-1=2 e 4-1=3 -> notas[2][3].',
  },
  {
    id: 2,
    questionNumber: 2,
    title: 'Acesso Direto a Elementos de Matriz',
    category: 'Matrizes',
    enunciado: 'O que é impresso pelo trecho abaixo?',
    codeSnippet: `int m[2][3] = {
  {1, 2, 3},
  {4, 5, 6}
};
printf("%d", m[1][0] + m[0][2]);`,
    options: [
      { id: 'a', text: '5' },
      { id: 'b', text: '9' },
      { id: 'c', text: '6' },
      { id: 'd', text: '7' },
      { id: 'e', text: '3' },
    ],
    correctAnswer: 'd',
    explanation:
      'A matriz m tem 2 linhas e 3 colunas:\nLinha 0: {1, 2, 3}\nLinha 1: {4, 5, 6}\n- m[1][0] acessa a linha 1, coluna 0 -> valor 4.\n- m[0][2] acessa a linha 0, coluna 2 -> valor 3.\nA soma é 4 + 3 = 7.',
    decorebaRapida: 'm[1][0] = 4 e m[0][2] = 3. 4 + 3 = 7.',
  },
  {
    id: 3,
    questionNumber: 3,
    title: 'Rastreio de Laço com Continue e Matriz',
    category: 'Matrizes',
    enunciado:
      '(Pare e pense). Qual é a saída do código? (Nas alternativas, a barra / indica quebra de linha.)',
    codeSnippet: `int m[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };
for (int i = 0; i < 3; i++) {
  for (int j = 0; j < 3; j++) {
    if (j > i) continue;
    printf("%d ", m[i][j]);
  }
  printf("\\n");
}`,
    options: [
      { id: 'a', text: '1 / 4 5 / 7 8 9' },
      { id: 'b', text: '1 2 3 / 5 6 / 9' },
      { id: 'c', text: '1 5 9' },
      { id: 'd', text: '1 2 3 / 4 5 6 / 7 8 9' },
      { id: 'e', text: '2 3 / 6' },
    ],
    correctAnswer: 'a',
    explanation:
      'A instrução if (j > i) continue; pula a impressão se a coluna for maior que a linha:\n- Linha i = 0: j=0 imprime 1; j=1 e j=2 pulam. Quebra de linha.\n- Linha i = 1: j=0 imprime 4; j=1 imprime 5; j=2 pula. Quebra de linha.\n- Linha i = 2: j=0 imprime 7; j=1 imprime 8; j=2 imprime 9.\nSaída formatada: 1 / 4 5 / 7 8 9.',
    decorebaRapida: 'j > i pula os elementos acima da diagonal. Sobra triângulo inferior: 1 na 1ª linha, 4 5 na 2ª, 7 8 9 na 3ª.',
  },
  {
    id: 4,
    questionNumber: 4,
    title: 'Soma da Diagonal Principal',
    category: 'Matrizes',
    enunciado: 'Faça o teste de mesa e indique o valor impresso:',
    codeSnippet: `int m[3][3] = { {4, 1, 2}, {0, 3, 7}, {5, 6, 2} };
int soma = 0;
for (int i = 0; i < 3; i++) {
  for (int j = 0; j < 3; j++) {
    if (i == j) soma += m[i][j];
  }
}
printf("%d", soma);`,
    options: [
      { id: 'a', text: '15' },
      { id: 'b', text: '12' },
      { id: 'c', text: '30' },
      { id: 'd', text: '7' },
      { id: 'e', text: '9' },
    ],
    correctAnswer: 'e',
    explanation:
      'A condição if (i == j) filtra apenas os elementos da Diagonal Principal:\n- Para i=0, j=0: m[0][0] = 4\n- Para i=1, j=1: m[1][1] = 3\n- Para i=2, j=2: m[2][2] = 2\nSoma total = 4 + 3 + 2 = 9.',
    decorebaRapida: 'i == j é sempre a Diagonal Principal! Soma direta: 4 + 3 + 2 = 9.',
  },
  {
    id: 5,
    questionNumber: 5,
    title: 'Cálculo de Matriz Transposta',
    category: 'Matrizes',
    enunciado:
      'O trecho abaixo monta a matriz transposta t . Ao final, quanto vale t[2][1] ?',
    codeSnippet: `int m[2][3] = { {1, 2, 3}, {4, 5, 6} };
int t[3][2];
for (int i = 0; i < 2; i++) {
  for (int j = 0; j < 3; j++) {
    t[j][i] = m[i][j];
  }
}`,
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '5' },
      { id: 'c', text: '6' },
      { id: 'd', text: '4' },
      { id: 'e', text: '2' },
    ],
    correctAnswer: 'c',
    explanation:
      'O laço monta a transposta invertendo os índices: t[j][i] = m[i][j].\nQueremos saber o valor de t[2][1]. Isso significa j = 2 e i = 1.\nSubstituindo na igualdade: t[2][1] = m[1][2].\nNa matriz m original, o elemento da linha 1, coluna 2 é 6. Portanto, t[2][1] vale 6.',
    decorebaRapida: 't[2][1] é a transposta de m[1][2]. Na matriz m, linha 1 coluna 2 é o número 6.',
  },
  {
    id: 6,
    questionNumber: 6,
    title: 'Matriz Linearizada na Memória com Ponteiro',
    category: 'Matrizes',
    enunciado:
      '(Matriz + ponteiro). A matriz é guardada na memória linha após linha. O que é impresso?',
    codeSnippet: `#define COL 3
int m[2][COL] = { {1, 2, 3}, {4, 5, 6} };
int *p = &m[0][0];
printf("%d", *(p + 1 * COL + 1));`,
    options: [
      { id: 'a', text: '4' },
      { id: 'b', text: '2' },
      { id: 'c', text: '6' },
      { id: 'd', text: '5' },
      { id: 'e', text: 'O endereço de m[1][1]' },
    ],
    correctAnswer: 'd',
    explanation:
      'Em C, uma matriz m[L][C] é armazenada de forma contígua na memória. O elemento m[i][j] fica no deslocamento (i * COL + j).\nNa expressão *(p + 1 * COL + 1):\n1 * 3 + 1 = 4 posições após o início.\nSequência na memória: 1 (pos 0), 2 (pos 1), 3 (pos 2), 4 (pos 3), 5 (pos 4), 6 (pos 5).\nA posição 4 guarda o valor 5 (que é exatamente m[1][1]). O operador * desreferencia e obtém o valor 5.',
    decorebaRapida: 'Fórmula linear: *(p + i*COL + j) = m[i][j]. Aqui é m[1][1], cujo valor é 5.',
  },

  // ==========================================
  // PARTE 2 - PONTEIROS (QUESTÕES 7 A 13)
  // ==========================================
  {
    id: 7,
    questionNumber: 7,
    title: 'Significado do Operador &',
    category: 'Ponteiros',
    enunciado:
      'Em C, o operador & aplicado a uma variável (por exemplo, &idade ) retorna:',
    options: [
      { id: 'a', text: 'O valor armazenado na variável' },
      { id: 'b', text: 'O endereço de memória da variável' },
      { id: 'c', text: 'O tamanho, em bytes, da variável' },
      { id: 'd', text: 'O conteúdo apontado por um ponteiro' },
      { id: 'e', text: 'O tipo de dado da variável' },
    ],
    correctAnswer: 'b',
    explanation:
      'O operador unário & (address-of) é utilizado em C para obter o endereço de memória físico onde a variável está alocada na memória RAM.',
    decorebaRapida: '& = Endereço de memória! * = Conteúdo/Valor apontado.',
  },
  {
    id: 8,
    questionNumber: 8,
    title: 'Rastreio de Ponteiros e Modificação de Variáveis',
    category: 'Ponteiros',
    enunciado:
      '(Pare e pense). Desenhe as “caixas” das variáveis e acompanhe para onde p aponta. O que é impresso?',
    codeSnippet: `int a = 5, b = 8;
int *p = &a;
*p = *p * 2;
p = &b;
*p = *p + a;
printf("a=%d b=%d *p=%d", a, b, *p);`,
    options: [
      { id: 'a', text: 'a=5 b=8 *p=8' },
      { id: 'b', text: 'a=10 b=8 *p=8' },
      { id: 'c', text: 'a=10 b=18 *p=10' },
      { id: 'd', text: 'a=10 b=13 *p=13' },
      { id: 'e', text: 'a=10 b=18 *p=18' },
    ],
    correctAnswer: 'e',
    explanation:
      'Passo a passo das variáveis:\n1. a = 5, b = 8\n2. p = &a (p aponta para a)\n3. *p = *p * 2 -> a passa a valer 5 * 2 = 10\n4. p = &b (p agora aponta para b)\n5. *p = *p + a -> b passa a valer 8 + 10 = 18\n6. printf exibe: a=10, b=18, e como p aponta para b, *p=18.\nResultado: a=10 b=18 *p=18.',
    decorebaRapida: 'a dobra (vira 10); p muda pra b e soma a (8+10=18). Ambos b e *p valem 18.',
  },
  {
    id: 9,
    questionNumber: 9,
    title: 'Passagem por Referência (Troca de Valores)',
    category: 'Ponteiros',
    enunciado:
      'Considere a função abaixo e as variáveis int m = 4, n = 9; declaradas na main . Qual chamada troca corretamente os valores de m e n ?',
    codeSnippet: `void trocar(int *a, int *b) {
  int aux = *a;
  *a = *b;
  *b = aux;
}`,
    options: [
      { id: 'a', text: 'trocar(m, n);' },
      { id: 'b', text: 'trocar(*m, *n);' },
      { id: 'c', text: 'trocar(m, &n);' },
      { id: 'd', text: 'trocar(&m, &n);' },
      { id: 'e', text: 'trocar(&m, n);' },
    ],
    correctAnswer: 'd',
    explanation:
      'Os parâmetros formais da função são ponteiros (int *a, int *b). Para que a função receba as referências corretas e altere as variáveis m e n da função main, a chamada deve passar os seus endereços de memória utilizando o operador &: trocar(&m, &n);.',
    decorebaRapida: 'Parâmetro é ponteiro (int *) -> na chamada você OBRIGATORIAMENTE passa endereço (&m, &n).',
  },
  {
    id: 10,
    questionNumber: 10,
    title: 'Passagem por Valor vs Referência',
    category: 'Ponteiros',
    enunciado: '(Valor × referência). O que o programa imprime?',
    codeSnippet: `void dobrar(int n) {
  n = n * 2;
}

int main() {
  int x = 4;
  dobrar(x);
  printf("%d", x);
  return 0;
}`,
    options: [
      { id: 'a', text: '8' },
      { id: 'b', text: '4' },
      { id: 'c', text: '2' },
      { id: 'd', text: '16' },
      { id: 'e', text: 'Erro de compilação' },
    ],
    correctAnswer: 'b',
    explanation:
      'A função dobrar recebe o parâmetro int n POR VALOR (por cópia). Qualquer modificação feita em n dentro da função altera apenas a cópia local na pilha da função. A variável x declarada na main permanece inalterada, mantendo o seu valor original 4.',
    decorebaRapida: 'Sem asterisco no parâmetro = passagem por valor (cópia). O original x NUNCA muda (continua 4)!',
  },
  {
    id: 11,
    questionNumber: 11,
    title: 'Aritmética de Ponteiros em Vetor',
    category: 'Ponteiros',
    enunciado: '(Aritmética de ponteiros). O que é impresso pelo trecho abaixo?',
    codeSnippet: `int v[5] = {10, 20, 30, 40, 50};
int *p = v;
printf("%d", *(p + 2));`,
    options: [
      { id: 'a', text: '30' },
      { id: 'b', text: '10' },
      { id: 'c', text: '12' },
      { id: 'd', text: '20' },
      { id: 'e', text: 'O endereço de v[2]' },
    ],
    correctAnswer: 'a',
    explanation:
      'O nome do vetor v decai para o endereço do seu primeiro elemento v[0]. Portanto, p aponta para v[0] (valor 10).\nA expressão p + 2 avança 2 posições no vetor, apontando para v[2].\nO operador de desreferência *(p + 2) acessa o conteúdo de v[2], cujo valor é 30.',
    decorebaRapida: '*(p + 2) é exatamente v[2]. v[0]=10, v[1]=20, v[2]=30.',
  },
  {
    id: 12,
    questionNumber: 12,
    title: 'Ponteiro Não Inicializado (Caça ao Bug)',
    category: 'Ponteiros',
    enunciado: '(Caça ao bug). Qual é o problema do trecho abaixo?',
    codeSnippet: `int *p;
*p = 10;
printf("%d", *p);`,
    options: [
      {
        id: 'a',
        text: 'O ponteiro p não foi inicializado: ele aponta para um endereço desconhecido, e a atribuição causa comportamento indefinido.',
      },
      { id: 'b', text: 'Falta o operador & antes de p na segunda linha.' },
      { id: 'c', text: 'Ponteiros não podem guardar valores do tipo inteiro.' },
      { id: 'd', text: 'O correto seria escrever p = 10;' },
      { id: 'e', text: 'Não há problema: o código é válido e seguro.' },
    ],
    correctAnswer: 'a',
    explanation:
      'A variável int *p foi declarada mas não foi inicializada (não recebeu o endereço de nenhuma variável real com &x nem alocação de memória com malloc). Ela contém lixo de memória, apontando para um endereço aleatório. Ao executar *p = 10, o programa tenta gravar dados em uma região arbitrária da memória, gerando Comportamento Indefinido (geralmente Falha de Segmentação / crash).',
    decorebaRapida: 'Ponteiro solto sem inicializar = aponta pra endereço desconhecido -> Comportamento Indefinido!',
  },
  {
    id: 13,
    questionNumber: 13,
    title: 'Especificador de Formato para Ponteiro (%p)',
    category: 'Ponteiros',
    enunciado:
      'Para exibir com printf o endereço guardado em um ponteiro, usa-se o especificador:',
    options: [
      { id: 'a', text: '%d' },
      { id: 'b', text: '%f' },
      { id: 'c', text: '%p' },
      { id: 'd', text: '%c' },
      { id: 'e', text: '%s' },
    ],
    correctAnswer: 'c',
    explanation:
      'O especificador padrão definido pela linguagem C para formatar e exibir endereços de memória contidos em ponteiros é o %p (de pointer), que imprime o valor em notação hexadecimal.',
    decorebaRapida: '%p é de POINTER (endereço hexadecimal). %d=inteiro, %f=float, %s=string, %c=char.',
  },

  // ==========================================
  // PARTE 3 - MANIPULAÇÃO DE ARQUIVOS (QUESTÕES 14 A 20)
  // ==========================================
  {
    id: 14,
    questionNumber: 14,
    title: 'Ciclo de Vida Correto de Arquivo',
    category: 'Arquivos',
    enunciado: 'Qual é o ciclo de vida correto de um arquivo em C?',
    options: [
      { id: 'a', text: 'Usar ( fprintf ) → abrir ( fopen ) → fechar ( fclose )' },
      { id: 'b', text: 'Abrir ( fopen ) → fechar ( fclose ) → usar ( fprintf )' },
      { id: 'c', text: 'Fechar ( fclose ) → abrir ( fopen ) → usar ( fprintf )' },
      { id: 'd', text: 'Abrir ( fopen ) → usar ( fprintf ) → fechar ( fclose )' },
      { id: 'e', text: 'Usar ( fprintf ) → fechar ( fclose ) → abrir ( fopen )' },
    ],
    correctAnswer: 'd',
    explanation:
      'O fluxo operacional obrigatório de arquivos em C é sequencial:\n1º) Abrir o fluxo de comunicação com fopen;\n2º) Manipular os dados lendo ou escrevendo com fprintf, fscanf, etc.;\n3º) Fechar o fluxo e liberar os buffers no sistema operacional com fclose.',
    decorebaRapida: 'Sequência natural: Abrir (fopen) -> Usar (fprintf) -> Fechar (fclose).',
  },
  {
    id: 15,
    questionNumber: 15,
    title: 'Comportamento do Modo de Abertura "w"',
    category: 'Arquivos',
    enunciado:
      'Ao abrir um arquivo que já existe com fopen("dados.txt", "w") , o que acontece?',
    options: [
      {
        id: 'a',
        text: 'Todo o conteúdo anterior é apagado, sem pedir confirmação, e a escrita começa do início.',
      },
      { id: 'b', text: 'O arquivo é aberto apenas para leitura.' },
      { id: 'c', text: 'Os dados são acrescentados ao final, preservando o conteúdo anterior.' },
      { id: 'd', text: 'O fopen devolve NULL , porque o arquivo já existe.' },
      { id: 'e', text: 'O arquivo é aberto para leitura e escrita, mantendo o conteúdo.' },
    ],
    correctAnswer: 'a',
    explanation:
      'O modo de abertura "w" (write) cria o arquivo se ele não existir, mas se o arquivo já existir, todo o seu conteúdo anterior é imediatamente truncado (zerado/apagado) sem qualquer aviso ou confirmação, e a escrita começará do início.',
    decorebaRapida: 'Modo "w" destrói/apaga todo o conteúdo antigo imediatamente!',
  },
  {
    id: 16,
    questionNumber: 16,
    title: 'Modo de Abertura Cumulativo ("a")',
    category: 'Arquivos',
    enunciado:
      'Uma loja quer registrar cada venda em vendas.txt . A cada execução, a nova venda deve ser gravada sem perder as anteriores. Qual modo de abertura usar?',
    options: [
      { id: 'a', text: '"r"' },
      { id: 'b', text: '"w"' },
      { id: 'c', text: '"a"' },
      { id: 'd', text: '"r+"' },
      { id: 'e', text: '"w+"' },
    ],
    correctAnswer: 'c',
    explanation:
      'O modo "a" (append / anexar) preserva todo o conteúdo já existente no arquivo e posiciona o ponteiro de escrita no final. Assim, novas vendas são adicionadas sequencialmente sem sobrescrever nem perder os registros antigos.',
    decorebaRapida: 'Gravar sem perder as anteriores = modo "a" (append/anexar).',
  },
  {
    id: 17,
    questionNumber: 17,
    title: 'Retorno de fopen em Caso de Falha',
    category: 'Arquivos',
    enunciado: 'A função fopen devolve NULL quando:',
    options: [
      { id: 'a', text: 'O arquivo é aberto com sucesso.' },
      { id: 'b', text: 'O modo usado é "a" e o arquivo não existe.' },
      { id: 'c', text: 'O arquivo está vazio.' },
      { id: 'd', text: 'A função fclose ainda não foi chamada.' },
      {
        id: 'e',
        text: 'O arquivo não pode ser aberto — por exemplo, modo "r" em arquivo inexistente, pasta errada ou falta de permissão.',
      },
    ],
    correctAnswer: 'e',
    explanation:
      'A função fopen retorna um ponteiro FILE* válido em caso de sucesso. Ela devolve NULL exclusivamente quando ocorre alguma falha de abertura do arquivo: se o arquivo a ser lido em modo "r" não existe no disco, se o caminho do diretório está incorreto ou se o programa não possui privilégios de acesso suficientes.',
    decorebaRapida: 'fopen devolve NULL quando NÃO CONSEGUE abrir o arquivo (erro/inexistente em "r"/permissão).',
  },
  {
    id: 18,
    questionNumber: 18,
    title: 'Verificação Correta de Erro de Abertura',
    category: 'Arquivos',
    enunciado:
      'Após FILE *arq = fopen("notas.txt", "r"); , qual trecho verifica corretamente se a abertura falhou?',
    options: [
      { id: 'a', text: 'if (arq = NULL) { printf("Erro!"); return 1; }' },
      { id: 'b', text: 'if (arq == NULL) { printf("Erro!"); return 1; }' },
      { id: 'c', text: 'if (*arq == NULL) { printf("Erro!"); return 1; }' },
      { id: 'd', text: 'if (&arq == NULL) { printf("Erro!"); return 1; }' },
      { id: 'e', text: 'if (arq != NULL) { printf("Erro!"); return 1; }' },
    ],
    correctAnswer: 'b',
    explanation:
      'Para verificar se a abertura falhou, testa-se se o ponteiro retornado arq é IGUAL a NULL utilizando o operador de igualdade ==: if (arq == NULL). O uso de um único igual = (opção a) é atribuição, *arq (opção c) tenta desreferenciar ponteiro nulo (crash), e &arq (opção d) pega o endereço da variável na pilha, que nunca é nulo.',
    decorebaRapida: 'Verificar erro de arquivo: if (arq == NULL). Atenção aos dois iguais (==) e sem asterisco!',
  },
  {
    id: 19,
    questionNumber: 19,
    title: 'Teste de Mesa com Modos "w" e "a"',
    category: 'Arquivos',
    enunciado:
      '(Teste de mesa w × a). O arquivo log.txt não existia. O programa abaixo é executado 2 vezes com MODO = "a" . Depois, troca-se para MODO = "w" e ele é executado mais 1 vez. Quantas linhas o log.txt terá ao final?',
    codeSnippet: `FILE *arq = fopen("log.txt", MODO);
fprintf(arq, "Execucao\\n");
fprintf(arq, "Fim\\n");
fclose(arq);`,
    options: [
      { id: 'a', text: '0' },
      { id: 'b', text: '2' },
      { id: 'c', text: '4' },
      { id: 'd', text: '6' },
      { id: 'e', text: '1' },
    ],
    correctAnswer: 'b',
    explanation:
      'Rastreio passo a passo:\n1. 1ª execução com "a": cria log.txt e grava 2 linhas.\n2. 2ª execução com "a": anexa mais 2 linhas (total 4 linhas acumuladas).\n3. 3ª execução com "w": o modo "w" APAGA/TRUNCA IMEDIATAMENTE todas as 4 linhas anteriores e recria o arquivo do zero.\n4. O programa então escreve apenas 2 novas linhas ("Execucao\\n" e "Fim\\n") e fecha.\nAo final, o arquivo terá exatamente 2 linhas.',
    decorebaRapida: 'O modo "w" final apagou tudo que o modo "a" acumulou antes e gravou apenas 2 linhas. Total: 2.',
  },
  {
    id: 20,
    questionNumber: 20,
    title: 'Leitura com fscanf e Cálculo de Média',
    category: 'Arquivos',
    enunciado:
      'O arquivo notas.txt contém as linhas abaixo:\n\nAna 8.0\nBruno 6.5\nCarla 9.5\n\nO que o programa imprime?',
    codeSnippet: `FILE *arq = fopen("notas.txt", "r");
char nome[50];
float nota, soma = 0;
int cont = 0;
while (fscanf(arq, "%s %f", nome, &nota) == 2) {
  soma = soma + nota;
  cont++;
}
fclose(arq);
printf("%.1f", soma / cont);`,
    options: [
      { id: 'a', text: '24.0' },
      { id: 'b', text: '6.5' },
      { id: 'c', text: '9.5' },
      { id: 'd', text: '7.3' },
      { id: 'e', text: '8.0' },
    ],
    correctAnswer: 'e',
    explanation:
      'O laço while lê linha por linha do arquivo:\n- Iteração 1: nome="Ana", nota=8.0 -> soma = 8.0, cont = 1\n- Iteração 2: nome="Bruno", nota=6.5 -> soma = 14.5, cont = 2\n- Iteração 3: nome="Carla", nota=9.5 -> soma = 24.0, cont = 3\nAo final, o programa calcula a média: soma / cont = 24.0 / 3 = 8.0.\nO formato "%.1f" imprime 8.0.',
    decorebaRapida: 'Soma das notas: 8.0 + 6.5 + 9.5 = 24.0. São 3 alunos: 24.0 / 3 = 8.0.',
  },
];
