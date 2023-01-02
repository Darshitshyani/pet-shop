import React, { useEffect, useState } from "react";
import "./profile.scss";
import { Link } from "react-router-dom";
import plusicon from "../../img/add_post.png";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import profileimg from "../../img/profile_img_2.png";
import axios from "axios";
import account from "../../icons/account.svg";
import Insights from "../../icons/insights.svg";
import cart from "../../icons/my_orders.svg";
import setting from "../../icons/settings.svg";
import help from "../../icons/help.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { petDetails } from "./imgarray";
import tool from "../../img/tool.PNG";
const Profile = () => {
  const [image, setimage] = useState([]);
  const [tags, settags] = useState(null);
  useEffect(() => {
    let api = async () => {
      axios
        .get(
          "https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=5"
        )
        .then((response) => setimage(response.data));
    };
    api();
  }, []);

  let tages = (val) => {
    settags(val);
  };
  return (
    <>
      <div className="profile-header-sec">
        <h1>Profile</h1>
        <div className="d-flex">
          <Link to="/">
            <a>Home</a>
          </Link>
          {">"}
          <a>Profile</a>
        </div>
      </div>
      <div className="container">
        <div className="profile-body m-3">
          <div className="profile-leftside p-3">
            <h4 className="mt-3">Profile</h4>
            <div className="d-flex w-100 justify-content-between align-items-center">
              <h3 className="m-0">Jasmine_Jassie</h3>
              <div className="d-flex p1">
                <img src={plusicon} />
                <MarkunreadIcon className="mail-ic" />
              </div>
            </div>

            <div className="followers-sec">
              <div className="follower-img d-flex flex-column  w-50">
                <img src={profileimg} />
                <h5>Jasmine Jassie</h5>
                <h5>www.petowner.com</h5>
                <h5>deepti@gmail.com</h5>
              </div>
              <div className="w-50 d-flex p2">
                <span className="d-flex justify-content-around w-100">
                  <div>
                    <h1>20</h1>
                    <h3>Posts</h3>
                  </div>
                  <div>
                    <h1>783</h1>
                    <h3>Followers</h3>
                  </div>
                  <div>
                    <h1>129</h1>
                    <h3>Following</h3>
                  </div>
                </span>
                {/* <button>Edit Profile</button> */}

                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#editeModal"
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="profile-post-img">
              <h1>My Pets</h1>
              <div className="story-highlight">
                {petDetails.map((val) => {
                  return (
                    <>
                      <img src={val.img} />
                    </>
                  );
                })}

                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <img src={tool} />
                </button>
              </div>
            </div>

            <div className="tags">
              <h3
                className={`${tags === "Posts" ? "actives" : "offactive"}`}
                onClick={() => {
                  tages("Posts");
                }}
              >
                Posts
              </h3>
              <h3
                className={`${tags === "Tags" ? "actives" : "offactive"}`}
                onClick={() => {
                  tages("Tags");
                }}
              >
                Tags
              </h3>
              <h3
                className={`${tags === "Saved" ? "actives" : "offactive"}`}
                onClick={() => {
                  tages("Saved");
                }}
              >
                Saved
              </h3>
            </div>
            <div className="post">
              {image.map((val) => {
                return (
                  <>
                    <img src={val.url} />
                  </>
                );
              })}
            </div>
          </div>
          <div className="right-side">
            <h3>Jasmine_Jassie</h3>
            <div className="lists">
              <div className="list-icons">
                {" "}
                <img src={Insights} />
                <h3>Insights</h3>
              </div>
              <div className="list-icons">
                {" "}
                <img src={cart} />
                <h3>My Orders</h3>
              </div>
              <div className="list-icons">
                {" "}
                <ShoppingCartIcon className="cart-icn" />
                <h3>My Store</h3>
              </div>
              <div className="list-icons">
                {" "}
                <img src={account} />
                <h3>Account</h3>
              </div>
              <div className="list-icons">
                {" "}
                <img src={setting} />
                <h3>Settings</h3>
              </div>
              <div className="list-icons">
                {" "}
                <img src={help} />
                <h3>Help</h3>
              </div>
            </div>
            <h3 className="mt-3" style={{ color: "#ff801e" }}>
              Suggested Profiles
            </h3>
            <div className="account-suggestion w-100">
              <div className="d-flex justify-content-between p-3">
                <div className="d-flex align-items-end">
                  <img />
                  <p>Mike_Rogers</p>
                </div>
                <a style={{ color: "#ff801e" }}>Follow</a>
              </div>
              <div className="d-flex justify-content-between p-3">
                <div className="d-flex align-items-end">
                  <img />
                  <p>Jack_Paul</p>
                </div>
                <a style={{ color: "#ff801e" }}>Follow</a>
              </div>
              <div className="d-flex justify-content-between p-3">
                <div className="d-flex align-items-end">
                  <img />
                  <p>Alisa_Corner</p>
                </div>
                <a style={{ color: "#ff801e" }}>Follow</a>
              </div>
            </div>
            <button>Explore</button>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="editeModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ed-1">
          <div class="modal-content ed-2">
            <div class="modal-header ed-3">
              <h1 class="modal-title fs-5" id="editModalLabel">
                Edit Profile
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body ed-4">
              <div className="modal-pic">
                <img src={profileimg} />
                <p>Change Profile Photo</p>
              </div>
              <div className="input-field">
                <label for="exampleInputEmail1" class="form-label">
                  Username
                </label>
                <input type="text" />
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input type="text" />
                <label for="exampleInputEmail1" class="form-label">
                  Website
                </label>
                <input type="text" />
                <label for="exampleInputEmail1" class="form-label">
                  Email
                </label>
                <input type="email" />
              </div>
            </div>
            <div class="modal-footer ed-5">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* my-pates edit modals */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog eh-1 modal-lg">
          <div class="modal-content eh-2">
            <div class="modal-header eh-3">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Pet Profile
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body eh-4">
              <div className="header-images">
                <div className="edit-datils">
                  <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#updateModal"
                  >
                    Edit Details
                  </button>
                </div>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg" />
                <div className="name-box">
                  <h4>Jackey</h4>
                  <p>Cavalier King Charles</p>
                </div>
              </div>
              <div className="data-box">
                <div className="min-box">
                  <p>Type</p>
                  <h4>Dog</h4>
                </div>
                <div className="min-box">
                  <p>Age</p>
                  <h4>6 Months</h4>
                </div>
                <div className="min-box">
                  <p>Gender</p>
                  <h4>Male</h4>
                </div>
                <div className="min-box">
                  <p>Weight</p>
                  <h4>6-7 Kg</h4>
                </div>
                <div className="min-box">
                  <p>Height</p>
                  <h4>10-14 Inch</h4>
                </div>
                <div className="min-box">
                  <p>Colour</p>
                  <h4>White</h4>
                </div>
              </div>
              <h2>My Pets</h2>
              <div className="modal-pets-imgs">
                {petDetails.map((val) => {
                  return (
                    <>
                      <img src={val.img} />
                    </>
                  );
                })}
                 <img src={tool} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* update pates */}
      <div
        class="modal fade"
        id="updateModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog up-1">
          <div class="modal-content up-2">
            <div class="modal-header up-3">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Edit Pet Profile
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body up-4">
              <div className="update-img">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg" />
                <p>Change Photo</p>
              </div>
              <div className="dropdown-fields">
                <label>Petname</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Petname</option>
                  <option value="1">Dog</option>
                  <option value="2">Cat</option>
                  <option value="3">Rabbit</option>
                </select>
                <label>Type</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Type</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label>Breed</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Breed</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label>Age</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Age</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label>Gender</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Gender</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label>Weight</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Weight</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label>Height</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Height</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label>Colour</label>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Select Color</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div class="modal-footer up-5">
              <button
                type="button"
                class="btn"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
