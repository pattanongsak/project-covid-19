import React, { useState } from "react";

import "react-bootstrap";
import Effect1 from "../images/effect1.jpg";
import Effect2 from "../images/effect2.jpg";
import Effect3 from "../images/effect3.jpg";
import Effect4 from "../images/effect4.jpg";
import Effect5 from "../images/effect5.png";
import Effect6 from "../images/effect6.jpg";

const Effect = () => {
  return (
    <div id="effect">
      <section class="page-section bg-light" id="portfolio">
        <div class="container">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">
              มูลนิธิที่เกี่ยวข้องกับ Covid-19
            </h2>
            <h3 class="section-subheading text-muted">
              ทางทีมผู้พัฒนาประยุกต์ข้อมูลจากแบบจำลองระบบแก้ปัญหา COVID-19
              และข้อเสนอ ‘กุญแจสามดอกไขทางออกประเทศไทย COVID-19 เราต้องรอด’
              เพื่อเป็นกรอบการทำงานร่วมกับภาคีในการรับมือกับสถานการณ์ระบาดของโคโรน่าไวรัส
            </h3>
          </div>

          <div class="row">
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="https://taejai.com/th/d/no_covid/"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <div className="back"></div>
                  <img class="img-fluid" src={Effect1} alt="" />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    กองทุนเทใจสู้โควิด19
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    กองทุนช่วยเหลือบุคลากรทางแพทย์ด้วยการจัดซื้ออุปกรณ์ป้องกันการแพร่ระบาดของไวรัส
                    COVID-19 เช่น หน้ากากอนามัย หน้ากาก N95 ชุด PPE
                    และอุปกรณ์ทางการแพทย์ที่จำเป็น
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="https://taejai.com/th/d/pedthaisupai/"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src={Effect2} alt="" />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    เป็ดไทยสู้ภัย #Startupสู้โควิด19
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    เรามาช่วยผู้ที่มีความเสี่ยงหลังจากไปตรวจโควิด19 กัน
                    เพื่อไม่ต้องให้พวกเขากลับบ้านก่อนฟังผลหรือรอเทสใหม่
                    โดยเราตั้งเป้าหมายที่จะช่วยให้ได้ถึง 2,000 คน ภายในพฤษภาคม
                    2563 นี้ เงินบริจาค
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="https://taejai.com/th/d/isolation_facility/"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src={Effect3} alt="" />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    ศูนย์ที่พักอาศัยเพื่อการกักแยก
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    5,000 บาท ของท่าน
                    สามารถช่วยผู้เข้าข่ายเกณฑ์เฝ้าระวังได้กักแยกตัวเองได้ถูกต้อง
                    ครบ 14 วัน
                    ช่วยลดความเสี่ยงต่อการแพร่เชื้อต่อให้กับสมาชิกในครอบครัวและชุมชน
                    ซึ่งจะเป็นการช่วยลดหรือ
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="https://taejai.com/th/d/foodforsaveelephant/"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src={Effect4} alt="" />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    อาหารให้ช้างแก่ ช้างพิการ ที่ประสบภัยโควิด-19
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    ช้างแก่และพิการที่มูลนิธิอนุรักษ์ช้างและสิ่งแวดล้อมดูแล
                    ส่วนใหญ่ล้วนผ่านการทารุณกรรมมาแทบทั้งสิ้น วิกฤติโควิด 19
                    ทำให้ผู้บริจาคหลักขาด
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="https://taejai.com/th/d/medtechcovidfund/"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src={Effect5} alt="" />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    กองทุนนวัตกรรมเพื่อวิจัยในการพัฒนาเทคโนโลยีทางการแพทย์ในการรักษาไวรัสโควิด19
                    และไวรัสอื่นๆในอนาคต
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    กองทุนเพื่อสนับสนุนให้ผู้ที่มีไอเดียที่จะทำวิจัยและพัฒนาเทคโนโลยีทางด้านการแพทย์เพื่อสู้ภัยโควิด19
                    หรือไวรัสตัวอื่นๆในอนาคตได้มีเงินทุนในการริเริ่มค้นคว้า 5
                    อันดับแรกจะได้รับเงินทีมละ 200,000 บาทไปพัฒนานวัตกรรม
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
              <div class="portfolio-item">
                <a
                  class="portfolio-link"
                  data-toggle="modal"
                  href="https://taejai.com/th/d/giveforchild_fightcovid19/"
                >
                  <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                      <i class="fa fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img class="img-fluid" src={Effect6} alt="" />
                </a>
                <div class="portfolio-caption">
                  <div class="portfolio-caption-heading">
                    Give for Child Fight COVID-19 เทใจให้เด็กชายแดนใต้
                    เพื่อชีวิตที่สดใส หลังโควิดหมดไป
                  </div>
                  <div class="portfolio-caption-subheading text-muted">
                    เยียวยาและฟื้นฟู 300 ครอบครัวทาง 3
                    จังหวัดชายแดนใต้ให้มีชีวิตที่สดใส ด้วยการมอบอุปกรณ์การเรียน,
                    ทุนการศึกษาให้เด็กยากไร้
                    ถุงยังชีพและทุนส่งเสริมอาชีพระยะสั้นสำหรับให้ครอบครัวที่ยากไร้ได้มีชีวิตที่สดใส
                    หลังโควิดหมดไป
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Effect;
