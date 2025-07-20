fetch('create.html')
  .then(response => response.text())
  .then(html => {
    // Čia galite naudoti gautą HTML, pvz. įdėti į elementą
    document.getElementById('sidebar').innerHTML = html;
  })
  .catch(error => {
    console.error('Klaida nuskaitant create.html:', error);
  });