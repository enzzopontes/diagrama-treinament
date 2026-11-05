import type { Np2Flashcard, Np2SimuladoQuestion } from '../types/np2Training';

export const REDES_NP2_FLASHCARDS: Np2Flashcard[] = [
  // --- SUB-REDES IPV4: /22 ---
  {
    id: 1,
    categoria: 'Sub-redes /22',
    pergunta: 'Qual a máscara decimal correspondente ao prefixo CIDR /22?',
    resposta:
      '255.255.252.0\n\nEm binário: 11111111.11111111.11111100.00000000 (8 + 8 + 6 = 22 bits de rede e 10 bits de host).',
    dica: '3º octeto tem 6 bits "1": 128 + 64 + 32 + 16 + 8 + 4 = 252.',
  },
  {
    id: 2,
    categoria: 'Sub-redes /22',
    pergunta: 'Quantos bits de host restam em uma rede /22 e quantos hosts ÚTEIS ela suporta?',
    resposta:
      '32 - 22 = 10 bits de host.\nTotal de endereços: 2^10 = 1024.\nHosts úteis (utilizáveis): 2^10 - 2 = 1022 hosts.',
    dica: 'Subtrai 2 porque o primeiro IP é o endereço de REDE e o último é o BROADCAST.',
  },
  {
    id: 3,
    categoria: 'Sub-redes /22',
    pergunta: 'Qual o valor do "salto" (tamanho do bloco) no 3º octeto para a máscara 255.255.252.0?',
    resposta:
      'O salto é 4 (256 - 252 = 4).\n\nAs sub-redes avançam de 4 em 4 no 3º octeto:\nRede 1: x.x.0.0\nRede 2: x.x.4.0\nRede 3: x.x.8.0\nRede 4: x.x.12.0',
    dica: 'Salto da lousa do Prof. Fábio: 256 - máscara = 256 - 252 = 4!',
  },
  {
    id: 4,
    categoria: 'Sub-redes /22',
    pergunta: 'Para a sub-rede 192.168.0.0/22, qual o primeiro host, último host e endereço de broadcast?',
    resposta:
      'Rede: 192.168.0.0\nPrimeiro host: 192.168.0.1\nÚltimo host: 192.168.3.254\nBroadcast: 192.168.3.255',
    dica: 'Como a próxima rede começa em 192.168.4.0, o broadcast é 1 IP antes (192.168.3.255).',
  },
  {
    id: 5,
    categoria: 'Sub-redes /22',
    pergunta: 'Para a sub-rede 192.168.4.0/22, quais são os limites de IP?',
    resposta:
      'Rede: 192.168.4.0\nPrimeiro host: 192.168.4.1\nÚltimo host: 192.168.7.254\nBroadcast: 192.168.7.255',
    dica: 'Próxima rede seria 192.168.8.0.',
  },

  // --- CABEÇALHO IPV4 ---
  {
    id: 6,
    categoria: 'Cabeçalho IPv4',
    pergunta: 'Qual o tamanho mínimo e máximo do cabeçalho de um pacote IPv4?',
    resposta:
      'Tamanho mínimo: 20 bytes (quando não há opções extras).\nTamanho máximo: 60 bytes (com 40 bytes de opções adicionais).',
    dica: 'Lousa do Prof. Fábio: Mínimo 20B, Máximo 60B.',
  },
  {
    id: 7,
    categoria: 'Cabeçalho IPv4',
    pergunta: 'Como funciona o campo HLEN (Internet Header Length) e por que ele mede palavras de 32 bits?',
    resposta:
      'O campo HLEN tem 4 bits (valores de 0 a 15). Ele indica o comprimento do cabeçalho medido em palavras de 4 bytes (32 bits).\n\nPara o tamanho padrão de 20 bytes: HLEN = 20 / 4 = 5 (binário 0101).',
    dica: 'Tamanho em bytes = HLEN × 4. Se HLEN = 5, tamanho = 20 bytes.',
  },
  {
    id: 8,
    categoria: 'Cabeçalho IPv4',
    pergunta: 'Qual a unidade e o tamanho máximo do campo Total Length (Comprimento Total)?',
    resposta:
      'O campo tem 16 bits e mede em BYTES o pacote inteiro (cabeçalho + dados/payload).\nTamanho máximo teórico: 2^16 - 1 = 65.535 bytes.',
    dica: 'Diferença: HLEN mede apenas o cabeçalho em palavras de 4B; Total Length mede tudo em bytes.',
  },
  {
    id: 9,
    categoria: 'Cabeçalho IPv4',
    pergunta: 'O que faz o campo TTL (Time to Live) e como o comando tracert o utiliza?',
    resposta:
      'O TTL é decrementado em 1 por cada roteador que repassa o pacote. Quando chega a 0, o pacote é descartado e o roteador envia de volta um ICMP Time Exceeded.\n\nO tracert (traceroute) envia pacotes com TTL=1, TTL=2, TTL=3... para mapear cada salto do caminho.',
    dica: 'Evita que pacotes fiquem em loop infinito na internet.',
  },
  {
    id: 10,
    categoria: 'Cabeçalho IPv4',
    pergunta: 'Quais os valores mais comuns do campo Protocol no cabeçalho IPv4?',
    resposta:
      '1 = ICMP (ping, tracert)\n6 = TCP (HTTP, HTTPS, SSH, FTP)\n17 = UDP (DNS, DHCP, streaming, VoIP)',
    dica: 'Números obrigatórios de memorizar: 1 = ICMP | 6 = TCP | 17 = UDP.',
  },
  {
    id: 11,
    categoria: 'Cabeçalho IPv4',
    pergunta: 'Quais são as Flags de fragmentação no cabeçalho IPv4?',
    resposta:
      'O campo Flags tem 3 bits:\n- Bit 0: Reservado (sempre 0)\n- Bit 1 (DF - Don\'t Fragment): Se 1, proíbe fragmentação (se não couber no MTU, pacote é descartado)\n- Bit 2 (MF - More Fragments): Se 1, indica que há mais fragmentos a caminho; se 0, é o último fragmento.',
    dica: 'DF = 1 não fragmente. MF = 1 mais pedaços virão.',
  },
];

export const REDES_NP2_SIMULADO_QUESTIONS: Np2SimuladoQuestion[] = [
  {
    id: 1,
    questionNumber: 1,
    title: 'Cálculo de Sub-rede /22',
    category: 'Sub-redes /22',
    enunciado:
      'Dada a rede 192.168.8.0 com máscara /22 (255.255.252.0), qual é o endereço de BROADCAST dessa sub-rede específica?',
    options: [
      { id: 'a', text: '192.168.11.255' },
      { id: 'b', text: '192.168.8.255' },
      { id: 'c', text: '192.168.12.255' },
      { id: 'd', text: '192.168.15.255' },
    ],
    correctAnswer: 'a',
    explanation:
      'Na máscara /22, o salto no 3º octeto é 4 (256 - 252 = 4). A sub-rede atual começa em 192.168.8.0 e a próxima sub-rede iniciará em 192.168.12.0. Logo, o endereço imediatamente anterior ao início da próxima sub-rede é o broadcast: 192.168.11.255.',
    decorebaRapida: 'Início: 8.0 -> Próxima rede: 12.0 -> Broadcast: 11.255.',
  },
  {
    id: 2,
    questionNumber: 2,
    title: 'Faixa de Hosts Válidos',
    category: 'Sub-redes /22',
    enunciado:
      'Em uma sub-rede com identificador 172.16.16.0/22, qual é o ÚLTIMO endereço IP válido que pode ser configurado na placa de rede de um computador?',
    options: [
      { id: 'a', text: '172.16.19.254' },
      { id: 'b', text: '172.16.19.255' },
      { id: 'c', text: '172.16.16.254' },
      { id: 'd', text: '172.16.20.254' },
    ],
    correctAnswer: 'a',
    explanation:
      'A rede vai de 172.16.16.0 até 172.16.19.255 (broadcast). O último IP configurável em hosts é o penúltimo endereço do bloco: 172.16.19.254.',
    decorebaRapida: 'Último host é sempre 1 IP antes do broadcast: 172.16.19.254.',
  },
  {
    id: 3,
    questionNumber: 3,
    title: 'Quantidade de Hosts Utilizáveis',
    category: 'Sub-redes /22',
    enunciado:
      'Quantos computadores (hosts) podem receber um endereço IP exclusivo e válido dentro de um único bloco CIDR /22?',
    options: [
      { id: 'a', text: '1022 hosts' },
      { id: 'b', text: '1024 hosts' },
      { id: 'c', text: '510 hosts' },
      { id: 'd', text: '2046 hosts' },
    ],
    correctAnswer: 'a',
    explanation:
      'Um endereço IPv4 possui 32 bits. Com /22 para rede, restam 32 - 22 = 10 bits para host. 2^10 = 1024 endereços totais. Subtraindo o endereço de rede e o de broadcast: 1024 - 2 = 1022 hosts utilizáveis.',
    decorebaRapida: '2^10 - 2 = 1024 - 2 = 1022 hosts úteis.',
  },
  {
    id: 4,
    questionNumber: 4,
    title: 'Campo HLEN do Cabeçalho IPv4',
    category: 'Cabeçalho IPv4',
    enunciado:
      'O analisador de pacotes Wireshark inspecionou um datagrama IPv4 e identificou o valor binário 0101 no campo HLEN (IHL). Qual é o tamanho real do cabeçalho em bytes?',
    options: [
      { id: 'a', text: '20 bytes' },
      { id: 'b', text: '5 bytes' },
      { id: 'c', text: '40 bytes' },
      { id: 'd', text: '15 bytes' },
    ],
    correctAnswer: 'a',
    explanation:
      'O valor 0101 em decimal é 5. Como o campo HLEN mede o comprimento do cabeçalho em blocos de 32 bits (4 bytes), o tamanho em bytes é 5 × 4 = 20 bytes (tamanho mínimo sem opções).',
    decorebaRapida: 'HLEN = 5 representa 5 × 4 = 20 bytes.',
  },
  {
    id: 5,
    questionNumber: 5,
    title: 'Mecanismo do TTL e Tracert',
    category: 'Cabeçalho IPv4',
    enunciado:
      'O utilitário tracert envia pacotes com valores progressivos de TTL para mapear a rota até o destino. O que acontece com o pacote no momento em que seu valor de TTL atinge ZERO em um roteador intermediário?',
    options: [
      {
        id: 'a',
        text: 'O roteador descarta o pacote e envia uma mensagem ICMP Time Exceeded de volta à origem.',
      },
      {
        id: 'b',
        text: 'O roteador automaticamente reinicia o TTL para 255 e encaminha adiante.',
      },
      {
        id: 'c',
        text: 'O pacote é armazenado em disco até que a rede fique ociosa.',
      },
      {
        id: 'd',
        text: 'O roteador converte o pacote para IPv6.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'O campo TTL evita loops infinitos. Ao chegar a 0, o roteador obrigatoriamente descarta o datagrama e responde à origem com uma notificação ICMP Type 11 (Time Exceeded), permitindo ao tracert registrar o IP daquele salto.',
    decorebaRapida: 'TTL = 0 -> Descarte imediato + ICMP Time Exceeded à origem.',
  },
  {
    id: 6,
    questionNumber: 6,
    title: 'Protocolos de Transporte no IPv4',
    category: 'Cabeçalho IPv4',
    enunciado:
      'No cabeçalho IPv4, o campo Protocol identifica qual protocolo da camada superior gerou os dados transportados. Quais são os números correspondentes a TCP e UDP respectivamente?',
    options: [
      { id: 'a', text: 'TCP = 6 e UDP = 17' },
      { id: 'b', text: 'TCP = 17 e UDP = 6' },
      { id: 'c', text: 'TCP = 80 e UDP = 53' },
      { id: 'd', text: 'TCP = 1 e UDP = 2' },
    ],
    correctAnswer: 'a',
    explanation:
      'Conforme a tabela IANA cobrada pelo Prof. Fábio: Protocol 1 = ICMP, Protocol 6 = TCP e Protocol 17 = UDP. (80 e 53 são números de porta, não de protocolo de rede).',
    decorebaRapida: '1 = ICMP | 6 = TCP | 17 = UDP.',
  },
  {
    id: 7,
    questionNumber: 7,
    title: 'Flag DF (Don\'t Fragment)',
    category: 'Cabeçalho IPv4',
    enunciado:
      'Se um pacote de 1500 bytes com a flag DF = 1 chegar a um roteador cujo link de saída possui um MTU de 1200 bytes, qual ação o roteador executará?',
    options: [
      {
        id: 'a',
        text: 'Descarta o pacote e envia mensagem ICMP "Fragmentation Needed and DF set".',
      },
      {
        id: 'b',
        text: 'Fragmenta o pacote em dois pedaços de qualquer maneira.',
      },
      {
        id: 'c',
        text: 'Comprime o pacote para caber nos 1200 bytes.',
      },
      {
        id: 'd',
        text: 'Aumenta o MTU do enlace de saída para 1500 bytes.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'A flag DF (Don\'t Fragment = Não Fragmente) proíbe a quebra do pacote. Se o pacote for maior que o MTU do enlace subsequente e não puder ser fragmentado, o roteador é forçado a descartá-lo e alertar a origem via ICMP.',
    decorebaRapida: 'DF = 1 proíbe fragmentação. Se não couber no MTU, é descartado!',
  },
  {
    id: 8,
    questionNumber: 8,
    title: 'Tamanho Máximo do Cabeçalho IPv4',
    category: 'Cabeçalho IPv4',
    enunciado:
      'Por que o cabeçalho IPv4 não pode ultrapassar o limite máximo de 60 bytes?',
    options: [
      {
        id: 'a',
        text: 'Porque o campo HLEN tem apenas 4 bits, cujo valor máximo é 15 (15 × 4 bytes = 60 bytes).',
      },
      {
        id: 'b',
        text: 'Porque a memória RAM dos switches antigos era limitada a 60 bytes.',
      },
      {
        id: 'c',
        text: 'Porque o protocolo Ethernet não suporta cabeçalhos maiores que 60 bytes.',
      },
      {
        id: 'd',
        text: 'Por uma convenção de segurança contra vírus de rede.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'Com 4 bits, o maior número representável no campo HLEN é 1111 em binário (15 em decimal). Como cada unidade equivale a 4 bytes, 15 × 4 = 60 bytes de limite físico no protocolo.',
    decorebaRapida: 'HLEN max = 15 -> 15 × 4 = 60 bytes!',
  },
  {
    id: 9,
    questionNumber: 9,
    title: 'Pertencimento a uma Sub-rede /22',
    category: 'Sub-redes /22',
    enunciado:
      'O computador A possui IP 192.168.2.50/22 e o computador B possui IP 192.168.3.100/22. Eles estão na mesma sub-rede local e conseguem se comunicar diretamente sem roteador?',
    options: [
      {
        id: 'a',
        text: 'Sim, pois a sub-rede 192.168.0.0/22 engloba todos os IPs de 192.168.0.1 até 192.168.3.254.',
      },
      {
        id: 'b',
        text: 'Não, porque pertencem a terceiros octetos diferentes (2 e 3).',
      },
      {
        id: 'c',
        text: 'Não, pois uma rede /22 só permite computadores com o mesmo terceiro octeto.',
      },
      {
        id: 'd',
        text: 'Apenas se ambos tiverem o mesmo endereço MAC.',
      },
    ],
    correctAnswer: 'a',
    explanation:
      'Na máscara /22, o salto é de 4 em 4. A primeira sub-rede vai de 0.0 até 3.255. Logo, tanto o IP 192.168.2.50 quanto 192.168.3.100 pertencem à mesmíssima sub-rede 192.168.0.0/22.',
    decorebaRapida: 'Bloco 0.0 a 3.255: os octetos 0, 1, 2 e 3 estão na MESMA sub-rede!',
  },
  {
    id: 10,
    questionNumber: 10,
    title: 'Campo Total Length',
    category: 'Cabeçalho IPv4',
    enunciado:
      'Se o campo Total Length de um pacote IPv4 indicar 1000 bytes e o campo HLEN indicar 5, qual é o tamanho exato dos DADOS (payload) transportados na camada de dados?',
    options: [
      { id: 'a', text: '980 bytes' },
      { id: 'b', text: '995 bytes' },
      { id: 'c', text: '1000 bytes' },
      { id: 'd', text: '940 bytes' },
    ],
    correctAnswer: 'a',
    explanation:
      'HLEN = 5 representa um cabeçalho de 5 × 4 = 20 bytes. O Total Length inclui cabeçalho + dados = 1000 bytes. Subtraindo o cabeçalho: 1000 - 20 = 980 bytes de dados (payload).',
    decorebaRapida: 'Payload = Total Length - (HLEN × 4) = 1000 - 20 = 980 bytes.',
  },
];
