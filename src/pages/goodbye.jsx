import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {goodbyeFull} from '../pics'

class GoodbyePage extends Component {
  render() {
    return (
      <Layout>
        <div className="goodbye-container">
          <Helmet title={`Goodbye | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Goodbye"]} backgroundPath={goodbyeFull}/>
        </div>
      </Layout>
    );
  }
}

export default GoodbyePage;
