import React from "react";

import "react-bootstrap";
import Virus from "../images/animation_1.gif";
import Mask from "../images/animation_2.gif";
import Die from "../images/animation_4.gif";
import Hos from "../images/animation_3.gif";
import Sod from "../images/animation_sd.gif";

const Aboutme = () => {
  return (
    <div>
      <section className="page-section" id="manifestation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                4 ระยะ เช็กให้รู้
              </h2>
              <h3 className="section-heading text-muted">สู้ๆ COVID-19</h3>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={Virus}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Step - 1</h4>
                      <h4 className="subheading">
                        <i class="fa fa-snowflake-o" aria-hidden="true"></i>
                        &nbsp; ระยะฟักตัว
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                      <p>
                        ระยดฟักตัว 5-14 วัน หากสงสัยควรกักตัวเอง 14 วัน
                        เพื่อเฝ้าดูอาการไม่แพร่เชื้อ ระยะนี้มักไม่แสดงอาการ
                      </p>
                      <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                      <p>
                        ไวรัสจะแพร่ไปตามเซลล์ที่เยื่อบุคอ ท่อทางเดินหายใจและปอด
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={Hos}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Step - 2</h4>
                      <h4 className="subheading">
                        ระยะอาการเริ่มแรก &nbsp;
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                      <p>
                        มีไข้ต่ำ เหนื่อยหอบ ไอแห้ง ไมมีน้ำมูก หากร่างกายแข็งแรง
                        ถ้าดูแลแบบไข้หวัด อาจหายได้ใน 7 วัน
                      </p>
                      <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                      <p>
                        หากเข้าข่าย
                        ควรแจ้งเจ้าหน้าที่สาธารณสุขเพื่อรับการตรวจรักษาโรค
                        และกักตัวต่อเนื่อง ส่วนมากจะหายเป็นปกติได้ในระยะนี้
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={Mask}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Step - 3</h4>
                      <h4 className="subheading">
                        <i class="fa fa-exclamation" aria-hidden="true"></i>{" "}
                        &nbsp;ระยะรุนแรง
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                      <p>
                        เกิดอาการปอดบวม ซึ่งต้องอยู่ในการดูลอย่างใกล้ชิดของแพทย์
                      </p>
                      <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                      <p>
                        14% จากผู้มีอาการระยะแรก พัฒนามาถึงขึ้นรุนแรง
                        สามารถหายได้หากเข้ารับการรักษาทันที
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={Die}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Step - 4</h4>
                      <h4 className="subheading">
                        ระยะวิกฤติ &nbsp;
                        <i
                          class="fa fa-exclamation-triangle"
                          aria-hidden="true"
                        ></i>
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                      <p>
                        ไวรัสทำงานเต็มที่ ทำลายระบบภายใน ติดเชื้อในกระเเสเลือด
                        เยื่อบุลำไว้ถูกทำลาย ไตหยุดการพอกเลือด
                        ปอดรับออกซิเจนไม่เพียงพอ
                      </p>
                      <i class="fa fa-thermometer-half" aria-hidden="true"></i>
                      <p>6% จากผู้ป่วยในจีนพัฒนามาถึงขั้นนี้</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src={Sod}
                      alt=""
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;
