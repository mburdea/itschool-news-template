import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { removeFromFavorites } from '../store/Favorites/actions';
import { FavoritesContext } from '../store/Favorites/context';

export default function NewsCategoryItem(props) {
  const { id, imgSrc, title, description, showRemoveButton } = props;
  const { favoritesDispatch } = useContext(FavoritesContext);

  console.log(showRemoveButton);
  const handleClick = () => {
    const actionResult = removeFromFavorites(id);

    favoritesDispatch(actionResult);
  };

  return (
    <Card className='d-flex h-100'>
      <Link to={`/news/${encodeURIComponent(id)}`}>
        <Card.Img variant='top' src={imgSrc} />
        <Card.Body>
          <Card.Title>
            {title}
          </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
      </Link>
      {showRemoveButton && (
        <Button onClick={handleClick}>Remove</Button>
      )}
    </Card>
  );
}
