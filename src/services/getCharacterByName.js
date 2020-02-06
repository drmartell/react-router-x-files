export default name => 
  fetch(`https://cors-anywhere.herokuapp.com/https://xfiles-api.herokuapp.com/api/v1/characters/${encodeURIComponent(name)}`)
    .then(res => res.json())
    .then(json => ({
      name: json.name,
      image: json.image,
      description: json.description
    }));
