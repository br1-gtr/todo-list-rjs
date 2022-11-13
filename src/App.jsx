import './App.css';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="App">
      <div className='lista-main'>
        <h1>Mis tareas</h1>
        
        <ListaTareas />

      </div>
    </div>
  );
}

export default App;
