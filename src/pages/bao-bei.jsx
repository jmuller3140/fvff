import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {baobeiFull} from '../pics'

class BaobeiPage extends Component {
  render() {
    return (
      <Layout>
        <div className="baobei-container">
          <Helmet title={`Bao Bei | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Bao Bei"]} backgroundPath={baobeiFull} />
        </div>
      </Layout>
    );
  }
}

export default BaobeiPage;
