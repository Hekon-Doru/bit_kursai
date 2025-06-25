fetch('https://in3.dev/inv/')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    printUsers(json);
  });