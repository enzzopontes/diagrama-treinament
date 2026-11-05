export interface Np2Flashcard {
  id: number;
  categoria: string;
  pergunta: string;
  resposta: string;
  dica?: string;
  codigoExemplo?: string;
}

export interface Np2SimuladoQuestion {
  id: number;
  questionNumber: number;
  title: string;
  category: string;
  enunciado: string;
  codeSnippet?: string;
  options: {
    id: 'a' | 'b' | 'c' | 'd';
    text: string;
  }[];
  correctAnswer: 'a' | 'b' | 'c' | 'd';
  explanation: string;
  decorebaRapida: string;
}
