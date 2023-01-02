import React from "react";

import "./Home.scss";

import banner1 from "../../img/banner_1.png";
import banner2 from "../../img/banner_2.png";
import dog from "../../img/dog_img_4.png";
import cat from "../../img/cat_img_1.png";
import parrot from "../../img/bird_img_1.png";
import rabbit from "../../img/rabbit_img_1.png";
import dog1 from "../../img/store_img_1.png";
import dog2 from "../../img/store_img_2.png";
import dog3 from "../../img/store_img_3.png";
import dog4 from "../../img/store_img_4.png";
import brand1 from "../../img/brand_img_1.png";
import brand2 from "../../img/brand_img_2.png";
import brand3 from "../../img/brand_img_3.png";
import brand4 from "../../img/brand_img_4.png";
import data from "../Page/Productarray";
import plusicon from '../../img/add_post.png';

const Home = () => {
  return (
    <>
      <div className="slidebar">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={banner1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={banner2} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="select-sec">
          <h1 style={{ color: "#FF801E" }}>Shop By Category</h1>
          <div className="d-flex w-100">
            <div>
              <img src={dog} /> <h2>Dogs</h2>
            </div>
            <div>
              <img src={cat} /> <h2>Cats</h2>
            </div>
            <div>
              <img src={parrot} /> <h2>Birds</h2>
            </div>
            <div>
              <img src={rabbit} /> <h2>Rabbits</h2>
            </div>
          </div>
        </div>
        <div className="recommend-sec">
          <h1 style={{ color: "#FF801E" }}>Shop Recommended for You</h1>
          <div className="d-flex w-100 justify-content-between">
            <div className="box">
              <div>
                <img src={dog1} className="w-100" />
              </div>
              <div className="d-flex flex-column p-3">
                <h4>Dogs 'N' Pups </h4>
                <p>Foods Pet Products</p>
                <div className="d-flex">
                  <h3 className="m-0 w-100" style={{ color: "#FF801E" }}>
                    50% OFF
                  </h3>
                  <p className="m-0">on first 3 products</p>
                </div>
              </div>
            </div>
            <div className="box">
              <div>
                <img src={dog2} className="w-100" />
              </div>
              <div className="d-flex flex-column p-3">
                <h4>Wow Pets </h4>
                <p>Foods Pet Services</p>
                <div className="d-flex">
                  <h3 className="m-0 w-100" style={{ color: "#FF801E" }}>
                    40% OFF
                  </h3>
                  <p className="m-0"> on coupon code</p>
                </div>
              </div>.
              
            </div>
            <div className="box">
              <div>
                <img src={dog3} className="w-100" />
              </div>
              <div className="d-flex flex-column p-3">
                <h4>Cat Corner </h4>
                <p>Foods Pet Products</p>
                <div className="d-flex">
                  <h3 className="m-0 w-100" style={{ color: "#FF801E" }}>
                    BUY 1 GET 1
                  </h3>
                </div>
              </div>
            </div>
            <div className="box">
              <div>
                <img src={dog4} className="w-100" />
              </div>
              <div className="d-flex flex-column p-3">
                <h4>Pet Mate </h4>
                <p>Foods Pet Products</p>
                <div className="d-flex">
                  <h3 className="m-0 w-100" style={{ color: "#FF801E" }}>
                    40% OFF
                  </h3>
                  <p className="m-0">on first 3 products</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="brands">
          <h1 style={{ color: "#FF801E" }}>Best Selling Brands</h1>
          <div className="circle-box">
            <div className="in-box">
              <img src={brand1} />
              <h1>Wild Earth</h1>
            </div>
            <div className="in-box">
              <img src={brand2} />
              <h1>Pedigree</h1>
            </div>

            <div className="in-box">
              <img src={brand3} />
              <h1>Royal Canin</h1>
            </div>

            <div className="in-box">
              <img src={brand4} />
              <h1>Big Heart</h1>
            </div>
          </div>
        </div>
        <div className="product">
          <h1>Top Products</h1>
          <div className="btn-product">
            <button>Featured Products</button>
            <button>New Products</button>
            <button>Top Selling</button>
          </div>
          <div className="product-card-1">
            {data.map((val) => {
              return (
                <>
                  <div className="box">
                    <div className="img-box">
                      <img src={val.img} className="w-100" />
                      <img src={plusicon}/>
                    </div>
                    <div className="d-flex flex-column p-3">
                      <h4>{val.title} </h4>
                      <p>Brand: {val.brand}</p>
                      <div className="d-flex">
                        <h3 className="m-0 w-100" style={{ color: "#FF801E" }}>
                          {val.price}
                        </h3>
                        <p className="m-0">{val.delevary}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="product-card-1">
            {data.map((val) => {
              return (
                <>
                  <div className="box">
                    <div className="img-box">
                      <img src={val.img} className="w-100" />
                      <img src={plusicon}/>
                    </div>
                    <div className="d-flex flex-column p-3">
                      <h4>{val.title} </h4>
                      <p>Brand: {val.brand}</p>
                      <div className="d-flex">
                        <h3 className="m-0 w-100" style={{ color: "#FF801E" }}>
                          {val.price}
                        </h3>
                        <p className="m-0">{val.delevary}</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
