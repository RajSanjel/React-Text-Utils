import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
function App() {
  const [mode, setMode] = useState('light')
  const [modeText, setModeText] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);

  }
  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark')
      setModeText("Disable Dark Mode")
      document.body.style.backgroundColor = "#212529e0"
      showAlert("Dark Mode is Enabled", "success")
    }
    if (mode === 'dark') {
      setMode("light")
      setModeText("Enable Dark Mode")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode is Enabled", "success")
    }
  }


  return (

    <>


      <Router>
        <Navbar title="TextUtils" mode={mode} modeText={modeText} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <>
            <Route path="/" element={
              <div className="container my-3">
                <TextForm showAlert={showAlert} heading="Enter Text Here" lmode={setMode} mode={mode} />
              </div>
            } />
            <Route path="/index.html" element={
              <div className="container my-3">
                <TextForm showAlert={showAlert} heading="Enter Text Here" lmode={setMode} mode={mode} />
              </div>
            } />
            <Route path="/about" element={
              <>
                <About mode={mode} />
              </>
            } />
            <Route path="*" element={
              <NotFound/>
            }/>
          </>

        </Routes>
      </Router>



    </>
  );
}


export default App;
