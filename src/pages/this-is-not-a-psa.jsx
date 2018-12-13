import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {psaFull} from '../pics'

class PSAPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`This is not a PSA | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["This is not a PSA"]} backgroundPath={psaFull}/>
        </div>
      </Layout>
    );
  }
}

export default PSAPage;
