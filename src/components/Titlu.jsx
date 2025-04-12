import './Titlu.css';

function Titlu(props) {
  return (
    <div className="container-titlu">
      <h2 className="titlu">{props.titlu}</h2>
    </div>
  );
}

export default Titlu;
