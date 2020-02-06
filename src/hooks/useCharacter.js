import { useEffect, useState } from 'react';
import getCharacterByName from '../services/getCharacterByName';

export default function useCharacter(name) {
  const [character, setCharacter] = useState('');
  const [ifLoadingDetails, setIfLoadingDetails] = useState(true);

  useEffect(() => {
    setIfLoadingDetails(true);
    getCharacterByName(name)
      .then(setCharacter)
      .then(setIfLoadingDetails(false))
      .catch(console.log); //eslint-disable-line no-console
  }, [name]);

  return { character, ifLoadingDetails };
}
