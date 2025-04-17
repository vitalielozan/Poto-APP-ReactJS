import { useEffect, useState } from 'react';
import data from './data/photos.json';
import './Gallery.css';
import Title from './Title';
import GalleryCard from './GalleryCard';

function Gallery() {
  const [photos, setPhotos] = useState([]);

  const handleIncreaseLike = (photoId) => {
    setPhotos((prev) =>
      prev.map((photo) =>
        photo.id === photoId ? { ...photo, like: photo.like + 1 } : photo
      )
    );
  };

  useEffect(() => {
    setPhotos(data.fotos);
  }, []);

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
