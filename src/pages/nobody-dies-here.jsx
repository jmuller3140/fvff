import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {nobodyDiesFull} from '../pics'

class NobodyDiesPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Nobody Dies Here | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Nobody Dies Here"]} backgroundPath={nobodyDiesFull}/>
        </div>
      </Layout>
    );
  }
}

export default NobodyDiesPage;
