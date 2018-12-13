import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {sacrilegeFull} from '../pics'

class SacrilegePage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Sacrilege | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Sacrilege"]} backgroundPath={sacrilegeFull}/>
        </div>
      </Layout>
    );
  }
}

export default SacrilegePage;
