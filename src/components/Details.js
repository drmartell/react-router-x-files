import React from 'react';
import useCharacter from '../hooks/useCharacter';
import PropTypes from 'prop-types';

export default function Details({ match }) {

  const { character: { name, image, description }, ifLoadingDetails } = useCharacter(match.params.name);

  return ifLoadingDetails || !name ? <h1>LOADING...</h1> :

    (
      <div>
        <figure>
          <img src={image} />
          <figcaption>
            <p>{name}</p>
            <p>{description}</p>
          </figcaption>
        </figure>
      </div>
    );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
