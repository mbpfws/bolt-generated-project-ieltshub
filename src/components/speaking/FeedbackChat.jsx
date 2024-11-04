import React from 'react';

    function FeedbackChat({ feedback }) {
      return (
        <div className="feedback-chat">
          <h3>Feedback</h3>
          <div className="chat-messages">
            {feedback.map((message, index) => (
              <div key={index} className={`chat-message ${message.type}`}>
                <p>{message.text}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default FeedbackChat;
