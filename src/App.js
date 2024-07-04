import React from 'react';
import './App.css';
import Vacancies from './components/Vacancies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Парсер с HH.ru</h1>
      </header>
      <main>
        <Vacancies />
      </main>
    </div>
  );
}

export default App;
