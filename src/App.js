import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });
    setTimeout(() => setAlert(null), 1200);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#092959';
      showAlert('Dark Mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the Text to analyse below" mode={mode} />
      </div>
    </>
  );
}

export default App;