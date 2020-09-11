import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import axios from "axios";

function Mapcovid({ countries }) {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.13159&date=2019-10&fbclid=IwAR1JsL1DJTBUWRM_cS2SE2Ng3gwrIvz1wVIF3OeHgGEZPHxxyc5YZiBD8mw"
        ),
        axios.get("https://disease.sh/v3/covid-19/countries"),
      ])

      .then((responseArr) => {
        setLatest(responseArr[0].data);

        setResults(responseArr[1].data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const date = new Date(parseInt(latest.updated));
  const lasUpdated = date.toString();

  const countriesLocations = results.map((data, i) => {
    return (
      <div
        lat={data.countryInfo.lat}
        lng={data.countryInfo.long}
        style={{
          color: "red",
          backgroundColor: "#FFF",
          height: "25px",
          width: "35px",
          textAlign: "center",
          borderRadius: "30%",
        }}
      >
        {data.countryInfo.cases}
        <img height="10px" src={data.countryInfo.flag} />

        <br />
        {data.cases}
      </div>
    );
  });

  return (
    <div>
      <div
        className="container"
        id="map"
        style={{ height: "100vh", width: "100%" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBTor_Q60zQDsRHU_2b5GruFANmmJ72Gl0" }}
          defaultCenter={{ lat: 13, lng: 105 }}
          defaultZoom={4}
        >
          {countriesLocations}
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Mapcovid;
