# 🌐 GUIA DEFINITIVO: PROVA NP2 DE REDES DE SISTEMAS DISTRIBUÍDOS
> **Material 100% alinhado com a prova oficial da UNIP**  
> Foco: **Cálculo de Sub-redes (/20), Modelo TCP/IP, Equipamentos (Switch vs Roteador) e Gabarito Oficial**.

---

## ⚡ RESUMO EXECUTIVO: GABARITO OFICIAL (10/10)

| Questão | Enunciado Resumido | Resposta Correta | Letra |
|---|---|---|:---:|
| **Q1** | Camadas do modelo TCP/IP (5 camadas) | **Aplicação, Transporte, Rede, Enlace de Dados, Física** | **A** |
| **Q2** | Encaminhar pacotes/quadros em **rede local** (mesmo segmento) | **Switch** (opera na camada 2 via MAC) | **B** |
| **Q3** | Dispositivo que interliga **redes distintas** (inter-redes) | **Roteador** (opera na camada 3 via IP) | **A** |
| **Q4** | O IP `192.168.5.20` pertence a qual rede? | **192.168.0.0/20** (intervalo `192.168.0.0` até `192.168.15.255`) | **D** |
| **Q5** | Endereço de broadcast na **camada de enlace** (MAC) | **FF-FF-FF-FF-FF-FF** (48 bits em hexadecimal) | **D** |
| **Q6** | Quantidade de bits em um endereço **IPv4** | **32 bits** (4 octetos de 8 bits cada) | **C** |
| **Q7** | Máscara de sub-rede para o prefixo **/20** | **255.255.240.0** (`11111111.11111111.11110000.00000000`) | **C** |
| **Q8** | Total de IPs existentes na rede **/20** | **4096** ($2^{12} = 4096$) | **D** |
| **Q9** | Endereço de **broadcast** da rede `192.168.0.0/20` | **192.168.15.255** (último endereço do bloco) | **D** |
| **Q10** | Quantidade de **hosts válidos** (utilizáveis) na rede **/20** | **4094** ($2^{12} - 2 = 4094$) | **D** |

> **Mnemônica rápida para a prova**: `A - B - A - D - D - C - C - D - D - D`.

---

## 🧮 O SEGREDO DO CÁLCULO DA SUB-REDE `/20` (QUESTÕES 4, 7, 8, 9 E 10)

Metade da prova gira em torno de entender a notação CIDR `/20`. Dominando este passo a passo, você acerta 5 questões instantaneamente:

### 1. Entendendo os 32 bits do IPv4
- Um IP tem **32 bits** (Questão 6).
- Prefixo `/20` significa: **20 bits para REDE** e os restantes para **HOST**.
- Bits de host: $32 - 20 = 12\text{ bits}$.

### 2. Máscara de Sub-rede (Questão 7)
Dividimos os 20 bits nos 4 octetos:
- 1º octeto: `8 bits 1` = `11111111` = **255**
- 2º octeto: `8 bits 1` = `11111111` = **255**
- 3º octeto: `4 bits 1` e `4 bits 0` = `11110000` = $128 + 64 + 32 + 16 =$ **240**
- 4º octeto: `8 bits 0` = `00000000` = **0**
- **Resultado:** `255.255.240.0` (Alternativa **C**).

### 3. Tamanho do Salto (Magic Number)
Olhando para o 3º octeto onde a máscara parou (`240`):
$$\text{Salto} = 256 - 240 = 16$$
As redes andam de 16 em 16 no 3º octeto:
- Rede 1: `192.168.0.0/20`
- Rede 2: `192.168.16.0/20`
- Rede 3: `192.168.32.0/20`

### 4. Faixa Completa da Rede `192.168.0.0/20`
- **ID da Rede:** `192.168.0.0` (não pode atribuir a host)
- **1º Host Válido:** `192.168.0.1`
- **O IP `192.168.5.20` está aqui dentro?** SIM! O terceiro octeto é `5`, que está entre `0` e `15` (Questão 4 ➔ Alternativa **D**).
- **Último Host Válido:** `192.168.15.254`
- **Broadcast da Rede:** `192.168.15.255` (Questão 9 ➔ Alternativa **D**).

### 5. Contagem de IPs Totais vs Hosts Válidos
- **Total de IPs (Questão 8):**
  $$2^{12} = 4096\text{ endereços}$$
  (Alternativa **D**).
- **Hosts Válidos / Utilizáveis (Questão 10):**
  $$2^{12} - 2 = 4096 - 2 = 4094\text{ hosts}$$
  *(Subtrai 2 porque o primeiro é o ID da Rede e o último é o Broadcast)* (Alternativa **D**).

---

## 🏗️ CONCEITOS TEÓRICOS FUNDAMENTAIS

### 1. Modelo TCP/IP (Questão 1)
O modelo prático adotado na internet e cobrado na prova possui 5 camadas:
1. **Aplicação**: HTTP, DNS, FTP, SMTP, SSH
2. **Transporte**: TCP (confiável/orientado a conexão), UDP (rápido/sem conexão)
3. **Rede (ou Internet)**: IP, ICMP, roteamento lógico
4. **Enlace de Dados**: Ethernet, Wi-Fi, endereçamento MAC, Switches
5. **Física**: Cabos, sinais elétricos, ondas de rádio, fibra óptica

*(Dica: A alternativa **A** lista exatamente: Aplicação, Transporte, Rede, Enlace de Dados, Física).*

---

### 2. Switch vs Roteador (Questões 2 e 3)

| Característica | Switch (Questão 2) | Roteador (Questão 3) |
|---|---|---|
| **Onde atua?** | **Rede Local (LAN)** | **Entre Redes Distintas (WAN/Inter-redes)** |
| **Camada do Modelo** | Camada 2 (Enlace) | Camada 3 (Rede) |
| **Endereço usado** | Endereço **MAC** (físico) | Endereço **IP** (lógico) |
| **Papel na Prova** | Encaminha dados dentro do mesmo segmento local | Conecta redes diferentes e determina a melhor rota |
| **Gabarito** | Alternativa **B** | Alternativa **A** |

---

### 3. Endereço MAC de Broadcast (Questão 5)
- Na camada 2 (Enlace de dados), a placa de rede usa o endereço físico **MAC** de 48 bits (6 bytes).
- Quando um host precisa enviar um quadro para **TODOS** os dispositivos da rede local (ex: requisição ARP), ele usa o endereço com todos os bits 1:
  $$\text{FF-FF-FF-FF-FF-FF}$$
- Na prova: Alternativa **D**.

---

## 📋 CHECKLIST RÁPIDO PARA A HORA DA PROVA
1. Leu **"5 camadas TCP/IP"**? ➔ Marque **Aplicação, Transporte, Rede, Enlace, Física** (`A`).
2. Leu **"rede local"**? ➔ Marque **Switch** (`B`).
3. Leu **"redes distintas"**? ➔ Marque **Roteador** (`A`).
4. Leu **"192.168.5.20 pertence a qual rede"**? ➔ Marque **192.168.0.0/20** (`D`).
5. Leu **"broadcast camada de enlace / MAC"**? ➔ Marque **FF-FF-FF-FF-FF-FF** (`D`).
6. Leu **"quantos bits no IPv4"**? ➔ Marque **32** (`C`).
7. Leu **"máscara /20"**? ➔ Marque **255.255.240.0** (`C`).
8. Leu **"total de endereços /20"**? ➔ Marque **4096** (`D`).
9. Leu **"broadcast /20"**? ➔ Marque **192.168.15.255** (`D`).
10. Leu **"hosts válidos /20"**? ➔ Marque **4094** (`D`).
