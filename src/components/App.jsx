import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Photo from './Photo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/photo/:id" element={<Photo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
