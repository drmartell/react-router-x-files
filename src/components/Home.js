import React from 'react';
import { Link } from 'react-router-dom';
import useCharacters from '../hooks/useCharacters';

export default function Home() {
  const { page, handlePaging, characters, ifLoadingList } = useCharacters();

  return ifLoadingList || characters.length === 0 ? <h1>LOADING...</h1> :
    
    (
      <>
        <ul>
          {characters.map(({ id, image, name }) => (
            <li key={id}>
              <Link to={`/${name.replace(' ', '-')}`}>
                <figure>
                  <img src={image} />
                  <figcaption>{name}</figcaption>
                </figure>
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={() => handlePaging(false)}>Prev</button>
        <span>{page}</span>
        <button onClick={() => handlePaging(true)}>Next</button>
      </>
    );
}
