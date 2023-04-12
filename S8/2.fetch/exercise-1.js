fetch('https://api.agify.io?name=michael')
  .then((response) => {
    const resp = response.json()
    return resp;
  })
  .then((resp) => {
    console.log(resp);
  });