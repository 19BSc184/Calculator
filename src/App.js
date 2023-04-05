import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cal from './screens/cal';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path= "cal" element={<Cal/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
