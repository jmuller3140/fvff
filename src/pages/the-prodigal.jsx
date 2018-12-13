import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {prodigalFull} from '../pics'
class ProdigalPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`The Prodigal | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["The Prodigal"]} backgroundPath={prodigalFull}/>
        </div>
      </Layout>
    );
  }
}

export default ProdigalPage;
