import React, { useState } from 'react';
    import AudioRecorder from './AudioRecorder';
    import FeedbackChat from './FeedbackChat';
    import PracticeControls from './PracticeControls';

    function SpeakingPractice({ questions }) {
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [recording, setRecording] = useState(false);
      const [feedback, setFeedback] = useState([]);

      const currentQuestion = questions[currentQuestionIndex];

      const handleRecordingComplete = async (audioBlob) => {
        // AI transcription and feedback logic will be implemented here
      };

      return (
        <div className="speaking-practice">
          <div className="question-display">
            <h3>Question {currentQuestionIndex + 1}</h3>
            <p>{currentQuestion?.text}</p>
          </div>
          
          <AudioRecorder
            onRecordingComplete={handleRecordingComplete}
            isRecording={recording}
            setIsRecording={setRecording}
          />

          <PracticeControls
            currentQuestion={currentQuestion}
            onNext={() => setCurrentQuestionIndex(prev => prev + 1)}
          />

          <FeedbackChat feedback={feedback} />
        </div>
      );
    }

    export default SpeakingPractice;
