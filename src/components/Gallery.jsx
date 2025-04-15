import { Link } from 'react-router-dom';
import { useState } from 'react';
import data from './data/photos.json';
import './Gallery.css';
import Title from './Title';

function Gallery() {
  const photos = data.fotos;
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <>
      <Title />
      <div className="container">
        <div className="row">
          {photos.map((photo) => (
            <div key={photo.id} className="col-md-4 mb-4">
              <div className="card gallery-card h-100">
                <div className="img-wrapper">
                  <img
                    src={photo.srcThumbnail}
                    className="card-img-top"
                    alt={photo.title}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title">{photo.title}</h5>
                    <div className="card-text description">
                      {' '}
                      ${photo.shortDesc}
                    </div>
                  </div>
                  <div className="like-section">
                    <button className="btn btn-like" onClick={handleLike}>
                      👍 Like
                    </button>
                    <span>{likes} likes</span>
                  </div>
                  <Link to={`/photo/${photo.id}`}>
                    <button className="btn btn-see-more mt-2">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Gallery;
