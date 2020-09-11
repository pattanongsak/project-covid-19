import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

import "react-bootstrap";

import "./Homepage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "react-awesome-modal";
import Animation from "../images/animation.gif";
import Typical from "react-typical";

// import { useWindowSize } from "react-use";
// import Confetti from "react-confetti";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const headerRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    gsap.from(headerRef.current, {
      duration: 0.5,
      autoAlpha: 0,
    });
  });
  // const { width, height } = useWindowSize();
  return (
    <div>
      {/* <Confetti width={width} height={height} /> */}
      <header ref={headerRef} className="masthead" id="homepage">
        <div className="container">
          <div className="intro-text">
            <div className="text-justify">Welcome To Virus covid-19</div>
            <h1 className="intro-header text-warning text-justify">
              Thank for{" "}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={["Watching ", 1000, "datching", 1000]}
              />
            </h1>
          </div>
        </div>
      </header>
    </div>
  );
};

class Description extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div>
        <a
          className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
          aria-hidden="true"
          type="button"
          value="Open"
          onClick={() => this.openModal()}
        >
          {" "}
          Description
        </a>

        <Modal
          visible={this.state.visible}
          width="1080"
          height="720"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div>
            <br />
            <br />
            <br />
            {/* <img src={Animation} width="100px" /> */}
            <h3 class="text-primary">คำอธิบายเว็บไซต์</h3>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 text-primary justify-content-center">
                  <h5 className="section-heading text-uppercase">Need Help?</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Debitis blanditiis est eveniet animi voluptatibus sunt
                    possimus ipsam consequuntur? Explicabo quasi unde dicta
                    itaque reiciendis nesciunt sequi ullam quo quisquam numquam?
                  </p>

                  {/* Copyright &copy; Your Website 2019 */}
                </div>
                <div className="col-md-6 text-primary justify-content-center">
                  <h5 className="section-heading text-uppercase">
                    Our Services
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis cupiditate molestiae repudiandae, necessitatibus eum
                    at qui, rem nisi libero sint autem incidunt! Consectetur, ad
                    magnam dolor modi voluptatem provident aliquam.
                  </p>
                </div>
              </div>
            </div>

            <img
              src={Animation}
              href="javascript:void(0);"
              onClick={() => this.closeModal()}
              width="100px"
              style={{
                cursor: "pointer",
              }}
            />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Homepage;
