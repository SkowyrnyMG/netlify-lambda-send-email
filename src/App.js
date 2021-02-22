import axios from 'axios';
import './App.css';

function App() {
  const handleClick = async () => {
    const res = await axios.get('/api/test');
    console.log(res);
  }

  const handleSendClick = async () => {
    const res = await axios.post('/api/sendMailNet', {dest: 'mateusz.gruzla@globgranit.pl'});
    console.log(res);
  }
  return (
    <div className="App">
    <button onClick={handleClick}>Click me!</button>
    <button onClick={handleSendClick}>Send email</button>
    </div>
  );
}

export default App;
