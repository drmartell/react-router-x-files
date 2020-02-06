import React from 'react';
import useCharacter from '../hooks/useCharacter';
import PropTypes from 'prop-types';

export default function Details({ match }) {

  const { character: { name, image, description }, ifLoadingDetails } = useCharacter(match.params.name);

  return ifLoadingDetails ? <h1>LOADING...</h1> :

    (
      <div>
        <figure>
          <img src={image} />
          <figcaption>{`${name}
          
${description}`}</figcaption>
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
