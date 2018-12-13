import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {fatimaFull} from '../pics'

class FatimaPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Fatima | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Fatima"]} backgroundPath={fatimaFull}/>
        </div>
      </Layout>
    );
  }
}

export default FatimaPage;
