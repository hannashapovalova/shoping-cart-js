let shop = document.getElementById("shop");

let shopItemsData = [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      desc: "Lorem ipsum dolor sit amet adipisicing.",
      img1: "images/img-1-1.jpg",
      img2: "images/img-1-2.jpg",
      img3: "images/img-1-3.jpg",
    },
    {
      id: "ioytrhndcv",
      name: "Office Shirt",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      img1: "images/img-2-1.jpg",
      img2: "images/img-2-2.jpg",
      img3: "images/img-2-3.jpg",
    },
    {
      id: "wuefbncxbsn",
      name: "T Shirt",
      price: 25,
      desc: "Lorem ipsum sit amet consectetur adipisicing.",
      img1: "images/img-3-1.jpg",
      img2: "images/img-3-2.jpg",
      img3: "images/img-3-3.jpg",
    },
    {
      id: "thyfhcbcv",
      name: "Mens Suit",
      price: 300,
      desc: "Lorem ipsum dolor amet consectetur adipisicing.",
      img1: "images/img-4-1.jpg",
      img2: "images/img-4-2.jpg",
      img3: "images/img-4-3.jpg",
    }];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x)=>{
      let { id, name, price, desc, img1, img2, img3 } = x;
        return ` 
        <div id=produst-id=${id} class="item">
          <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src=${img1} class="d-block w-100" alt="Shirt" width="220">
              </div>
              <div class="carousel-item">
                <img src=${img2} class="d-block w-100" alt="Shirt" width="220">
              </div>
              <div class="carousel-item">
                <img src=${img3} class="d-block w-100" alt="Shirt" width="220">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
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