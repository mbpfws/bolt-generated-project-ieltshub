import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Sidebar from './components/Sidebar';
    import Header from './components/Header';
    import MainContent from './components/MainContent';
    import SpeakingParts from './components/speaking/SpeakingParts';
    import TopicSelector from './components/speaking/TopicSelector';
    import QuestionSelector from './components/speaking/QuestionSelector';
    import SpeakingPractice from './components/speaking/SpeakingPractice';
    import './styles/speaking.css';

    function App() {
      return (
        <div className="app">
          <Header />
          <div className="content">
            <Sidebar />
            <MainContent>
              <Routes>
                <Route path="/speaking" element={<SpeakingParts />} />
                <Route path="/speaking/part1" element={<TopicSelector />} />
                <Route path="/speaking/part1/questions" element={<QuestionSelector />} />
                <Route path="/speaking/part1/practice" element={<SpeakingPractice />} />
              </Routes>
            </MainContent>
          </div>
        </div>
      );
    }

    export default App;
