import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {ainhoaFull} from '../pics'

class AinhoaPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Ainhoa | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Ainhoa"]} backgroundPath={ainhoaFull}/>
        </div>
      </Layout>
    );
  }
}

export default AinhoaPage;
