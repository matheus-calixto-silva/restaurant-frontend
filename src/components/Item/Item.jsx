import { Link } from 'react-router-dom';

const Item = ({ item }) => {
  const { id, name, price, description, image } = item;

  return (
    <Link to={`/items/${id}`} className='block'>
      <img
        alt={description}
        src={image}
        className='object-cover w-full -mt-3 h-96'
      />

      <h5 className='mt-4 text-sm text-black/90'>{name}</h5>

      <div className='flex items-center justify-between mt-4 font-bold'>
        <p className='text-lg'>{price}</p>
      </div>
    </Link>
  );
};

export default Item;
