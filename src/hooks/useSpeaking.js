import { useState, useEffect } from 'react';
    import { supabase } from '../lib/supabase';

    export const useSpeaking = () => {
      const [topics, setTopics] = useState([]);
      const [questions, setQuestions] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

      const fetchTopics = async () => {
        try {
          const { data, error } = await supabase
            .from('speaking_topics')
            .select('*');
          
          if (error) throw error;
          setTopics(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      const fetchQuestionsByTopic = async (topicId) => {
        try {
          const { data, error } = await supabase
            .from('speaking_questions')
            .select('*')
            .eq('topic_id', topicId);
          
          if (error) throw error;
          setQuestions(data);
        } catch (err) {
          setError(err.message);
        }
      };

      useEffect(() => {
        fetchTopics();
      }, []);

      return {
        topics,
        questions,
        loading,
        error,
        fetchQuestionsByTopic
      };
    };
