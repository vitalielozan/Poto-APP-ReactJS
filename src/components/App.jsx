import './App.css';
import Titlu from './Titlu';
import MyComponent from './MyComponent';
import List from './List';

function App() {
  const name = 'Eu sunt Vitalie Lozan';

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Salutare din React !</h1>
          <h2>{name}</h2>
          <Titlu titlu="Incepem cursul React JS" />
          <MyComponent />
          <List />
        </header>
      </div>
    </>
  );
}

export default App;
