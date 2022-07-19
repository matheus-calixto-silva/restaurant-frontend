import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import usersService from '../../services/users';

const UserForm = () => {
  const [user, setItem] = useState({});
  const routeParams = useParams();
  const userId = routeParams.userId;

  const { id, name, phone, cpf, email, password, image } = user;
  const formTitleName = name;

  console.log(user);

  useEffect(() => {
    usersService.getOne(userId).then((user) => {
      setItem(user);
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

    const obj = { ...user };

    if (userId) {
      usersService.update(userId, obj).then((returnedItem) => {
        alert(
          `${returnedItem.name} foi atualizado, clique em OK para voltar a página inicial`
        );

        window.location = 'http://127.0.0.1:5173/';
      });
    } else {
      usersService.create(obj).then((returnedItem) => {
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
          {userId ? `Editando ${formTitleName}` : 'Novo Usuário'}
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
              placeholder='Ex: Matheus'
              value={name ? name : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='phone' className='text-sm font-medium'>
            Telefone
          </label>

          <div className='relative'>
            <input
              name='phone'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: 81988888888'
              value={phone ? phone : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='cpf' className='text-sm font-medium'>
            CPF
          </label>

          <div className='relative'>
            <input
              name='cpf'
              type='text'
              className='w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-md'
              placeholder='Ex: 12345678910'
              value={cpf ? cpf : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='email' className='text-sm font-medium'>
            Email
          </label>

          <div className='relative'>
            <input
              name='email'
              type='email'
              className='w-full p-4 pr-12 text-sm border-gray-700 rounded-lg shadow-md'
              placeholder='Ex: myname@mail.com'
              value={email ? email : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='password' className='text-sm font-medium'>
            Senha
          </label>

          <div className='relative'>
            <input
              name='password'
              type='password'
              className='w-full p-4 pr-12 text-sm border-gray-700 rounded-lg shadow-md'
              value={password ? password : ''}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor='image' className='text-sm font-medium'>
            Imagem
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

        <div className='flex users-center justify-between'>
          <Link
            to={userId ? `/users/${userId}` : '/'}
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            Voltar
          </Link>

          <button
            type='submit'
            className='inline-block px-5 py-3 ml-3 text-sm font-medium text-white bg-blue-500 rounded-lg'
          >
            {userId ? 'Atualizar' : 'Criar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
