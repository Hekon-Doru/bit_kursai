console.log('labas bebrai');


fetch('https://in3.dev/inv/')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    parse(json);
  });

const parse = data =>  {
  // numeris
  const invNumber = document.querySelector('data-number');
  invNumber.innerText = data.number;

  data.items.forEach(p => {
    console.log(p);
    const liTemplate = ''
    const li = document.createElement('li');

  });
}