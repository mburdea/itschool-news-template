import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';

import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Page404 from "./pages/Page404";
import NewsCategory from './pages/NewsCategory';
import NewsDetails from './pages/NewsDetails';

import { initialState, reducer } from './store/Favorites/reducer';
import { FavoritesContext } from './store/Favorites/context';

function App() {
  const [favoritesState, favoritesDispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <FavoritesContext.Provider value={{ favoritesState, favoritesDispatch }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:categoryId' element={<NewsCategory />} />
          <Route path='/news/:newsId' element={<NewsDetails />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='/*' element={<Page404 />} />
        </Routes>
      </FavoritesContext.Provider>
    </div>
  );
}

export default App;
