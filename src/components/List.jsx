import './List.css';
import Titlu from './Titlu';

function List() {
  const produse = ['Masina cafea', 'Cafea', 'Lapte', 'Capucino'];
  return (
    <div className="container-list">
      <Titlu titlu="Lista de produse" />
      <ul className="my-list">
        {produse.map((item) => (
          <a href="" key={item}>
            <li className="list-item">{item}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default List;
