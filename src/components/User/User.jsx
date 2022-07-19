import { Link } from 'react-router-dom';

const User = ({ user }) => {
  const { id, name, email, image } = user;

  return (
    <Link to={`/users/${id}`} className='block'>
      <img
        alt={name}
        src={image}
        className='object-cover w-full -mt-3 h-96'
      />

      <h5 className='mt-4 text-sm text-black/90'>{email}</h5>

      <div className='flex items-center justify-between mt-4 font-bold'>
        <p className='text-lg'>{name}</p>
      </div>
    </Link>
  );
};

export default User;
