import './MyComponent.css';
import Titlu from './Titlu';

function MyComponent() {
  return (
    <div className="container-my-componenet">
      <Titlu titlu="React este foarte interesant !" />
      <p className="my-component">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book of Lorem Ipsum.
      </p>
    </div>
  );
}

export default MyComponent;
