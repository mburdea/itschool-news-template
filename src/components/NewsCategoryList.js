import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NewsCategoryItem from './NewsCategoryItem';

export default function NewsCategoryList(props) {
  const { newsList } = props;

  return (
    <Container>
      <Row>
        {newsList.map(news => {
          return (
            <Col xs={12} md={6} lg={4} className='mb-4' key={news.id}>
              <NewsCategoryItem
                id={news.id}
                imgSrc={news.thumbnail}
                title={news.title}
                description={news.description}
                showRemoveButton={news.showRemoveButton}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}