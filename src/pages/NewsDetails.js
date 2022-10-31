import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import styles from './NewsDetails.module.css';

import { getNewsDetailsEndpoint } from '../api/endpoints';
import { getNewsDetails } from '../api/adaptors';

import useFetch from '../hooks/useFetch';
import { getFormattedDate } from '../utils/date';

import { addToFavorites } from '../store/Favorites/actions';
import { FavoritesContext } from '../store/Favorites/context';

import Layout from '../components/Layout';

export default function NewsDetails() {
  const { newsId } = useParams();
  const { favoritesDispatch } = useContext(FavoritesContext);

  const apiURL = getNewsDetailsEndpoint(decodeURIComponent(newsId));

  const apiData = useFetch(apiURL);
  const mappedApiData = getNewsDetails(apiData);

  console.log(mappedApiData);

  const { author, content, date, title, description, image, thumbnail } = mappedApiData;

  const handleClick = () => {
    const actionResult = addToFavorites({
      id: newsId,
      title,
      thumbnail,
      description,
      showRemoveButton: true,
    });

    favoritesDispatch(actionResult);
  };

  return (
    <Layout>
      <Container className={`${styles.newsDetails}`}>
        <Row className='d-flex justify-content-center'>
          <Col lg={8} xs={12}>
            <h1 className='pt-3 mb-5'>{title}</h1>
            <p className='fw-bold'>{description}</p>
            <div className='mb-4' dangerouslySetInnerHTML={{ __html: image }} />
            <div className='d-flex justify-content-between align-items-center mb-4'>
              <div className='fw-bold'>
                <p>{author}</p>
                <p className='mb-0'>{getFormattedDate(date)}</p>
              </div>
              <Button variant='success' onClick={handleClick}>Adauga la favorite</Button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
