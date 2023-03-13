import {v4 as uuid} from 'uuid';

const miModulo = (() => {
  'use strict'

  // Referencias HTML
  const contenedorTeclados = document.querySelector('#keyboard-container');
  const contenedorKeycaps = document.querySelector('#keycaps-container');

  // Filtros
  const Filters = {
    All: 'all',
    Keyboards: 'keyboards',
    Keycaps: 'keycaps',
    Switches: 'switches',
  }

  // Constructor para productos
  class Product {
    /**
     * 
     * @param {String} title 
     * @param {Number} price 
     * @param {String} img 
     * @param {Number} stock 
     * @param {String} type 
     */
    constructor(title, price, img, stock = 0, type = 'no type') {
      this.id       = uuid();
      this.title    = title;
      this.price    = price;
      this.img      = img;
      this.stock    = stock;
      this.type     = type;
      this.createAt = new Date();
    }
  }

  // Storage de keyboardos
  const state = {
    keyboard: [
      new Product('DE64R WITH RETRO ORANGE', 175.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_3997.jpg?v=1665507155', 57, 'keyboard'),
      new Product('DE61S WITH JAPONESE SAKURA', 147.93, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_20210907_175922.jpg?v=1631208322&width=1100', 16, 'keyboard'),
      new Product('YMD75 V3 QMK', 204.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC5570.jpg?v=1666867743&width=1100', 99, 'keyboard'),
      new Product('DE63 WITH JAPANESE BOW ', 153.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC6124.jpg?v=1666802063&width=1100', 45, 'keyboard'),
      new Product('DE61 WITH JAPANESE CORAL', 147.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/1638994531630_7aa8b917-9aaa-4d4f-84bf-9da0725b63fa.jpg?v=1639224076&width=1100', 49, 'keyboard'),
      new Product('DE64L WOOD', 223.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC1424.jpg?v=1660161267&width=1100', 49, 'keyboard'),
      new Product('YMD75 V3 QMK', 199.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC5330.jpg?v=1664903168&width=1100', 56, 'keyboard'),
      new Product('KF068 WITH PBT BLUE', 154.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC2052_c5fa7b40-c936-44ce-b9fd-716ad29a876a.jpg?v=1668676346&width=1100', 16, 'keyboard'),
      new Product('XD87', 207.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC5484.jpg?v=1665479904&width=1100', 0, 'keyboard'),
      new Product('DE64C', 213.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_3964.jpg?v=1641573909&width=1100', 0, 'keyboard'),
      new Product('KF068', 154.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC1731_4b4a099c-e7f2-44ec-8e9c-a26404e39584.jpg?v=1668704372&width=1100', 89, 'keyboard'),
      new Product('DE64R', 175.99, 'https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_4146.jpg?v=1640870471&width=1100', 0, 'keyboard'),
      
    ],
    keycaps:[
      new Product('Hola mundo', 99, 'https://jsonplaceholder.typicode.com/todos/1', 123, 'keycaps'),
    ],
    filter: Filters.All
  }

  // Funciones

  // Funcion para crear un nuevo producto
  const createProductHTML = (keyboard) => {
    if (!keyboard) throw new Error('Product is required');

    const {title, price, img, stock} = keyboard;

    const htmlkeyboard = `
      <div class="product__card-img">
        <img src="${img}" alt="">
      </div>
      <div class="product__card-description">
        <p class="product__card_text-title">${title}</p>
        <p class="product__card_text-price">$${price}</p>
        <p class="product__card_text">Stock: ${stock}</p>
        <a class="product__card_more" href="#">See more</a>
      </div>
    `;
    const divElement = document.createElement('div');
    divElement.innerHTML = htmlkeyboard;
    divElement.classList.add('product__card');

    return divElement;
  }

  // Funcion para renderizar los productos
  const renderProducts = (element, keyboard = [], type) => {
    element.innerHTML = '';
    keyboard.forEach(keyboard => {
      element.append(createProductHTML(keyboard))
    });
  }
  //Esta funcion sirve para renderizar los productos en el DOM
  renderProducts(contenedorTeclados, state.keyboard,);
  renderProducts(contenedorKeycaps, state.keycaps, );


})();