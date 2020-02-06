import { useEffect, useState } from 'react';
import getCharacters from '../services/getCharacters';

export default function useCharacters() {
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    setLoadingList(true);
    getCharacters(page)
      .then(setCharacters)
      .then(setLoadingList(false))
      .catch(console.log); //eslint-disable-line no-console
  }, [page]);

  return { perPage, setPerPage, page, setPage, characters, loadingList };
}
