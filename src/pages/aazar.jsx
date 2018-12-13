import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {aazarFull} from '../pics'

class AazarPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Aazar | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Aazar"]} backgroundPath={aazarFull}/>
        </div>
      </Layout>
    );
  }
}

export default AazarPage;
