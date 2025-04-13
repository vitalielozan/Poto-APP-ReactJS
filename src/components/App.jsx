import './App.css';
import Gallery from './Gallery';
import Photo from './Photo';
import Error from './Error';

function App() {
  const name = 'Eu sunt Vitalie Lozan';

  return (
    <>
      <div className="app-container">
        <header className="app-header">
          <h1>Galeria mea Foto !</h1>
          <h2>{name}</h2>
          <Gallery />
          <Photo />
          <Error />
        </header>
      </div>
    </>
  );
}

export default App;
