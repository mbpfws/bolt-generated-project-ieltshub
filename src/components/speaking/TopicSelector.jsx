import React from 'react';
    import { useSpeaking } from '../../hooks/useSpeaking';

    function TopicSelector({ onTopicSelect }) {
      const { topics, loading, error } = useSpeaking();

      if (loading) return <div>Loading topics...</div>;
      if (error) return <div>Error: {error}</div>;

      return (
        <div className="topic-selector">
          <h3>Select a Topic</h3>
          <div className="topics-grid">
            {topics.map(topic => (
              <button
                key={topic.id}
                className="topic-card"
                onClick={() => onTopicSelect(topic.id)}
              >
                {topic.name}
              </button>
            ))}
            <button
              className="topic-card random"
              onClick={() => onTopicSelect('random')}
            >
              Random Topic
            </button>
          </div>
        </div>
      );
    }

    export default TopicSelector;
