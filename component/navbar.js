function navbar() {
  return `
  <nav id="navbar">
      
  <div id="logodiv">
    <img id="logoimg" src="./media_things/envoy_logo.png" alt="" />
  </div>
  <ul>
    <li><a href=""> We are hiring!</a></li>

    <!-- products having dropdown menu -->
    <li>
      <a href="">Products <i class="fa fa-angle-down"></i></a>

      <div id="products_dropdown">
        <ul>
          <li>
            <h3>Products</h3>
            <a href="">
              <div id="products_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/products/visitors-app.png"
                  alt=""
                />
                <div id="products_dropdown_div_text">
                  <h3>Visitors</h3>
                  <p>Visitor Management System for any Front desk</p>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="products_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/products/protect-app.png"
                  alt=""
                />
                <div id="products_dropdown_div_text">
                  <h3>Protect</h3>
                  <p>Visitor Management System for any Front desk</p>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="products_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/products/visitors-app.png"
                  alt=""
                />
                <div id="products_dropdown_div_text">
                  <h3>Desks</h3>
                  <p>Easy desk booking for flexible workplace</p>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="products_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/products/rooms-app.png"
                  alt=""
                />
                <div id="products_dropdown_div_text">
                  <h3>Room</h3>
                  <p>Book Room easier for your team</p>
                </div>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="products_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/products/deliveries-app.png"
                  alt=""
                />
                <div id="products_dropdown_div_text">
                  <h3>Delivieries</h3>
                  <p>A new way of organize incoming office delivieries</p>
                </div>
              </div>
            </a>
            <h4 id="viewallproducts">View all products</h4>
          </li>
        </ul>
      </div>
    </li>

    <li>
      <a href="">Solutions <i class="fa fa-angle-down"></i></a>

      <!-- dropdown for solution menu -->

      <div id="solution_dropdown">
        <ul>
          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/products/rooms-app.png"
                  alt=""
                />
                <p>Hybrid Work</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/office.svg"
                  alt=""
                />
                <p>Support enterprise needs</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/shield.svg"
                  alt=""
                />
                <p>Enhance security</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/rooms.svg"
                  alt=""
                />
                <p>Space management</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/pulse.svg"
                  alt=""
                />
                <p>Workplace health and safety</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/16px/red/sparkles.svg"
                  alt=""
                />
                <p>Workplace experience</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/document.svg"
                  alt=""
                />
                <p>Meet compliance requirements</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </li>

    <!-- Resorces drop down -->

    <li>
      <a href="">Resorces <i class="fa fa-angle-down"></i></a>

      <div id="resorces_dropdown">
        <ul>
          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/office.svg"
                  alt=""
                />
                <p>Workplace trends report</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/pen-nib.svg"
                  alt=""
                />
                <p>Blog</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/book.svg"
                  alt=""
                />
                <p>Ebooks</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/webinar.svg"
                  alt=""
                />
                <p>Webinars</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/announcements.svg"
                  alt=""
                />
                <p>Case studies</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/16px/red/sparkles.svg"
                  alt=""
                />
                <p>Data insights</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/data.svg"
                  alt=""
                />
                <p>Return to Workplace</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/megaphone.svg"
                  alt=""
                />
                <p>Product news</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/globe.svg"
                  alt=""
                />
                <p>Hybrid Work Resource Hub</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li><a id="Watch Demo" href="">Watch Demo</a></li>

    <li>
      <a href="">Pricing <i class="fa fa-angle-down"></i></a>
      <div id="pricing_dropdown">
        <ul>
          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/tag.svg"
                  alt=""
                />
                <p>Plans and Pricing</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/calculator.svg"
                  alt=""
                />
                <p>Get a quote</p>
              </div>
            </a>
          </li>

          <li>
            <a href="tel:8776522808">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/phone.svg"
                  alt=""
                />
                <p>Call sales: (877) 652-2808</p>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div id="solution_dropdown_div">
                <img
                  src="https://envoy.com/images/icons/24px/red/envelope.svg"
                  alt=""
                />
                <p>Contact Us</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li><a id="Login" href="">Login</a></li>
    <button id="getstarted">Watch Demo</button>
  </ul>
  <input type="checkbox" id="check">
  <label for="check">
    <i class="fa fa-bars" id="btn"></i>
    <i class="fa fa-times" id="cancel"></i>
  </label>
  
</nav>`;
};

export default navbar;