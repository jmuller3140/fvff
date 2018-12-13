import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import FilmContents from "../components/FilmContents/FilmContents";
import config from "../../data/SiteConfig";
import {deathFull} from '../pics'

class DeathPage extends Component {
  render() {
    return (
      <Layout>
        <div className="death-container">
          <Helmet title={`Death of a Father | ${config.siteTitle}`} />
          <FilmContents {...config.filmInfo[0]["Death of a Father"]} backgroundPath={deathFull}/>
        </div>
      </Layout>
    );
  }
}

export default DeathPage;
