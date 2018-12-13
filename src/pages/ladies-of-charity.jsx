import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {ladiesFull} from '../pics'

class LadiesPage extends Component {
  render() {
    return (
      <Layout>
        <div className="aazar-container">
          <Helmet title={`Ladies of Charity | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Ladies of Charity"]} background={ladiesFull}/>
        </div>
      </Layout>
    );
  }
}

export default LadiesPage;
