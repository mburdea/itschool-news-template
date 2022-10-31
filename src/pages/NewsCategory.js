import React from 'react';
import { useParams } from 'react-router-dom';

import { getNewsCategoriesEndpoint } from '../api/endpoints';
import { getNewsList } from '../api/adaptors';
import useFetch from '../hooks/useFetch';

import Layout from '../components/Layout';
import NewsCategoryList from '../components/NewsCategoryList';

export default function NewsCategory() {
  const { categoryId } = useParams();
  const techNewsEndpoint = getNewsCategoriesEndpoint(categoryId);
  const data = useFetch(techNewsEndpoint);
  const mappedData = getNewsList(data);

  let title = '';
  switch(categoryId) {
    case 'technology':
      title = 'Tech';
      break;
    
    case 'football':
      title = 'Fotbal';
      break;
    
    case 'fashion':
      title = 'Fashion';
      break;
    
    default:
      break;
  }

  return (
    <Layout>
      <h1>{title}</h1>
      <NewsCategoryList newsList={mappedData} />
    </Layout>
  );
}
