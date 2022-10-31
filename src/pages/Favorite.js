import React, { useContext } from 'react';

import Layout from '../components/Layout';

import { FavoritesContext } from '../store/Favorites/context';

import NewsCategoryList from '../components/NewsCategoryList';

export default function Favorite() {
  const { favoritesState } = useContext(FavoritesContext);

  return (
    <Layout>
      <h1>Favorite</h1>
      {favoritesState.favorites.length ? (
        <NewsCategoryList newsList={favoritesState.favorites} />
      ) : (
        <p>Nu exista niciun produs salvat</p>
      )}
    </Layout>
  );
}
