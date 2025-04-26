import React from 'react';
import { Link } from 'react-router';

const GalleryCard = ({ photo, handleIncreaseLike }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
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
            <div className="card-text description"> {photo.shortDesc}</div>
          </div>
          <div className="like-section">
            <button
              className="btn btn-like"
              onClick={() => handleIncreaseLike(photo.id)}
            >
              👍 Like
            </button>
            <span>{photo.like} likes</span>
          </div>
          <Link to={`/photo/${photo.id}`}>
            <button className="btn btn-see-more mt-2">See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
