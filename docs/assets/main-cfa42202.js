import"./modulepreload-polyfill-3cfb730f.js";/* empty css               */const h=document.querySelector("#navbar__name"),l=document.querySelector("#login__buton"),u=localStorage.getItem("user"),w=document.querySelector("#addproductbtn"),m=()=>{if(u===null){h.innerText="",l.classList.remove("disabled"),w.classList.add("disabled");return}else{h.innerText="Hi "+JSON.parse(u).name,l.classList.add("disabled"),w.classList.remove("disabled");return}},f=e=>{if(!e)throw new Error("Product is required");const{title:t,price:o,img:d,stock:r}=e,a=`
      <div class="product__card-img">
        <img src="${d}" alt="">
      </div>
      <div class="product__card-description">
        <p class="product__card_text-title">${t}</p>
        <p class="product__card_text-price">$${o}</p>
        <p class="product__card_text">Stock: ${r}</p>
        <a class="product__card_more" href="#">See more</a>
      </div>
    `,i=document.createElement("div");return i.innerHTML=a,i.classList.add("product__card"),i},p=(e,t=[])=>{e.innerHTML="",t.forEach(o=>{e.append(f(o))})};let n;const _=new Uint8Array(16);function k(){if(!n&&(n=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(_)}const c=[];for(let e=0;e<256;++e)c.push((e+256).toString(16).slice(1));function g(e,t=0){return(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase()}const S=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:S};function E(e,t,o){if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const d=e.random||(e.rng||k)();if(d[6]=d[6]&15|64,d[8]=d[8]&63|128,t){o=o||0;for(let r=0;r<16;++r)t[o+r]=d[r];return t}return g(d)}class s{constructor(t="No title",o="No price",d="1000_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF",r=0,a="no type"){this.id=E(),this.title=t,this.price=o,this.img=d,this.stock=r,this.type=a,this.createAt=new Date}}const R={All:"all",Keyboards:"keyboards",Keycaps:"keycaps",Switches:"switches"},y={keyboard:[new s("DE64R WITH RETRO ORANGE",175.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_3997.jpg?v=1665507155",57,"keyboard"),new s("DE61S WITH JAPONESE SAKURA",147.93,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_20210907_175922.jpg?v=1631208322&width=1100",16,"keyboard"),new s("YMD75 V3 QMK",204.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC5570.jpg?v=1666867743&width=1100",99,"keyboard"),new s("DE63 WITH JAPANESE BOW ",153.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC6124.jpg?v=1666802063&width=1100",45,"keyboard"),new s("DE61 WITH JAPANESE CORAL",147.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/1638994531630_7aa8b917-9aaa-4d4f-84bf-9da0725b63fa.jpg?v=1639224076&width=1100",49,"keyboard"),new s("DE64L WOOD",223.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC1424.jpg?v=1660161267&width=1100",49,"keyboard"),new s("YMD75 V3 QMK",199.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC5330.jpg?v=1664903168&width=1100",56,"keyboard"),new s("KF068 WITH PBT BLUE",154.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC2052_c5fa7b40-c936-44ce-b9fd-716ad29a876a.jpg?v=1668676346&width=1100",16,"keyboard"),new s("XD87",207.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC5484.jpg?v=1665479904&width=1100",0,"keyboard"),new s("DE64C",213.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_3964.jpg?v=1641573909&width=1100",0,"keyboard"),new s("KF068",154.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/DSC1731_4b4a099c-e7f2-44ec-8e9c-a26404e39584.jpg?v=1668704372&width=1100",89,"keyboard"),new s("DE64R",175.99,"https://cdn.shopify.com/s/files/1/0573/9610/1272/products/IMG_4146.jpg?v=1640870471&width=1100",0,"keyboard")],keycaps:[new s("CANDY",69,"https://cdn.shopify.com/s/files/1/0440/6676/7015/products/sweet-series-pbt-mechanical-keyboard-set.jpg?v=1670914924",12,"keycaps"),new s("CANCER",69.1,"https://cdn.shopify.com/s/files/1/0440/6676/7015/products/cancer-constellation-series-pbt-mechanical-keyboard-keycaps-set.jpg?v=1662369566",43,"keycaps"),new s("GEMINI",69,"https://cdn.shopify.com/s/files/1/0440/6676/7015/products/gemini-pbt-keycaps.jpg?v=1662368398",15,"keycaps"),new s("AQUARIS",69.5,"https://cdn.shopify.com/s/files/1/0440/6676/7015/products/aquarius-pbt-keycaps-set.jpg?v=1667288716",24,"keycaps"),new s("PASTEL DREAMS",50,"https://cdn.shopify.com/s/files/1/0440/6676/7015/products/Pastel-Dreams-pbt-keycap-set.jpg?v=1654584094",11,"keycaps"),new s("UNIVERSE VITALITY",69,"https://cdn.shopify.com/s/files/1/0440/6676/7015/products/keygeak-Universe-series-keycap-set_3bc6fff8-03b3-4535-a5e0-49090058e8d5.jpg?v=1650246778",6,"keycaps"),new s("BLUE- PINK GRADIENT",69.99,"https://cdn.shopify.com/s/files/1/0440/6676/7015/products/blue-pink-gradient-pbt-tricolor-keycaps-set.jpg?v=1656041937",15,"keycaps"),new s("CAPPUCCINO",69.98,"https://cdn.shopify.com/s/files/1/0440/6676/7015/products/cappuccino-brown-pbt-tricolor-mechanical-keyboard-keycaps-set.jpg?v=1659064739",40,"keycaps")],switchs:[new s("Switch RED",25,"https://www.cherrymx.de/_Resources/Persistent/7/6/5/7/76578b2befb9aa6f6b73389c9afd6825f7ce84ba/GIF_MXRGB_Silent-Red.gif",14,"keycaps"),new s("Switchs BLUE",25,"https://www.cherrymx.de/_Resources/Persistent/8/2/e/0/82e048237373b7ff396b8f766abeaa21f116a942/GIF_MXRGB_Blue.gif",24,"keycaps"),new s("Switchs BLACK",25,"https://www.cherrymx.de/_Resources/Persistent/b/a/b/a/baba6c3fa6e129976b40b6b3534449f7db49230b/GIF_MXRGB_Std-Black.gif",51,"keycaps"),new s("Switchs SILVER",25,"https://www.cherrymx.de/_Resources/Persistent/5/d/5/d/5d5d3d27a7049ae2d13150229240122630dd374d/GIF_MXRGB_Speed.gif",55,"keycaps"),new s("Switchs BROWN",25,"https://www.cherrymx.de/_Resources/Persistent/e/a/b/2/eab22a5e10e07e5487817e5eaaa42db92950dfc3/GIF_MXRGB_Brown.gif",13,"keycaps"),new s("Switchs GREEN",40,"https://www.cherrymx.de/_Resources/Persistent/f/a/f/a/fafa42f5c234c958a785c8b383c0e548a69f1044/GIF_MXGreen.gif",48,"keycaps"),new s("Switchs GREY",40,"https://www.cherrymx.de/_Resources/Persistent/0/a/d/0/0ad0a1c2f568aa1b97912388c497fdd69969872d/GIF_MXGrey.gif",12,"keycaps"),new s("Switchs CLEAR",40,"https://www.cherrymx.de/_Resources/Persistent/9/d/c/1/9dc16af4915c37c9feff202ea9bd66d97f83f733/GIF_MXGrey_v004.gif",0,"keycaps")],filter:R.All};console.log("main js enlazado");const v=document.querySelector("#keyboard-container"),I=document.querySelector("#keycaps-container"),D=document.querySelector("#switchs-container");p(v,y.keyboard);p(I,y.keycaps);p(D,y.switchs);m();
