fetch('https://in3.dev/inv/')
  .then(response => response.json())
  .then(json => {
    console.log(json);
    parse(json);
  });

const parse = data => {
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

  const productsHtmlBin = document.querySelector('[data-item-table]');
  const itemTable = document.querySelector('[data-table-template]');
  productsHtmlBin.innerHTML = '';

  let viso = 0;
  let pvm = 0;
  let isViso = 0;

  console.log(data.items)
  data.items.forEach(item => {
    const clone = itemTable.content.cloneNode(true);

    clone.querySelector('[data-item-description]').textContent = item.description;
    clone.querySelector('[data-item-quantity]').textContent = item.quantity;
    clone.querySelector('[data-item-price]').textContent = parseFloat(item.price).toFixed(2);

    // Pridedam % jei procentinė nuolaida
    let discountText = item.discount.value;
    if (item.discount.type === "percentage") {
      discountText += "%";
    }
    clone.querySelector('[data-item-discount]').textContent = discountText;

    let totalSum = (item.price);
    console.log('Total sum is:', totalSum);
    let discount = item.discount.value;
    console.log('Discount is:', discount);
    let taxes = totalSum * (21 / 100);
    console.log('Taxes are:', taxes);
    let discountedSum = '';
    console.log(discountedSum);

    if (item.discount.type === "percentage") {
      discountedSum = totalSum - (totalSum * (discount / 100));
      console.log('Discounted sum is:', discountedSum);
    } else if (item.discount.type === "fixed") {
      discountedSum = totalSum - discount;
      console.log('Discounted sum is:', discountedSum);
    } else if (item.discount.type !== 'null') {
      discountedSum = totalSum;
    };


    
    let taxesAfter = discountedSum * (21 / 100);
    clone.querySelector('[data-item-discounted-price]').textContent = parseFloat(discountedSum).toFixed(2);
    clone.querySelector('[data-item-taxes]').textContent = taxesAfter.toFixed(2);
    let totalWithTax = discountedSum + taxesAfter;
    clone.querySelector('[data-item-total]').textContent = parseFloat(totalWithTax).toFixed(2);

    productsHtmlBin.appendChild(clone);

    viso += discountedSum;
    pvm += taxesAfter;
    isViso += totalWithTax;
    
    console.log('Viso:', viso);
    console.log('PVM:', pvm);
    console.log('Iš viso:',isViso);

    document.querySelector('[data-item-shipping]').textContent = parseFloat(data.shippingPrice).toFixed(2);
    document.querySelector('[data-item-total-sum]').textContent = viso.toFixed(2);
    document.querySelector('[data-item-total-tax]').textContent = pvm.toFixed(2);
    document.querySelector('[data-item-total-w-tax]').textContent = (parseFloat(isViso) + parseFloat(data.shippingPrice)).toFixed(2);
  });

 }
