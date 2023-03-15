import {v4 as uuid} from 'uuid';

export class Product {
    /**
     * 
     * @param {String} title 
     * @param {Number} price 
     * @param {String} img 
     * @param {Number} stock 
     * @param {String} type 
     */
    constructor(title = 'No title', price = 'No price', img = '1000_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF', stock = 0, type = 'no type') {
      this.id       = uuid();
      this.title    = title;
      this.price    = price;
      this.img      = img;
      this.stock    = stock;
      this.type     = type;
      this.createAt = new Date();
    }
  }
  