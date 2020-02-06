import React from 'react';
import useCharacters from '../hooks/useCharacters';

export default function Home() {
  const { page, setPage, characters, loadingList } = useCharacters();

  const handlePaging = (increment) => increment ?
    setPage(currentPage => Math.min(currentPage + 1, 24)) :
    setPage(currentPage => Math.max(currentPage - 1, 0));

  return loadingList ? 
    <h1>LOADING...</h1> :
    
    (<>
      <ul>
        {characters.map(character => (
          <li key={character.id}>
            <figure>
              <img src={character.image} />
              <figcaption>{character.name}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <button onClick={() => handlePaging(false)}>Prev</button>
      <button onClick={() => handlePaging(true)}>Next</button>
    </>);
}
