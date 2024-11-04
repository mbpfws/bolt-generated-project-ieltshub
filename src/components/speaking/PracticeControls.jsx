import React from 'react';

    function PracticeControls({ currentQuestion, onNext }) {
      return (
        <div className="practice-controls">
          <button className="button" onClick={() => window.open('#', '_blank')}>
            Tips & Strategies
          </button>
          <button className="button" onClick={() => window.open('#', '_blank')}>
            Collocations
          </button>
          <button className="button" onClick={() => window.open('#', '_blank')}>
            Answer Builder
          </button>
          <button className="button primary" onClick={onNext}>
            Next Question
          </button>
        </div>
      );
    }

    export default PracticeControls;
