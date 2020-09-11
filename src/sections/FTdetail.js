import React, { Component } from "react";

import "react-bootstrap";
import Pat from "../images/pat.jpg";
import Third from "../images/third.jpg";
import Teacher from "../images/Teacher.jpg";
import Modal from "react-awesome-modal";

export default class FTdetail extends Component {
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
      <div id="contact">
        <section className="bg-light page-section" id="team">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">ติดต่อเรา</h2>
                <h3 className="section-subheading text-muted">
                  ข้อมูลของทีมผู้พัฒนา
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={Pat} alt="" />
                  <h4>Pat</h4>
                  <p className="text-muted">Ms.Tanongsak Tanacomedee</p>

                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/pat.closer.14">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/_____199.x/?fbclid=IwAR3iYiTDxcnh7Klw1i3SMHyV_3rq2_G7MWevk41csP5Senyu0xC4E5-0Ym0">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={Third} alt="" />
                  <h4>Third</h4>
                  <p className="text-muted">Ms.Aksadath Ruangwilai</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/ASD.Third">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="https://www.instagram.com/third_vespa/?fbclid=IwAR1IAPv8D8qUpWX03c_8rrcfo1-1TLB-jn0iqKFPWQvaXJg69yWY4qftJd4">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src={Teacher}
                    alt=""
                  />
                  <h4>Teacher.Max</h4>
                  <p className="text-muted">Ms.Anuchat rungsiyanon</p>
                  <ul className="list-inline social-buttons">
                    <li className="list-inline-item">
                      <a href="https://www.facebook.com/socailmax">
                        <i className="fa fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="http://kruanuchat.cmtc.ac.th/">
                        <i class="fa fa-globe" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  ข้อมูลของทีมผู้พัฒนา พร้อมกับมีอาจารย์ที่ปรึกษา Website
                  เป็นโปรเจคของนักศึกษาข้อมูลทั้งหมดมีแหล่งอ้างอิง
                  โดยไม่แสวงหาผลประโยชน์
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
