export class Invoice {
  constructor(data) {
    this.number = data.number;
    this.date = data.date;
    this.due_date = data.due_date;
    this.company = data.company;
    this.items = data.items;
    this.shippingPrice = data.shippingPrice;
  }
}
