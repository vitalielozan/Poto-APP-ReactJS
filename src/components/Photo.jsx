import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from './data/photos.json';
import Title from './Title';
import './Photo.css';

function Photo() {
  const { id } = useParams();
  const photo = data.fotos.find((p) => p.id === parseInt(id));
  const [comments, setComments] = useState(photo?.comments || []);
  const [newComment, setNewComment] = useState({ author: '', text: '' });

  if (!photo) return <p>Fotografia nu a fost găsită.</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.author || !newComment.text) return;

    const newCom = {
      id: comments.length + 1,
      author: newComment.author,
      text: newComment.text,
    };

    setComments([...comments, newCom]);
    setNewComment({ author: '', text: '' });
  };

  return (
    <>
      <Title />
      <div className="container photo-container">
        <div className="row">
          <div className="col-md-8 col col-sm-6 mb-5">
            <img
              src={photo.srcImage}
              alt={photo.title}
              className="card-img-top rounded"
            />
            <div className="card-body">
              <h3 className="card-title">{photo.title}</h3>
              <p className="card-text">{photo.desc}</p>

              <h4 className="mt-4">Comentarii</h4>
              {comments.length === 0 && <p>Fii primul care comentează!</p>}
              <ul className="list-group mb-4">
                {comments.map((comment) => (
                  <li key={comment.id} className="list-group-item">
                    <strong>{comment.author}:</strong> {comment.text}
                  </li>
                ))}
              </ul>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nume"
                    value={newComment.author}
                    onChange={(e) =>
                      setNewComment({ ...newComment, author: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Comentariu"
                    value={newComment.text}
                    onChange={(e) =>
                      setNewComment({ ...newComment, text: e.target.value })
                    }
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
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
