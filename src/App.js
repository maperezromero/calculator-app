
import { createContext, useState } from 'react';
import './App.css';
import { Header } from './components/header';
import { Keys } from './components/keys';
import { Screen } from './components/screen';

export const valuesContext = createContext(null);

function App() {
  const [values, setValues] = useState({preValue: 0, curValue: 0, result: 0, op: '', point: false})
  const [theme, setTheme] = useState("0");
  return (
    <valuesContext.Provider value = {{values, setValues, theme, setTheme}}>
      <div className="App">
        <div className="container">
          <Header/>
          <Screen/>
          <Keys/> 
        </div>
      </div>
    </valuesContext.Provider>
  );
}

export default App;
