import { useEffect, useState } from 'react';
import axios from 'axios';
import './Gallery.css';
import Title from './Title';
import GalleryCard from './GalleryCard';

function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleIncreaseLike = async (photoId) => {
    const photoToUpdate = photos.find((photo) => photo.id === photoId);
    if (!photoToUpdate) return;

    try {
      await axios.patch(`http://localhost:3001/photos/${photoId}`, {
        like: photoToUpdate.like + 1,
      });

      setPhotos((prev) =>
        prev.map((photo) =>
          photo.id === photoId ? { ...photo, like: photo.like + 1 } : photo
        )
      );
    } catch (error) {
      console.error('Eroare la actualizarea like-ului:', error);
    }
  };

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/photos');
        setTimeout(() => {
          setPhotos(response.data);
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Eroare la incarcare:', error);
      }
    };
    fetchPhotos();
  }, []);

  if (loading)
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '50vh' }}
      >
        <div className="spinner-grow text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <>
      <Title />
      <div className="container">
        <div className="row">
          {photos?.map((photo) => (
            <GalleryCard
              key={photo.id}
              photo={photo}
              handleIncreaseLike={handleIncreaseLike}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Gallery;
