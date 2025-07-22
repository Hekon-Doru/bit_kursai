import axios from 'axios';



const animalInput = document.querySelector('[name="animal"]');
const tailInput = document.querySelector('[name="tail"]');
const buttonSend = document.querySelector('[data-action="send"]');
const responseEl = document.querySelector('[data-response]');

const getCSR = document.querySelector('[data-action="get-csr"]');
const getSSR = document.querySelector('[data-action="get-ssr"]');

const dataCSR = document.querySelector('[data-list="CSR"] ul');
const dataSSR = document.querySelector('[data-list="SSR"] ul');


getCSR.addEventListener('click', _ => {
    const url = 'http://localhost/animal-csr';
    let html = '';
    axios.get(url)
    .then(res => {
        res.data.animals.forEach(animalData => {
            html += `<li>${animalData.animal} - ${animalData.tail} cm</li>`;
        });
        dataCSR.innerHTML = html;
    });
    
});

getSSR.addEventListener('click', _ => {
    const url = 'http://localhost/animal-ssr';
    axios.get(url)
    .then(res => {
        dataSSR.innerHTML = res.data.html;
    });
    
});



buttonSend.addEventListener('click', _ => {
    const animal = animalInput.value;
    const tail = tailInput.value;
    const url = 'http://localhost/animal';

    axios.post(url, { animal, tail })
    .then(res => {
        console.log(res.data);
        responseEl.innerHTML = res.data.message;
    });

});