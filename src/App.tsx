import React from 'react';
import { ToastContainer } from 'react-toastify';
import { RoutesApp } from './routes/RoutesApp';

function App() {
  return (
    <div className="App">
      <RoutesApp/>
      <ToastContainer/>
    </div>
  );
}

export default App;
