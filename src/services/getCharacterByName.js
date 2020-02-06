export default name => 
  //fetch(`https://cors-anywhere.herokuapp.com/https://xfiles-api.herokuapp.com/api/v1/characters/${encodeURIComponent(name)}`)
  //fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${encodeURIComponent(name)}`)
  fetch(`https://xfiles-api.herokuapp.com/api/v1/characters/${encodeURIComponent(name.replace('-', ' '))}`)
    .then(res => res.json())
    .then(
      ([{ name, image, description }]) => ({
        name,
        image,
        description
      }));
