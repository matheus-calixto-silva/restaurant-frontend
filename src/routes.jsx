import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ItemForm from './components/ItemForm/ItemForm';
import UserDetail from './components/UserDetail/UserDetail';
import UserForm from './components/UserForm/UserForm';

UserForm


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items/new' element={<ItemForm />}/>
        <Route path='/items/:itemId' element={<ItemDetail />} />
        <Route path='/items/edit/:itemId' element={<ItemForm />} />
        <Route path='/users/:userId' element={<UserDetail />} />
        <Route path='/users/edit/:userId' element={<UserForm />} />
        <Route path='/users/new' element={<UserForm />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
