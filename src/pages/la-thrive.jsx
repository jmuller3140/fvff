import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {laThriveFull} from '../pics'

class LaThrivePage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`LA Thrive | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["La Thrive"]} backgroundPath={laThriveFull}/>
        </div>
      </Layout>
    );
  }
}

export default LaThrivePage;
