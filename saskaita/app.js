console.log('labas bebrai');


fetch('https://in3.dev/inv/')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    parse(json);
  });

const parse = data =>  {
  // numeris
  const saskaitosNr = document.querySelector('[data-number]');
  saskaitosNr.innerText = data.number;
  const israsymoData = document.querySelector('[data-date]');
  israsymoData.innerText = data.date;
  const apmoketiIki = document.querySelector('[data-due-date]');
  apmoketiIki.innerText = data.due_date;
  //seller 
  const sellerName = document.querySelector('[data-seller-name]');
  sellerName.innerText = data.company.seller.name;
  const sellerCode = document.querySelector('[data-seller-code]');
  sellerCode.innerText = data.company.seller.code;
  const sellerEmail = document.querySelector('[data-seller-email]');
  sellerEmail.innerText = data.company.seller.email;
  const sellerAddress = document.querySelector('[data-seller-address]');
  sellerAddress.innerText = data.company.seller.address;
  const sellerPhone = document.querySelector('[data-seller-phone]');
  sellerPhone.innerText = data.company.seller.phone;
  const sellerVat = document.querySelector('[data-seller-vat]');
  sellerVat.innerText = data.company.seller.vat;
  // buyer
  const buyerName = document.querySelector('[data-buyer-name]');
  buyerName.innerText = data.company.buyer.name;
  const buyerCode = document.querySelector('[data-buyer-code]');
  buyerCode.innerText = data.company.buyer.code;
  const buyerEmail = document.querySelector('[data-buyer-email]');
  buyerEmail.innerText = data.company.buyer.email;
  const buyerAddress = document.querySelector('[data-buyer-address]');
  buyerAddress.innerText = data.company.buyer.address;
  const buyerPhone = document.querySelector('[data-buyer-phone]');
  buyerPhone.innerText = data.company.buyer.phone;
  const buyerVat = document.querySelector('[data-buyer-vat]');
  buyerVat.innerText = data.company.buyer.vat;
    

  /* data.items.forEach(p => {
    console.log(p);
    const liTemplate = ''
    const li = document.createElement('li');

  }); */
}