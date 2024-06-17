import React from 'react';
import './App.css';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <div className="App">
      <main className='app-holder'>
        <AppRouter />
      </main>
    </div>
  );
}

export default App;
