let footer = document.getElementById('footer');

let footerContent = () => {
    return (footer.innerHTML = `
  <section class="d-flex justify-content-center  p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    <div class="footer-icons">
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <div class="row mt-3">
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Clothing store
          </h6>
          <p>
            Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            Help
          </h6>
          <p>
            <a href="#!" class="text-reset">Payment</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Delivery</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Returns</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Gift Cards</a>
          </p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
            About us
          </h6>
          <p>
            <a href="#!" class="text-reset">Our stores</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Work with us</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Privacy policy</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Cookies policy</a>
          </p>
        </div>
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@example.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
        </div>
      </div>
    </div>
  </section>
    `);
};

footerContent();