import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import { Link } from "react-scroll";
import style from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./images/image.png";
import { StylesProvider } from "@material-ui/core";
import Navbar from "./components/Navbar";
// import Dom from "react-dom";
// import ReactDom from "react-router-dom";
import "react-bootstrap";
import Post from "./sections/Post";

import Homepage from "./sections/Homepage";
import Footer from "./sections/Footer";
import FTdetail from "./sections/FTdetail";
import Manifestation from "./sections/manifestation";
import Service from "./sections/Service";
import Effect from "./sections/effect";
import Mapcovid from "./sections/Mapcovid-19";
import Mapcorona from "./sections/Map-corona-19";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div id="index">
        <div>
          <Navbar />
        </div>
        <div>
          <br />
          <br />
          <Homepage />
        </div>
        <div>
          <Service />
        </div>
        <div className={style.container} id="statistics">
          <img className={style.image} src={coronaImage} alt="COVID-19" />
          <Cards data={data} />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </div>
        <br /> <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <Mapcorona />
        </div>
        <br /> <br />
        <br />
        <div>
          <Post />
        </div>
        <div>
          <Manifestation />
        </div>
        <div>
          <Effect />
        </div>
        <div>
          <FTdetail />
        </div>
        <div>
          <Footer />
        </div>
        {/* <div>
          <About />
        </div> */}
      </div>
    );
  }
}
export default App;
