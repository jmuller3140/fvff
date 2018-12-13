import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {nostrumFull} from '../pics'

class MareNostrumPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Mare Nostrum | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Mare Nostrum"]} backgroundPath={nostrumFull}/>
        </div>
      </Layout>
    );
  }
}

export default MareNostrumPage;
