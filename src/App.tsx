import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import AssistantsSection from './components/assistants/AssistantsSection';

function App() {
  return (
    <div className="App">
      <Header/>
      <AssistantsSection/>    
    </div>
  );
}

export default App;
