import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Photo from './components/Photo';
import ErrorPage from './components/ErrorPage';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Gallery />} />
          <Route path='/photo/:id' element={<Photo />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
