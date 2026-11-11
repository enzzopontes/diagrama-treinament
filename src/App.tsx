import React, { useState, useEffect } from 'react';
import { ReactFlowProvider } from '@xyflow/react';
import { Header } from './components/Header';
import { ExercisePrompt } from './components/ExercisePrompt';
import { DiagramCanvas } from './components/DiagramCanvas';
import { PieceTray } from './components/PieceTray';
import { ConnectionModal } from './components/ConnectionModal';
import { FeedbackModal } from './components/FeedbackModal';
import { HubView } from './components/HubView';
import { SubjectDetailView } from './components/SubjectDetailView';
import { ResumoView } from './components/ResumoView';
import { SimuladoView } from './components/SimuladoView';
import { FlashcardsB1View } from './components/FlashcardsB1View';
import { RedesResumoView } from './components/RedesResumoView';
import { RedesSimuladoView } from './components/RedesSimuladoView';
import { RedesFlashcardsView } from './components/RedesFlashcardsView';
import { RedesLabView } from './components/RedesLabView';
import { ProgCResumoView } from './components/ProgCResumoView';
import { ProgCSimuladoView } from './components/ProgCSimuladoView';
import { ProgCFlashcardsView } from './components/ProgCFlashcardsView';
import { ProgCLabView } from './components/ProgCLabView';
import { BdNp2ResumoView } from './components/BdNp2ResumoView';
import { SqlPracticeLabView } from './components/SqlPracticeLabView';
import { ProgCNp2ResumoView } from './components/ProgCNp2ResumoView';
import { RedesNp2ResumoView } from './components/RedesNp2ResumoView';
import { EngSoftNp2ResumoView } from './components/EngSoftNp2ResumoView';
import { Np2FlashcardsView } from './components/Np2FlashcardsView';
import { Np2SimuladoView } from './components/Np2SimuladoView';
import { BD_NP2_FLASHCARDS, BD_NP2_SIMULADO_QUESTIONS } from './data/bdNp2Data';
import { PROG_C_NP2_FLASHCARDS, PROG_C_NP2_SIMULADO_QUESTIONS } from './data/progCNp2Data';
import { REDES_NP2_FLASHCARDS, REDES_NP2_SIMULADO_QUESTIONS } from './data/redesNp2Data';
import { ENG_SOFT_NP2_FLASHCARDS, ENG_SOFT_NP2_SIMULADO_QUESTIONS } from './data/engSoftNp2Data';
import { BottomBarAdjusterModal } from './components/BottomBarAdjusterModal';
import { AmbientBackground } from './components/AmbientBackground';
import { DEFAULT_SUBJECTS } from './data/subjects';
import { getSavedBottomNavSettings } from './utils/bottomNavDetector';
import { navigateTo, setupRouteListener } from './utils/router';
import type { AppModule, SubjectItem } from './types/navigation';

export const App: React.FC = () => {
  // Controle de navegação central do Hub, Matérias e Módulos específicos
  const [currentModule, setCurrentModule] = useState<AppModule>('hub');
  const [selectedSubject, setSelectedSubject] = useState<SubjectItem>(
    DEFAULT_SUBJECTS[0]
  );
  const [isBottomBarModalOpen, setIsBottomBarModalOpen] = useState(false);
  const [labInitialQuestion, setLabInitialQuestion] = useState<9 | 10>(9);

  // Inicializa a detecção de botões de navegação no primeiro carregamento e ouve mudanças de rota
  useEffect(() => {
    getSavedBottomNavSettings();
    const cleanup = setupRouteListener((route) => {
      if (route.subjectId) {
        const found = DEFAULT_SUBJECTS.find((s) => s.id === route.subjectId);
        if (found) {
          setSelectedSubject(found);
        }
      }
      setCurrentModule(route.module);
    });
    return cleanup;
  }, []);

  const openBottomBarSettings = () => {
    setIsBottomBarModalOpen(true);
  };

  return (
    <>
      {/* Fundo estático sóbrio e profissional */}
      <AmbientBackground />

      {/* Modal Inteligente de Ajuste da Barra de 3 Botões do Celular */}
      <BottomBarAdjusterModal
        isOpen={isBottomBarModalOpen}
        onClose={() => setIsBottomBarModalOpen(false)}
      />

      {/* 1. Hub Principal: Contém estritamente as MATÉRIAS com filtro NP1 / NP2 */}
      {currentModule === 'hub' && (
        <HubView
          onSelectSubject={(subject) => {
            setSelectedSubject(subject);
            setCurrentModule('subject');
            navigateTo(`/${subject.id}`);
          }}
          onQuickLaunchModule={(subject, module) => {
            setSelectedSubject(subject);
            setCurrentModule(module);
            navigateTo(`/${subject.id}/${module}`);
          }}
          onOpenBottomBarSettings={openBottomBarSettings}
        />
      )}

      {/* 2. Visão Detalhada da Matéria Selecionada */}
      {currentModule === 'subject' && (
        <SubjectDetailView
          subject={selectedSubject}
          onBackToHub={() => {
            setCurrentModule('hub');
            navigateTo('/');
          }}
          onSelectModule={(mod) => {
            setCurrentModule(mod);
            navigateTo(`/${selectedSubject.id}/${mod}`);
          }}
          onOpenBottomBarSettings={openBottomBarSettings}
        />
      )}

      {/* 3. Módulo de Resumo Teórico da Matéria Selecionada */}
      {currentModule === 'resumo' &&
        (selectedSubject.id === 'banco-de-dados-np2' ? (
          <BdNp2ResumoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenSqlLab={() => {
              setCurrentModule('diagramas');
              navigateTo(`/${selectedSubject.id}/diagramas`);
            }}
          />
        ) : selectedSubject.id === 'programacao-em-c-np2' ? (
          <ProgCNp2ResumoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'redes-sistemas-distribuidos-np2' ? (
          <RedesNp2ResumoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'eng-software-np2' ? (
          <EngSoftNp2ResumoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'programacao-em-c' ? (
          <ProgCResumoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenBottomBarSettings={openBottomBarSettings}
            onOpenLab={(qId) => {
              setLabInitialQuestion(qId);
              setCurrentModule('diagramas');
              navigateTo(`/${selectedSubject.id}/diagramas`);
            }}
          />
        ) : selectedSubject.id === 'redes-sistemas-distribuidos' ? (
          <RedesResumoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenBottomBarSettings={openBottomBarSettings}
          />
        ) : (
          <ResumoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ))}

      {/* 4. Módulo do Simulado Oficial da Matéria Selecionada */}
      {currentModule === 'simulado' &&
        (selectedSubject.id === 'banco-de-dados-np2' ? (
          <Np2SimuladoView
            title="Simulado de Banco de Dados: T-SQL & SQL Server"
            subjectCode="BD-201"
            questions={BD_NP2_SIMULADO_QUESTIONS}
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'programacao-em-c-np2' ? (
          <Np2SimuladoView
            title="Simulado Oficial de C: 20 Questões"
            subjectCode="PC-201"
            questions={PROG_C_NP2_SIMULADO_QUESTIONS}
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'redes-sistemas-distribuidos-np2' ? (
          <Np2SimuladoView
            title="Simulado de Redes: Sub-redes & IPv4"
            subjectCode="RSD-202"
            questions={REDES_NP2_SIMULADO_QUESTIONS}
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'eng-software-np2' ? (
          <Np2SimuladoView
            title="Simulado Oficial: Prova NP2 (10 Questões)"
            subjectCode="ES-202"
            questions={ENG_SOFT_NP2_SIMULADO_QUESTIONS}
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'programacao-em-c' ? (
          <ProgCSimuladoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenBottomBarSettings={openBottomBarSettings}
            onOpenLab={(qId) => {
              setLabInitialQuestion(qId);
              setCurrentModule('diagramas');
              navigateTo(`/${selectedSubject.id}/diagramas`);
            }}
          />
        ) : selectedSubject.id === 'redes-sistemas-distribuidos' ? (
          <RedesSimuladoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenBottomBarSettings={openBottomBarSettings}
          />
        ) : (
          <SimuladoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ))}

      {/* 5. Módulo de Flashcards de Fixação da Matéria Selecionada */}
      {currentModule === 'flashcards' &&
        (selectedSubject.id === 'banco-de-dados-np2' ? (
          <Np2FlashcardsView
            title="Flashcards: SQL Server & T-SQL"
            subjectCode="BD-201"
            data={BD_NP2_FLASHCARDS}
            accentColor="text-blue-400"
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'programacao-em-c-np2' ? (
          <Np2FlashcardsView
            title="Flashcards: Matrizes, Ponteiros e Arquivos em C"
            subjectCode="PC-201"
            data={PROG_C_NP2_FLASHCARDS}
            accentColor="text-sky-400"
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'redes-sistemas-distribuidos-np2' ? (
          <Np2FlashcardsView
            title="Flashcards: Sub-redes & Cabeçalho IPv4"
            subjectCode="RSD-202"
            data={REDES_NP2_FLASHCARDS}
            accentColor="text-cyan-400"
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'eng-software-np2' ? (
          <Np2FlashcardsView
            title="Flashcards: Prova Oficial NP2 (Gabarito & Macetes)"
            subjectCode="ES-202"
            data={ENG_SOFT_NP2_FLASHCARDS}
            accentColor="text-emerald-400"
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'programacao-em-c' ? (
          <ProgCFlashcardsView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenBottomBarSettings={openBottomBarSettings}
          />
        ) : selectedSubject.id === 'redes-sistemas-distribuidos' ? (
          <RedesFlashcardsView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenBottomBarSettings={openBottomBarSettings}
          />
        ) : (
          <FlashcardsB1View
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ))}

      {/* 6. Módulo de Treino Prático / Laboratório da Matéria Selecionada */}
      {currentModule === 'diagramas' &&
        (selectedSubject.id === 'banco-de-dados-np2' ? (
          <SqlPracticeLabView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenBottomBarSettings={openBottomBarSettings}
          />
        ) : selectedSubject.id === 'programacao-em-c-np2' ? (
          <ProgCNp2ResumoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'redes-sistemas-distribuidos-np2' ? (
          <RedesNp2ResumoView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
          />
        ) : selectedSubject.id === 'programacao-em-c' ? (
          <ProgCLabView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenBottomBarSettings={openBottomBarSettings}
            initialQuestionId={labInitialQuestion}
          />
        ) : selectedSubject.id === 'redes-sistemas-distribuidos' ? (
          <RedesLabView
            onBack={() => {
              setCurrentModule('subject');
              navigateTo(`/${selectedSubject.id}`);
            }}
            onOpenBottomBarSettings={openBottomBarSettings}
          />
        ) : (
          <div className="w-screen h-screen h-[100dvh] flex flex-col overflow-hidden bg-[#090d16] text-slate-100 font-sans antialiased relative z-10">
            <ReactFlowProvider>
              {/* Header com botão de voltar para a matéria */}
              <Header
                onBackToHub={() => {
                  setCurrentModule('subject');
                  navigateTo(`/${selectedSubject.id}`);
                }}
              />

              {/* Painel Colapsável de Enunciado e Regra de Ouro */}
              <ExercisePrompt />

              {/* Canvas de Modelagem Interativo */}
              <DiagramCanvas />

              {/* Bandeja Inferior Fixa de Peças Estilo brModelo */}
              <PieceTray />

              {/* Modais Globais */}
              <ConnectionModal />
              <FeedbackModal />
            </ReactFlowProvider>
          </div>
        ))}
    </>
  );
};

export default App;
