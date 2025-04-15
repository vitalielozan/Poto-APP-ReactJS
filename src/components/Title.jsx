import React from 'react';
import { Link } from 'react-router';

function GalleryHeader() {
  return (
    <div className="container text-center my-3 p-5 bg-secondary text-white rounded">
      <Link to="/" className="navbar-brand">
        <h1>Galerie Foto</h1>
      </Link>
      <h3>Galeria foto cu ReactJS</h3>
    </div>
  );
}

export default GalleryHeader;
