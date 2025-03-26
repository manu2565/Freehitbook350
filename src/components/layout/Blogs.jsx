import React from "react";
import Main from "./Main";
import { Link } from "react-router-dom";

function Blogs() {
  return (
    <>
      <section className="banner-sec">
        <div className="banner-content">
        <Main />
          <div className="banner-item">
            <img src="assets/images/path_to_image_3.jpg" alt="Banner 3" />
           
            <span className="banner-get-id-btn">
              <Link href="#" className="btn cmn-btn">
                Get Id
              </Link>
            </span>
          </div>
        </div>
      </section>
      <section className="wc-provider-sec blog-listing-page">
        <section className="best-provider-sec">
          <div className="container">
            <div className="sec-title">
              <h1 className="text-white fs-h1">
                Read Our Amazing <span>Blogs</span>
              </h1>
            </div>
            <div className="blog-post-list">
              <div className="container">
                <div className="row"></div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Blogs;
