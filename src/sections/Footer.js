import React from "react";

import "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <span className="copyright">
                <p>Follow us</p>
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/itcmtc/">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://it.cmtc.ac.th/web2017/">
                      <i className="fa fa-globe"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="http://welcometo.cmtc.ac.th/">
                      <i className="fa fa-folder"></i>
                    </a>
                  </li>
                </ul>
              </span>
            </div>
            <div className="col-md-2">
              <h5 className="section-heading text-uppercase">Need Help?</h5>
              <p>Help Center</p>
              <p>ติดต่อเรา</p>
              <p>เเจ้งปัญหา</p>
              <p>เกี่ยวกับเรา</p>
              <p>แหล่งข้อมูล</p>
              {/* Copyright &copy; Your Website 2019 */}
            </div>
            <div className="col-md-2">
              <h5 className="section-heading text-uppercase">Our Services</h5>
              <p>Help Center</p>
              <p>Talk to us</p>
              <p>Talk to us</p>
              <p>Talk to us</p>
              <p>Talk to us</p>
            </div>
            <div className="col-md-4">
              <div className="col-md-5">
                <i class="fa fa-phone "> 06-3564-5424</i>
              </div>
              <div className="col-md-4">
                <i class="fa fa-envelope-o">Num1667@gmail.com</i>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <ul className="list-inline quicklinks ">
            <li className="list-inline-item float-left col-md-4">
              Copyright &copy; Your Website 2019
            </li>

            <li className="list-inline-item float-right col-md-1">
              <a href="#something">Privacy Policy</a>
            </li>

            <li className="list-inline-item float-right col-md-1">
              <a href="#something">Terms of Use</a>
            </li>
            <li className="list-inline-item float-right col-md-1">
              <a href="#something">Terms of Use</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
