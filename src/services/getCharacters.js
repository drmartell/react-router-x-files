export default (perPage = 5, page = 1) =>
  fetch(`https://cors-anywhere.herokuapp.com/https://xfiles-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${page}`)
    .then(res => res.json())
    .then(({ results }) => results.map((character, i) => ({
      id: i,
      name: character.name,
      image: character.image
    })));
