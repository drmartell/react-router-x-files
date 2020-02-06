export default name => 
  //fetch(`https://cors-anywhere.herokuapp.com/https://xfiles-api.herokuapp.com/api/v1/characters/${encodeURIComponent(name)}`)
  fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${encodeURIComponent(name)}`)
    .then(res => res.json())
    .then(characterArr => {
      const { name, image, description } = characterArr[0];
      return ({
        name,
        image,
        description
      });
    });
