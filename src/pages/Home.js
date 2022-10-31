import React from 'react';

import { getNewsCategoriesEndpoint } from '../api/endpoints';
import { getNewsList } from '../api/adaptors';

import useFetch from '../hooks/useFetch';

import Layout from '../components/Layout';
import NewsCategoryList from '../components/NewsCategoryList';

export default function Home() {
  const techNewsEndpoint = getNewsCategoriesEndpoint('technology', 1, 6);
  const footballNewsEndpoint = getNewsCategoriesEndpoint('football', 1, 6);
  const fashionNewsEndpoint = getNewsCategoriesEndpoint('fashion', 1, 6);

  const techData = useFetch(techNewsEndpoint);
  const footballData = useFetch(footballNewsEndpoint);
  const fashionData = useFetch(fashionNewsEndpoint);

  const mappedTechData = getNewsList(techData);
  const mappedFootballData = getNewsList(footballData);
  const mappedFashionData = getNewsList(fashionData);

  return (
    <Layout>
      <section>
        <h2>Tech</h2>
        <NewsCategoryList newsList={mappedTechData} />
      </section>
      <section>
        <h2>Fotbal</h2>
        <NewsCategoryList newsList={mappedFootballData} />
      </section>
      <section>
        <h2>Fashion</h2>
        <NewsCategoryList newsList={mappedFashionData} />
      </section>
      <section>
        <h2>Favorite</h2>
      </section>
    </Layout>
  );
}
