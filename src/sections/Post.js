import React, { Component } from "react";

import Links from "../components/Links/Links";

import { Link } from "react-scroll";
import LinkForm from "../components/Links/LinkForm";
import { db } from "../components/Links/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Comment from "../images/animation_comment.gif";

// function Home() {

// }

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: localStorage.getItem("isSignedIn"),
      fullname: localStorage.getItem("fullname"),
      images: localStorage.getItem("images"),
    };
  }
  render(porps) {
    return (
      <div className="container p-4" id="post">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">
              สร้างโพส <img src={Comment} width="80px" />
            </h2>
            {this.state.isSignedIn == 1 ? (
              <h3 className="section-heading text-muted">
                แสดงความคิดเห็นเกี่ยวกับสถาการณ์ Covid-19
              </h3>
            ) : (
              <h3 className="section-heading text-muted">
                แสดงความคิดเห็นเกี่ยวกับสถาการณ์ Covid-19 (กรุณา Sign in
                ก่อนเพื่อแสดงความคิดเห็น)
              </h3>
            )}
          </div>
        </div>
        <br />

        <div>
          <Links
            isSignedIn={this.state.isSignedIn}
            fullname={this.state.fullname}
            images={this.state.images}
          />
          <br />
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default Home;
