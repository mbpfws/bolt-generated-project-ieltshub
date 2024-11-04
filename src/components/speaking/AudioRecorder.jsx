import React, { useState } from 'react';

    function AudioRecorder({ onRecordingComplete, isRecording, setIsRecording }) {
      const [mediaRecorder, setMediaRecorder] = useState(null);
      const [audioChunks, setAudioChunks] = useState([]);

      const startRecording = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          const recorder = new MediaRecorder(stream);
          const chunks = [];

          recorder.ondataavailable = (e) => {
            chunks.push(e.data);
          };

          recorder.onstop = () => {
            const audioBlob = new Blob(chunks, { type: 'audio/wav' });
            onRecordingComplete(audioBlob);
            setAudioChunks([]);
          };

          setMediaRecorder(recorder);
          recorder.start();
          setIsRecording(true);
        } catch (err) {
          console.error('Error accessing microphone:', err);
        }
      };

      const stopRecording = () => {
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
          mediaRecorder.stream.getTracks().forEach(track => track.stop());
          setIsRecording(false);
        }
      };

      return (
        <div className="audio-recorder">
          <button 
            className={`record-button ${isRecording ? 'recording' : ''}`}
            onClick={isRecording ? stopRecording : startRecording}
          >
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
      );
    }

    export default AudioRecorder;
