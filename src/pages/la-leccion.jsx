import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {leccionFull} from '../pics'

class LaLeccionPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`LaLeccion | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["La Leccion"]} backgroundPath={leccionFull}/>
        </div>
      </Layout>
    );
  }
}

export default LaLeccionPage;
