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

  // Storage de productos
  const state = {
    products: [
      new Product('DE64R WITH RETRO', 175.99, '../public/assets/img/producst/DE64R-with-retro.png', 57, 'keyboard'),
      new Product('DE61S WITH JAPONESE SAKURA', 147.93, '/public/assets/img/producst/DE61S-with-japanese.png', 16, 'keyboard'),
      new Product('YMD75 V3 QMK', 204.99, '/public/assets/img/producst/YMD75-V3-MQ.png', 99, 'keyboard'),
      new Product('DE63 WITH JAPANESE BOW ', 153.99, '/public/assets/img/producst/DE63-with-japonese-bow.png', 45, 'keyboard'),
      new Product('DE61 WITH JAPANESE', 147.99, '/public/assets/img/producst/DE61C-with-japanese.png', 49, 'keyboard'),
      new Product('DE64L WOOD', 223.99, '/public/assets/img/producst/DE64L-WOOD.png', 49, 'keyboard'),
      new Product('YMD75 V3 QMK', 199.99, '/public/assets/img/producst/YMD75-v3-qmk.png', 56, 'keyboard'),
      new Product('KF068 WITH PBT BLUE', 154.99, '/public/assets/img/producst/KF068-with-pbt.png', 16, 'keyboard'),
      new Product('XD87', 207.99, '/public/assets/img/producst/XD87.png', 0, 'keyboard'),
      new Product('DE64', 213.99, '/public/assets/img/producst/DE64C.png', 0, 'keyboard'),
      new Product('KF068', 154.99, '/public/assets/img/producst/KF068.png', 89, 'keyboard'),
      new Product('DE64R', 175.99, '/public/assets/img/producst/DE64R.png', 0, 'keyboard'),
      
    ],
    filter: Filters.All
  }

  // Funciones

  // Funcion para crear un nuevo producto
  const createProductHTML = (product) => {
    if (!product) throw new Error('Product is required');

    const {title, price, img, stock} = product;

    const htmlProduct = `
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
    divElement.innerHTML = htmlProduct;
    divElement.classList.add('product__card');

    return divElement;
  }

  // Funcion para renderizar los productos
  const renderProducts = (element, products = [], type) => {
    element.innerHTML = '';
    products.forEach(product => {
      element.append(createProductHTML(product))
    });
  }
  renderProducts(contenedorTeclados, state.products,);
  renderProducts(contenedorKeycaps, state.products, );


})();