import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import itemsService from '../../services/items';

const ItemForm = () => {
  const [item, setItem] = useState({});
  const routeParams = useParams();
  const itemId = routeParams.itemId;
  
  const { name, price, description, image } = item;
  const formTitleName = name;
  
  console.log(item)

  useEffect(() => {
    itemsService.getOne(itemId).then((item) => {
      setItem(item);
    });
  }, []);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = { ...item };

    if (itemId) {
      itemsService.update(itemId, obj).then((returnedItem) => {
        alert(
          `${returnedItem.name} foi atualizado, clique em OK para voltar a página inicial`
        );

        window.location = 'http://127.0.0.1:5173/';
      });
    } else {
      itemsService.create(obj).then((returnedItem) => {
        alert(
          `${returnedItem.name} foi criado, clique em OK para voltar a página inicial`
        );
        window.location = 'http://127.0.0.1:5173/';
      });
    }
  };

  return (
    <div className='max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8'>
      <div className='max-w-lg mx-auto text-center'>
        <h1 className='text-2xl font-bold sm:text-3xl'>
          {itemId ? `Editando ${formTitleName}` : 'Novo Prato'}
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className='max-w-md mx-auto mt-8 mb-0 space-y-4'
      >
        <div>
          <label htmlFor='name' className='text-sm font-medium'>
            Nome
          </label>

          <div className='relative'>
            <input
              name='name'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: Burger'
              value={name ? name : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='price' className='text-sm font-medium'>
            Preço
          </label>

          <div className='relative'>
            <input
              name='price'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: 199'
              value={price ? price : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='description' className='text-sm font-medium'>
            Descrição
          </label>

          <div className='relative'>
            <input
              name='description'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: Delicioso'
              value={description ? description : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='image' className='text-sm font-medium'>
            Image
          </label>

          <div className='relative'>
            <input
              name='image'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-700 rounded-lg shadow-md'
              placeholder='Ex: https://url-da-imagem-aqui.com'
              value={image ? image : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <Link
            to={`/items/${itemId}`}
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            Back
          </Link>

          <button
            type='submit'
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            {itemId ? 'Atualizar' : 'Criar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
