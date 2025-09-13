import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Title from './Title';
import './Photo.css';

function Photo() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ author: '', text: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:3001/photos');
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Eroare la incarcare:', error);
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  const photo = photos.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (photo) {
      setComments(photo.comments || []);
    }
  }, [photo]);

  if (loading)
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ height: '50vh' }}
      >
        <div className='spinner-grow text-success' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  if (!photo) return <p>Fotografia nu a fost găsită.</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.author || !newComment.text) return;

    const newCom = {
      id: comments.length + 1,
      author: newComment.author,
      text: newComment.text,
    };

    const updatedComments = [...comments, newCom];
    setComments(updatedComments);
    setNewComment({ author: '', text: '' });

    try {
      await axios.patch(`http://localhost:3001/photos/${photo.id}`, {
        comments: updatedComments,
      });
    } catch (error) {
      console.error('Eroare la salvarea comentariului:', error);
    }
  };

  return (
    <>
      <Title />
      <div className='container photo-container'>
        <div className='row'>
          <div className='col-md-8 col col-sm-6 mb-5'>
            <img
              src={photo.srcImage}
              alt={photo.title}
              className='card-img-top rounded'
            />
            <div className='card-body'>
              <h3 className='card-title'>{photo.title}</h3>
              <p className='card-text'>{photo.desc}</p>

              <h4 className='mt-4'>Comentarii</h4>
              {comments.length === 0 && <p>Fii primul care comentează!</p>}
              <ul className='list-group mb-4'>
                {comments.map((comment) => (
                  <li key={comment.id} className='list-group-item'>
                    <strong>{comment.author}:</strong> {comment.text}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nume'
                    value={newComment.author}
                    onChange={(e) =>
                      setNewComment({ ...newComment, author: e.target.value })
                    }
                  />
                </div>
                <div className='mb-3'>
                  <textarea
                    className='form-control'
                    placeholder='Comentariu'
                    value={newComment.text}
                    onChange={(e) =>
                      setNewComment({ ...newComment, text: e.target.value })
                    }
                  ></textarea>
                </div>
                <button type='submit' className='btn btn-primary'>
                  Adaugă comentariu
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Photo;
