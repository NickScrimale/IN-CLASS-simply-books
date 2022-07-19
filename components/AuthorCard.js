import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { deleteSingleAuthor } from '../api/authorData';
import { deleteAuthorBooks } from '../api/mergedData';

function AuthorCard({ authorObj, onUpdate }) {
  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.firebaseKey}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };
  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Body>
          <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
          <p className="card-text bold">{authorObj.favorite ? 'Favorite' : 'Not a Favorite' }</p>
          <Card.Text>{authorObj.email}</Card.Text>
          <Button variant="danger" onClick={deleteThisAuthor} className="m-2">
            DELETE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    name: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
    favorite: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// AuthorCard.defaultProps = {
//   firstName: 'Yes',
//   lastName: 'Man',
//   email: 'yesman@fnv.com',
//   image: 'https://static.wikia.nocookie.net/fallout/images/8/8e/Yes_Man.png/revision/latest/scale-to-width-down/250?cb=20110501150842',
// };

export default AuthorCard;
