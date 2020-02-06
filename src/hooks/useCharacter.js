import { useEffect, useState } from 'react';
import getCharacter from '../services/getCharacter';

export default function useCharacter() {
  const [name, setName] = useState([]);
  const [loadingDetail, setLoadingDetail] = useState(true);

  useEffect(() => {
    setLoadingDetail(true);
    getCharacter(name)
      .then(setName)
      .then(setLoadingDetail(false))
      .catch(console.log); //eslint-disable-line no-console
  }, [name]);

  return { setName, loadingDetail };
}
