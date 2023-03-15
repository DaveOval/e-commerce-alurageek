import { createProductHTML } from "./createProductHTML";

export const renderProducts = (contenedor, product = []) => {
    contenedor.innerHTML = '';
    product.forEach(product => {
      contenedor.append(createProductHTML(product))
    });
  }