import React from "react";

import "react-bootstrap";
import "./Homepage.css";
import Graph from "../images/animation_graph.gif";
import Map from "../images/animation_map.gif";
import Comment from "../images/animation_comment.gif";

const Service = () => {
  return (
    <div>
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                ลักษณะของ Website
                {/* The characteristics of the website */}
              </h2>
              <h3 className="section-subheading text-muted">
                โครงสร้างเว็บไซต์จำแนกได้ 3 ประเภทดังนี้
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img
                  className="mx-auto rounded-circle"
                  src={Graph}
                  width="130px"
                />
              </span>
              <h4 className="service-heading">แสดงสถิติของ Covid-19</h4>
              <p className="text-muted">
                เป็นการแสดงสถิติโดยรวมทั่วทั้งโลกเป็น Line graph
                และเลือกประเทศได้ โดยจะแสดงเป้น Bar graph ของแต่ละประเทศ
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img
                  className="mx-auto rounded-circle"
                  src={Map}
                  width="150px"
                />
              </span>
              <h4 className="service-heading">แผนที่แสดงพื้นที่ติดเชื้อ</h4>
              <p className="text-muted">
                โดยจะเเสดงพื้นที่ติดเชื่อ พื้นที่ที่กำลังรักษาตัวอยู่ในโรงพยาบาล
                และพื้นที่ที่มีผู้เสียชีวิต และสามารถเลือกประเทศได้เช่นกัน
                โดยจะมีจุดเด่นตรงที่ ถ้าเราเลือกประเทศ แผนที่จะทำการ move
                ไปยังประเทศนั้นโดยอัตโนมัต
                และยังจัดอันดับประเทศที่มีผู้ติดเชื้อมากที่สุด
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <img
                  className="mx-auto rounded-circle"
                  src={Comment}
                  width="120px"
                />
              </span>
              <h4 className="service-heading">สร้างโพส</h4>
              <p className="text-muted">
                แสดงความคิดเห็น หรือข้อมูลที่เกี่ยวข้องกับ Covid-19 โดยสามาใส่
                ลิงค์ แหล่งที่มาของข้อมูลให้ผู้ที่เข้ามาเยี่ยมของเว็บไซด์ได้อ่าน
                (กรณีที่จะสร้างโพสต้อง Login ก่อนจึงจะสามารถสร้างโพสได้)
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
