import {v4 as uuid} from 'uuid';

const miModulo = (() => {
  'use strict'

  // Referencias HTML
  const contenedorTeclados = document.querySelector('#keyboard-container');
  const contenedorKeycaps = document.querySelector('#keycaps-container');
  const contenedorSwitchs = document.querySelector('#switchs-container');

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
      new Product('CANDY', 69.00, 'https://cdn.shopify.com/s/files/1/0440/6676/7015/products/sweet-series-pbt-mechanical-keyboard-set.jpg?v=1670914924', 12 , 'keycaps'),
      new Product('CANCER', 69.10, 'https://cdn.shopify.com/s/files/1/0440/6676/7015/products/cancer-constellation-series-pbt-mechanical-keyboard-keycaps-set.jpg?v=1662369566', 43 , 'keycaps'),
      new Product('GEMINI', 69.00, 'https://cdn.shopify.com/s/files/1/0440/6676/7015/products/gemini-pbt-keycaps.jpg?v=1662368398', 15 , 'keycaps'),
      new Product('AQUARIS', 69.50, 'https://cdn.shopify.com/s/files/1/0440/6676/7015/products/aquarius-pbt-keycaps-set.jpg?v=1667288716', 24 , 'keycaps'),
      new Product('PASTEL DREAMS', 50.00, 'https://cdn.shopify.com/s/files/1/0440/6676/7015/products/Pastel-Dreams-pbt-keycap-set.jpg?v=1654584094', 11 , 'keycaps'),
      new Product('UNIVESE VITALITY', 69.00, 'https://cdn.shopify.com/s/files/1/0440/6676/7015/products/keygeak-Universe-series-keycap-set_3bc6fff8-03b3-4535-a5e0-49090058e8d5.jpg?v=1650246778', 6 , 'keycaps'),
      new Product('BLUE- PINK GRADIENT', 69.99, 'https://cdn.shopify.com/s/files/1/0440/6676/7015/products/blue-pink-gradient-pbt-tricolor-keycaps-set.jpg?v=1656041937', 15 , 'keycaps'),
      new Product('CAPPUCCINO', 69.98, 'https://cdn.shopify.com/s/files/1/0440/6676/7015/products/cappuccino-brown-pbt-tricolor-mechanical-keyboard-keycaps-set.jpg?v=1659064739', 40 , 'keycaps'),
    ],
    switchs:[
      new Product('Switch RED', 25, 'https://www.cherrymx.de/_Resources/Persistent/7/6/5/7/76578b2befb9aa6f6b73389c9afd6825f7ce84ba/GIF_MXRGB_Silent-Red.gif', 14 , 'keycaps'),
      new Product('Switchs BLUE', 25, 'https://www.cherrymx.de/_Resources/Persistent/8/2/e/0/82e048237373b7ff396b8f766abeaa21f116a942/GIF_MXRGB_Blue.gif', 24 , 'keycaps'),
      new Product('Switchs BLACK', 25, 'https://www.cherrymx.de/_Resources/Persistent/b/a/b/a/baba6c3fa6e129976b40b6b3534449f7db49230b/GIF_MXRGB_Std-Black.gif', 51 , 'keycaps'),
      new Product('Switchs SILVER', 25, 'https://www.cherrymx.de/_Resources/Persistent/5/d/5/d/5d5d3d27a7049ae2d13150229240122630dd374d/GIF_MXRGB_Speed.gif', 55 , 'keycaps'),
      new Product('Switchs BROWN', 25, 'https://www.cherrymx.de/_Resources/Persistent/e/a/b/2/eab22a5e10e07e5487817e5eaaa42db92950dfc3/GIF_MXRGB_Brown.gif', 13 , 'keycaps'),
      new Product('Switchs GREEN', 40, 'https://www.cherrymx.de/_Resources/Persistent/f/a/f/a/fafa42f5c234c958a785c8b383c0e548a69f1044/GIF_MXGreen.gif', 48 , 'keycaps'),
      new Product('Switchs GREY', 40, 'https://www.cherrymx.de/_Resources/Persistent/0/a/d/0/0ad0a1c2f568aa1b97912388c497fdd69969872d/GIF_MXGrey.gif',  12, 'keycaps'),
      new Product('Switchs CLEAR', 40, 'https://www.cherrymx.de/_Resources/Persistent/9/d/c/1/9dc16af4915c37c9feff202ea9bd66d97f83f733/GIF_MXGrey_v004.gif', 0 , 'keycaps'),
    
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
  renderProducts(contenedorSwitchs, state.switchs, );


})();