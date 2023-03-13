(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const r of c)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function d(c){const r={};return c.integrity&&(r.integrity=c.integrity),c.referrerPolicy&&(r.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?r.credentials="include":c.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(c){if(c.ep)return;c.ep=!0;const r=d(c);fetch(c.href,r)}})();let l;const g=new Uint8Array(16);function w(){if(!l&&(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(g)}const s=[];for(let e=0;e<256;++e)s.push((e+256).toString(16).slice(1));function b(e,t=0){return(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase()}const _=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),f={randomUUID:_};function D(e,t,d){if(f.randomUUID&&!t&&!e)return f.randomUUID();e=e||{};const o=e.random||(e.rng||w)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){d=d||0;for(let c=0;c<16;++c)t[d+c]=o[c];return t}return b(o)}(()=>{const e=document.querySelector("#keyboard-container"),t=document.querySelector("#keycaps-container"),d={All:"all",Keyboards:"keyboards",Keycaps:"keycaps",Switches:"switches"};class o{constructor(p,u,a,y=0,h="no type"){this.id=D(),this.title=p,this.price=u,this.img=a,this.stock=y,this.type=h,this.createAt=new Date}}const c={keyboard:[new o("DE64R WITH RETRO ORANGE",175.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_3997.jpg?v=1665507155",57,"keyboard"),new o("DE61S WITH JAPONESE SAKURA",147.93,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_20210907_175922.jpg?v=1631208322&width=1100",16,"keyboard"),new o("YMD75 V3 QMK",204.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC5570.jpg?v=1666867743&width=1100",99,"keyboard"),new o("DE63 WITH JAPANESE BOW ",153.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC6124.jpg?v=1666802063&width=1100",45,"keyboard"),new o("DE61 WITH JAPANESE CORAL",147.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/1638994531630_7aa8b917-9aaa-4d4f-84bf-9da0725b63fa.jpg?v=1639224076&width=1100",49,"keyboard"),new o("DE64L WOOD",223.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC1424.jpg?v=1660161267&width=1100",49,"keyboard"),new o("YMD75 V3 QMK",199.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC5330.jpg?v=1664903168&width=1100",56,"keyboard"),new o("KF068 WITH PBT BLUE",154.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC2052_c5fa7b40-c936-44ce-b9fd-716ad29a876a.jpg?v=1668676346&width=1100",16,"keyboard"),new o("XD87",207.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC5484.jpg?v=1665479904&width=1100",0,"keyboard"),new o("DE64C",213.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_3964.jpg?v=1641573909&width=1100",0,"keyboard"),new o("KF068",154.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC1731_4b4a099c-e7f2-44ec-8e9c-a26404e39584.jpg?v=1668704372&width=1100",89,"keyboard"),new o("DE64R",175.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_4146.jpg?v=1640870471&width=1100",0,"keyboard")],keycaps:[new o("Hola mundo",99,"https://jsonplaceholder.typicode.com/todos/1",123,"keycaps")],filter:d.All},r=i=>{if(!i)throw new Error("Product is required");const{title:p,price:u,img:a,stock:y}=i,h=`
      <div class="product__card-img">
        <img src="${a}" alt="">
      </div>
      <div class="product__card-description">
        <p class="product__card_text-title">${p}</p>
        <p class="product__card_text-price">$${u}</p>
        <p class="product__card_text">Stock: ${y}</p>
        <a class="product__card_more" href="#">See more</a>
      </div>
    `,m=document.createElement("div");return m.innerHTML=h,m.classList.add("product__card"),m},n=(i,p=[],u)=>{i.innerHTML="",p.forEach(a=>{i.append(r(a))})};n(e,c.keyboard),n(t,c.keycaps)})();
