import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Photo from './Photo';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/photo/:id" element={<Photo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
