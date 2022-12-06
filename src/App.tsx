import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import AssistantsSection from './components/assistants/AssistantsSection';
import AboutProduct from './components/About/AboutProduct';
import ButtonGroup from './components/common/ButtonGroup/ButtonGroup';
import TopAssistants from './components/TopAssistants/TopAssistants';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutProduct/>
      <TopAssistants/>
      {/* <ButtonGroup/> */}
      {/* <AssistantsSection/>     */}
    </div>
  );
}

export default App;
