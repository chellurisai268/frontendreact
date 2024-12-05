
import { Outlet } from 'react-router-dom';
import './App.css';
import Navebar from './Navebar';

function App() {
  return (
    <div className="App">
      <Navebar></Navebar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
