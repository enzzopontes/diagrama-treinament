import type { Np2Flashcard, Np2SimuladoQuestion } from '../types/np2Training';

// ==========================================
// FLASHCARDS DE FIXAÇÃO: PROVA OFICIAL REDES (P2 / NP2)
// Análise e Desenvolvimento de Sistemas • UNIP
// ==========================================

export const REDES_NP2_FLASHCARDS: Np2Flashcard[] = [
  // --- QUESTÃO 1 ---
  {
    id: 1,
    categoria: 'Modelo TCP/IP',
    pergunta: 'Quais são as 5 camadas do modelo TCP/IP adotado pela prova?',
    resposta:
      '1. Aplicação\n2. Transporte\n3. Rede (ou Internet)\n4. Enlace de Dados\n5. Física\n\nPegadinha clássica: Apresentação e Sessão pertencem ao modelo OSI (7 camadas), NÃO ao modelo TCP/IP!',
    dica: 'Gabarito Q1 = A. Lembrar: Apresentação e Sessão NÃO entram no TCP/IP.',
  },

  // --- QUESTÕES 2 & 3 ---
  {
    id: 2,
    categoria: 'Dispositivos de Rede',
    pergunta: 'Qual a diferença crucial entre a função do Switch e a do Roteador?',
    resposta:
      '• SWITCH (Questão 2): Encaminha pacotes/quadros DENTRO de uma mesma rede local (LAN), operando na Camada 2 (Enlace) através de endereços MAC.\n\n• ROTEADOR (Questão 3): Encaminha pacotes ENTRE REDES DISTINTAS (WAN / inter-redes), operando na Camada 3 (Rede) através de endereços IP.',
    dica: 'Dentro da rede local = SWITCH (Q2 = B). Entre redes distintas = ROTEADOR (Q3 = A).',
  },

  // --- QUESTÃO 4 ---
  {
    id: 3,
    categoria: 'Sub-redes /20',
    pergunta: 'Por que o endereço IP 192.168.5.20 pertence à rede 192.168.0.0/20?',
    resposta:
      'Com a máscara /20, o salto no 3º octeto é de 16 em 16 (256 - 240 = 16).\nA primeira sub-rede vai de:\n192.168.0.0 até 192.168.15.255.\nComo o número 5 está entre 0 e 15, o IP 192.168.5.20 pertence à rede 192.168.0.0/20!',
    dica: 'Gabarito Q4 = D. Faixa da /20 vai do 3º octeto 0 até 15. O 5 está no meio!',
  },

  // --- QUESTÃO 5 ---
  {
    id: 4,
    categoria: 'Camada de Enlace',
    pergunta: 'Qual é o endereço de broadcast na camada de enlace de dados e qual o seu formato?',
    resposta:
      'FF-FF-FF-FF-FF-FF (Endereço MAC de Broadcast).\n\nO endereço MAC é composto por 48 bits, divididos em 6 octetos hexadecimais de 8 bits cada (FF = 11111111 em binário).\nQuando todos os 48 bits estão em nível 1, o endereço é FF-FF-FF-FF-FF-FF.',
    dica: 'Gabarito Q5 = D. São 6 pares de FF separados por hífen (48 bits).',
  },

  // --- QUESTÃO 6 ---
  {
    id: 5,
    categoria: 'Fundamentos IPv4',
    pergunta: 'Quantos bits são utilizados para se representar um endereço IPv4?',
    resposta:
      '32 bits.\n\nO IPv4 é formado por 4 octetos de 8 bits cada (4 × 8 = 32 bits), representados na notação decimal com ponto (ex: 192.168.0.1).\n(O IPv6 utiliza 128 bits).',
    dica: 'Gabarito Q6 = C. IPv4 = 32 bits (4 octetos de 8 bits).',
  },

  // --- QUESTÃO 7 ---
  {
    id: 6,
    categoria: 'Cálculo de Máscara',
    pergunta: 'Qual é a máscara decimal correspondente ao prefixo /20?',
    resposta:
      '255.255.240.0.\n\nCálculo dos 20 bits:\n• 1º octeto (8 bits 1): 255\n• 2º octeto (8 bits 1): 255\n• 3º octeto (4 bits 1 e 4 bits 0): 128 + 64 + 32 + 16 = 240\n• 4º octeto (8 bits 0): 0\nMáscara: 255.255.240.0.',
    dica: 'Gabarito Q7 = C. /20 = 4 bits no 3º octeto = 240. Máscara = 255.255.240.0.',
  },

  // --- QUESTÃO 8 ---
  {
    id: 7,
    categoria: 'Cálculo de IPs',
    pergunta: 'Quantos endereços IP totais possui a rede com máscara /20?',
    resposta:
      '4096 endereços IP.\n\nFórmula:\nBits de host = 32 - 20 = 12 bits.\nTotal de IPs = 2^12 = 4096.\n(Inclui o endereço de rede e o de broadcast).',
    dica: 'Gabarito Q8 = D. 2 elevado a 12 = 4096 IPs totais.',
  },

  // --- QUESTÃO 9 ---
  {
    id: 8,
    categoria: 'Cálculo de Broadcast',
    pergunta: 'Qual o endereço de broadcast da rede 192.168.0.0/20?',
    resposta:
      '192.168.15.255.\n\nComo o salto no 3º octeto é de 16, a próxima sub-rede seria 192.168.16.0.\nO último endereço IP antes da próxima rede é o broadcast da rede atual: 192.168.15.255.',
    dica: 'Gabarito Q9 = D. Próxima rede seria 16.0, então o broadcast é 15.255!',
  },

  // --- QUESTÃO 10 ---
  {
    id: 9,
    categoria: 'Hosts Válidos',
    pergunta: 'Quantos IPs podem ser alocados para hosts na rede 192.168.0.0/20?',
    resposta:
      '4094 hosts utilizáveis.\n\nFórmula:\nHosts válidos = Total de IPs - 2\n= 4096 - 2 = 4094.\n\nSubtrai-se 2 porque:\n• O primeiro IP (192.168.0.0) é o endereço da REDE.\n• O último IP (192.168.15.255) é o endereço de BROADCAST.',
    dica: 'Gabarito Q10 = D. Total 4096 menos 2 (rede e broadcast) = 4094 hosts!',
  },

  // --- GABARITO RELÂMPAGO & REGRAS ---
  {
    id: 10,
    categoria: 'Gabarito Oficial P2',
    pergunta: 'Qual o gabarito das 10 questões da prova de Redes para gabaritar?',
    resposta:
      '1-A (TCP/IP: Aplicação, Transporte, Rede, Enlace, Física)\n2-B (Switch: dentro da rede local)\n3-A (Roteador: entre redes distintas)\n4-D (192.168.0.0/20)\n5-D (Broadcast MAC: FF-FF-FF-FF-FF-FF)\n6-C (IPv4: 32 bits)\n7-C (Máscara /20: 255.255.240.0)\n8-D (Total de IPs: 4096)\n9-D (Broadcast IP: 192.168.15.255)\n10-D (Hosts válidos: 4094)',
    dica: 'Mnemônico das letras: A, B, A, D, D, C, C, D, D, D.',
  },
  {
    id: 11,
    categoria: 'Macetes de Sub-rede',
    pergunta: 'Como calcular rapidamente o "salto" de qualquer sub-rede no octeto?',
    resposta:
      'Salto = 256 - valor_decimal_do_octeto.\n\nPara a máscara /20 (3º octeto = 240):\nSalto = 256 - 240 = 16.\n\nAs sub-redes andam de 16 em 16 no 3º octeto:\n• Rede 1: 192.168.0.0 até 192.168.15.255\n• Rede 2: 192.168.16.0 até 192.168.31.255\n• Rede 3: 192.168.32.0 até 192.168.47.255',
    dica: 'Salto do /20 = 256 - 240 = 16.',
  },
  {
    id: 12,
    categoria: 'Camada 2 vs Camada 3',
    pergunta: 'Em quais camadas do modelo OSI/TCP-IP operam o Switch e o Roteador?',
    resposta:
      '• Switch opera na CAMADA 2 (Enlace de Dados): lê cabeçalhos Ethernet, tabela CAM e encaminha por MAC Address.\n\n• Roteador opera na CAMADA 3 (Rede): lê pacotes IP, tabela de roteamento e encaminha entre redes com faixas de IP diferentes.',
    dica: 'Switch = Camada 2 (MAC). Roteador = Camada 3 (IP).',
  },
  {
    id: 13,
    categoria: 'IPv4 vs IPv6',
    pergunta: 'Qual a diferença de bits e notação entre endereços IPv4 e IPv6?',
    resposta:
      '• IPv4 (Questão 6): 32 bits, 4 octetos decimais separados por ponto (ex: 192.168.0.1).\n\n• IPv6: 128 bits, 8 grupos hexadecimais de 16 bits separados por dois-pontos (ex: 2001:0db8::1).',
    dica: 'IPv4 = 32 bits. IPv6 = 128 bits.',
  },
];

// ==========================================
// SIMULADO OFICIAL: PROVA DE REDES (P2 / NP2)
// 10 Questões Reais da Prova Oficial
// ==========================================

export const REDES_NP2_SIMULADO_QUESTIONS: Np2SimuladoQuestion[] = [
  {
    id: 1,
    questionNumber: 1,
    title: 'Camadas do Modelo TCP/IP',
    category: 'Arquitetura TCP/IP',
    enunciado: 'Quais são as camadas do modelo TCP/IP?',
    options: [
      { id: 'a', text: 'Aplicação, Transporte, Rede, Enlace de Dados, Física.' },
      { id: 'b', text: 'Aplicação, Apresentação, Sessão, Transporte, Rede, Física.' },
      { id: 'c', text: 'Aplicação, Apresentação, Sessão, Transporte, Rede, Enlace de Dados, Física.' },
      { id: 'd', text: 'Aplicação, Apresentação, Sessão, Transporte, Internet, Enlace de Dados, Física.' },
    ],
    correctAnswer: 'a',
    explanation:
      'A arquitetura do modelo TCP/IP é estruturada em 5 camadas (ou 4 no modelo histórico original da RFC): Aplicação, Transporte, Rede (ou Internet), Enlace de Dados e Física.\n\nPor que as outras opções estão erradas?\nAs alternativas B, C e D incluem as camadas de "Apresentação" e "Sessão", que pertencem exclusivamente ao modelo de referência OSI de 7 camadas (ISO/OSI), e não ao modelo TCP/IP.',
    decorebaRapida: 'TCP/IP tem 5 camadas: Aplicação, Transporte, Rede, Enlace e Física. Sessão e Apresentação são do OSI!',
  },
  {
    id: 2,
    questionNumber: 2,
    title: 'Dispositivo de Rede Local (LAN)',
    category: 'Equipamentos de Rede',
    enunciado: 'Qual dispositivo de rede tem como função encaminhar pacotes dentro de uma rede local?',
    options: [
      { id: 'a', text: 'Roteador.' },
      { id: 'b', text: 'Switch.' },
      { id: 'c', text: 'Servidor.' },
      { id: 'd', text: 'PC.' },
    ],
    correctAnswer: 'b',
    explanation:
      'O Switch (comutador) é o dispositivo projetado para interconectar dispositivos e comutar quadros/pacotes DENTRO da mesma rede local (LAN). Ele opera na Camada 2 (Enlace), aprendendo e consultando endereços físicos MAC em sua tabela interna para enviar dados diretamente à porta de destino.\n\nO Roteador (letra A) serve para interligar redes diferentes (inter-redes/WAN); Servidor e PC são nós terminais (hosts).',
    decorebaRapida: 'Dentro da rede local = SWITCH. Entre redes distintas = ROTEADOR.',
  },
  {
    id: 3,
    questionNumber: 3,
    title: 'Dispositivo Inter-redes (WAN)',
    category: 'Equipamentos de Rede',
    enunciado: 'Qual dispositivo de rede tem como função encaminhar pacotes entre redes distintas?',
    options: [
      { id: 'a', text: 'Roteador.' },
      { id: 'b', text: 'Switch.' },
      { id: 'c', text: 'Servidor.' },
      { id: 'd', text: 'PC.' },
    ],
    correctAnswer: 'a',
    explanation:
      'O Roteador (Router) é o equipamento responsável por determinar a melhor rota e encaminhar pacotes de dados ENTRE REDES DISTINTAS (com sub-redes ou faixas de IP diferentes). Ele opera na Camada 3 (Rede) examinando o endereço IP de destino contido no cabeçalho do pacote.\n\nO Switch (letra B) atua apenas internamente na rede local.',
    decorebaRapida: 'Entre redes distintas (roteamento IP) = ROTEADOR.',
  },
  {
    id: 4,
    questionNumber: 4,
    title: 'Identificação de Sub-rede IP',
    category: 'Endereçamento IPv4',
    enunciado: 'O endereço IP 192.168.5.20 pertence a qual rede?',
    options: [
      { id: 'a', text: '192.168.0.0/24.' },
      { id: 'b', text: '192.168.1.0/24.' },
      { id: 'c', text: '192.168.2.0/23.' },
      { id: 'd', text: '192.168.0.0/20.' },
    ],
    correctAnswer: 'd',
    explanation:
      'Vamos analisar as faixas de cada alternativa:\n• 192.168.0.0/24: vai de 192.168.0.0 a 192.168.0.255 (o 5.20 NÃO pertence).\n• 192.168.1.0/24: vai de 192.168.1.0 a 192.168.1.255 (o 5.20 NÃO pertence).\n• 192.168.2.0/23: salto de 2, vai de 192.168.2.0 a 192.168.3.255 (o 5.20 NÃO pertence).\n• 192.168.0.0/20 (CORRETA): o salto no 3º octeto é 16 (256 - 240 = 16), abrangendo de 192.168.0.0 até 192.168.15.255. Como o número 5 está dentro desse intervalo (0 a 15), o IP 192.168.5.20 pertence a esta rede!',
    decorebaRapida: 'A rede /20 vai de 192.168.0.0 até 192.168.15.255. O IP 5.20 está perfeitamente dentro dela!',
  },
  {
    id: 5,
    questionNumber: 5,
    title: 'Endereço de Broadcast na Camada de Enlace',
    category: 'Camada de Enlace',
    enunciado:
      'Sabendo que a notação hexadecimal FF corresponde a um número de 8 bits, assinale a alternativa que representa o endereço de broadcast na camada de enlace de dados:',
    options: [
      { id: 'a', text: 'FF.' },
      { id: 'b', text: 'FF-FF.' },
      { id: 'c', text: 'FF-FF-FF.' },
      { id: 'd', text: 'FF-FF-FF-FF-FF-FF.' },
    ],
    correctAnswer: 'd',
    explanation:
      'Na Camada de Enlace de Dados (Camada 2), o endereçamento físico é feito pelo endereço MAC (Media Access Control), que possui 48 bits de comprimento. Como cada byte (8 bits) é representado por 2 dígitos hexadecimais (FF), o endereço MAC completo é formado por 6 octetos.\n\nO endereço de broadcast (onde todos os 48 bits são 1) é representado por 6 blocos: FF-FF-FF-FF-FF-FF.',
    decorebaRapida: 'Broadcast MAC = 6 pares de FF (48 bits): FF-FF-FF-FF-FF-FF.',
  },
  {
    id: 6,
    questionNumber: 6,
    title: 'Tamanho em Bits do IPv4',
    category: 'Endereçamento IPv4',
    enunciado: 'Quantos bits são utilizados para se representar um endereço IPv4?',
    options: [
      { id: 'a', text: '8.' },
      { id: 'b', text: '16.' },
      { id: 'c', text: '32.' },
      { id: 'd', text: '64.' },
    ],
    correctAnswer: 'c',
    explanation:
      'Um endereço IPv4 é constituído rigorosamente por 32 bits (4 bytes). Ele é comumente representado em 4 números decimais separados por pontos (ex: 192.168.1.1), onde cada número varia de 0 a 255 (8 bits cada, 4 × 8 = 32 bits).\n\n(8 bits é 1 byte; 16 bits é um número de porta; 64 bits não é tamanho de endereço IP padrão; IPv6 possui 128 bits).',
    decorebaRapida: 'IPv4 = 32 bits. Não confunda com IPv6 (128 bits)!',
  },
  {
    id: 7,
    questionNumber: 7,
    title: 'Máscara Decimal do Prefixo /20',
    category: 'Cálculo de Máscaras',
    enunciado: 'A rede 192.168.0.0/20 possui qual máscara?',
    options: [
      { id: 'a', text: '255.255.255.0.' },
      { id: 'b', text: '255.255.248.0.' },
      { id: 'c', text: '255.255.240.0.' },
      { id: 'd', text: '255.255.224.0.' },
    ],
    correctAnswer: 'c',
    explanation:
      'O prefixo /20 indica que os primeiros 20 bits da máscara são 1 e os 12 bits restantes são 0:\n• 1º octeto (8 bits): 11111111 = 255\n• 2º octeto (8 bits): 11111111 = 255\n• 3º octeto (4 bits 1 e 4 bits 0): 11110000 = 128 + 64 + 32 + 16 = 240\n• 4º octeto (8 bits 0): 00000000 = 0\n\nMáscara decimal: 255.255.240.0.\n\n(255.255.255.0 é /24; 255.255.248.0 é /21; 255.255.224.0 é /19).',
    decorebaRapida: 'Máscara /20 = 255.255.240.0 (4 bits no 3º octeto = 240).',
  },
  {
    id: 8,
    questionNumber: 8,
    title: 'Total de IPs na Rede /20',
    category: 'Cálculo de Sub-redes',
    enunciado: 'Quantos IPs possui a rede 192.168.0.0/20?',
    options: [
      { id: 'a', text: '512.' },
      { id: 'b', text: '1024.' },
      { id: 'c', text: '2048.' },
      { id: 'd', text: '4096.' },
    ],
    correctAnswer: 'd',
    explanation:
      'Para calcular o total de endereços IP de uma rede, utiliza-se a fórmula 2^(bits de host):\n• Bits de host = 32 - máscara = 32 - 20 = 12 bits.\n• Total de IPs = 2^12 = 4096 endereços.\n\n(Atenção: o enunciado perguntou o total de IPs da rede, incluindo rede e broadcast; por isso a resposta é 4096, e não 4094).',
    decorebaRapida: 'Total de IPs da /20: 32 - 20 = 12 bits. 2^12 = 4096 IPs.',
  },
  {
    id: 9,
    questionNumber: 9,
    title: 'Endereço de Broadcast da Rede /20',
    category: 'Endereçamento IPv4',
    enunciado: 'Qual o endereço de broadcast da rede 192.168.0.0/20?',
    options: [
      { id: 'a', text: '192.168.0.255.' },
      { id: 'b', text: '192.168.1.255.' },
      { id: 'c', text: '192.168.255.255.' },
      { id: 'd', text: '192.168.15.255.' },
    ],
    correctAnswer: 'd',
    explanation:
      'Como a máscara /20 possui salto de 16 no 3º octeto (256 - 240 = 16), a primeira sub-rede inicia em 192.168.0.0 e a próxima rede começará em 192.168.16.0.\n\nO endereço de broadcast é o último endereço possível antes da próxima rede. Logo, subtraindo 1 de 192.168.16.0, obtemos 192.168.15.255.',
    decorebaRapida: 'Salto é 16, então a rede vai de 0.0 até 15.255 (broadcast).',
  },
  {
    id: 10,
    questionNumber: 10,
    title: 'Hosts Alocáveis na Rede /20',
    category: 'Cálculo de Sub-redes',
    enunciado: 'Quantos IPs podem ser alocados para hosts na rede 192.168.0.0/20?',
    options: [
      { id: 'a', text: '510.' },
      { id: 'b', text: '1022.' },
      { id: 'c', text: '2046.' },
      { id: 'd', text: '4094.' },
    ],
    correctAnswer: 'd',
    explanation:
      'O número de endereços IP válidos para hosts é calculado pela fórmula:\nHosts utilizáveis = 2^(bits de host) - 2\n= 2^12 - 2 = 4096 - 2 = 4094 hosts.\n\nOs dois endereços reservados que não podem ser atribuídos a computadores são:\n1. 192.168.0.0 (Identificador da própria Rede)\n2. 192.168.15.255 (Endereço de Broadcast da Rede).',
    decorebaRapida: 'Hosts válidos = 4096 - 2 = 4094 hosts!',
  },
];
