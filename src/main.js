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



let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
      let { id, name, price, desc, img1} = x;
      let search = basket.find((x)=> x.id === id) || [];
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
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">
                  ${search.item === undefined ? 0 : search.item}
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
              </div>
            </div>
          </div>
        </div>
        `;
    }));
    ;
};

generateShop();


let increment = (id)=>{
 let selectedItem = id;
 let search = basket.find((x)=> x.id === selectedItem.id);

 if(search === undefined){
  basket.push({
    id: selectedItem.id,
    item: 1,
   });
 } else {
  search.item += 1;
 };

 update(selectedItem.id);
 localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id)=>{
  let selectedItem = id;
  let search = basket.find((x)=> x.id === selectedItem.id);

  if(search === undefined) return;
  else if(search.item === 0) return;
  else {
   search.item -= 1;
  };

  update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x)=> x.id === id);
  console.log(search.item);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y)=> x + y, 0);
};
calculation();