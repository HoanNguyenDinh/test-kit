import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/home';
import MarketPage from '../pages/marketplace';
import DetailPage from '../pages/detail';
import MEPage from '../pages/me';
import NotFoundPage from '../pages/notFound';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/marketplace/:symbol' element={<MarketPage />} />
      <Route path='/item-details/:mintAddress' element={<DetailPage />} />
      <Route path='/me' element={<MEPage />} />
      <Route path='/*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
