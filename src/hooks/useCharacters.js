import { useEffect, useState } from 'react';
import getCharacters from '../services/getCharacters';

export default function useCharacters() {
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [ifLoadingList, setIfLoadingList] = useState(true);

  const handlePaging = increment => increment ?
    setPage(currentPage => Math.min(currentPage + 1, 24)) :
    setPage(currentPage => Math.max(currentPage - 1, 0));

  useEffect(() => {
    setIfLoadingList(true);
    getCharacters(page)
      .then(setCharacters)
      .then(setIfLoadingList(false))
      .catch(console.log); //eslint-disable-line no-console
  }, [page]);

  return { perPage, setPerPage, page, handlePaging, characters, ifLoadingList };
}
