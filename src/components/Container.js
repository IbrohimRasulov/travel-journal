import { database } from '../data/database';
import Card from './Card';

function Container() {
  const destinations = database.map(item => {
    return (
      <Card
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <div className="container">
      {destinations}
    </div>
  );
}

export default Container;
