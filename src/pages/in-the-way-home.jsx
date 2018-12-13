import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {homeFull} from '../pics'

class TheWayHomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`In The Way Home | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["In The Way Home"]} backgroundPath={homeFull}/>
        </div>
      </Layout>
    );
  }
}

export default TheWayHomePage;
