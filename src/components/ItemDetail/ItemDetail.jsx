import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import itemsService from '../../services/items';

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const routeParams = useParams();
  const itemId = routeParams.itemId;

  useEffect(() => {
    itemsService.getOne(itemId).then((item) => {
      setItem(item);
    });
  }, []);

  const handleRemoveItem = () => {
    itemsService.remove(itemId).then((removedItem) => {
      if (window.confirm(`Deseja excluir ${item.name}?`)) {
        alert(
          `${item.name} foi excluido, você será redirecionado para a tela inicial`
        );
        window.location = 'http://127.0.0.1:5173/';
      }
    });
  };

  const { name, price, description, image } = item;

  return (
    <div>
      <Link
        to={'/'}
        className='ml-5 text-2xl font-extrabold tracking-wide lg:text-3xl'
      >
        &larr;
      </Link>
      <div className='grid h-screen place-items-center'>
        <div className='block'>
          <img
            alt={description}
            src={image}
            className='object-cover w-full -mt-3 h-[350px] sm:h-[450px]'
          />

          <h5 className='mt-4 text-sm text-gray-700'>{name}</h5>

          <div className='flex items-center justify-between mt-4 font-medium'>
            <p>{price}</p>

            <div>
              <Link
                replace
                to={`/items/edit/${itemId}`}
                className='h-6 px-4 mb-1 text-sm grid h-screen place-items-center leading-6 border border-black text-black hover:text-white uppercase bg-white hover:bg-black transition-all transition-duration: 150ms'
              >
                Editar
              </Link>
              <button
                onClick={handleRemoveItem}
                className='h-6 px-4 text-sm grid h-screen place-items-center leading-6 border border-black text-white hover:text-black uppercase bg-black hover:bg-white transition-all transition-duration: 150ms'
              >
                Excluir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
