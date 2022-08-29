//import logo from './logo.svg';
import './App.css';
import './index.css';
import { Landing } from './landingpage'
import useNavigate from 'react-router-dom'

function App() {
  let navigate = useNavigate();

  const navigateLanding = () => {
    navigate('/landingpage');
  };

  return (
    <div className="App">
      <p className='font-bold text-3xl text-center text-red-600'>Project Penjana</p>
      <button class="btn btn-blue" onClick= {() => navigate('/landingpage')}>Landing</button>
    </div>
  );
}

export default App;
