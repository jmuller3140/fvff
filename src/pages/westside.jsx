import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {westsideFull} from '../pics'

class WestsidePage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Westside | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Westside"]} backgroundPath={westsideFull}/>
        </div>
      </Layout>
    );
  }
}

export default WestsidePage;
