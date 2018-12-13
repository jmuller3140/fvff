import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {fishFull} from '../pics'

class FishPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`My Father the Fish | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["My Father the Fish"]} backgroundPath={fishFull}/>
        </div>
      </Layout>
    );
  }
}

export default FishPage;
