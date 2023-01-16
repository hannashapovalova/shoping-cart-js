let shop = document.getElementById("shop");

let shopItemsData = [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet adipisicing.",
      img1: "images/img-1-1.jpg",
    },
    {
      id: "ioytrhndcv",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img1: "images/img-2-1.jpg",
    },
    {
      id: "wuefbncxbsn",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum sit amet consectetur adipisicing.",
      img1: "images/img-3-1.jpg",
    },
    {
      id: "thyfhcbcv",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor amet consectetur adipisicing.",
      img1: "images/img-4-1.jpg",
    }];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
      let { id, name, price, desc, img1, img2, img3 } = x;
        return ` 
        <div id=produst-id=${id} class="item">
          <img src=${img1} class="d-block w-100" alt="Shirt" width="220">
          <div class="details">
            <h3>
              ${name}
            </h3>
            <p>
            ${desc}
            </p>
            <div class="price-quantity">
              <h2>
                $${price}
              </h2>
              <div class="buttons">
                <i class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">
                  0
                </div>
                <i class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
        `;
    }));
    ;
};

generateShop();