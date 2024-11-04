import React, { useState } from 'react';
    import { useSpeaking } from '../../hooks/useSpeaking';

    function QuestionSelector({ topicId, onQuestionsSelect }) {
      const [mode, setMode] = useState(null);
      const { questions, fetchQuestionsByTopic } = useSpeaking();

      const handleModeSelect = async (selectedMode) => {
        setMode(selectedMode);
        if (selectedMode === 'database') {
          await fetchQuestionsByTopic(topicId);
          onQuestionsSelect(questions);
        } else if (selectedMode === 'ai') {
          // AI generation logic will be implemented here
        } else if (selectedMode === 'mock') {
          // Mock test logic will be implemented here
        }
      };

      return (
        <div className="question-selector">
          <h3>Select Question Mode</h3>
          <div className="mode-buttons">
            <button onClick={() => handleModeSelect('database')}>
              Database Questions
            </button>
            <button onClick={() => handleModeSelect('ai')}>
              AI Generated Questions
            </button>
            <button onClick={() => handleModeSelect('mock')}>
              Mock Test
            </button>
          </div>
        </div>
      );
    }

    export default QuestionSelector;
