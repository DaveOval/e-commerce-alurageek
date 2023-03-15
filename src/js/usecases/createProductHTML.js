export const createProductHTML = (product) => {
    if (!product) throw new Error('Product is required');

    const {title, price, img, stock} = product;

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