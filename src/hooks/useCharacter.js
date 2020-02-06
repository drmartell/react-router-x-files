import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getCharacterByName from '../services/getCharacterByName';

export default function useCharacter(name) {
  const [character, setCharacter] = useState('');
  const [ifLoadingDetail, setIfLoadingDetail] = useState(true);

  useEffect(() => {
    setIfLoadingDetail(true);
    getCharacterByName(name)
      .then(setCharacter)
      .then(setIfLoadingDetail(false))
      .catch(console.log); //eslint-disable-line no-console
  }, [name]);

  return { character, ifLoadingDetail };
}
